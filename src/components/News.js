import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"; 
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0
    };
    this.capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=17ed45731c674a6487562298ff66a347&page=
    ${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,

    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=17ed45731c674a6487562298ff66a347&page=
    ${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,

    });
    // setTimeout(() => {
    //   this.setState({
    //     items: this.state.items.concat(Array.from({ length: 20 }))
    //   });
    // }, 1500);
  };

  render() {
    return (
      <>
        {this.props.category === "general" ? (
          <h2 className="text-center">NewsApp - Top Headlines</h2>
        ) : (
          <h2 className="text-center">
            NewsApp - {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
        )}
      
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={this.state.articles < this.state.articles/20 && <Spinner/>}
        >
          <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.state.articles.map((element) => {
              return (
                <div
                  className="col d-flex align-items-stretch"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
       </>
    );
  }
}

export default News;

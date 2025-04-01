import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    
    return (
      <div className="my-3">
      <div className="card h-100 d-flex flex-column">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '90%', zIndex: '1'}}>
          {source}
        </span>
        {imageUrl 
  ? <img src={imageUrl} alt="news" className="card-img-top" style={{ height: "200px", objectFit: "cover" }} /> 
  : <div className="card-img-top d-flex justify-content-center align-items-center" style={{ height: "200px", background: "#eaeaea", color: "#555" }}>
      Image Not Available
    </div>
}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ minHeight: "3rem" }}>
            {title || "No Title Available"}
          </h5>
          <p
            className="card-text"
            style={{
              minHeight: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description !== "False"
              ? (description ?? "").length > 150
                ? (description ?? "").substring(0, 147) + "..."
                : description ?? "No description available."
              : "No description available."}
          </p>
          <div className="mt-auto">
            <p className="card-text mx-1 my-1">
              <small className="text-body-secondary">
                <strong>Author:</strong> {!author ? "Unknown" : author}
              </small>
            </p>
            <p className="card-text mx-1 my-1">
              <small className="text-body-secondary">
                <strong>Published On:</strong> {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}



export default NewsItem;

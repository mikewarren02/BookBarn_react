import React, { Component } from "react";

class Article extends Component {
  render() {
    const header = this.props.headerInfo.map((item, index) => {
      return <h1 key={index}>{item.header}</h1>;
    });

    const info = this.props.headerInfo.map((item, index) => {
      return <p key={index}>{item.info}</p>;
    });

    return (
      <div className="article">
        {header}
        {info}
      </div>
    );
  }
}

export default Article;

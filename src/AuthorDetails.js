import React, { Component } from "react";
import MyBook from "./MyBook";
class AuthorDetail extends Component {
  state = {
    books: this.props.author.books
  };

  books = this.state.books.map(book => {
    return <MyBook details={book} author={this.props.author} />;
  });

  render() {
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.author.first_name} {this.props.author.last_name}
          </h3>
          <img
            src={this.props.author.imageUrl}
            className="img-thumbnail"
            alt={this.props.author.first_name}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{this.books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;

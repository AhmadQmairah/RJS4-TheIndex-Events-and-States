import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetails from "./AuthorDetails";
class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    const newAuthor = author;

    this.setState({ currentAuthor: newAuthor });
  };
  unselectAuthor = author => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    let NewFilterdAuthor = this.state.authors.filter(author => {
      let name = (author.first_name + " " + author.last_name).toLowerCase();

      if (name.includes(query)) {
        return true;
      }
    });
    this.setState({ filteredAuthors: NewFilterdAuthor });
  };

  render() {
    if (this.state.currentAuthor === null) {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar unselectAuthor={this.unselectAuthor} />
            </div>
            <div className="content col-10">
              <AuthorsList
                authors={this.state.filteredAuthors}
                selectAuthor={this.selectAuthor}
                filterAuthors={this.filterAuthors}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar unselectAuthor={this.unselectAuthor} />
            </div>
            <div className="content col-10">
              <AuthorDetails author={this.state.currentAuthor} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;

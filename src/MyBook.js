import React from "react";

class MyBook extends React.Component {
  render() {
    console.log("iam here");
    return (
      <tr>
        <td>{this.props.details.title}</td>
        <td>
          {this.props.author.first_name} {this.props.author.last_name}
        </td>
        <td>
          <button
            className="btn"
            style={{
              backgroundColor: `${this.props.details.color}`
            }}
          />
        </td>
      </tr>
    );
  }
}
export default MyBook;

import { Component } from "react";
import { Paper } from "@mui/material";

class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  async handleSubmit(event) {
    alert("A qid was submitted: " + this.state.value);
    event.preventDefault();
    var qid = '{ "qid": ' + this.state.value + " }";
    // console.log(JSON.stringify(this.state.value));
    console.log(qid);
    const result = await fetch("http://localhost:8069/item/firebaseDelQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: qid,
    }).then((res) => {
      console.log(res);
    });
    console.log(result);
  }

  render() {
    return (
      <Paper style={{ padding: "20px 0px 20px 0px", width: "fit-width" }}>
        <h2 style={{ padding: "20px 20px" }}>Delete Question</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Question ID:
            <input type="number" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Paper>
    );
  }
}

export default DeleteForm;

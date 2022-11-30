import { Component } from "react";
import { Paper } from "@mui/material";

class AddQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qid: 0,
      question: "",
      answer: "",
      correct_option: 0,
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      user_id: 0,
      version: 1,
    };

    this.handleQuestionID = this.handleQuestionID.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleCorrectOption = this.handleCorrectOption.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleOption1 = this.handleOption1.bind(this);
    this.handleOption2 = this.handleOption2.bind(this);
    this.handleOption3 = this.handleOption3.bind(this);
    this.handleOption4 = this.handleOption4.bind(this);
    this.handleUserID = this.handleUserID.bind(this);
    this.handleVersion = this.handleVersion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuestionID(event) {
    this.setState({ qid: event.target.value });
    console.log(this.state.qid);
  }

  handleQuestion(event) {
    this.setState({ question: event.target.value });
    console.log(this.state.question);
  }

  handleAnswer(event) {
    this.setState({ answer: event.target.value });
    console.log(this.state.answer);
  }

  handleCorrectOption(event) {
    this.setState({ correct_option: event.target.value });
    console.log(this.state.correct_option);
  }

  handleOption1(event) {
    this.setState({ option1: event.target.value });
    console.log(this.state.option1);
  }

  handleOption2(event) {
    this.setState({ option2: event.target.value });
    console.log(this.state.option2);
  }

  handleOption3(event) {
    this.setState({ option3: event.target.value });
    console.log(this.state.option3);
  }

  handleOption4(event) {
    this.setState({ option4: event.target.value });
    console.log(this.state.option4);
  }

  handleUserID(event) {
    this.setState({ user_id: event.target.value });
    console.log(this.state.user_id);
  }

  handleVersion(event) {
    this.setState({ version: event.target.value });
    console.log(this.state.version);
  }

  async handleSubmit(event) {
    alert("A question was submitted: " + this.state.qid);
    event.preventDefault();
    var username =
      '{"question":"' +
      this.state.question +
      '", "answer":"' +
      this.state.answer +
      '", "correct_option":' +
      this.state.correct_option +
      ',"option1":"' +
      this.state.option1 +
      '","option2":"' +
      this.state.option2 +
      '","option3":"' +
      this.state.option3 +
      '","option4":"' +
      this.state.option4 +
      '","user_id":' +
      this.state.user_id +
      ',"version":' +
      this.state.version +
      "}";
    // console.log(JSON.stringify(this.state.value));
    console.log(username);
    const result = await fetch("http://localhost:8069/item/firebaseAddQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: username,
    }).then((res) => {
      console.log(res);
    });
    console.log(result);
  }

  render() {
    return (
      <Paper style={{ padding: "20px 0px 20px 0px", width: "fit-width" }}>
        <h2 style={{ padding: "20px 20px" }}>Add Question</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Question ID:
            <input type="number" onChange={this.handleQuestionID} />
          </label>
          <label>
            Question:
            <input type="text" onChange={this.handleQuestion} />
          </label>
          <label>
            Answer:
            <input type="text" onChange={this.handleAnswer} />
          </label>
          <label>
            Correct Option:
            <input type="number" onChange={this.handleCorrectOption} />
          </label>
          <label>
            Option 1:
            <input type="text" onChange={this.handleOption1} />
          </label>
          <label>
            Option 2:
            <input type="text" onChange={this.handleOption2} />
          </label>
          <label>
            Option 3:
            <input type="text" onChange={this.handleOption3} />
          </label>
          <label>
            Option 4:
            <input type="text" onChange={this.handleOption4} />
          </label>
          <label>
            User ID:
            <input type="number" onChange={this.handleUserID} />
          </label>
          <label>
            Version:
            <input type="number" onChange={this.handleVersion} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Paper>
    );
  }
}

export default AddQuestionForm;
// export new UserNameForm();

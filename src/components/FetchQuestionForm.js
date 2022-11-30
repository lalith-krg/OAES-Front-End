import { Paper } from "@mui/material";
import { Component} from "react";

// class FetchQuestionForm extends Component{

// }

class FetchQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { uid: 0 ,questions:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ uid: event.target.value });
  }

  async handleSubmit(event) {
    alert("A user id was submitted: " + this.state.uid);

    // call the other function 
    // this.getQuestions();
    event.preventDefault();
    var user_id = '{ "user_id":' + this.state.uid + "}";
    console.log(JSON.stringify(this.state.uid));
    this.result = await fetch("http://localhost:8069/user/firebaseGetQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user_id,
    }).then(async (res) =>  {
      var result = await res.json();
      console.log(result);
      this.setState({
        questions:result
      });
    } );
    // .then((result)=>{
      // this.setState({
        // questions : result
        // });
      // console.log(result);
      // }
      // );
  }

  

  render() {
    return (<>
      <Paper style={{ padding: "20px 0px 20px 0px", width: "fit-width" }}>
        <h2 style={{ padding: "20px 20px" }}>Fetch Questions</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            User_ID:
            <input type="number" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Paper>
      <Paper>
      {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. */}

      {this.state.questions!=null ? 
      // <></>
      this.state.questions.map(q=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={q.qid}>
             Question :{q.question}<br/>
             Answer :{q.answer}<br/>
             CorrectOption: {q.correctOption}<br/>
             Option1: {q.option1}<br/>
             Option2: {q.option2}<br/>
             Option3: {q.option3}<br/>
             Option4: {q.option4}<br/>
             Qid: {q.qid}<br/>
             User_ID: {q.user_id}<br/>
           </Paper>
         ))
        : <></>
      }
      </Paper>
    </>
    );
  }
}

export default FetchQuestionForm;

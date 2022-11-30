// import { Component } from "react";
// import axios from "axios";
// import { Paper } from "@mui/material";


// class UserNameForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {questions: [],id:0};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.id});
//         console.log(this.state.questions);
//     }

//     async handleSubmit(event) {
//         alert('A id was submitted: ' + this.state.id);
//         event.preventDefault();
//         var username = "{ \"username\": \""+this.state.value+"\" }";
//         console.log(JSON.stringify(this.state.value));
//         const result = await fetch("http://localhost:8069/user/add", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:  username
//         }).then(res=>
//             {
//                 console.log(res);
//             }
//         );
//             console.log(result);
//     }

//     render() {
//         return (
//             <Paper style={{padding:"20px 0px 20px 0px",width:"fit-width"}}>
//                 <h2 style={{padding:"20px 20px"}}>
//                 Add User
//                 </h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//         </Paper>
//         );
//     }
// }

// export default UserNameForm; 
// // export new UserNameForm();
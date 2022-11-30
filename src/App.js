import "./App.css";
import AddQuestionForm from "./components/AddQuestionForm";
import Appbar from "./components/AppBar";
import DeleteForm from "./components/DeleteForm";
import FetchQuestionForm from "./components/FetchQuestionForm";
import ModifyQuestionForm from "./components/ModifyQuestionForm";
import UserNameForm from "./components/UserNameForm";
// import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Appbar />
      <UserNameForm /> {/*add user*/}
      <FetchQuestionForm /> {/* get all question from a user*/}
      <AddQuestionForm /> {/*} Add Question */}
      <ModifyQuestionForm /> {/* Modify Question */}
      <DeleteForm /> {/* Delete*/}
    </div>
  );
}

export default App;

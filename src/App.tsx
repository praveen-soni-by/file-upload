import "./App.css";
import Error from "./components/Error";
import FileUploadPage from "./pages/FileUploadPage";

const errors: Array<any> = [{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"},{"id":"col1","message":"Invalid field type"}];


function App() {
  return <FileUploadPage  />;
}

export default App;

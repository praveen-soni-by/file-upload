import "./App.css";
import ContextProvider from "./context/ContextProvider";
import FileUploadPage from "./pages/FileUploadPage";


function App() {
  return (<ContextProvider>
    <FileUploadPage />
  </ContextProvider>
  )
    ;
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/NavBar';
import Chatbot from './Components/Chatbot/Chat';
import Logout from './Components/Logout';
import DiaryForm from './Components/Diary';
import RAG from './Components/Rag_Chatbot/Rag';
import RagAtomChatbot from './Components/Rag_Chatbot/RagAtomChatbot';
import RagGitaChatbot from './Components/Rag_Chatbot/RagGitaChatbot';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>  
          <Route path='/' element = {<LandingPage/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/logout' element = {<Logout/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/chatbot' element = {<Chatbot/>}/>
          <Route path='/diary' element = {<DiaryForm/>}/>
          <Route path='/rag' element = {<RAG/>}/>
          <Route path='/rag_atomicHabit' element = {<RagAtomChatbot/>}/>
          <Route path='/rag_bhagwat' element = {<RagGitaChatbot/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

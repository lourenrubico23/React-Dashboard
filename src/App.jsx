import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Students from "./components/pages/developer/database/student/Students"
import Teacher from "./components/pages/developer/database/teacher/Teacher"
import Staff from "./components/pages/developer/database/staff/Staff"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Login from "./components/pages/developer/access/Login"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import CreatePassword from "./components/pages/developer/access/CreatePassword"




function App() {
const queryClient = new QueryClient
  return (
    <>
    
    </>
  )
}

export default App


import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import ChatPage from './pages/Chatpage'
import LoginPage from './pages/Loginpage'
import SignUpPage from './pages/SignUppage'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore'
import PageLoader from './components/PageLoader'
import { Toaster } from 'react-hot-toast'



function App() {

 const {checkAuth, isCheckingAuth, authUser}  = useAuthStore();

  useEffect(()=> {
    checkAuth()
  }, [checkAuth]) 


  if(isCheckingAuth){
    return <PageLoader />
  }

  return (
    <div className="chatPage-section">
      <Routes>
        <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App;

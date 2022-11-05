import {Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from './pages/home';
import DashboardPage from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
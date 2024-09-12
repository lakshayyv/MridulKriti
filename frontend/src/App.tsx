import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRouter";
import Navbar from "./components/Navbar";
import { useRecoilValue } from "recoil";
import { LoaderAtom } from "./store/atoms/app";
import Loader from "./components/Loader";

function App() {
  const loader = useRecoilValue(LoaderAtom);

  return (
    <BrowserRouter>
      {loader && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

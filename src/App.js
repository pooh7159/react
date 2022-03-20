import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // BrowserRouter as Router 로 감싸 주어야 동작함
    <Router>
      <Routes>
        {/* process.env.PUBLIC_URL를 붙여줘야 gh-pages 에서 인식함 로컬로 돌릴 떄에는 react/ 가 root가 됨 */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
}
export default App;
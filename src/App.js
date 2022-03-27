import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail"
import List from "./router/List";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      {/* BrowserRouter as Router 로 감싸 주어야 동작함 */}
      <Router>
        <Routes>
          {/* process.env.PUBLIC_URL를 붙여줘야 gh-pages 에서 인식함 로컬로 돌릴 떄에는 react/ 가 root가 됨 */}
          <Route path="/page/:detail/:num" element={<List />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}
export default App;
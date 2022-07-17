import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';

import { Home } from "./pages";
import { Nav } from "./components"

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 100px calc(100vh - 100px);
`;

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;

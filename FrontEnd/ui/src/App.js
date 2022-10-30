import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/search';
import Singin from './pages/Singin';
import Video from './pages/Video';
import  {lightTheme,darkTheme}  from './Theme';
function App() {
  const {currentuser}   = useSelector((state) => state.user);
  const [darkMode,setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
    <Container>
      <BrowserRouter>     
       <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/">
                <Route index element={<Home type="random"/>} />
                <Route path='trends' element={<Home type="trend"/>} />
                <Route path='subscriptions' element={<Home type="sub"/>} />
                <Route path="search" element={<Search />} />

                <Roote path='signin' element={currentuser ?  <Home /> : <Singin />}/>
                <Route path='video'>
                  <Route  path=':id' element={<Video />}/>
                </Route>
                
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

export default App;

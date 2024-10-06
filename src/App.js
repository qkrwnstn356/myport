import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components'

const Position = styled.div `position: relative; height: 100vh;`;

function App() {
  const BodyProps = {
    name: "박준수",
    location: "용인시",
    favorList: [
      {name : "HTML", gender : '남자',id : 0},
      {name : "JS", gender : '여자',id : 1}, 
    ],
  };

  return (<>
    <Position>
      <Header></Header>
      <Main {...BodyProps}></Main>
      <Footer></Footer>
    </Position>
  </>);
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Link from './components/Link/Link';
import Image from './components/Img/Img.js';
function App() {
  return (
  <div>
     <div>
    <Header></Header>
    <div>
    <Paragraph></Paragraph>
    </div>
    <Image></Image>
    
   </div>
    
    <Link url="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022" linktext="Click here to reach the official Fifa website"></Link><br></br>
    
  </div>
  );
}

export default App;

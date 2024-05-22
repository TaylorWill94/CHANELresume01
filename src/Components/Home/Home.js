import "./Home.css";
import c from "./c_letter.png";

function Home() {
  return (
    <>
      <div className="home">
        <h1>CHANEL</h1>
        <h1>Taylor Williams</h1>
        <h2>Why you should hire me?</h2>
      </div>
      <div className="section">
        <div>
          <h1>ME</h1>
          <img className="c" src={c} alt="the letter c" width="100" />
        </div>
        <div>
          <h1>YOU</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

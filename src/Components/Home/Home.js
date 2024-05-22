import "./Home.css";
import c from "./c_letter.png";
import h from "./h_letter.png";
import a from "./a_letter.png";
import n from "./n_letter.png";

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
          <img className="h" src={h} alt="the letter c" width="100" />
          <img className="a" src={a} alt="the letter c" width="100" />
          <img className="n" src={n} alt="the letter c" width="100" />
          <img className="a" src={a} alt="the letter c" width="100" />
        </div>
        <div>
          <h1>YOU</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

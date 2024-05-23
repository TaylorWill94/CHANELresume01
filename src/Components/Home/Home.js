import "./Home.css";
import c from "./c_letter.png";
import h from "./h_letter.png";
import a from "./a_letter.png";
import n from "./n_letter.png";
import e from "./e_letter.png";
import l from "./l_letter.png";

function Home() {
  return (
    <>
      <div className="home">
        {/* <h1>CHANEL</h1> */}
        <div className="heading">
          <img className="c" src={c} alt="the letter c" width="100" />
          <img className="h" src={h} alt="the letter c" width="100" />
          <img className="a" src={a} alt="the letter c" width="100" />
          <img className="n" src={n} alt="the letter c" width="100" />
          <img className="e" src={e} alt="the letter c" width="100" />
          <img className="l" src={l} alt="the letter c" width="100" />
        </div>
        <h1>Hi, I'm Taylor</h1>
        <p>and here is a little about me 👋🏾</p>
        {/* <h2>why you should hire me?</h2> */}
      </div>
      <div className="section">
        <div className="skills">
          <h1>SKILLS</h1>
          <p>MICROSOFT WORD</p>
          <p>EXCEL</p>
          <p>COMMUNICATION</p>
          <p>PHOTOSHOP</p>
          {/* <img className="c" src={c} alt="the letter c" width="100" />
          <img className="h" src={h} alt="the letter c" width="100" />
          <img className="a" src={a} alt="the letter c" width="100" />
          <img className="n" src={n} alt="the letter c" width="100" />
          <img className="e" src={e} alt="the letter c" width="100" />
          <img className="l" src={l} alt="the letter c" width="100" /> */}
        </div>
        <div className="you">
          <h1>STYLES</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

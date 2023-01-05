import logo from './images/logo.jpg';
import FCS from './images/FCS.jpg';
import GentleNod from './images/gentle_nod.gif';
import './App.scss';

function App() {
  return (
    <div className="body">
      <header>
        <figure>
          <img src={logo} alt="logo" />
          <figcaption>맛있는 요리 정보 사이트</figcaption>
        </figure>
        <nav>
          <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
            home
          </a>
          <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
            about
          </a>
        </nav>
      </header>
      <main>
        <aside>
          <ul>
            <li>
              <p>{`<div id="header">`}를 사용하는것은 섹시하지 않습니다.</p>
            </li>
            <li>
              <p>div를 버튼으로 만드는 것 또한 cool하지 못 합니다.</p>
            </li>
          </ul>
        </aside>
        <div>
          <article>
            <header>
              <h1>맛있는 계란후라이 만들기</h1>
            </header>
            <section>
              <p>계란을 까지 않으면 계란 후라이가 되지 않습니다.</p>
            </section>
            <section>
              <p>
                그러므로 <b>계란을 까도록 노력</b>하는것이 계란 후라이가 되는 첫 걸음이 될것이라 믿습니다.
              </p>
            </section>
            <section>
              <img src={FCS} alt="FCS" />
            </section>
          </article>
          <article>
            <header>
              <h1>도움이 되었다면 후원하기</h1>
            </header>
            <section>
              <p>
                아래 버튼을 눌러 <strong>EL를 후원</strong>해주세요
              </p>
            </section>
            <section>
              <img src={GentleNod} alt="FCS" />
            </section>
            <section>
              <button>
                <p>어서 눌러주세요</p>
              </button>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;

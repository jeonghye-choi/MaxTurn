import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="index">
      <nav>
        <span className="logo">Logo</span>
        <span className="linkBtn">linkBtn</span>
        <span className="linkBtn">linkBtn</span>
        <span className="linkBtn">linkBtn</span>
        <span className="profile">profile</span>
      </nav>
      <section>
        <article>
          <div>Welcome!</div>
          <div>
            Maxturn - 수익률을 확인하고 투자하세요.
            맥스턴은 백테스트를 진행하고, 이에 대한 전략을 수립하고 유저들과 공유하는 플랫폼입니다.
          </div>
          <div>
            맥스턴은 여러분의 시간, 노력을 절감시켜줄 수 있습니다.
          </div>
        </article>
      </section>
      <section>
        <article>
          <div>photo</div>
          <div>설명</div>
        </article>
        <article>
          <div>photo</div>
          <div>설명</div>
        </article>
        <article>
          <div>photo</div>
          <div>설명</div>
        </article>
      </section>
      <section>
        <article>
          <form>
            <div>Log in to your account</div>
            <input type="text"></input>
            <input type="password"></input>
            <button type="submit"></button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Home;
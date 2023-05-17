import React from 'react';
import "../css/main.css";
import User from './User';
import Play from './Play';
import Bot from './Bot';
export default function Home(props) {
  return (
    <section id='home'>
      <div className="homeContent">
        <User/>
        <Play/>
        <Bot/>
      </div>
    </section>
  );
};
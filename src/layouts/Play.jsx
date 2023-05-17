import React from 'react'
import { connect } from 'react-redux';
function Play(props) {
  let player = props.object.player;
  let bot = props.object.bot;
  return (
    <section id="gameDisplay">
        <div className="displayResult">
          <h2>result</h2>
          <div className="resultList">
            <div className="resultItem">
              <h3> </h3>
              <h3>player</h3>
              <h3>bot</h3>
            </div>
            <div className="resultItem">
              <h3>win</h3>
              <p>{player.win}</p>
              <p>{bot.win}</p>
            </div>
            <div className="resultItem">
              <h3>lose</h3>
              <p>{player.lose}</p>
              <p>{bot.lose}</p>
            </div>
            <div className="resultItem round">
              <h3>round</h3>
              <p>{player.round}</p>
            </div>
          </div>
        </div>
        <div className="displayBattle">
          <img src={player.src} alt={player.select}/>
          <h1>VS</h1>
          <img src={bot.src} alt={bot.select}/>
        </div>
        <div className="displayButtonGame" id="ButtonGame">
            <button onClick={()=>{props.startGame()}} className='button' id='start'>start</button>
            <button onClick={()=>{alert("F5 ĐỂ CHƠI LẠI! TÍNH NĂNG CHƯA UPDATE")}} className='button' id='end'>end</button>
        </div>
    </section>
  );
};
const mapStateToProps = state => {
    return {
      object : state.reducerPlay
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      startGame: () => {
        let action = {
          type : "startGame"
        };
        dispatch(action);
      }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Play);
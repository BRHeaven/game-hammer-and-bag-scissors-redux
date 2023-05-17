import React from 'react'
import { connect } from 'react-redux';
function Play(props) {
  return (
    <section id="gameDisplay">
        <div className="displayResult">
          <h2>result</h2>
          <div className="resultList">
            <div className="resultItem">
              <h3>win</h3>
              <p>0</p>
            </div>
            <div className="resultItem">
              <h3>lose</h3>
              <p>0</p>
            </div>
            <div className="resultItem">
              <h3>round</h3>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="displayBattle">
          <img src={""} alt={""}/>
          <img src={""} alt={""}/>
        </div>
        <div className="displayButtonGame" id="ButtonGame">
            <button onClick={()=>{}} className='button' id='start'>start</button>
            <button onClick={()=>{}} className='button' id='end'>end</button>
        </div>
    </section>
  );
};
const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Play);
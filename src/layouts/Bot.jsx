import React from 'react'
import { connect } from 'react-redux';
function Bot(props) {
  let {heart1,heart2,heart3} = props.reducer.bot;
  return (
    <section id="bot" className='displayPlayer'>
        <div className="images">
          <img src={"../images/bot.jpg"} alt={"botImages"}/>
        </div>
        <div className="heart" id="heartBot">
          <p><i style={{color: heart3}} className="fa fa-heart"></i></p>
          <p><i style={{color: heart2}} className="fa fa-heart"></i></p>
          <p><i style={{color: heart1}} className="fa fa-heart"></i></p>
        </div>
        <div className="select" id="selectBot">
          <button disabled><img src={"./images/select-1.png"} alt={"scissors"}/></button>
          <button disabled><img src={"./images/select-2.png"} alt={"hammer"}/></button>
          <button disabled><img src={"./images/select-3.png"} alt={"bag"} /></button>
        </div>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    reducer : state.reducerPlay
  }
}
export default connect(mapStateToProps,null)(Bot);
/* eslint-disable react/style-prop-object */
import React from 'react'
import { connect } from 'react-redux';
function User(props) {
    let {heart1,heart2,heart3} = props.reducer.player;
  return (
    <section id="user" className='displayPlayer'>
        <div className="images">
            <img src={"../images/user.jpg"} alt={"userImages"}/>
        </div>
        <div className="heart" id="heartUser">
            <p><i style={{color: heart3}} className="fa fa-heart"></i></p>
            <p><i style={{color: heart2}} className="fa fa-heart"></i></p>
            <p><i style={{color: heart1}} className="fa fa-heart"></i></p>
        </div>
        <div className="select" id="selectUser">
            <button onClick={()=>{props.setSelectPlayer("scissors")}}><img src={"./images/select-1.png"} alt={"scissors"} /></button>
            <button onClick={()=>{props.setSelectPlayer("hammer")}}><img src={"./images/select-2.png"} alt={"hammer"} /></button>
            <button onClick={()=>{props.setSelectPlayer("bag")}}><img src={"./images/select-3.png"} alt={"bag"} /></button>
        </div>
    </section>
  );
};
const mapStateToProps = state => {
    return {
        reducer : state.reducerPlay
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectPlayer: (select) => {
            let action = {
                type : "set_SelectPlayer",
                select
            };
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(User);
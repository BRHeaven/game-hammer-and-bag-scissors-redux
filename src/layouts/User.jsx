/* eslint-disable react/style-prop-object */
import React from 'react'
import { connect } from 'react-redux';
function User(props) {
  return (
    <section id="user" className='displayPlayer'>
        <div className="images">
            <img src={"../images/user.jpg"} alt={"userImages"}/>
        </div>
        <div className="heart" id="heartUser">
            <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
            <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
            <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
        </div>
        <div className="select" id="selectUser">
            <button><img src={"./images/select-1.png"} alt={"scissors"} /></button>
            <button><img src={"./images/select-2.png"} alt={"hammer"} /></button>
            <button><img src={"./images/select-3.png"} alt={"bag"} /></button>
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
export default connect(mapStateToProps,mapDispatchToProps)(User);
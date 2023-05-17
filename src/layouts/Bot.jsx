import React from 'react'

export default function Bot() {
  return (
    <section id="bot" className='displayPlayer'>
        <div className="images">
          <img src={"../images/bot.jpg"} alt={"botImages"}/>
        </div>
        <div className="heart" id="heartBot">
          <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
          <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
          <p><i style={{color: "red"}} className="fa fa-heart"></i></p>
        </div>
        <div className="select" id="selectBot">
          <button disabled><img src={"./images/select-1.png"} alt={"scissors"}/></button>
          <button disabled><img src={"./images/select-2.png"} alt={"hammer"}/></button>
          <button disabled><img src={"./images/select-3.png"} alt={"bag"} /></button>
        </div>
    </section>
  );
};

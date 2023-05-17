/* eslint-disable no-duplicate-case */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
const reducerPlay = {
    player : {select:"loading",src:"./images/loading.gif",heart1:"red",heart2:"red",heart3:"red",dead:0,win:0,lose:0,round:0},
    bot : {select:"loading",src:"./images/loading.gif",heart1:"red",heart2:"red",heart3:"red",dead:0,win:0,lose:0}

};
const playReducer = ( state = reducerPlay, action ) => {
    if ( state.player.dead === 3) {
        alert("Bot Win");
    };
    if ( state.bot.dead === 3 ) {
        alert("Player Win");
    };
    switch ( action.type ) {
        case "set_SelectPlayer" : {
            let updateReducer = state.player;
            updateReducer.select = action.select;
            if ( updateReducer.select === "scissors") {
                updateReducer.src = "./images/select-1.png";
            } else if ( updateReducer.select === "hammer" ) {
                updateReducer.src = "./images/select-2.png";
            } else {
                updateReducer.src = "./images/select-3.png";
            };
            state.player = updateReducer;
            return {...state};
        }; break;
        case "startGame" : {
            let updateReducer = state;
            if ( updateReducer.player.select !== "loading" ) {
                let index = parseInt(Math.random() * (4 - 1) + 1);
                if ( index === 1 ) {
                    updateReducer.bot.src = "./images/select-1.png";
                    updateReducer.bot.select = "scissors";
                } else if ( index === 2 ) {
                    updateReducer.bot.src = "./images/select-2.png";
                    updateReducer.bot.select = "hammer";
                } else {
                    updateReducer.bot.src = "./images/select-3.png";
                    updateReducer.bot.select = "bag";
                };
                updateReducer.player.round += 1;
                switch ( updateReducer.player.select ) {
                    case "scissors": {
                        if ( updateReducer.bot.select === "hammer" ) {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.lose += 1;
                            bot.win += 1;
                            player.dead += 1;
                            if ( player.lose === 1 ) {
                                player.heart1 = "black";
                            } else if ( player.lose  === 2 ) {
                                player.heart2 = "black";
                            } else {
                                player.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else if ( updateReducer.bot.select === "bag") {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.win += 1;
                            bot.lose += 1;
                            bot.dead += 1;
                            if ( bot.lose === 1 ) {
                                bot.heart1 = "black";
                            } else if ( bot.lose === 2 ) {
                                bot.heart2 = "black";
                            } else {
                                bot.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else {
                            
                        };
                    }; break;
                    case "hammer": {
                        if ( updateReducer.bot.select === "bag" ) {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.lose += 1;
                            bot.win += 1;
                            player.dead += 1;
                            if ( player.lose === 1 ) {
                                player.heart1 = "black";
                            } else if ( player.lose  === 2 ) {
                                player.heart2 = "black";
                            } else {
                                player.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else if ( updateReducer.bot.select === "scissors") {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.win += 1;
                            bot.lose += 1;
                            bot.dead += 1;
                            if ( bot.lose === 1 ) {
                                bot.heart1 = "black";
                            } else if ( bot.lose === 2 ) {
                                bot.heart2 = "black";
                            } else {
                                bot.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else {
                            
                        };
                    }; break;
                    case "bag": {
                        if ( updateReducer.bot.select === "scissors" ) {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.lose += 1;
                            bot.win += 1;
                            player.dead += 1;
                            if ( player.lose === 1 ) {
                                player.heart1 = "black";
                            } else if ( player.lose  === 2 ) {
                                player.heart2 = "black";
                            } else {
                                player.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else if ( updateReducer.bot.select === "hammer") {
                            let player = updateReducer.player;
                            let bot = updateReducer.bot;
                            player.win += 1;
                            bot.lose += 1;
                            player.dead += 1;
                            if ( bot.lose === 1 ) {
                                bot.heart1 = "black";
                            } else if ( bot.lose === 2 ) {
                                bot.heart2 = "black";
                            } else {
                                bot.heart3 = "black";
                            }
                            updateReducer.player = player;
                            updateReducer.bot = bot;
                        } else {
                            
                        };
                    }; break;
                    default: ;
                }
            };
            state = updateReducer;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default playReducer;
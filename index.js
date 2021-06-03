const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const BUY_EGG = 'BUY_EGG';
const BUY_POTATOS = 'BUY_POTATOS'
//Action - describes the changes in the state of application
function buyEgg() {
    return {
        type: BUY_EGG,
        info: 'Buying Egg'
    }
}

function buyPotato() {
    return {
        type: BUY_POTATOS,
        info: 'Buying Potatos'
    }
}

//Store - holds the state of app
// const initialState = {
//     numOfEggs: 100,
//     numOfPotatoes: 20
// }
const initialEggState = {
    numOfEggs: 100
}

const initialPotatoState = {
    numOfPotatoes: 20
}

//Reducer - carries out the state transition depending on action
const eggReducer = (state=initialEggState, action) => {
    switch(action.type) {
        case BUY_EGG: return {
            ...state,
            numOfEggs: state.numOfEggs - 1
        }
        default: return state
    }
}

const potatoReducer = (state=initialPotatoState, action) => {
    switch(action.type) {
        case BUY_POTATOS: return {
            ...state,
            numOfPotatoes: state.numOfPotatoes - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    egg: eggReducer,
    potato: potatoReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyPotato());
unsubscribe();
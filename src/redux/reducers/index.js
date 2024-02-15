import { combineReducers } from "redux";

import persist from './persist.reducer';

/**  set reducers in a particular object */
let reducers = Object.create({});
reducers.persist = persist;

/** combining all reducers and assigned to reducers variable */
reducers = combineReducers(reducers);
export default reducers;

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' //this is for development... this is a plug in too...?

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex) //integrating Vuex with vue as a plugin.. this lets us get the actions for methods..?

const debug = process.env.NODE.ENV !== 'production' //will equal true or false

export default new Vuex.Store({ //this is taking the store file then?? 
    strict: debug, //what is strict then
    plugins: debug ? [createLogger()] : [], //only imports if in debug then?? i thought strict did same thing as ? 
    state, //variable is the same so we dont need to do state: state just state,
    getters,
    actions, //middleware redux sagas hacer sin llamadas asincronas
    mutations //change estados 

})

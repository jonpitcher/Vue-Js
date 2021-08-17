import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const auth = firebaseApp.auth()
export const db = firebaseApp.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default firebaseApp


/*

import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings) //we are exporting settings from the file we made settings.js with the log in information


export const db = firebaseApp.database() //this is to gett the database but this is an abbreviation we can jusst write db instead of writing full firebaseApp.database() ALL THE TIME

export default firebaseApp

//this creates actual application with const... 

//so firebase is an api??? 

*/
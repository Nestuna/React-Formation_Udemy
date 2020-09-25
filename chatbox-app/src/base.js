import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDSNEmFsOvplbr5oepZTq0Flem9XsmLUx0",
  authDomain: "chatbox-app-5f66e.firebaseapp.com",
  databaseURL: "https://chatbox-app-5f66e.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
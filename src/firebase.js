import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCi3mQqSDDa9Sq6Ibq7Vpa3nxjhMMLDkpc",
  authDomain: "vue-vuex-firebase-tutorial.firebaseapp.com",
  databaseURL: "https://vue-vuex-firebase-tutorial.firebaseio.com",
  projectId: "vue-vuex-firebase-tutorial",
  storageBucket: "",
  messagingSenderId: "872863434783"
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
}



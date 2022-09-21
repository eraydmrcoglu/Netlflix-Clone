import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz4BpUTDQPHvaEizBPulw0zcxktIrrjg0",
  authDomain: "netflix-clone-2e220.firebaseapp.com",
  projectId: "netflix-clone-2e220",
  storageBucket: "netflix-clone-2e220.appspot.com",
  messagingSenderId: "264843782711",
  appId: "1:264843782711:web:fd90eabeec88ab7a056db2",
  measurementId: "G-QY47NM0W5J"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
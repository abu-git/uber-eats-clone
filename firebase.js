import { initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCRaDQfUgfI3_bBqwSMb-b6L52RCEDMnWU",
    authDomain: "rn-uber-eats-clone-54273.firebaseapp.com",
    projectId: "rn-uber-eats-clone-54273",
    storageBucket: "rn-uber-eats-clone-54273.appspot.com",
    messagingSenderId: "743794020136",
    appId: "1:743794020136:web:f25ea41cb9915356040a1d"
}

const app = initializeApp(firebaseConfig)

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default app
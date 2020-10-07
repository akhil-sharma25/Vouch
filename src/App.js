import React, { Component } from "react"
import "./front.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "Buj1JscWarjd04x9bRYpODNQ3",
  authDomain: "vouch-b897e.firebaseapp.com"
})
class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!!!user })
      console.log("user", user)
    })
  }
  render() {
   return (
    <div className="App" >
    {
      this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Front {firebase.auth().currentUser.displayName}</h1>
            
            <img
            src={firebase.auth().currentUser.photoURL}
              alt="profile ALt"
    
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App

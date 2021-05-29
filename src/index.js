import React from "react";
import ReactDom from "react-dom";


const Welcome = ({user, onSignOut})=>{
  return (
    <div>
      Welcome <i>{user.username}</i>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {
  
 
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <input type="text" ref="username" placeholder="Username" />
        <input type="password" ref="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
 
  signIn(username, password) {
    this.setState({
      user:{
        username,
        password,
      }
    })
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        <h1>LOGIN FORM</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}
ReactDom.render(<App />, 
document.getElementById("root"))
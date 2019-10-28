import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         };
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.username == 'admin' && this.state.password == 'password')
            alert('Login Successful.');
        else
        {
            alert('Incorrect username or password');
            this.setState({
                username: '',
                password: ''
            });
        }
    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    changeName = (newName) => {
        this.setState({ username: newName.target.value});
    }
    render() {
        return (
            <form style={formStyle} onSubmit={this.onSubmitHandler}>
                <h1 style={titleStyle}>Welcome to UNITEC: </h1>
                <p style={instructionStyle}>Please enter your username: </p>
                <p>
                    Username: <input
                    style={inputStyle}
                    id="usernameInput"
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.username}/>
                </p>
                <p>Password: 
                    <input
                    style={inputStyle}
                    id="passInput"
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    value={this.state.password}
                    />
                </p>
                <input style={ buttonStyle } type="submit"/>
            </form>
        )
    }
}

const formStyle = {
    margin: '6% 0 0 42%'
}

const buttonStyle = {
    width: '10em',
    height: '2em',
    backgroundColor: 'cyan',
    marginTop: '25px',
    marginLeft: '7%'
}

const titleStyle = {
    fontWeight: '800',
    color: 'red'
}

const instructionStyle = {
    fontWeight: '800',
    marginBottom: '50px',
    marginTop: '50px'
}

const inputStyle = {
    width: '20em',
    borderRadius: '10px',
    transform: 'scale(1, 1.2)'
}

export default LoginForm;
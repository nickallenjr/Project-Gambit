import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './LoginForm.css';
import logo from '../../imgs/Project-Gambit-Logo.png';
import GetUserStats from '../../components/api-routes'


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.userLogin = new GetUserStats();
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            // Login User
            this.userLogin.login(this.state.email, this.state.password);
        } else {
            console.log('Please fill out entire form!')
        }
    };
    render() {
        return (
        <Container fluid>
            <Col md={{ size: 6, offset: 3 }}>
                <Row className='loginBox' >
                    <Col md='4'>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col md='8'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input name='email' onChange={this.handleInputChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                <label htmlFor="exampleInputPassword1">Password </label>
                                <input name='password' onChange={this.handleInputChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-sm btn-default">Sign in</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
    }
};

export default LoginForm;
import React, { Component } from 'react'
import {
    Button, 
    Collapse, 
    Well, 
    Form, 
    Row, 
    Col,
    FormGroup, 
    ControlLabel, 
    FormControl,
    Container
} from 'react-bootstrap'

import {connect} from 'react-redux';
import {handleChange} from '../../actions/promoCodeActions'
export class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open: false, 
             value: '', 
        };
    }
    formSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = e =>{
        this.props.handleChange(e);
    }
    render() {
        return (
            <div>
                <div
                    className = "promo-code-button"
                    bsStyle = "link"
                    onClick = {() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `Apply` : `Hide`}
                    Promo code 
                    {this.state.open === false ? ` +`: ` -`}
                </div>
                <Collapse in = {this.state.open}>
                    <Container>
                        <Row className ="show-grid">
                        <Col md = {12}>
                        <Form onSubmit = {this.formSubmit}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Enter Code</Form.Label>
                            <Form.Control type="email" placeholder="59E38K" 
                             onChange = {this.handleChange}/>
                            <Form.Text className="text-muted">
                             Promocode is "DISCOUNT".
                            </Form.Text>
                        </Form.Group>
                        <Button className ="btn-round"
                           variant="outline-dark"
                           bsStyle = "success"
                           disabled = {this.props.isDisabled}
                            onClick = {this.props.giveDiscount}
                        >Apply it</Button>
                        </Form>
                        </Col>
                        </Row>
                    </Container>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange}) (PromoCodeDiscount)

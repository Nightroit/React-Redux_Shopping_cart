import React, {Component} from 'react'; 
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetail extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             open: false,
        };
    }    
    render() {
        return(
            <div>
                <div
                    className = "item-detail-button"
                    bsStyle = "link"
                    onClick = {() => this.setState({open: !this.state.open})}
                 >
                    {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? ` +` : `-` } 
                </div>
                <br></br>
                <Collapse in = {this.state.open}>
                    <Media className ="media-item-details">
                        <img
                            width={84}
                            height={84}
                            className="mr-2"
                            src = "https://image.flaticon.com/icons/svg/741/741407.svg" 
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                                <p>Your product description</p>
                            <Row>
                                <Col md = {6}><h6>Qty: 1 &nbsp;&nbsp;&nbsp;</h6></Col>
                                <Col md = {6}><strong>{`$${this.props.price}`}</strong></Col>
                                <Col md = {6}><bold> &nbsp;</bold></Col>
                                <Col md = {6}><h6 style = {{textDecoration: 'line-through'}}> {`$${this.props.price}`}</h6></Col>

                                <br></br>
                                <br></br>
  
                            </Row>
                        </Media.Body>
                    </Media>
                </Collapse>
            </div>
        )
    }
}
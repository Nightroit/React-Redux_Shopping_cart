import React, { Component } from 'react'

import {Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underLine', 
    }, 
    totalSavings: {
        color: 'red', 
        fontWeight: 600 
    }
};

export class PickupSavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id = "tooltip" >
            <p>Picking up your order the store helps cut costs, and we pass the saving on to you.</p>
            </Tooltip>
        )
        return (    
                <Row className = "show-grid">
                    <Col md = {6}>
                        <OverlayTrigger placement = "top" overlay = {tooltip}>
                            <div style = {styles.pickupSavings }>Pickup Savings</div>
                        </OverlayTrigger>
                    </Col>
                    <Col style = {styles.totalSavings} md = {6}> {`$${this.props.price}`}</Col>
                </Row>

        )
    }
}

export default PickupSavings

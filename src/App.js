import React from 'react';
import Container from 'react-bootstrap/Container'

import SubTotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxedFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal//EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import PromoCodeDiscount from'./components/PromoCode/PromoCode'
import './App.css';
import { connect } from 'react-redux'; 
import {handleChange} from './actions/promoCodeActions'

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
         total: 100,
         PickupSavings: -3.85, 
         taxes: 0, 
         estimatedTotal: 0, 
         disablePromoButton: false,
      }
    }
    componentDidMount(){
      this.setState({
        taxes: (this.state.taxes + this.state.total) * 0.0875
      },
      function(){
        this.setState({
          estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
        });
      } 
      )
    }
    giveDiscountHandler = () => {
      if(this.props.promoCode === 'DISCOUNT') {
        this.setState({
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          })
        } 
        )
      }
    }
    render(){
    return (
    
      <div className = "container">
        {/* <h1>Jai Shri ram</h1> */}
        <Container className = "purchase-card">
          <SubTotal price = {this.state.total.toFixed(2)}/>
          <PickupSavings price = {this.state.PickupSavings} />
          <TaxesFees taxes = {this.state.taxes.toFixed(2)}/>
          <br></br>
          <br></br>
          <EstimatedTotal price = {this.state.estimatedTotal} />
          <ItemDetails price = {this.state.total}/>
          <hr />
          <PromoCodeDiscount giveDiscount = {() => this.giveDiscountHandler()}
            isDisabled = {this.state.disablePromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps, {handleChange}) (App);
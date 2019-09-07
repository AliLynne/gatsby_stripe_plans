import React from "react"

import { StaticQuery, graphql } from 'gatsby'

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const Checkout = class extends React.Component {
  constructor(props) {
    super(props) 
    
    this.state = {
      key: this.props.stripe.public_key,
      plans: this.props.stripe.plans,
      selected: '',
      error: '',
      buttonText: this.props.stripe.button_text
    }
  }

  componentDidMount() {
    this.stripe = window.Stripe(this.state.key)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.stripe.redirectToCheckout({
      items: [{ plan: this.state.selected, quantity: 1}],
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/canceled',
    })
    .then((res) => {
      if (res.error) {
        this.setState({
          error: res.error.essage
        })
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
    const plans = this.state.plans
    return (
      <form onSubmit={this.handleSubmit}>
        {plans && plans.map(plan => {
          return (
            <label key={plan.id}>
              <input
                type="radio"
                name="plan-type"
                value={plan.id}
                checked={this.state.selected === plan.id}
                onChange={this.handleChange}
              />
              {plan.label}
            </label>
          )
          
        })}
        <button
          style={buttonStyles}
          type="submit"
        >
          {this.state.buttonText}
        </button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query Stripe {
        site {
          id
          siteMetadata {
            stripe {
              public_key
              plans {
                id
                label
              }
              button_text
            }
          }
        }
      }
    `}
    render={(data) => (
      <Checkout stripe={data.site.siteMetadata.stripe} />
    )}
  />
)
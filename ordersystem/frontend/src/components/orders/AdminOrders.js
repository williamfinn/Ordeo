import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAdminOrders, orderSend} from "../../actions/orders";
import {Link, Redirect} from "react-router-dom";
import {Cart} from "../carts/Cart";

export class Orders extends Component {
    static propTypes = {
        orders : PropTypes.array.isRequired,
        getAdminOrders : PropTypes.func.isRequired,
        orderSend: PropTypes.func.isRequired,
    };
    componentDidMount() {
        this.props.getAdminOrders()
    }


    render() {
        return (
            <div className="rounded shadow card card-body text-center">
                <table className="table table-sm table-hover tab align-middle   ">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Details</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map(orders => (

                        <tr key={orders.id}>

                            <td>{orders.id}</td>
                            <td>
                                <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#s" aria-expanded="false" aria-controls="s">Details</button>
                                <div className="collapse" id="s">
                                    {orders.products.map(prod=>(

                                        <li>{prod.name} : {prod.quantity}</li>



                                    ))}
                                    <p className="fw-bold">Payment: {orders.payment}</p>
                                    <p className="fw-bold">Delivery: {orders.delivery}</p>
                                </div>

                            </td>
                            <td className="fw-bold">${orders.total}</td>

                            <td>{orders.received? 'Order Received':orders.sent? 'Order Sent':<button
                                onClick={this.props.orderSend.bind(this, orders.id)}
                                className="btn btn-danger btn-sm">
                                {' '}
                                Send Order
                            </button>}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        );
    }
}
const mapStatetoProps = state => ({
    orders: state.orders.orders
})

export default connect(mapStatetoProps, {getAdminOrders, orderSend})(Orders);
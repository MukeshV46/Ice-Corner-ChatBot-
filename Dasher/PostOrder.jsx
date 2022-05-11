import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);

    
    const { steps } = this.props;
    const {  name,Type, Flavour, count,size,is_Pay } = steps;

    this.state =  { name, Type, Flavour, count,size,is_Pay }; 
  }


  componentDidMount() {
    const OrderObj = {
      name:this.state.name.value,
      Type:this.state.Type.value,
      Flavour:this.state.Flavour.value,
      count:this.state.count.value,
      size:this.state.size.value,
      paid:this.state.is_Pay.value
    };
 
    axios.post(`http://localhost:3000/orders`, OrderObj)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }
  

  render() {
    const { Type, Flavour, count,size,is_Pay } = this.state;
    return (
      <div style={{ width: '100%' }}>
      <h3>Your Order</h3>
      
      <table>
        <tbody>
          <tr>
            <td>Type </td>
            <td>  {Type.value}</td>
            <hr />
          </tr>
          <tr>
            <td>Flavour  </td>
            <td>  {Flavour.value}</td>
            <hr />
          </tr>
          <tr>
            <td>Orders  </td>
            <td> {count.value}</td>
            <hr />
          </tr>
          <tr>
            <td>Size </td>
            <td>  {size.value}</td>
          </tr>
          <tr>
            <td>Paymet Status </td>
            <td>{is_Pay.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
      );
    }
  };


  export default Post;
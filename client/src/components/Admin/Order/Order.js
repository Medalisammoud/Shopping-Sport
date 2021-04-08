import React from 'react'

const Order = ({order, i}) => {

    return (
        <tr>
      <td className="pl-4">{i+1}</td>
      <td>
        <h5 className="font-medium mb-0" >{order.orderUser.firstName}</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{
        order.product>1 ? order.product.reduce((a,b)=>{return a.productName+" , " +b.productName},'' ) : order.product[0].productName
        }</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{
        order.product>1 ? order.product.reduce((a,b)=>{return a.productPrice + b.productPrice},0 ) : order.product[0].productPrice
        }</h5>
      </td>
      <td>
        <h5 className="font-medium mb-0">{order.createdAt}</h5>
      </td>
    </tr>
    )
}

export default Order

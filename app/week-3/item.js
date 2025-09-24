export function Item(props){
  return(
    <ul>
      <li>{props.name}</li>
      <li>Quantity: {props.quantity}</li>
      <li>Category: {props.category}</li>
    </ul>
  )
}
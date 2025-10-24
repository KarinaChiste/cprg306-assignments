export function Item(props){
  return(
    <ul className="my-3 border-1 p-7 mx-150 rounded-4xl">
      <li className="text-center">{props.name}</li>
      <li className="text-center">Quantity: {props.quantity}</li>
      <li className="text-center">Category: {props.category}</li>
    </ul>
  )
}
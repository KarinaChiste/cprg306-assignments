import {ItemList} from "./item-list.js"
export default function Page(){
  return(
    <main>
      <h1 className="font-bold text-3xl text-center p-2">Shopping List</h1>
      <ItemList/>
    </main>
  )
}
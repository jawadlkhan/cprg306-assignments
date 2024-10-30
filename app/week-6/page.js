import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
    <main class="bg-slate-950">
        <h1 className="text-3xl font-bold m-2 text-slate-100">Shopping List</h1>
        <ItemList /> 
    </main>
    );
}
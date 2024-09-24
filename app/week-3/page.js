
import ItemList from "./item-list"

export default function Page() 
{
    return (
        <div className="p-10 bg-slate-600">
            <h1 className="font-bold text-3xl ml-4">Shopping List</h1>
            <ItemList />
        </div>
        
    )
}
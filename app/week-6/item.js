export default function Item({name, quantity, category}) {
    return(
        <div>
            <ul>
                <li className="p-2 m-4 bg-slate-900 max-w-sm">
                    <h2 className="text-xl font-bold text-slate-100 text-">{name}</h2>
                    <div className="text-sm text-slate-100"> Buy {quantity} in {category}</div>
                    </li>
            </ul>
        </div>
    );
}
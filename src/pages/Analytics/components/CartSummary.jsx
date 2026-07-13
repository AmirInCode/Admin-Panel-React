import {  DollarSign } from "lucide-react";

const CartSummary = ({item}) => {
    const Icon = item.icon;
    return (
        <div className='bg-gray-100 p-4 rounded-2xl'>

            {/* <DollarSign size={20} /> */}
            <Icon size={20} />
            
            <h3 className='text-center font-bold text-xl'>{item.number}s</h3>
            <p className='text-center text-gray-400 text-xs'>{item.title}</p>
        </div>
    );
}

export default CartSummary;
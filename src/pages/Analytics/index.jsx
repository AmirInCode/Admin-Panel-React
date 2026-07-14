import ProgressBar from './components/Progress/ProgressBar';
import trafficData from './components/Progress/trafficData';
import ChartSales from './components/ChartSales';
import CartSummary from './components/CartSummary';
import DataSumery from './DataSumery';



const Analytics = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChartSales />
                <ProgressBar data={trafficData} />
            </div>

            <div className='bg-white w-full mt-6 shadow-md rounded-3xl p-4'>
                <h2 className='mb-8 text-right text-xl font-bold'>خلاصه ماه</h2>

                <div className='grid grid-cols-4 gap-2'>

                    {DataSumery.map((item) => (

                        <CartSummary key={item.id} item={item} />
                    )
                    )}


                </div>

            </div>
        </div>
    );
}

export default Analytics;
import { InboxStackIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function Admindasboard() {
    const navigate = useNavigate(); 
    const Productpage = () => {
        navigate('/Products');
      };
    return (
        <div className="flex flex-row gap-4 m-4 justify-around">

            <div onClick={Productpage} className="bg-gradient-to-r from-cyan-600 to-blue-400 w-full max-w-48 h-40 rounded-xl p-2 hover:border-2 border-black cursor-pointer">
                <p>Products</p>
                <div className='flex justify-center'>
                    <InboxStackIcon className=' w-12 h-12 m-6' />
                </div>

                <p className='flex justify-center'> 5</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-400 w-full max-w-48 h-40 rounded-xl p-2 hover:border-2 border-black cursor-pointer ">
                <p>Users</p>
                <div className='flex justify-center'>

                    <UserIcon className=' w-12 h-12 m-6' />
                </div>
                <p className='flex justify-center'> 12000</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-400 w-full max-w-48 h-40 rounded-xl p-2 hover:border-2 border-black cursor-pointer">
                <p>Orders</p>
                <div className='flex justify-center'>

                    <ArrowDownTrayIcon className=' w-12 h-12 m-6' />
                </div>  
                 <p className='flex justify-center'> 120</p>
            </div>
        </div>
    )
}

export default Admindasboard;
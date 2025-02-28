import { HomeIcon } from '@heroicons/react/24/outline'
import { InboxStackIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Image from '../Assets/1.jpg'

function Adminmenubar() {
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-600 to-blue-400  w-full max-w-64">
            <h3 className="flex justify-center font-semibold"> Admin Board</h3>
            <div className='flex justify-center p-6'>
                <img className="w-24 h-24 rounded-full flex" src={Image} alt='Logo' />
            </div>
            <h2 className="flex justify-center">You Are a Admin</h2>
            <div className="flex flex-col gap-7  tracking-normal p-7">
                <div className='flex flex-row gap-3 hover:border-l-2 cursor-pointer'> <HomeIcon className='h-6 w-6' /> <span>Home</span></div>
                <div className='flex flex-row gap-3  hover:border-l-2 cursor-pointer'> <InboxStackIcon className='h-6 w-6' /><span>Products</span></div>
                <p className='flex flex-row gap-3  hover:border-l-2 cursor-pointer'>  <UserIcon className='h-6 w-6' />User Control</p>
                <p className='flex flex-row gap-3  hover:border-l-2 cursor-pointer'>   <ArrowDownTrayIcon className='h-6 w-6' /> Orders</p>
                <p className='flex flex-row gap-3  hover:border-l-2 cursor-pointer'>    <CircleStackIcon className='h-6 w-6' /> Stocks</p>
                <p className='flex flex-row gap-3  hover:border-l-2 cursor-pointer'>     <WrenchScrewdriverIcon className='h-6 w-6' />Account</p>
            </div>
        </div>
    )
}

export default Adminmenubar;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const Sidebar = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className='flex'>
            <div className='flex w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div className='bg-slate-800 text-white p-3 rounded-lg inline-block'>
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                    {/* Sidebar Link */}
                    <Link href='/'>
                        <div
                        className={
                            pathname == '/' ? 'bg-blue-500 hover:bg-blue-500 text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block' : 'bg-gray-100 hover:bg-blue-500 hover:text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block'
                        }
                        >
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    {/* Sidebar Link */}

                    {/* Sidebar Link */}
                    <Link href='/customers'>
                        <div
                        className={
                            pathname == '/customers' ? 'bg-blue-500 hover:bg-blue-500 text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block' : 'bg-gray-100 hover:bg-blue-500 hover:text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block'
                        }
                        >
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    {/* Sidebar Link */}

                    {/* Sidebar Link */}
                    <Link href='/orders'>
                        <div 
                        className={
                            pathname == '/orders' ? 'bg-blue-500 hover:bg-blue-500 text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block' : 'bg-gray-100 hover:bg-blue-500 hover:text-slate-50 cursor-pointer my-4 p-3 rounded-lg inline-block'
                        }
                        >
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    {/* Sidebar Link */}

                    {/* Sidebar Link */}
                    <Link href=''>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                            <FiSettings size={20} />
                        </div>
                    </Link>
                    {/* Sidebar Link */}
                </div>
            </div>
            <main className='w-full'>{children}</main>
        </div>
    )
}

export default Sidebar
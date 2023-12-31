import React from 'react';
import { data } from '@/data/data';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Head from 'next/head';

const orders = () => {
    return (
        <>
            <Head>
                <title>Orders</title>
                <meta name="description" content="Orders" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='bg-gray-100 min-h-screen'>
                <div className='flex justify-between px-4 pt-4'>
                    <h2>Orders</h2>
                    <h2>Hola, Asifor!</h2>
                </div>
                <div className='p-4'>
                    {/* Table */}
                    <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>Order</span>
                            <span className='sm:text-left text-right'>Status</span>
                            <span className='hidden md:grid'>Last Order</span>
                            <span className='hidden sm:grid'>Method</span>
                        </div>
                        <ul>
                            {data.map((order, id) => (
                                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                                    {/* Name and Amount */}
                                    <div className='flex'>
                                        <div className='bg-slate-100 p-3 rounded-lg'>
                                            <FaShoppingBag className='text-slate-800' />
                                        </div>
                                        <div className='pl-4'>
                                            <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                                            <p className='text-gray-800 text-sm'>{order.name.first}</p>
                                        </div>
                                    </div>

                                    {/* Order Status: On Hold, Processing, Completed */}
                                    <p className='text-gray-600 sm:text-left text-right'>
                                        <span className={
                                            order.status == 'Processing'
                                                ? 'bg-yellow-200 p-2 rounded-lg'
                                                : order.status == 'Completed'
                                                    ? 'bg-green-200 p-2 rounded-lg'
                                                    : 'bg-red-200 p-2 rounded-lg'
                                        }
                                        >
                                            {order.status}
                                        </span>
                                    </p>

                                    {/* Order date */}
                                    <p className='hidden md:flex'>{order.date}</p>

                                    {/* Payment Method */}
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p>{order.method}</p>

                                        {/* Three vertical dots icon */}
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default orders
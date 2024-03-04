import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            cardText: 'Excel Dashboard Files.',
            fileSize: '650kb',
            optionIcon: true,
            footer: {
                footerText: 'Download Now', isActive: true, bgColor: 'bg-green-600'
            }
        },
        {
            cardText: 'Word Dashboard Files.',
            fileSize: '0.9md',
            optionIcon: true,
            footer: {
                footerText: 'Upload', isActive: true, bgColor: 'bg-blue-600'
            }
        },
        // {
        //     cardText: 'JavaScript Files.',
        //     fileSize: '5md',
        //     optionIcon: false,
        //     footer: {
        //         footerText: 'Download Now', isActive: true, bgColor: 'bg-yellow-500'
        //     }
        // },
        {
            cardText: 'Text Files.',
            fileSize: '266kb',
            optionIcon: true,
            footer: {
                footerText: 'Upload', isActive: false, bgColor: 'bg-blue-600'
            }
        },
    ]


    return (
        <>
            {/* <div className='fixed top-0 left-0 z-[3] w-full h-screen py-12 px-16'>
                <div ref={ref} className='mt-11 w-full h-[80vh] flex flex-wrap'>
                    {
                        data.map((item, idx) => (
                            <Card data={item} key={idx} reference={ref} />
                        ))
                    }
                </div>
            </div> */}



            {/* Form */}

            <div className='w-full h-screen grid place-content-center'>
                <form className="mx-auto bg-zinc-600 w-[650px] text-center py-7 px-3 rounded-2xl">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-5 text-lg font-semibold text-gray-900 dark:text-white">
                            Enter Your Task</label>
                        <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Task" required />
                    </div>

                    <button type="submit" className="text-white mx-5 font-bold   bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center">Add Task</button>

                    <button type="submit" className="text-white font-bold mx-5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-full text-sm px-4 py-2.5 text-center">x</button>

                </form>
            </div>

            {/* Form */}

        </>
    )
}

export default Foreground
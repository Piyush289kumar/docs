import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            cardText: 'Lorem ipsum dolor sit amet consectetur.',
            fileSize: '0.9md',
            optionIcon: true,
            footer: {
                footerText: 'Download Now', isActive: true, bgColor: 'bg-green-600'
            }
        },
        {
            cardText: 'Lorem ipsum dolor sit amet consectetur.',
            fileSize: '0.9md',
            optionIcon: false,
            footer: {
                footerText: 'Upload', isActive: true, bgColor: 'bg-blue-600'
            }
        },
        {
            cardText: 'Lorem ipsum dolor sit amet consectetur.',
            fileSize: '0.9md',
            optionIcon: false,
            footer: {
                footerText: 'Download Now', isActive: false, bgColor: 'bg-green-600'
            }
        },
    ]


    return (
        <>
            <div className='fixed top-0 left-0 z-[3] w-full h-screen py-12 px-16'>
                <div ref={ref} className='mt-11 w-full h-[80vh] flex flex-wrap gap-10'>
                    {
                        data.map((item, idx) => (
                            <Card data={item} key={idx} reference={ref} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Foreground
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
import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
    const [model, setModel] = useState(false);
    const [cardTextInput, setCardTextInput] = useState("");
    const [fileSizeInput, setfileSizeInput] = useState("");
    const [optionIconIsActive, setoptionIconIsActive] = useState(true);
    const [footerText, setfooterText] = useState("Download Now");
    const [footerIsActive, setfooterIsActive] = useState(true);
    const [footerBgColor, setfooterBgColor] = useState("bg-green-600");

    const [data, setData] = useState([
        {
            cardText: "Excel Dashboard Files.",
            fileSize: "650kb",
            optionIcon: true,
            footer: {
                footerText: "Download Now",
                isActive: true,
                bgColor: "bg-green-600",
            },
        },
    ]);

    const handleAddTask = (e) => {
        e.preventDefault();
        setData([
            {
                cardText: cardTextInput,
                fileSize: fileSizeInput,
                optionIcon: optionIconIsActive,
                footer: {
                    footerText: footerText,
                    isActive: footerIsActive,
                    bgColor: footerBgColor,
                },
            },
            ...data,
        ]);

        setModel(false);
        setCardTextInput("");
        setfileSizeInput("");
    };


    if (model) {
        return (
            <>
                {/* Form */}

                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-screen grid place-content-center z-[3]">
                    <form
                        onSubmit={handleAddTask}
                        className="mx-auto bg-zinc-600 w-[650px] text-center py-7 px-3 rounded-2xl"
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-5 text-lg font-semibold text-gray-900 dark:text-white"
                            >
                                Enter Your Task
                            </label>
                            <input
                                type="text"
                                value={cardTextInput}
                                onChange={(e) => setCardTextInput(e.target.value)}
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Enter Your Task"
                            />

                            <input
                                type="text"
                                value={fileSizeInput}
                                onChange={(e) => setfileSizeInput(e.target.value)}
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="File Size"
                            />

                            <select
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                value={optionIconIsActive}
                                onChange={(e) =>
                                    optionIconIsActive && setoptionIconIsActive(e.target.value)
                                }
                            >
                                <option value="true" disabled={true} selected={true}>
                                    Select Options
                                </option>
                                <option value="true">Download Enable</option>
                                <option value="true">Download Disable</option>
                            </select>

                            <select
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                value={footerIsActive}
                                onChange={(e) =>
                                    footerIsActive && setfooterIsActive(e.target.value)
                                }
                            >
                                <option value="true" disabled={true} selected={true}>
                                    Select Footer Options
                                </option>
                                <option value="true">Footer Enable</option>
                                <option value="true">Footer Disable</option>
                            </select>

                            <input
                                type="text"
                                value={footerText}
                                onChange={(e) => setfooterText(e.target.value)}
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Footer Text"
                            />

                            <select
                                className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                value={footerBgColor}
                                onChange={(e) =>
                                    footerBgColor && setfooterBgColor(e.target.value)
                                }
                            >
                                <option value="true" disabled={true} selected={true}>
                                    Select Footer Color Options
                                </option>
                                <option value="bg-blue-600">Blud</option>
                                <option value="bg-green-600">Green</option>
                                <option value="bg-violet-600">Violet</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="text-white mx-5 font-bold   bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Add Task
                        </button>

                        <button
                            onClick={() => setModel(false)}
                            className="text-white font-bold mx-5 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-full text-sm px-4 py-2.5 text-center"
                        >
                            x
                        </button>
                    </form>
                </div>

                {/* Form */}
            </>
        );
    } else {
        return (
            <>
                <div className="fixed top-0 left-0 z-[3] w-full h-screen py-12 px-16">
                    <div className="flex justify-end">
                        <button
                            className="bg-green-400 text-white font-bold px-5 py-3 rounded-xl"
                            onClick={() => setModel(true)}
                        >
                            Add Task
                        </button>
                    </div>
                    <div ref={ref} className="mt-11 w-full h-[80vh] flex flex-wrap">
                        {data.map((item, idx) => (
                            <Card data={item} key={idx} reference={ref} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Foreground;

import React from "react"
import Layout from '../../components/Layout.js';
export default () =>

<Layout >
    <div className="flex flex-col mt-64 p-10 shadow-2xl">
        <h1 className="flex font-bold text-4xl">Now, about your project...</h1>
        {/* htmlForM */}
        <div className="flex flex-row justify-between mt-8 w-full">
            {/* Name & Email & Service */}
            <div className="flex flex-col w-6/12">
                {/* Name & Email */}
                <div className="flex flex-row">
                    <div className="flex flex-col px-2">
                        <span>What is your full name?</span>
                        <input className="border-2 rounded-lg p-2 mt-2" type="text" placeholder="John Smith" />
                    </div>
                    <div className="flex flex-col px-2">
                        <span>What is your email address?</span>
                        <input className="border-2 rounded-lg p-2 mt-2" type="text" placeholder="john.smith@example.com" />
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <span className="flex px-2">What sort of creative work do you need help with? You can read about our services here.</span>
                    {/* Category Grid */}
                    <div className="flex flex-wrap justify-start place-items-center px-2">
                        <div className="flex w-4/12 cursor-pointer">
                            <div className="flex place-items-center border-2 rounded-lg p-2 m-2 w-full">
                                <input className="flex" type="checkbox" id="branding"/>
                                <label className="flex ml-2 select-none cursor-pointer" htmlFor="branding">Branding</label>
                            </div>
                        </div>
                        <div className="flex w-4/12 cursor-pointer">
                            <div className="flex place-items-center border-2 rounded-lg p-2 m-2 w-full">
                                <input className="flex" type="checkbox" id="strategy"/>
                                <label className="flex ml-2 select-none cursor-pointer" htmlFor="strategy">Strategy</label>
                            </div>
                        </div>
                        <div className="flex w-4/12 cursor-pointer">
                            <div className="flex place-items-center border-2 rounded-lg p-2 m-2 w-full">
                                <input className="flex" type="checkbox" id="development"/>
                                <label className="flex ml-2 select-none cursor-pointer" htmlFor="development">Development</label>
                            </div>
                        </div>
                        <div className="flex w-4/12 cursor-pointer">
                            <div className="flex place-items-center border-2 rounded-lg p-2 m-2 w-full">
                                <input className="flex" type="checkbox" id="marketing"/>
                                <label className="flex ml-2 select-none cursor-pointer" htmlFor="marketing">Marketing</label>
                            </div>
                        </div>
                        <div className="flex w-4/12 cursor-pointer">
                            <div className="flex place-items-center border-2 rounded-lg p-2 m-2 c w-full">
                                <input className="flex" type="checkbox" id="seo"/>
                                <label className="flex ml-2 select-none cursor-pointer" htmlFor="seo">SEO</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Description & Attachments */}
            <div className="flex flex-col w-5/12">
                <span className="flex px-2">
                    Tell us what you need help with, the purpose of this project, and problems we're solving.
                </span>
                <span className="flex px-2 mt-8">
                    What is your project all about?
                </span>
                <textarea className="flex p-2 border-2 rounded-lg" />
            </div>
        </div>
    </div>
</Layout>
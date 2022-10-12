import React from 'react';

import ReactMarkdown from 'react-markdown';

import config from '../data/data.json';
import NonSSR from './NonSSR';

const About = () => {
    const { about } = config;
    const [firstInfo, secondInfo] = about.info;

    return (
        <section className={'bg-background py-8'} id='about'>
            <div className={'container max-w-5xl mx-auto m-8'}>
                <h1 className={'w-full my-2 text-5xl font-bold leading-tight text-center text-sky-500'}>
                    {about.title.split(' ').map((word, index) => (
                        <span key={index} className={index % 2 ? 'text-sky-500' : 'text-border'}>{word}{' '}</span>
                    ))}
                </h1>

                <div className={'w-full mb-4'}>
                    <div className={'h-1 mx-auto bg-sky-500 w-1/3 opacity-25 my-0 py-0 rounded-t mb-10'}></div>
                </div>

                <div className={'flex flex-wrap'}>
                    <div className={'w-5/6 sm:w-1/2 p-6 mt-20'}>
                        <h3 className={'text-3xl text-gray-800 font-bold leading-none mb-3'}>
                            {firstInfo?.title}
                        </h3>
                        <p className={'text-gray-600'}>
                            <NonSSR>
                                <ReactMarkdown>
                                    {firstInfo!.description}
                                </ReactMarkdown>
                            </NonSSR>
                        </p>
                    </div>
                    <div className={'w-full sm:w-1/2 p-6'}>
                        <img className={'h-6/6'} src={firstInfo?.img} alt={firstInfo?.title} />
                    </div>
                </div>

                <div className={'flex flex-wrap flex-col-reverse sm:flex-row'}>
                    <div className={'w-full sm:w-1/2 p-6'}>
                        <img className={'h-6/6'} src={secondInfo?.img} alt={secondInfo?.title} />
                    </div>
                    <div className={'w-full sm:w-1/2 p-6 mt-20'}>
                        <div className={'align-middle'}>
                            <h3 className={'text-3xl text-gray-800 font-bold leading-none mb-3'}>
                                {secondInfo?.title}
                            </h3>
                            <p className={'text-gray-600 mb-8'}>
                                <NonSSR>
                                    <ReactMarkdown>
                                        {secondInfo!.description}
                                    </ReactMarkdown>
                                </NonSSR>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
import React, { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import config from '../data/data.json';
import NonSSR from './NonSSR';


const MainHero = () => {
    const { mainHero } = config;
    function getText() {
        return mainHero.titles[Math.floor(Math.random() * mainHero.titles.length)]!;
    }
    const [text, setText] = useState(getText());
    useEffect(() => {
        const interval = setInterval(() => setText(getText()), 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <main className={'mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'}>
            <div className={'sm:text-center lg:text-left'}>
                <h1 className={'text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'}>
                    <NonSSR>
                        <span className={'text-4xl block transition'}>
                            {text}
                        </span>
                    </NonSSR>
                    <span className={'block text-sky-500 xl:inline'}>
                        {mainHero.subtitle}
                    </span>
                </h1>

                <div className={'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'}>
                    <NonSSR>
                        <ReactMarkdown>
                            {mainHero.description}
                        </ReactMarkdown>
                    </NonSSR>
                </div>

                <div className={'mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'}>
                    <div className={'rounded-md shadow'}>
                        <a
                            href={mainHero.primaryAction.href}
                            className="gradient-btn discord relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background md:text-sky-600 hover:text-background bg-background overflow-hidden transition duration-300 ease-in-out"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className="relative z-10">
                                {mainHero.primaryAction.text}
                            </span>
                        </a>
                    </div>
                    <div className={'rounded-md shadow mt-3 sm:mt-0 sm:ml-3'}>
                        <a
                            href={mainHero.secondaryAction.href}
                            className="gradient-btn instagram relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background md:text-sky-600 hover:text-background bg-background overflow-hidden transition duration-300 ease-in-out"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className="relative z-10">
                                {mainHero.secondaryAction.text}
                            </span>
                        </a>
                    </div>
                    <div className={'rounded-md shadow mt-3 sm:mt-0 sm:ml-3'}>
                        <a
                            href={mainHero.tertiaryAction.href}
                            className="gradient-btn classroom relative w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background md:text-sky-600 hover:text-background bg-background overflow-hidden transition duration-300 ease-in-out"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className="relative z-10">
                                {mainHero.tertiaryAction.text}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainHero;
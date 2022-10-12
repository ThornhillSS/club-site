import React from 'react';

import ReactMarkdown from 'react-markdown';

import config from '../data/data.json';
import NonSSR from './NonSSR';


const MainHero = () => {
    const { mainHero } = config;

    return (
        <main className={'mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'}>
            <div className={'sm:text-center lg:text-left'}>
                <h1 className={'text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'}>
                    <NonSSR>
                        <span className={'text-4xl block'}>
                            {config.mainHero.titles[Math.floor(Math.random() * config.mainHero.titles.length)]}
                        </span>{' '}
                    </NonSSR>
                    <span className={'block text-sky-500 xl:inline'}>
                        {mainHero.subtitle}
                    </span>
                </h1>

                <p className={'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'}>
                    <NonSSR>
                        <ReactMarkdown>
                            {mainHero.description}
                        </ReactMarkdown>
                    </NonSSR>
                </p>

                <div className={'mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'}>
                    <div className={'rounded-md shadow'}>
                        <a href={mainHero.primaryAction.href} className={'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-sky-500 hover:bg-border hover:text-sky-500 md:py-4 md:text-lg md:px-10'} target='_blank' rel='noreferrer'>
                            {mainHero.primaryAction.text}
                        </a>
                    </div>
                    <div className={'mt-3 sm:mt-0 sm:ml-3'}>
                        <a href={mainHero.secondaryAction.href} className={'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-sky-600 bg-background hover:bg-border hover:text-sky-600 md:py-4 md:text-lg md:px-10'} target='_blank' rel='noreferrer'>
                            {mainHero.secondaryAction.text}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainHero;
import React from 'react';

import config from '../data/data.json';

const Execs = () => {
    const { execs } = config;
    const { details, title } = execs;
    const [firstExec, secondExec, thirdExec, fourthExec] = details;

    return (
        <section className={'bg-background py-8'} id="execs">
            <div className={'container mx-auto px-2 pt-2 pb-1 text-primary'}>
                <h1 className={'w-full my-2 text-5xl font-bold leading-tight text-center text-primary'}>
                    {title}
                </h1>

                <div className={'w-full mb-4'}>
                    <div className={'h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t'}></div>
                </div>

                <div className={'flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4'}>
                    <div className={'flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4'}>
                        <div className={'flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow'}>
                            <div className={'p-8 text-3xl font-bold text-center border-b-4'}>
                                {firstExec?.name}
                                <div className={'p-2 text-sm font-bold text-center'}>
                                    {firstExec?.position}
                                </div>
                            </div>

                            <ul className={'w-full text-center text-sm'}>
                                {firstExec?.languages.map((language) => (
                                    <li className={'border-b py-4'} key={`${firstExec.name}-${language}`}>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={'flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6'}>
                            <div className={'w-full pt-6 text-3xl text-gray-600 font-bold text-center'}>
                                {firstExec?.grade}
                            </div>
                        </div>
                    </div>

                    <div className={'flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10'}>
                        <div className={'flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow'}>
                            <div className={'w-full p-8 text-3xl font-bold text-center'}>
                                {secondExec?.name}
                                <div className={'p-2 text-sm font-bold text-center'}>
                                    {secondExec?.position}
                                </div>
                            </div>

                            <div className={'h-1 w-full bg-primary my-0 py-0 rounded-t'}></div>

                            <ul className={'w-full text-center text-base font-bold'}>
                                {secondExec?.languages.map((language) => (
                                    <li className={'border-b py-4'} key={`${secondExec?.name}-${language}`}>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={'flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6'}>
                            <div className={'w-full pt-6 text-4xl font-bold text-center'}>
                                {secondExec?.grade}
                            </div>
                        </div>
                    </div>

                    <div className={'flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4'}>
                        <div className={'flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow'}>
                            <div className={'p-8 text-3xl font-bold text-center border-b-4'}>
                                {thirdExec?.name}
                                <div className={'p-2 text-sm font-bold text-center'}>
                                    {thirdExec?.position}
                                </div>
                            </div>

                            <ul className={'w-full text-center text-sm'}>
                                {thirdExec?.languages.map((language) => (
                                    <li className={'border-b py-4'} key={`${thirdExec?.name}-${language}`}>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={'flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6'}>
                            <div className={'w-full pt-6 text-3xl text-gray-600 font-bold text-center'}>
                                {thirdExec?.grade}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col sm:flex-row justify-center my-12 sm:my-4'}>
                    <div className={'flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background'}>
                        <div className={'flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow'}>
                            <div className={'p-8 text-3xl font-bold text-center border-b-4'}>
                                {fourthExec?.name}
                                <div className={'p-2 text-sm font-bold text-center'}>
                                    {fourthExec?.position}
                                </div>
                            </div>

                            <ul className={'w-full text-center text-sm'}>
                                {fourthExec?.languages.map((language) => (
                                    <li className={'border-b py-4'} key={`${fourthExec.name}-${language}`}>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={'flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6'}>
                            <div className={'w-full pt-6 text-3xl text-gray-600 font-bold text-center'}>
                                {fourthExec?.grade}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Execs;
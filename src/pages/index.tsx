import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Execs from '../components/Execs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Languages from '../components/Languages';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';

const App = () => {
    return (
        <div className={'bg-background grid gap-y-16 overflow-hidden'}>
            <div className={'relative bg-background'}>
                <div className="max-w-7xl mx-auto">
                    <div className={'relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'}>
                        <Header />
                        <MainHero />
                    </div>
                </div>

                <MainHeroImage />
            </div>

            <Canvas />
            <LazyShow>
                <>
                    <About />
                    <Canvas />
                </>
            </LazyShow>
            <LazyShow>
                <>
                    <Languages />
                    <Canvas />
                </>
            </LazyShow>
            <LazyShow>
                <Execs />
            </LazyShow>
            <LazyShow>
                <>
                    <Canvas />
                    <Footer />
                </>
            </LazyShow>
            <Analytics />
        </div>
    );
};

export default App;
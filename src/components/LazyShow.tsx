import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

function useOnScreen(ref: MutableRefObject<HTMLDivElement | null>, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let currentRef: HTMLDivElement;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
                setIntersecting(entry?.isIntersecting);
            }
        }, {
            rootMargin,
        });

        if (ref && ref?.current) {
            currentRef = ref.current;
            observer.observe(currentRef);
        }

        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyShow = ({ children }: { children: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> }) => {
    const controls = useAnimation();
    const rootRef = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(rootRef);

    useEffect(() => {
        if (onScreen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                },
            });
        }
    }, [onScreen, controls]);

    return (
        <motion.div className={'lazy-div'} ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls}>
            {children}
        </motion.div>
    );
};

export default LazyShow;
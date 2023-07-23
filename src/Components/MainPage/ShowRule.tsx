
import { useRef } from 'react';
import ShowRuleImage from '../../assets/images/mainPage.png';
import ViteLogo from '../../assets/images/vite.jpeg';
import TsLogo from '../../assets/images/ts.png';
import SassLogo from '../../assets/images/sass.png';
import GitLogo from '../../assets/images/git.png';
import NpmLogo from '../../assets/images/npm.png';
import FormikLogo from '../../assets/images/formik.png';
import AxiosLogo from '../../assets/images/axios.png';
import './ShowRule.scss';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';

function ShowRule() {

    const headerRef = useRef(null);

    // const { scrollYProgress } = useViewportScroll();
    const { scrollYProgress } = useScroll({ target: headerRef });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
    const x = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );

    return (

        <section className='showRule-container' ref={headerRef} >
            <motion.div

                // style={{ opacity, scale }}
                className='shwoRule-header'>
                <h2
                >آموزش جامع و کاربردی <br />جاوااسکریپت</h2>
            </motion.div>

            <div className='showRule-wrapper'>

                <motion.div
                    style={{ scale: scaleImage, x: x }}
                    className='showRule-img'>
                    <img src={ShowRuleImage} alt="showRule" />
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, }}
                    // animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}

                    className="showRule-info">
                    <h2>
                        شما بر روی پروژه های تجاری کار خواهید کرد
                    </h2>

                    <motion.div
                        className="info-logo">

                        <img src={ViteLogo} alt="" />
                        <img src={TsLogo} alt="" />
                        <img src={SassLogo} alt="" />
                        <img src={GitLogo} alt="" />
                        <img src={NpmLogo} alt="" />
                        <img src={FormikLogo} alt="" />
                        <img src={AxiosLogo} alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </section>

    )
}

export default ShowRule
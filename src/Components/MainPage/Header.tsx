import { motion } from 'framer-motion';
import Animate from './animate';
import './Header.scss';

function Header() {

    const courseLogos = [
        // { id: 1, imagePath: '/src/assets/images/js.png' },
        { id: 2, imagePath: '/src/assets/images/vue.png' },
        { id: 3, imagePath: '/src/assets/images/react.png' },
        { id: 4, imagePath: '/src/assets/images/node.png' },
        { id: 5, imagePath: '/src/assets/images/css.png' },
        { id: 6, imagePath: '/src/assets/images/html.png' },
    ]

    return (
        <div className='head-container'>
            <div className='right'>
                <motion.h1
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >آموزش کامل جاوااسکریپت و تمام کتابخانه های آن</motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >کار بر روی پروژه های تجاری</motion.h2>

                <div className='course-logo'>
                    {
                        courseLogos.map(item => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                style={{ backgroundImage: `url(${item.imagePath})` }}
                                className='course'>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div className='left'>
                <div className='js-logo'></div>
                <Animate/>
            </div>
        </div>
    )
}

export default Header
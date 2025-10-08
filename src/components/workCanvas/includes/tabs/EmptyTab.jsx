import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function EmptyTab()
{
    const { t } = useTranslation()

    const smiles = [
        ['>_0', 200, 400],
        ['>_<', 100, 300],
        ['>o<', 500, 1000],
        ['>w<', 1000, 3000],
        ['>_>', 200, 500],
        ['>.<', 300, 700],
        ['^-^', 1000, 4000],
        ['UwU', 3000, 6000]
    ];
    const [smile, setSmile] = useState('>_0')
    const timeoutRef = useRef(null)

    const animate = () => {
        const randomSmile = smiles[Math.floor(Math.random() * smiles.length)];
        setSmile(randomSmile[0]);
        const delay = Math.random() * (randomSmile[2]-randomSmile[1]) + randomSmile[1]
        timeoutRef.current = setTimeout(animate, delay)
    }

    useEffect(() => {
        animate()

        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className='emptyTabContainer'>
            <p>{t('hereStillEmpty')}...
                <br />
                <motion.span
                    key={smile}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                >
                    {smile}
                </motion.span>
            </p>
            <button>{t('createNewNote')}</button>
        </div>
    )
}
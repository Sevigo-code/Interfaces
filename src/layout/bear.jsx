import { useLocation } from 'react-router-dom';
import bear from "../assets/Images/bear.png";
import { motion } from 'framer-motion';

const Bear = ({children}) => {

    const location = useLocation();
    console.log(location)
    return(
        <>
            <motion.img 
                className="imageBear" 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src={bear}
            />
            <div>
                {children}
            </div>
        </>
    )
};

export default Bear;
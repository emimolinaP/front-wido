import { Link } from 'react-router'
import './navbar.css'

import { useEffect, useState } from 'react'

const Navbar = () => {
   
    const [showNav, setShowNav] = useState(true)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false)
            } else {
                setShowNav(true)
            }
            lastScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    
    return (
        <div
            className={` h-52 md: wido-nav sticky top-0 z-50 backdrop-blur-md transition-transform duration-300 ${
                showNav ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="border-b  py-4 flex justify-center border-[#331947]">
                <Link
                    to="/"
                    className="hover:opacity-80 transition duration-300"
                >
                    <img
                        src="./images/logo.png"
                        alt="Wido Rugs"
                        className="h-28  md:wido-img"
                    />
                </Link>
            </div>

            <div className="flex flex-col md:justify-start md:items-start gap-4 botones-wido">
                <Link
                    to="/rugs"
                    className="btn btn-login btn-ghost px-6 text-[#331947]"
                >
                    Pedir mi alfombra
                </Link>

                </div>
               
               
        </div>
    )
}

export default Navbar

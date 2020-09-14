import React from "react";
import Logo from "../assets/icons/logo.svg";
import Menu from "../assets/icons/menu.svg";
import { Link } from 'gatsby';
class Header extends React.Component {
    isMenuOpen = false;
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        }
    }

    toggleMenu(){
        this.setState({isMenuOpen: !this.state.isMenuOpen})
        console.log(this.state);
    }

    componentDidMount() {
        window.addEventListener('scroll',(e) => {
            const nav = document.querySelector('.nav');
            var sticky = nav.offsetTop;
            if (window.pageYOffset>sticky) {
                nav.classList.add('nav-shadow');
            } else {
                nav.classList.remove('nav-shadow')
            }
        })
    }

    

    render() {
        return (
            <div className="float-left overflow-hidden fixed top-0 left-0 w-full bg-white nav px-10" style={{height: (this.state.isMenuOpen) ? '388px' : '100px'}}>
                <div className="flex flex-col">
                    <div className="flex justify-between align-center">
                        <Link to="/" className="flex">
                            <Logo className="max-w-xs"/>
                        </Link>
                        <div className="menu">
                            {/* HAMBURGER */}
                            <nav className="flex lg:hidden h-full place-items-center">
                                <span className="d-flex place-items-center cursor-pointer" onClick={() => this.toggleMenu()}><Menu className="flex stroke-current text-black"/></span>
                            </nav>
                            {/* NORMAL */}
                            <nav className="hidden lg:flex h-full place-items-center">
                                <a className="flex px-5 py-3" href="">Solutions</a>
                                <a className="flex px-5 py-3" href="">Case Studies</a>
                                <a className="flex px-5 py-3" href="">About</a>
                                <Link className="flex px-5 py-3 border-2 border-solid border-black rounded-full hover:bg-black hover:text-white duration-300" to="/contact">Let's create something</Link>
                            </nav>
                        </div>
                    </div>
                    <div className={`${(this.state.isMenuOpen) ? 'flex lg:hidden' : 'hidden'} w-full bg-gray-100 rounded shadow transition duration-300 ease-in absolute left-0`} style={{top: '100px'}}>
                        <ul className="flex flex-col place-items-center w-full">
                            <li><a className="flex px-5 py-3 my-3" href="">Solutions</a></li>
                            <li><a className="flex px-5 py-3 my-3" href="">Case Studies</a></li>
                            <li><a className="flex px-5 py-3 my-3" href="">About</a></li>
                            <li className="px-5"><Link className="flex px-5 py-3 my-3 border-2 border-solid border-black rounded-full hover:bg-black hover:text-white duration-300" to="/contact">Let's create something</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
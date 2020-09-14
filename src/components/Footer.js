import React from "react";
import Logo from "../assets/icons/logo.svg";
import Menu from "../assets/icons/menu.svg";
import { Link } from 'gatsby';
class Footer extends React.Component {
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
            <div className="flex w-full justify-center">
                Footer
            </div>
        )
    }
}

export default Header;
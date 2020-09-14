import React from "react"
import Header from './header'
import Footer from './Footer'
export default function Layout({children}) {
    return(
        <div className="mx-auto px-10 max-w-6xl">
            <Header></Header>
            <div style={{marginTop: '100px'}}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}
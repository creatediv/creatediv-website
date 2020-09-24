import React, { Fragment } from "react"
import Header from './Header'
import Footer from './Footer'
import SEO from './common/SEO';
export default function Layout({children}) {
    return (
      <Fragment>
        <SEO />
        <div className="mx-auto px-10 max-w-6xl">
          <Header></Header>
          <div class="max-w-6xl">{children}</div>
          {/* <Footer></Footer> */}
        </div>
      </Fragment>
    )
}
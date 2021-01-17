import React from "react"
//import { MDXProvider } from "@mdx-js/react"
//import { Chart, Pullquote } from "./ui"
//import { Message } from "theme-ui"

//const shortcodes = { Chart, Pullquote, Message }

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
                <Footer />
        </div>
    )
}

export default Layout
import styles from "./styles.module.scss"
import { Children, cloneElement } from "react";

import Footer from "@layout/footer"

export default function Aside({children}){

    const stylesChildren = {
        backgroundColor:"var(--secondary-color)",
        borderRadius: "var(--border-radius)",
        marginBottom: "1rem",
        padding:"1rem"
    };

    if(children.type != "div" ) {
        return (
        
            <div className={styles.layout}>
                <div className={styles.container}>                    
                    <aside>{Children.map(children.props.children, (child) => cloneElement(child, {style: stylesChildren})) }</aside>
                    <Footer/>
                 </div>
            </div>
        )
    } else {
        return (
            <div className={styles.layout}>
                <div className={styles.container}>    
                    <aside>{Children.map(children, (child) => cloneElement(child, {style: stylesChildren})) }</aside>
                    <Footer/>
                 </div>
            </div>
        )
    }

}
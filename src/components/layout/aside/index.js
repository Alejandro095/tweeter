import styles from "./styles.module.scss"
import { Children, cloneElement } from "react";

import Footer from "@layout/footer"

export default function Aside({children}){

    const stylesChildren = {
        backgroundColor:"var(--secondary-color)",
        borderRadius: "var(--border-radius)",
        marginBottom: "1.5rem"
    };

    if( typeof children.type == "symbol" ) {
        return (
        
            <div className={styles.layout}>
                <div className={styles.container}>                    
                    <aside>{Children.map(children.props.children, (child) => cloneElement(child, {style: stylesChildren})) }</aside>
                    <Footer/>
                 </div>
            </div>
        )
    } else if (typeof children.type == "string") {
        return (
            <div className={styles.layout}>
                <div className={styles.container}>    
                    <aside>{Children.map(children, (child) => cloneElement(child, {style: stylesChildren})) }</aside>
                    <Footer/>
                 </div>
            </div>
        )
    } else {
        const AsideRender = children.type;
        return (
            <div className={styles.layout}>
                <div className={styles.container}>    
                    <aside> <AsideRender {...children.props} /> </aside>
                    <Footer/>
                 </div>
            </div>
        )
    }

}
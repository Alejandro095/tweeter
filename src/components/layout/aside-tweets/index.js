import styles from "./styles.module.scss"
import Aside from "@layout/aside"

export default function AsideTweets({ aside, tweets, comment, reverse }){

    return (
        <div className={reverse ? styles.containerReverse : styles.container}>

        <Aside>
            {aside()}
        </Aside>

        <div className={ reverse ? styles.tweetsReverse : styles.tweets }>
            
            {comment ? <section>{comment()}</section> : "" } 

            <div>
                {tweets()}
            </div>
        </div>

    </div>
    )
}
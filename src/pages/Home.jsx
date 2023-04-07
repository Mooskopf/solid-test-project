import styles from "../styles/home.module.scss"

import Aragorn from "../assets/Aragorn.jpg"

export default function Home() {

    return (
        <div class={styles.home}>
            <div class={styles.image_container}>
                <img src={Aragorn} alt="Aragorn" />
            </div>
        </div>
    )
}
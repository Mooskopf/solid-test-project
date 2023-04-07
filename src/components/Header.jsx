import styles from "../styles/header.module.scss"
import { Link } from "@solidjs/router"

export default function Header() {

    return (
        <div class={styles.header}>
            <div class={styles.header_content}>
                <div class={styles.links}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/quests">Quests</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
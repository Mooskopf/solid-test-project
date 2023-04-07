import styles from "../styles/footer.module.scss"

export default function Footer() {

    return (
        <div class={styles.footer}>
            <div class={styles.footer_content}>
                <div class={styles.footer_top}>
                    <div class={styles.awesome}>This quests are awesome!</div>
                    <div class={styles.sick}>Aragorn is coming for ya!</div>
                </div>
                <div class={styles.copyright}>
                    Mooskopf 2023 (Testing <a href="https://www.solidjs.com/" target="__noopener" >SolidJs</a>)
                </div>
            </div>
        </div>
    );
}
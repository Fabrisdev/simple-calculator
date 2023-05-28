import styles from './button.module.css'

type Props = {
    onClick: () => void,
    content: string
}

export default function SpecialButton({ content, onClick }: Props){
    return(
        <div className={styles.button} onClick={onClick}>
            { content }
        </div>
    )
}
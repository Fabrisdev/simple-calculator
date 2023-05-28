import { useContext } from "react"
import styles from './button.module.css'
import { ExpressionContext } from "./page"

type Props = {
    content: string
}

export default function Button({ content }: Props){
    const setExpression = useContext(ExpressionContext)

    function handleClick(){
        setExpression(prevExpression => prevExpression + content)
    }

    return(
        <div className={styles.button} onClick={handleClick}>
            { content }
        </div>
    )
}
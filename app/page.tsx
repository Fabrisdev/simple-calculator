"use client"

import { Dispatch, SetStateAction, createContext, useState } from 'react'
import Button from './Button'
import SpecialButton from './SpecialButton'
import styles from './page.module.css'
import { Parser } from 'expr-eval'

export const ExpressionContext = createContext<Dispatch<SetStateAction<string>>>(() => {})

export default function Home() {
    const [ result, setResult ] = useState("0")
    const [ expression, setExpression ] = useState("")

    function handleEquals(){
        try{
            const result = Parser.evaluate(expression || "0").toString()
            if(result === "Infinity") return setResult("Math ERROR")
            setResult(result)
        }catch{
            setResult("Syntax ERROR")
        }
    }

    function handleDel(){
        setExpression(prevExpression => prevExpression.slice(0, -1))
    }

    function handleAc(){
        setExpression("")
    }

    return (
        <div className={styles.page}>
            <div className={styles.calculator}>
                <div className={styles.grid}>
                <p className={styles.expression}>{ expression || "0" }</p>
                    <p className={styles.resultBox}>{ result }</p>
                    <ExpressionContext.Provider value={setExpression}>
                        <Button content='7' />
                        <Button content='8' />
                        <Button content='9' />
                        <SpecialButton content='DEL' onClick={handleDel}/>
                        <SpecialButton content='AC' onClick={handleAc}/>
                        <Button content='4' />
                        <Button content='5' />
                        <Button content='6' />
                        <Button content='*' />
                        <Button content='/' />
                        <Button content='1' />
                        <Button content='2' />
                        <Button content='3' />
                        <Button content='+' />
                        <Button content='-' />
                        <Button content='0' />
                        <Button content='.' />
                    </ExpressionContext.Provider>
                    <SpecialButton content='=' onClick={handleEquals} />
                </div>
            </div>
        </div>
    )
}

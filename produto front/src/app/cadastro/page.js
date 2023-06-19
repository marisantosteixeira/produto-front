'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
       
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }


    return (
        <div className={styles.main}>
            <fieldset className={styles.field}><legend className={styles.ps}>PREENCHA OS DADOS ABAIXO</legend>
                <form className={styles.form} onSubmit={cadastrar}>

                    <input className={styles.inputs} type="text" placeholder='Titulo:'
                    nome="titulo" onChange={e => setTitulo(e.target.value)}/>
                    <br/>
                    <input className={styles.inputs} type="date" placeholder='Data de Cadastro:' nome="data_cadastro"
                    onChange={e => setData_cadastro(e.target.value)}/>
                    <br/>
                    <input className={styles.inputs} type="number"placeholder='Preço:' nome=""
                    onChange={e => setPreco(e.target.value)}/>
                    <br/>
                    <input className={styles.inputs} type="text" placeholder='Descrição:' nome="descricao"
                    onChange={e => setDescricao(e.target.value)}/>
                    <br/>
                    <input className={styles.inputs} type="text" placeholder='Imagem:'nome="imagem"
                    onChange={e => setImagem(e.target.value)}/>
                    <br/>
                    <button type='submit' className={styles.botao}>Cadastrar</button>
                    <a href='/' className={styles.voltar}>Voltar</a>
                </form>
            </fieldset>
        </div>
       
    );
}

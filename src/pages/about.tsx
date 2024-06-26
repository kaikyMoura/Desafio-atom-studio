import styles from '../styles/about.module.css'


const About = () => {
    return (
        <>
            <div className={`sm: md:grid grid-cols-2 ${styles.container}`}>
                <h2 className={`top-[160px] text-4xl ${styles.title}`}>Sobre nós</h2>

                <div className='-ml-12'>
                    <h3 className={`top-[9.50em] text-3xl ${styles.title}`}>- Nossa missão</h3>
                    <p className={`top-[13.50em] ${styles.about}`}>
                        O The Blog tem como objetivo fornecer um conteúdo rico e
                        relevante para ajudar os leitores a se destacarem e a progredirem em sua carreira na área de tecnologia.
                    </p>
                </div>

                <div>
                    <h3 className={`text-3xl top-[14px] ${styles.title}`}>- Nossos valores</h3>
                    <p className={`${styles.about}`}>
                        Nós acreditamos que o conhecimento é a chave para o sucesso no mundo da tecnologia.
                        Seja você um iniciante buscando orientação ou um profissional experiente
                        querendo se atualizar com as últimas tendências,
                        The Blog é o seu companheiro fiel nessa jornada de crescimento contínuo.
                    </p>
                </div>
                
                <div className={`bottom-0 ${styles.retangle}`}></div>
            </div>
        </>
    )
}

export default About;
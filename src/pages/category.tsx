import styles from '../styles/category.module.css'


const Category = () => {
    return (
        <>
            <div className={`${styles.container}`}>
                <h2 className={`top-[172px] text-4xl ${styles.title}`}>Categorias</h2>
                <ul className={`-mt-10 grid grid-cols-2 gap-1 ${styles.categories}`}>
                    <li className={`text-3xl top-[172px] ${styles.title}`}>- Programação</li>
                    <li className={`text-3xl top-[172px] ${styles.title}`}>- IA e Machine Learning</li>
                    <li className={`-mt-16 text-3xl top-[172px] ${styles.title}`}>- Desenvolvimento Web</li>
                    <li className={`-mt-16 text-3xl top-[172px] ${styles.title}`}>- Mobile</li>

                </ul>
            </div>
            <div className={`${styles.retangle}`}></div>
            <div className={`${styles.containerSecond}`}>
                <div className="col-span-1">
                    <h2 className={`text-2xl top-[25.5em] ${styles.title}`}>Outros Artigos</h2>
                    <ul className={`top-[27.75em] gap-2 ${styles.firstParagraph}`}>
                        <li><a href='https://www.infoq.com/br/articles/real-time-api-kafka/'>- APIs em tempo real no contexto do Apache Kafka</a></li>
                        <li><a href='https://www.infoq.com/br/articles/realtime-event-driven-ecosystem/'>- O desafio de construir um ecossistema orientado a eventos de tempo real que seja confiável</a></li>
                        <li><a href='https://www.infoq.com/br/articles/past-present-future-api-gateways/'>- O passado, presente e futuro das API Gateways</a></li>
                        <li><a href='https://www.infoq.com/br/articles/openapi/'>- Usando a OpenAPI para criar APIs inteligentes que ajudam os desenvolvedores</a></li>
                        <li><a href=''>- ...</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
            </div>
        </>
    )
}

export default Category;
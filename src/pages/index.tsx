import Image from 'next/image';
import styles from '../styles/index.module.css'
import CodeImg from '../../public/codeGradient.png'
import NotebookImg from '../../public/notebook.png'
import SmartPhoneImg from '../../public/smarthphoneAndHand.png'
import DeveloperImg from '../../public/developerImg.png'
import ScreenImg from '../../public/screenImg.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <>
        {/* Seção que "abriga" o primeiro post*/}
            <div className={` flex ${styles.container}`}>
                <section>
                    <h2 className={`${styles.firstTitle}`}>
                        Veja o guia definitivo para conquistar seus objetivos
                        <br />
                        como DEV em 2024
                    </h2>
                    <p className={`${styles.firstParagraph}`}>Aprenda o caminho definitivo para atingir seus objetivos como desenvolvedor em 2022...</p>

                    <button>
                        <p className='mt-56 ml-32 text-customPurpleHeart'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                            <FontAwesomeIcon icon={faArrowRight} /></i></p>
                    </button>

                    <div className={`${styles.codeImg}`}>
                        <Image alt='' src={CodeImg} />
                    </div>
                </section>
            </div>

            <div className={`${styles.retangle}`}></div>

            <div className={`${styles.containerSecond}`}>
                <section className={`${styles.postOne}`}>

                    <div className={`${styles.notebookImg}`}>
                        <Image alt='' src={NotebookImg} />
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>
                        <h2 className='text-3xl font-bold leading-9 text-left mt-4' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            Começando no ReactJS em 2024
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-6' style={{}}>Com o novo ano vem novas oportunidades, e mergulhar no mundo do ReactJS pode ser a
                            chave para abrir portas em sua carreira. Em 2024, as ferramentas e as práticas recomendadas evoluíram ainda mais,
                            tornando mais fácil para os iniciantes criarem aplicações dinâmicas e responsivas...
                        </p>
                        <button>
                            <p className='mt-8 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>
                </section>

                {/* Seção que "abriga" os posts laterais */}
                <section className={`-mt-[28.80em] ${styles.sidePosts}`}>
                    <div>
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>

                        <h2 className='text-3xl font-bold leading-9 text-left mt-2' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            Conheça as principais técnicas para conseguir uma vaga internacional em programação
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-4' style={{}}>
                            Descubra as estratégias essenciais para conquistar uma vaga de programação no exterior. Desde a preparação do currículo
                            até o domínio de entrevistas técnicas, essas dicas podem abrir portas para oportunidades internacionais...
                        </p>
                        <button>
                            <p className='mt-4 mb-2 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>
                    <div>
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>

                        <h2 className='text-3xl font-bold leading-9 text-left mt-2' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            Veja a evolução do Front-end na prática
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-4' style={{}}>
                            Descubra as estratégias essenciais para conquistar uma vaga de programação no exterior. Desde a preparação do currículo
                            até o domínio de entrevistas técnicas, essas dicas podem abrir portas para oportunidades internacionais...
                        </p>
                        <button>
                            <p className='mt-4 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>

                </section>

                {/* Seção que "abriga" os posts que ficam no final da página */}
                <section className={`flex -mt-44 ${styles.bottomPosts}`}>
                    <div className={`${styles.developerImg}`}>
                        <Image alt='' src={DeveloperImg} />
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>

                        <h2 className='text-3xl font-bold leading-9 text-left mt-4' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            10 dicas para conseguir a vaga desejada
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-6 mb-6' style={{}}>
                            Descubra como destacar suas habilidades,
                            aprimorar seu currículo e brilhar nas entrevistas com nossas 10 dicas essenciais...
                        </p>
                        <button>
                            <p className='mt-1.0 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>

                    <div className={`-ml-[24em] ${styles.screenImg}`}>
                        <Image alt='' src={ScreenImg} />
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>

                        <h2 className='text-3xl font-bold leading-9 text-left mt-4' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            Deixe seu código mais semântico com essas dicas
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-6 mb-6' style={{}}>
                            Explore como pequenos ajustes semânticos podem fazer uma grande diferença na forma como você desenvolve para a webs...
                        </p>
                        <button>
                            <p className='mt-1.0 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>

                    <div className={`-ml-[24em] ${styles.smartPhoneImg}`}>
                        <Image alt='' src={SmartPhoneImg} />
                        <p className='text-base font-normal leading-tight text-left mt-4'>Janeiro 04, 2024</p>

                        <h2 className='text-3xl font-bold leading-9 text-left mt-4' style={{ color: '#290742', fontFamily: 'Roboto' }}>
                            Use essas dicas nas suas aplicações mobile
                        </h2>
                        <p className='text-base font-normal leading-tight text-left mt-6 mb-6' style={{}}>
                            Aprenda como otimizações de performance e design intuitivo podem transformar suas aplicações móveis, encantando e retendo usuários...
                        </p>
                        <button>
                            <p className='mt-1.0 mb-4 text-customPurple'>Veja mais <i className={`ml-2 ${styles.arrowRight}`}>
                                <FontAwesomeIcon icon={faArrowRight} /></i></p>
                        </button>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Home;
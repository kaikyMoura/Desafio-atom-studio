import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/contact.module.css'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    return (
        <>
            <div className={`${styles.container}`}>
                <div className={`mt-[10em] bg-white p-8 rounded-lg shadow-lg ${styles.card}`}>
                    <h2 className="text-2xl font-bold mb-6 text-customPurple">Entre em Contato Conosco</h2>
                    <ul>
                        <li className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 mr-2" />
                            <span className="text-customPurple">Rua tão tão distante, 888 - Manaus, AM</span>
                        </li>
                        <li className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-2" />
                            <span className="text-customPurple">+55 11 0000000000</span>
                        </li>
                        <li className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-2" />
                            <span className="text-customPurple">contato@theblog.com</span>
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 transition duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 transition duration-300" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 hover:text-blue-900 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
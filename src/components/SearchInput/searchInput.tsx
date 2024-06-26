import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './searchInput.module.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

const SearchInput = () => {
    return (
        <>
            <div className={`absolute ${styles.container}`}>
                <input className={`focus:outline-none ${styles.input}`} placeholder="Buscar" />
                <button className={styles.button}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} color='#F2E7FA' />
                </button>
            </div>
        </>
    )
}

export default SearchInput
import Menu from '../Menu/menu'
import SearchInput from '../SearchInput/searchInput'
import styles from './layout.module.css'
import Logo from '../../../public/logo.png'
import Image from 'next/image'

interface LayoutProps {
    children: any
}

const Layout = ({ children }: LayoutProps) => {

    const navegacao = [
        { nome: "Home", link: "/" }, { nome: "Sobre", link: "/about" }, { nome: "Categorias", link: "/category" },
        { nome: "Contato", link: "/contact" }
    ]

    return (
        <>
            <div>
                <Image className={`${styles.headerLogo}`} src={Logo} alt='header-log' />
            </div>
            <div className={`fixed mt-5 container mx-auto p-4 ${styles.layout}`}>
                <header className={`flex justify-between items-center ${styles.header}`}>
                    <Menu navegacao={navegacao} />
                    <SearchInput />
                </header>
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout
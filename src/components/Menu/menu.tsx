import Link from "next/link"
import styles from './menu.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

interface MenuProps {
    navegacao: { nome: string, link: string }[]
}

const Menu = ({ navegacao }: MenuProps) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const router = useRouter();

    useEffect(() => {

        {/* Metodo que lida com a funcionalidade relacionada ao scroll da tela */}
        const handleScroll = () => {

            const scrollPosition = window.scrollY;
            const whiteSectionPosition = 498;

            // Condicional que checa que se a posição do scroll está na 'white section'
            if (scrollPosition >= whiteSectionPosition) {
                setIsScrolled(true); // Se for true ele altera a cor do texto do menu
            }
            else {
                setIsScrolled(false)
            }
        };

        // Adiciona o event listener para monitorar o scroll
        window.addEventListener('scroll', handleScroll);

        // Remove o event listener que estaca monitorando o scroll
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router.pathname]);

    return (<>
        <nav className={`flex justify-center ${styles.menu} ${isScrolled ? 'navbar-white' : ''}`}>
            <ul className="flex space-x-4">
                {navegacao.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <p style={{ color: isScrolled ? '#170027' : '#fff', fontWeight: router.pathname === item.link ? 'bold' : 'normal', cursor: 'pointer' }}>
                                {item.nome}
                            </p>
                        </Link>
                        {/* A partir do nome da rota o retangulo aparecera a baixo do item correspondente */}
                        {router.pathname === item.link && (
                            <div className={`relative ${styles.retangle}`}></div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    </>)
}

export default Menu
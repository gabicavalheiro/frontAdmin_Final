import 'bootstrap/dist/css/bootstrap.css'
import Titulo from '@/components/Titulo'
import styles from './layout.module.css'

export const metadata = {
  title: 'Controle de Filmes',
  description: 'Sistema de Controle de Filmes e Cinemas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">  
    <head>
      <link rel="shortcut icon" href="../cinema.png" type="image/x-icon" />  
    </head>    
      <body>
        <section className={styles.section}>
        <Titulo />
        {children}
        </section>
      </body>
    </html>
  )
}

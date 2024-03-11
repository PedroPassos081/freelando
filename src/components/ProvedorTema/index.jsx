import { ThemeProvider } from '@emotion/react'

const tema = {
    fontFamily:
        "'Montserrat', sans-serif",
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        }
    },
    espacamentos: {
        xs: '8px',
        s: '16px',
        l: '32px',
    }
}

const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}

export default ProvedorTema
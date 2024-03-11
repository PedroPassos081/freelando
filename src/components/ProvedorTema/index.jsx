import { ThemeProvider } from '@emotion/react'

const tema = {
    fontFamily:
        "'Montserrat', sans-serif",
    cores: {
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a: '',
            b: '',
            c: ''
        },
        secundarias: {
            a: '',
            b: '',
            c: ''
        },
        neutras: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        }
    },
    espacamentos: {
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
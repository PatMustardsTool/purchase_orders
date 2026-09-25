import '@/index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {enGB} from 'date-fns/locale'
import {App} from '@/App'
import {theme} from '@/config/theme'
import {ProviderPageForm} from '@/components/ProviderPageForm'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider adapterLocale={enGB} dateAdapter={AdapterDateFns}>
                    <BrowserRouter>
                        <ProviderPageForm>
                            <App/>
                        </ProviderPageForm>
                    </BrowserRouter>
                </LocalizationProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </StrictMode>
)
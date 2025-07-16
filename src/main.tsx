import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import 'primeicons/primeicons.css';
import {PrimeReactProvider} from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import "primereact/resources/themes/lara-dark-blue/theme.css"; // Inclua o tema desejado
import {CookiesProvider} from "react-cookie";
import CalculatorMenu from "./App.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CookiesProvider defaultSetOptions={{path: '/'}}>
            <PrimeReactProvider>
                <CalculatorMenu/>
            </PrimeReactProvider>
        </CookiesProvider>
    </StrictMode>
)

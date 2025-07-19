import './CalculatorMenu.css'
// import {useCookies} from "react-cookie";
import type {PlayerInfo} from "./Model/PlayerInfo.ts";
import {useState} from "react";
import {Menubar} from 'primereact/menubar';
import AlchemyCalculator from "./View/AlchemyCalculator.tsx";
import SpecialPharmacyCalculator from "./View/SpecialPharmacyCalculator.tsx";


// function App(playerInfo: PlayerInfo, setPlayerInfo: (playerInfo: PlayerInfo) => void) {
const CalculatorMenu: React.FC = () => {


    // let [cookies, setCookie, removeCookie] = useCookies<'PlayerInfo', PlayerInfo>(['PlayerInfo']);

    const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({
        BaseLevel: 100,
        JobLevel: 66,
        FullChemicalProtectionLevel: 5,
        InstructionChangeLevel: 5,
        PreparePotionLevel: 10,
        ResearchPotionLevel: 10,
        levelFarmacologiaAvancada: {nv: 10, fator: 420, maxPocoes: 12},
        Dificuldade: -5,
        Dex: 110,
        INT: 70,
        SOR: 150
    })

    const [selectedCalculator, setSelectedCalculator] = useState<'alchemy' | 'specialPharmacy'>('alchemy');

    const menuItems = [
        {
            label: 'Calculadora de Alquimia',
            icon: 'pi pi-flask',
            command: () => setSelectedCalculator('alchemy')
        },
        {
            label: 'Calculadora de Farmácia Especial',
            icon: 'pi pi-briefcase',
            command: () => setSelectedCalculator('specialPharmacy')
        }
    ];

    return (
        <>
            <Menubar className="menubar" model={menuItems}/>

            <div className="mt-4 w-full">
                {selectedCalculator === 'alchemy' &&
                    <AlchemyCalculator playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>}
                {selectedCalculator === 'specialPharmacy' &&
                    <SpecialPharmacyCalculator playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>}
            </div>
        </>
    );

}
export default CalculatorMenu;
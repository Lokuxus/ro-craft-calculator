import './App.css'
// import {useCookies} from "react-cookie";
import type {PlayerInfo} from "./Model/PlayerInfo.ts";
import {useState} from "react";
import AlchemyCalculator from "./View/AlchemyCalculator.tsx";
import SpecialPharmacyCalculator from "./View/SpecialPharmacyCalculator.tsx";


// function App(playerInfo: PlayerInfo, setPlayerInfo: (playerInfo: PlayerInfo) => void) {
function App() {

    // let [cookies, setCookie, removeCookie] = useCookies<'PlayerInfo', PlayerInfo>(['PlayerInfo']);

    const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({
        BaseLevel: 100,
        JobLevel: 0,
        FullChemicalProtectionLevel: 0,
        InstructionChangeLevel: 0,
        PreparePotionLevel: 0,
        ResearchPotionLevel: 0,
        Dificuldade: 0,
        Dex: 0,
        INT: 0,
        SOR: 0
    })

    return (
        <>
            <div className="card">
                <AlchemyCalculator playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>
            </div>
            <SpecialPharmacyCalculator
                playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>
        </>
    )


}

export default App

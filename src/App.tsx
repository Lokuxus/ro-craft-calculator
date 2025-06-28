import {useState} from 'react'
import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {InputNumber} from 'primereact/inputnumber'
import './App.css'
// import {useCookies} from "react-cookie";
import type {PlayerInfo} from "./Model/PlayerInfo.ts";


function App() {

    // let [cookies, setCookie, removeCookie] = useCookies<'PlayerInfo', PlayerInfo>(['PlayerInfo']);

    const [playerInfo, setPlayerInfo] = useState<PlayerInfo>({
        Dex: 0,
        Dificuldade: 0,
        INT: 0,
        InstructionChangeLevel: 0,
        JobLevel: 0,
        PreparePotionLevel: 0,
        ResearchPotionLevel: 0,
        SOR: 0
    })
    const dificuldades = [15, 5, -5, -10, -15]
    return (
        <>

            <Card className="form-component">
                <div className="grid align-self-center">
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="researchPotLevel" className="w-12rem">Research Pot Level</label>
                        <Dropdown id="researchPotLevel"
                                  value={playerInfo.ResearchPotionLevel}
                                  onChange={(e) => setPlayerInfo({...playerInfo, ResearchPotionLevel: e.value})}
                                  options={[...Array(11)].map((_, i) => ({label: i.toString(), value: i}))}
                                  className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="preparePotLevel" className="w-12rem">Prepare Pot Level</label>
                        <Dropdown id="preparePotLevel"
                                  value={playerInfo.PreparePotionLevel}
                                  onChange={(e) => setPlayerInfo({...playerInfo, PreparePotionLevel: e.value})}
                                  options={[...Array(11)].map((_, i) => ({label: i.toString(), value: i}))}
                                  className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="humunculusBlessLevel" className="w-12rem">Humunculus Change of Plans</label>
                        <Dropdown id="humunculusBlessLevel"
                                  value={playerInfo.InstructionChangeLevel}
                                  onChange={(e) => setPlayerInfo({...playerInfo, InstructionChangeLevel: e.value})}
                                  options={[...Array(6)].map((_, i) => ({label: i.toString(), value: i}))}
                                  className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="LevelJob" className="w-12rem">Level Job</label>
                        <Dropdown id="LevelJob"
                                  value={playerInfo.JobLevel}
                                  onChange={(e) => setPlayerInfo({...playerInfo, JobLevel: e.value})}
                                  options={[...Array(70)].map((_, i) => ({label: (i + 1).toString(), value: i + 1}))}
                                  className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="Dificuldade" className="w-12rem">Dificuldade</label>
                        <Dropdown id="Dificuldade"
                                  value={playerInfo.Dificuldade}
                                  onChange={(e) => setPlayerInfo({...playerInfo, Dificuldade: e.value})}
                                  options={dificuldades.map(value => ({label: `${value}%`, value}))}
                                  className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="INT" className="w-12rem">INT</label>
                        <InputNumber id="INT"
                                     value={playerInfo.INT}
                                     onValueChange={(e) => setPlayerInfo({...playerInfo, INT: e.value ?? 0})}
                                     className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="Dex" className="w-12rem">DEX</label>
                        <InputNumber id="Dex"
                                     value={playerInfo.Dex}
                                     onValueChange={(e) => setPlayerInfo({...playerInfo, Dex: e.value ?? 0})}
                                     className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="SOR" className="w-12rem">SOR</label>
                        <InputNumber id="SOR"
                                     value={playerInfo.SOR}
                                     onValueChange={(e) => setPlayerInfo({...playerInfo, SOR: e.value ?? 0})}
                                     className="w-5rem"
                        />
                    </div>
                </div>
                <div className="text-center font-bold col-12 flex align-items-center">
                    <p>Success
                        Rate: {((playerInfo.PreparePotionLevel * 3) + playerInfo.ResearchPotionLevel + playerInfo.InstructionChangeLevel) + (playerInfo.JobLevel * 0.2) + (playerInfo.Dex * 0.1) + (playerInfo.SOR * 0.1) + (playerInfo.INT * 0.05) + (playerInfo.Dificuldade)}%
                    </p></div>
            </Card>

        </>
    )
}

export default App

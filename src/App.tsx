import { useState } from 'react'
import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {InputNumber} from 'primereact/inputnumber'
import './App.css'

function App() {
    const [researchPotLevel, setResearchPotLevel] = useState(10)
    const [preparePotLevel, setPreparePotLevel] = useState(10)
    const [humunculusChangeofPlans, setHumunculusChangeofPlans] = useState(5)
    const [LevelJob, setLevelJob] = useState(70);
    const [Dex, setDex] = useState(120);
    const [SOR, setSOR] = useState(150);
    const [INT, setINT] = useState(120);
    const [Dificuldade, setDificuldade] = useState(0);
    const dificuldades = [15, 5, -5, -10, -15]
    return (
        <>

            <Card className="form-component">
                <div className="grid align-self-center">
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="researchPotLevel" className="w-12rem">Research Pot Level</label>
                        <Dropdown id="researchPotLevel"
                                value={researchPotLevel}
                                onChange={(e) => setResearchPotLevel(e.value)}
                                options={[...Array(11)].map((_, i) => ({label: i.toString(), value: i}))}
                                className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="preparePotLevel" className="w-12rem">Prepare Pot Level</label>
                        <Dropdown id="preparePotLevel"
                                value={preparePotLevel}
                                onChange={(e) => setPreparePotLevel(e.value)}
                                options={[...Array(11)].map((_, i) => ({label: i.toString(), value: i}))}
                                className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="humunculusBlessLevel" className="w-12rem">Humunculus Change of Plans</label>
                        <Dropdown id="humunculusBlessLevel"
                                value={humunculusChangeofPlans}
                                onChange={(e) => setHumunculusChangeofPlans(e.value)}
                                options={[...Array(6)].map((_, i) => ({label: i.toString(), value: i}))}
                                className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="LevelJob" className="w-12rem">Level Job</label>
                        <Dropdown id="LevelJob"
                                value={LevelJob}
                                onChange={(e) => setLevelJob(e.value)}
                                options={[...Array(70)].map((_, i) => ({label: (i+1).toString(), value: i+1}))}
                                className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="Dificuldade" className="w-12rem">Dificuldade</label>
                        <Dropdown id="Dificuldade"
                                value={Dificuldade}
                                onChange={(e) => setDificuldade(e.value)}
                                options={dificuldades.map(value => ({label: `${value}%`, value}))}
                                className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="INT" className="w-12rem">INT</label>
                        <InputNumber id="INT"
                                   value={INT}
                                   onValueChange={(e) => setINT(e.value ?? 0)}
                                   className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="Dex" className="w-12rem">DEX</label>
                        <InputNumber id="Dex"
                                   value={Dex}
                                   onValueChange={(e) => setDex(e.value ?? 0)}
                                   className="w-5rem"
                        />
                    </div>
                    <div className="col-12 flex align-items-center gap-2">
                        <label htmlFor="SOR" className="w-12rem">SOR</label>
                        <InputNumber id="SOR"
                                   value={SOR}
                                   onValueChange={(e) => setSOR(e.value ?? 0)}
                                   className="w-5rem"
                        />
                    </div>
                </div>
                <div className="text-center font-bold col-12 flex align-items-center">
                    Success Rate: {((preparePotLevel * 3) + researchPotLevel + humunculusChangeofPlans) + (LevelJob * 0.2) + (Dex * 0.1) + (SOR * 0.1) + (INT * 0.05) + (Dificuldade)}%
                </div>
            </Card>

        </>
    )
}

export default App

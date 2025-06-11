import { useState } from 'react'

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

            <div className="card">
                <form>
                    <div>
                        <label htmlFor="researchPotLevel">Research Pot Level: </label>
                        <select id="researchPotLevel" value={researchPotLevel}
                                onChange={(e) => setResearchPotLevel(Number(e.target.value))}>
                            {[...Array(11)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="preparePotLevel">Prepare Pot Level: </label>
                        <select id="preparePotLevel" value={preparePotLevel}
                                onChange={(e) => setPreparePotLevel(Number(e.target.value))}>
                            {[...Array(11)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="humunculusBlessLevel">Humunculus Change of Plans: </label>
                        <select id="humunculusBlessLevel" value={humunculusChangeofPlans}
                                onChange={(e) => setHumunculusChangeofPlans(Number(e.target.value))}>
                            {[...Array(6)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="LevelJob">Level Job: </label>
                        <select id="LevelJob" value={LevelJob} onChange={(e) => setLevelJob(Number(e.target.value))}>
                            {[...Array(71)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Dificuldade">Dificuldade: </label>
                        <select id="Dificuldade" value={Dificuldade}
                                onChange={(e) => setDificuldade(Number(e.target.value))}>
                            {[...dificuldades].map((_, i) => (
                                <option key={i} value={_}>{_}%</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="INT">INT: </label>
                        <input type="number" id="INT" value={INT} onChange={(e) => setINT(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="Dex">DEX: </label>
                        <input type="number" id="Dex" value={Dex} onChange={(e) => setDex(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="SOR">SOR: </label>
                        <input type="number" id="SOR" value={SOR} onChange={(e) => setSOR(Number(e.target.value))}/>
                    </div>
                </form>
                <p>Success Rate:
                    [{((preparePotLevel * 3) + researchPotLevel + humunculusChangeofPlans) + (LevelJob * 0.2) + (Dex * 0.1) + (SOR * 0.1) + (INT * 0.05) + (Dificuldade)}]%</p>
            </div>

        </>
    )
}

export default App

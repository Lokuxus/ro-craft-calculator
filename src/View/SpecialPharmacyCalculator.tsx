import type {PlayerInfo} from "../Model/PlayerInfo.ts";
import {Card} from "primereact/card";
import {Dropdown} from "primereact/dropdown";
import {InputNumber} from "primereact/inputnumber";
import {useState} from "react";
import PotionTable from "./TabelaSelecaoFarmacoogia.tsx";
import {niveisFarmacologia, type NivelFarmacologia} from "../Data/DadosBaseFarmacologia.ts";

type SpecialPharmacyCalculator = {
    playerInfo: PlayerInfo;
    setPlayerInfo: (playerInfo: PlayerInfo) => void;
};


function calcularSucessoAvancado(playerInfo: PlayerInfo): number {
    // const random1 = Math.floor(Math.random() * (150 - 30 + 1)) + 30; // Random[30,150]
    const random1 = 30;
    // const random2 = Math.floor(Math.random() * (10 - 4 + 1)) + 4;    // Random[4,10]
    const random2 = 4;

    return (
        playerInfo.INT +
        (playerInfo.Dex / 2) +
        playerInfo.SOR +
        playerInfo.JobLevel +
        random1 +
        (playerInfo.BaseLevel - 100) +
        (playerInfo.ResearchPotionLevel * 5) +
        (playerInfo.FullChemicalProtectionLevel * random2)
    );
}


const SpecialPharmacyCalculator: React.FC<SpecialPharmacyCalculator> = ({playerInfo, setPlayerInfo}) => {

    const [selectedPotion, setSelectedPotion] = useState<any | null>(null);
    const [levelFarmacologiaAvancada, setLevelFarmacologiaAvancada] = useState<NivelFarmacologia>()

    return <>
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
                    <label htmlFor="baseLevel" className="w-12rem">Base Level</label>
                    <Dropdown id="baseLevel"
                              value={playerInfo.BaseLevel}
                              onChange={(e) => setPlayerInfo({...playerInfo, BaseLevel: e.value})}
                              options={[...Array(175)].map((_, i) => ({label: (i + 1).toString(), value: i + 1}))}
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
                    <label htmlFor="FullChemicalProtectionLevelId" className="w-12rem">Full Chemical Protection
                        Level</label>
                    <Dropdown id="FullChemicalProtectionLevelId"
                              value={playerInfo.FullChemicalProtectionLevel}
                              onChange={(e) => setPlayerInfo({...playerInfo, FullChemicalProtectionLevel: e.value})}
                              options={[...Array(5)].map((_, i) => ({label: (i + 1).toString(), value: i + 1}))}
                              className="w-5rem"
                    />
                </div>
                <div className="col-12 flex align-items-center gap-2">
                    <label htmlFor="levelFarmacologia" className="w-12rem">Level Special Pharmacy</label>
                    <Dropdown id="levelFarmacologia"
                              value={levelFarmacologiaAvancada}
                              onChange={(e) => setLevelFarmacologiaAvancada(e.value as NivelFarmacologia)}
                              options={niveisFarmacologia} optionLabel={'nv'}
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
                <p>Formula A: {calcularSucessoAvancado(playerInfo)}
                    Formula B: {levelFarmacologiaAvancada?.fator + selectedPotion?.taxa + 0}
                </p></div>
        </Card>
        <PotionTable selectedPotion={selectedPotion} setSelectedPotion={setSelectedPotion}/></>
}

export default SpecialPharmacyCalculator;
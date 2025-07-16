import type {NivelFarmacologia} from "../Data/DadosBaseFarmacologia.ts";

export interface PlayerInfo {

    ResearchPotionLevel: number;
    PreparePotionLevel: number;
    InstructionChangeLevel: number;
    FullChemicalProtectionLevel: number;
    JobLevel: number;
    BaseLevel: number;
    Dificuldade: number;
    INT: number;
    Dex: number;
    SOR: number;
    levelFarmacologiaAvancada: NivelFarmacologia;
}


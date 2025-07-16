import {DataTable, type DataTableSelectionSingleChangeEvent} from "primereact/datatable";
import {Column} from "primereact/column";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Supondo que potions seja o array de receitas exportado por DadosBaseFarmacologia.ts
import {type Potion, potions} from "../Data/DadosBaseFarmacologia.ts";

const getItemUrl = (id: number) => `https://www.divine-pride.net/database/item/${id}`;
const getItemImgUrl = (id: number) => `http://static.divine-pride.net/images/items/item/${id}.png`;


interface PotionTableProps {
    selectedPotion: Potion | null;
    setSelectedPotion: (potion: Potion | null) => void;
}


export default function PotionTable({selectedPotion, setSelectedPotion}: PotionTableProps) {

    // Descobrir a quantidade máxima de materiais de uma receita (para fixar as colunas):
    const maxMateriais = Math.max(
        ...potions.map((potion) => potion.materiais.length)
    );

    // Geração dinâmica do cabeçalho dos materiais
    const materialHeaders = [];
    for (let i = 0; i < maxMateriais; i++) {
        materialHeaders.push(`Material ${i + 1}`);
    }

    // Renderizador do nome da poção (imagem + link)
    const nameBody = (rowData: any) => (
        <a href={getItemUrl(rowData.id)} target="_blank" rel="noopener noreferrer"
           style={{display: "flex", alignItems: "center", gap: "6px"}}>
            <img
                src={getItemImgUrl(rowData.id)}
                alt={rowData.nome}
                width={24}
                height={24}
                style={{verticalAlign: "middle"}}
            />
            {rowData.nome}
        </a>
    );

    // Renderizador do material (imagem + link + quantidade)
    const materialBody = (index: number) => (rowData: any) => {
        const material = rowData.materiais[index];
        if (!material) return null;
        return (
            <a href={getItemUrl(material.id)} target="_blank" rel="noopener noreferrer"
               style={{display: "flex", alignItems: "center", gap: "6px"}}>
                <img
                    src={getItemImgUrl(material.id)}
                    alt={material.item}
                    width={24}
                    height={24}
                />
                {material.item}
                {material.num !== undefined && <> x{material.num}</>}
            </a>
        );
    };

    // Renderizador da taxa
    const taxaBody = (rowData: any) => <span>{rowData.taxa}</span>;

    // Montagem das colunas
    const cols = [
        <Column
            key="nome"
            field="nome"
            header="Poção"
            body={nameBody}
            sortable
        />,
        <Column
            key="taxa"
            field="taxa"
            header="Taxa"
            body={taxaBody}
            align="center"
            sortable
        />
    ];

    // Adiciona as colunas dos materiais
    for (let i = 0; i < maxMateriais; i++) {
        cols.push(
            <Column
                key={`material-${i}`}
                // header={materialHeaders[i]}
                header={''}
                body={materialBody(i)}
                align="center"
            />
        );
    }

    return (
        <div className="card">
            <DataTable
                value={potions}
                selectionMode="single"
                selection={selectedPotion}
                onSelectionChange={(e: DataTableSelectionSingleChangeEvent<never>) => setSelectedPotion(e.value)}
                dataKey="id"
                responsiveLayout="scroll"
                stripedRows
                tableStyle={{minWidth: "60rem"}}
            >
                {cols}
            </DataTable>
            {selectedPotion && (
                <div style={{marginTop: "1rem"}}>
                    <b>Poção selecionada:</b> {selectedPotion.nome}
                </div>
            )}
        </div>
    );
}
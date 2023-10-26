export interface RefeicaoDTO {
    id: number;
    descricao: string;
    horario: string;
}

export interface DiaSemanaRefeicoesDTO {
    idDiaSemana: number;
    descricaoDiaSemana: string;
    refeicoes: RefeicaoDTO[];
}
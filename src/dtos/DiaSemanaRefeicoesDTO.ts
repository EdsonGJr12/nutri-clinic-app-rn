export interface RefeicaoDTO {
    id: number;
    descricao: string;
    horario: string;
}

export interface DiaSemanaRefeicoesDTO {
    id: number;
    diaSemana: number;
    descricaoDiaSemana: string;
    refeicoes: RefeicaoDTO[];
}
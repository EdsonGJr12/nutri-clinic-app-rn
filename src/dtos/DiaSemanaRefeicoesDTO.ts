export interface RefeicaoDTO {
    id: number;
    descricao: string;
    horario: string;
}

export interface DiaSemanaRefeicoesDTO {
    diaSemana: number;
    descricaoDiaSemana: string;
    refeicoes: RefeicaoDTO[];
}
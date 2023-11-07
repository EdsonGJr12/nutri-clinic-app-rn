interface RefeicaoAlimentoDTO {
    id: number;
    descricao: string;
}

export interface RefeicaoDTO {
    id: number;
    descricao: string;
    horario: string;
    alimentos: RefeicaoAlimentoDTO[];
}

export interface DiaSemanaRefeicoesDTO {
    id: number;
    diaSemana: number;
    descricaoDiaSemana: string;
    refeicoes: RefeicaoDTO[];
}
interface ISpaces {
    free: number,
    total: number,
}

export interface IAccordionDetail {
    title: string,
    employer: string,
}

interface ISummary {
    title: string,
    spaces: ISpaces,
}

export interface IAccordion {
    summary: ISummary,
    details: Array<IAccordionDetail>,
}

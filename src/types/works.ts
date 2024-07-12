export type WorkType = {
  id: string
  serviceName: string
  client?: string
  usedTech: string[]
  inCharge: string[]
  text: string
  url: string
  productionPeriod: string
  imagePath: {
    url: string
    height: number
    width: number
  }
}

export type WorksType = {
  contents: WorkType[]
}

export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IStatiseicsData {
    id: number
    company: string
    hostNumber: string
    meterNumber: string
    meterWarningNumber: string
    monitor: string
    storehouseNumber: string
    type: string
    unMonitor: string
    warningDayNumber: string
    warningDayPercentage: string
}

export interface IListData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

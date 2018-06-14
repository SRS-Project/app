import { ReactNode } from 'react'
import { ViewState } from 'src/model'

export interface CardFieldData {
  ID: string
  value: string
}

export interface Card {
  deckID: number
  cardTypeID: string
  // the key is the index of the CardField
  fields: { [k: string]: CardFieldData }
  tags: string[]
  cardType?: CardType
}

export interface CardField {
  ID: string
  name: string
}

export interface CardType {
  ID: string
  name: string
  fields: CardField[]
  template: CardTemplate
}

export interface CardTemplate {
  front: string
  back: string
  styles: string
}
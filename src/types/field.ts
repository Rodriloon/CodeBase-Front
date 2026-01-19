export type SurfaceType = 'SYNTHETIC_GRASS' | 'NATURAL_GRASS' | 'PARQUET' | 'CONCRETE' | 'CARPET'

export type FieldStatus = 'AVAILABLE' | 'MAINTENANCE'

export interface FieldResponseDTO {
  id: number
  name: string
  description?: string
  capacity: number
  surface: SurfaceType
  isIndoor: boolean
  status: FieldStatus
}

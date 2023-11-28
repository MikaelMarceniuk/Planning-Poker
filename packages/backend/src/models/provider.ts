import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
class Provider {
  @PrimaryColumn()
  providerAccountId: string

  @Column()
  provider: string
}

export default Provider

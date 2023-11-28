import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm"
import Provider from "./provider"

@Entity()
class User {
  @ObjectIdColumn()
  id?: ObjectId

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  image: string

  @Column(() => Provider)
  providers: Provider[]
}

export default User

import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @BeforeInsert()
  generateUuid() {
    if (!this.id) {
      this.id = uuidv4(); // Generate UUID v4 for the user
    }
  }
}

import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';



@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  data: Date;

  @Column({ default: 1 })
  status: number;

  @Column({ default: false })
  entregue: boolean = false;

  @Column({ default: false })
  pago: boolean = false;

  @Column({ default: '' })
  feedback: string = '';

  @Column()
  endereco: string;

  @Column()
  forma_pgto: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  //itens
  @OneToMany(() => Item, (item) => item.order, { cascade: true })
  items: Item[];


}



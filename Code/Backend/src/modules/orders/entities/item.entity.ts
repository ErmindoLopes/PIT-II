import { Cupcake } from 'src/modules/cupcakes/entities/cupcake.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  qtde: number;

  @Column()
  valor: number;

  //cupcake
  @ManyToOne(() => Cupcake, (cupcake) => cupcake.items, { eager: true })
  cupcake: Cupcake


  //ordem
  @ManyToOne(() => Order, (order) => order.items)
  order: Order

}



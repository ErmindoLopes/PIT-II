import { Order } from 'src/modules/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  is_admin: boolean;

  //pedidos
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];


}


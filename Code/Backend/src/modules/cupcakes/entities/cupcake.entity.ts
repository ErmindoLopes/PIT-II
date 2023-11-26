import { Item } from 'src/modules/orders/entities/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cupcake {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;
  
  @Column()
  qtde: number;

  @Column()
  valor: number;

  //estah em varios itens
  @OneToMany(() => Item, (item) => item.cupcake)
  items: Item[];

}


import { User } from "src/modules/users/entities/user.entity";
import { Item } from "../entities/item.entity";

export class CreateOrderDto {  
  data: Date;
  status: number = 1;
  entregue: boolean = false;
  pago: boolean = false;
  feedback: string = '';  
  endereco: string;
  forma_pgto: string;
  user: User;
  itens: Item[];
}
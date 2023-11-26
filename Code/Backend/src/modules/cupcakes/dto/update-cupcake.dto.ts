import { PartialType } from '@nestjs/mapped-types';
import { CreateCupcakeDto } from './create-cupcake.dto';

export class UpdateCupcakeDto extends PartialType(CreateCupcakeDto) {}
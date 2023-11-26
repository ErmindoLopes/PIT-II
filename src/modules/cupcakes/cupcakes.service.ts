import { Global, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCupcakeDto } from './dto/create-cupcake.dto';
import { UpdateCupcakeDto } from './dto/update-cupcake.dto';
import { Cupcake } from './entities/cupcake.entity';

@Global()
@Injectable()
export class CupcakesService {
  constructor(
    @InjectRepository(Cupcake)
    private cupcakeRepository: Repository<Cupcake>,
  ) {}
  create(createCupcakeDto: CreateCupcakeDto) {
    return this.cupcakeRepository.save(createCupcakeDto);
  }

  findAll() {
    return this.cupcakeRepository.find();
  }

  findOne(id: number) {
    return this.cupcakeRepository.findOneBy({ id: id });
  }

  findBy(filter: any) {
    return this.cupcakeRepository.findBy(filter);
  }

  update(id: number, updateCupcakeDto: UpdateCupcakeDto) {
    return this.cupcakeRepository.update(id, updateCupcakeDto);
  }

  remove(id: number) {
    return this.cupcakeRepository.delete(id);
  }
}
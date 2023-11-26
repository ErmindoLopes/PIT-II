import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CupcakesController } from './cupcakes.controller';
import { CupcakesService } from './cupcakes.service';
import { Cupcake } from './entities/cupcake.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cupcake])],
    controllers: [CupcakesController],
    providers: [CupcakesService],
    exports: [CupcakesService]
})
export class CupcakesModule {


    /**
     *
     */
    constructor(
        private readonly cupcakesService: CupcakesService,
    ) {

        this.checkPreCad();

    }

    async checkPreCad() {
        const lista = await this.cupcakesService.findAll();
        if (!lista || !lista.length) {
            
            await this.cupcakesService.create(
                {
                    nome: 'Cupcake de Chocolate',
                    qtde: 10,
                    valor: 10
                }
            );
            await this.cupcakesService.create(
                {
                    nome: 'Cupcake de Morango',
                    qtde: 10,
                    valor: 12.5
                }
            );
            await this.cupcakesService.create(
                {
                    nome: 'Cupcake de Doce de Leite',
                    qtde: 10,
                    valor: 12.5
                }
            );

        }
    }
}
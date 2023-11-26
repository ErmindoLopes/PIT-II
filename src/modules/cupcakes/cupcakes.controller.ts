import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CupcakesService } from 'src/modules/cupcakes/cupcakes.service';
import { CreateCupcakeDto } from './dto/create-cupcake.dto';

@Controller('cupcakes')
export class CupcakesController {

    constructor(
        private readonly cupcakesService: CupcakesService
    ) { }


    @Get('list')
    @UseGuards(AuthGuard)
    async getAll() {

        let reqResp: any = new BadRequestException();

        try {

            reqResp = await this.cupcakesService.findAll();

        } catch (error) {
            console.log(error);
            reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
        }

        if (reqResp instanceof HttpException)
            throw reqResp;
        else
            return reqResp;
    }

    @Post('')
    @UseGuards(AuthGuard)
    async create(
        @Body() body: CreateCupcakeDto,
    ) {

        let reqResp: any = new BadRequestException();

        try {

            
            // verifica se tem body
            /* **************************************************************** */
            if (!body) {
                return reqResp;
            }
            /* **************************************************************** */

            reqResp = await this.cupcakesService.create(body);

        } catch (error) {
            console.log(error);
            reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
        }

        if (reqResp instanceof HttpException)
            throw reqResp;
        else
            return reqResp;
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async remove(
        @Param('id') id: number
    ) {

        let reqResp: any = new BadRequestException();

        try {

            reqResp = await this.cupcakesService.remove(id);

        } catch (error) {
            console.log(error);
            reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
        }

        if (reqResp instanceof HttpException)
            throw reqResp;
        else
            return reqResp;
    }

}

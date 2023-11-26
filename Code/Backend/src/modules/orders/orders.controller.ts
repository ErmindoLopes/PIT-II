import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { OrdersService } from 'src/modules/orders/orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {

    constructor(
        private readonly ordersService: OrdersService
    ) { }


    @Get('list')
    @UseGuards(AuthGuard)
    async getAll() {

        let reqResp: any = new BadRequestException();

        try {

            reqResp = await this.ordersService.findAll();

        } catch (error) {
            console.log(error);
            reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
        }

        if (reqResp instanceof HttpException)
            throw reqResp;
        else
            return reqResp;
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async get(
        @Param('id') id: number
    ) {

        let reqResp: any = new BadRequestException();

        try {

            reqResp = await this.ordersService.findOne(id);

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
        @Body() body: CreateOrderDto,
    ) {

        let reqResp: any = new BadRequestException();

        try {

            
            // verifica se tem body
            /* **************************************************************** */
            if (!body) {
                return reqResp;
            }
            /* **************************************************************** */

            reqResp = await this.ordersService.create(body);

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

            reqResp = await this.ordersService.remove(id);

        } catch (error) {
            console.log(error);
            reqResp = new HttpException({ status: HttpStatus.BAD_REQUEST, error: 'Erro na requisição', }, HttpStatus.BAD_REQUEST, { cause: error });
        }

        if (reqResp instanceof HttpException)
            throw reqResp;
        else
            return reqResp;
    }
   

    @Patch('')
    @UseGuards(AuthGuard)
    async update(
        @Body() body: UpdateOrderDto,
    ) {

        let reqResp: any = new BadRequestException();

        try {


            // verifica se tem body
            /* **************************************************************** */
            if (!body) {
                return reqResp;
            }
            /* **************************************************************** */

            reqResp = await this.ordersService.update(body.id, body);

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

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ItemsService } from './items.service';
import { ItemEntity } from './item.entity';

@Controller('item')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() item: ItemEntity){
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: ItemEntity) {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemsService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  async findAll() {
    return this.itemRepository.find();
  }

  async create(item: ItemEntity){
    return this.itemRepository.save(item);
  }

  async update(id: number, item: ItemEntity) {
    await this.itemRepository.update(id, item);
  }

  async remove(id: number) {
    return this.itemRepository.delete(id);
  }
}

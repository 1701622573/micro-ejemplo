import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

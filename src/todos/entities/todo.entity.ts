import {Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    done: boolean;
}

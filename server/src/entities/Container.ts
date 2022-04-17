import { CONTAINER_TYPE, WASTE_TYPE } from "../types";
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ACCOUNT_STATUS } from "../constants";
import { ContainerPark } from "./ContainerPark";


/**
 * User object who will be responsiblke for all the actions
 */
@ObjectType()
@Entity()
export class Container extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column({ nullable: false })
    material_type?: WASTE_TYPE;

    @Field()
    @Column({ nullable: false })
    container_type?: CONTAINER_TYPE;


    @Field()
    @Column()
    containerParkId: string;

    @Field(() => ContainerPark)
    @ManyToOne(() => ContainerPark, contpark => contpark.containers)
    containerPark: ContainerPark;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;



}
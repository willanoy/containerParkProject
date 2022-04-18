import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Container } from "./Container";



/**
 * User object who will be responsiblke for all the actions
 */
@ObjectType()
@Entity()
export class ContainerPark extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column({ type: 'text', unique: true })
    location!: string;

    @Field()
    @Column({ type: 'text', unique: true })
    name!: string;

    @Field()
    @Column({ type: 'text', unique: true })
    intercommunale!: string;

    /** Nullable in case socials are used?
    * TODO: check if correct
    */
    @Column({ type: 'text', nullable: true })
    password?: string;

    /** Used for safety reason, so that if the password is changed sessions with previous password will be invalidated */
    @Field()
    @Column('int', { default: 0 })
    tokenVersion: number;

    @Field(() => [Container])
    @OneToMany(() => Container, container => container.containerPark)
    containers: Container[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;





}
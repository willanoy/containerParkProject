
import { isAuthJWT } from "../middleware/isAuthJWT";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import { Container } from "../entities/Container";
import { CONTAINER_TYPE, MyContext, WASTE_TYPE } from "../types";

@InputType()
class ContainerInput {
    @Field()
    material_type: WASTE_TYPE
    @Field({ nullable: true })
    container_type?: CONTAINER_TYPE
}

@Resolver(Container)
export class ContainerResolver {



    @Mutation(() => Container)  // type graphql
    @UseMiddleware(isAuthJWT)
    async createContainer(
        @Arg('input') input: ContainerInput,
        @Ctx() { payload }: MyContext,
        @Arg('status', { nullable: true }) status?: number,
    ): Promise<Container> {   //TYPE TYPESCRIPT
        // 2 sql queries



        return Container.create({
            ...input,
            containerParkId: payload?.containerParkId
        }).save();
    }


    @Query(() => [Container])  // type graphql
    @UseMiddleware(isAuthJWT)
    async containers(
        @Ctx() { payload }: MyContext,
    ): Promise<Container[]> {   //TYPE TYPESCRIPT


        const replacements: any[] = [payload?.containerParkId,];

        const containers = await getConnection().query(`
        
        select h.*
        from container h        
        where 
                       
            (h."containerParkId" = $1  ) 
        
        order by h."createdAt" DESC

        `,
            replacements
        );

        return containers;


    }

    @Query(() => Container, { nullable: false })  // type graphql
    // @UseMiddleware(isAuthJWT)  
    async container(
        @Arg('containerId') containerId: string,        
        // @Ctx() { payload }: MyContext,
    ): Promise<Container | undefined> {   //TYPE TYPESCRIPT

        const container = await Container.findOne({
            where:
            {
                id: containerId,
            }
        });
        if(!container){
            throw new Error("Could not find memory")
        }

        // checkPermission(payload!.statusList[paginaId],STATUS.Approved,containerpark.creatorId,payload!.userId );


        return container;


    }




    @Mutation(() => Container)  // type graphql
    // @UseMiddleware(isAuthJWT)
    async RequestPickUp(
        @Arg('containerId') containerId: string,
        // @Ctx() { payload }: MyContext,
       
    ): Promise<Container | undefined> {   //TYPE TYPESCRIPT
        
        
        //  Make connection to API

        const cont = Container.findOne(containerId);
      
        

        return cont;

    }




}
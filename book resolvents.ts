import { Query, Resolver } from "type-graphql";

Resolver()
export class bookResolver {
    @Query(() => String)
    getAll() {
        return "All my books";
    }
}

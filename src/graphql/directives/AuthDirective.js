import { SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver }   from 'graphql';
import roles                      from '../../services/authorization.services';
import { getUserByToken }         from '../../services/user.services';

class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field, parentValues) {
        // We assign the selected role to the field.
        field._requiredAuthRole = this.args.requires;
        // This method will process the field content based on the assigned role.
        this.ensureFieldWrapped(field);
    }

    ensureFieldWrapped(field) {
        // We get the field's resolve method and validate it with GraphQL.
        const { resolve = defaultFieldResolver } = field;
        // We rewrite the resolver with our business logic.
        field.resolve = async (...args) => {
            // ...args = parentValues, args, context, astData.
            let fieldRequiredRole = (field._requiredAuthRole).toLowerCase();
            let userData = getUserByToken(args[2].token);
            
            if (roles[userData.role] >= roles[fieldRequiredRole]) {
                return await resolve.apply(this, args);
            } else {
                throw new Error('401 - Non Authorized');
            }
        };
    };
}

export default AuthDirective;
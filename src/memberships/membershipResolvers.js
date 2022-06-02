module.exports = {
    Query: {
        async memberships(_, __, {models}){
            return await models.Memberships.findMany();
        }
    }
}
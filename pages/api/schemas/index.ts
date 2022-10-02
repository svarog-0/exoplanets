import  {  gql  }  from  "apollo-server-micro"; 

export  const  typeDefs  =  gql`
    type  Planet {
        name: ID
        hostname: String
    }

    type  Query {
        getPlanets: [Planet]
        getPlanet(name: String!): Planet!
    }`
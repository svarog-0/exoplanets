import Cors from "micro-cors";
import { typeDefs } from "./schema.graphql";
import { ApolloServer } from 'apollo-server-micro';
import { PageConfig } from "next";
import { resolvers } from "./resolvers";
import { ServerResponse, IncomingMessage } from "http";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"

const exampleQuery = 
`{
  Planets(
    pagination: { offset: 0, size: 100 }
    filter: { disc_year: { ge: 2020 }, discoverymethod: {eq: "Imaging"} }
    sort: { field: disc_year, direction: DESC }
  ) {
    count
    content {
      pl_name
      hostname
      pl_bmasse
      discoverymethod
      disc_year
      disc_refname
      disc_instrument
    }
  }
},
{
  Planet(name: "11 Com b") {
      pl_name
      hostname
      st_loggerr1
      st_mass
      st_tefferr1
  }
}`


export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();






const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: typeDefs,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({embed: true, document: exampleQuery, headers: {key: "test"}})]
});

const startServer = server.start();

export default cors(async (req: MicroRequest, res: ServerResponse<IncomingMessage>) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
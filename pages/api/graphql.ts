import Cors from "micro-cors";
import { typeDefs } from "./schema.graphql";
import { ApolloServer, M } from 'apollo-server-micro';
import { PageConfig } from "next";
import { resolvers } from "./resolvers";
import { ServerResponse, IncomingMessage } from "http";
import { MicroRequest, } from "apollo-server-micro/dist/types";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"

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
  plugins: [ApolloServerPluginLandingPageLocalDefault]
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
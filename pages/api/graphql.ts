import Cors from "micro-cors";
import { typeDefs } from "./schemas";
import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: typeDefs
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
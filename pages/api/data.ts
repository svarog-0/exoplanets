// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fsPromises from 'fs/promises';
import { json } from 'stream/consumers';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.info("Date called")
  const filePath: string = path.join(process.cwd(), 'data/db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData: any[] = JSON.parse(jsonData);
  res.status(200).json(objectData.slice(0, 100));
}

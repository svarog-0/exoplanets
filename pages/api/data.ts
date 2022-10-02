// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fsPromises from 'fs/promises';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.info("Date called")
  const filePath: string = path.join(process.cwd(), 'data/db.json');
  res.status(200).json({ name: 'John Doe' })
  const jsonData = await await fsPromises.readFile(filePath);

  res.status(200).json(jsonData.toJSON)
}

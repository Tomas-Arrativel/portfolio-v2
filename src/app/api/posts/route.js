import Post from '@/models/Post';
import connect from '@/utils/db';

import { NextResponse } from 'next/server';

export const GET = async (request) => {
  // fetch data from mongodb
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Error fetching data from database', {
      status: 500,
    });
  }
  // if ok return response
};

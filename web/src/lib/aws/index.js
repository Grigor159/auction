"use client";

import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET;

export const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

export { region, bucket };


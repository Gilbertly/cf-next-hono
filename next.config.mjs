/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** Allow us to use bindings during local development */
if (process.env.NODE_ENV === 'development') await setupDevPlatform();

const nextConfig = {};
export default nextConfig;

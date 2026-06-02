/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/vault-files/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/vault_documents/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
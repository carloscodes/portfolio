/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/advanced-features/using-mdx

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      providerImportSource: "@mdx-js/react",
    },
  })
  module.exports = withMDX({
    reactStrictMode: true,
    images: {
      domains: ['media.healthyfood.com', 'cdnb.artstation.com', 'ozcxfgsvtlcbxasohewy.supabase.co']
    },
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })

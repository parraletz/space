import {
  generateSitemapXml,
  getSortedCollectionPosts
} from '../../utils/sitemap'

export async function get() {
  const posts = await getSortedCollectionPosts({ collection: 'blog' })

  return {
    body: await generateSitemapXml({
      posts,
      site: { url: import.meta.env.SITE }
    })
  }
}

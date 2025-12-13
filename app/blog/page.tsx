import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function BlogPage() {
  // This would come from a CMS or database
  const posts = [
    {
      slug: 'getting-started-with-react',
      title: 'Our Approach to Job Applications',
      excerpt: 'Learn about how we approach the job search.',
      date: '11-10-2025'
    },
    {
      slug: 'intro-to-machine-learning',
      title: 'How Recruiters Look At Resumes',
      excerpt: 'Explore how recruiters look at resumes.',
      date: '11-10-2025'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto pt-40 pb-10 lg:pb-30 px-5">
          <h1 className="text-5xl font-bold mb-8 text-black">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 rounded-lg border border-gray-200 shadow transition-all duration-200 hover:shadow-2xl">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl text-black font-bold mb-2 hover:text-orange-500">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <Footer />
    </div>
  )
}
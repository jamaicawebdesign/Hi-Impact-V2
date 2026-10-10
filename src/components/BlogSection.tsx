import React, { useState } from 'react';
import { ArrowRight, X, Clock, Calendar, User, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/shippingData';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Maritime', 'Air Freight', 'Supply Chain', 'Trade Policy'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
              Market Intelligence &amp; Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081533] leading-tight">
              Global Shipping Analysis &amp; Supply Chain Trends
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Essential commentary on maritime decarbonization, air cargo capacity constraints, trade compliance developments, and port terminal operations.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg max-w-max mb-10 overflow-x-auto shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#081533] text-[#d4af37] shadow-sm'
                  : 'text-slate-600 hover:text-[#081533]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between p-7 rounded-xl bg-white border border-slate-200 hover:border-[#d4af37] hover:shadow-xl transition-all duration-200 shadow-sm"
            >
              <div>
                {/* Zero-Pill Metadata Discipline */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                  <span className="text-[#b89225] font-bold uppercase">{post.category}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#081533] group-hover:text-[#b89225] transition-colors leading-snug mb-3 text-balance">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {post.summary}
                </p>

                {/* Key takeaway snippet */}
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 mb-6">
                  <span className="font-bold text-[#b89225]">Key Finding: </span>
                  {post.keyTakeaways[0]}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <User className="w-3.5 h-3.5 text-[#b89225]" />
                  <span>{post.author.name}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b89225] hover:text-[#081533] group-hover:translate-x-0.5 transition-all"
                >
                  Read Analysis
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-2 border-slate-200 rounded-xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-5 border-b border-slate-200">
              <div>
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                  <span className="text-[#b89225] font-bold">{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#081533] leading-tight">
                  {activeArticle.title}
                </h3>
                <div className="text-xs text-slate-600 mt-2">
                  By <strong className="text-[#081533]">{activeArticle.author.name}</strong>, {activeArticle.author.role}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors shrink-0 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Executive Takeaways
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#b89225] font-mono font-bold">0{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Published by Hi Impact Shipping Intelligence Unit
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

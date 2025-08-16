import React from 'react';
import '../cssfiles/Testimonial.css'; 

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'Hello its me RAVI',
      icon: '🆔',
      date: 'August 2025',
      excerpt: `The Designer's Dream
I woke up early, feeling excited and refreshed. Today was the day I would finally showcase my UI design portfolio to potential clients. My name is Ravi, and I'm a UI designer with a passion for creating beautiful, user-friendly interfaces.

As I sipped my morning coffee, I reviewed my portfolio, making sure everything was perfect. My designs were a reflection of my personality – clean, modern, and intuitive. I had spent countless hours honing my skills, and it was time to share my work with the world.

After a quick breakfast, I headed to my studio, a cozy space filled with design books, plants, and a desk that was my happy place. I spent the morning tweaking a few projects, adding finishing touches to make them shine.
`,
      image: '/blog1.png'
    },
    {
      id: 1,
      title: 'my journy',
      icon: '🆔',
      date: 'August 2025',
      excerpt: `ffee, I reviewed my portfolio, making sure everything was perfect. My designs were a reflection of my personality – clean, modern, and intuitive. I had spent countless hours honing my skills, and it was time to share my work with the world.

After a quick breakfast, I headed to my studio, a cozy space filled with design books, plants, and a desk that was my happy place. I spent the morning tweaking a few projects, adding finishing touches to make them shine.
`,
      image: '/blog1.png'
    }
   
  ];

  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <h1 className="blogs-title">Design Insights & Creative Stories</h1>
        <p className="blogs-subtitle">
          Welcome to my creative journal — where I share my process, design tips, and stories
          behind my favorite projects.
        </p>
      </header>

      <section className="blogs-list">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">
                <span className="blog-icon">{post.icon}</span> {post.title}
              </h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

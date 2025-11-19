import React from 'react';
import '../cssfiles/Testimonial.css'; 

export default function Testimonial() {
  const blogPosts = [
    {
      id: 1,
      title: 'Project: Urja Company',
      icon: '🆔',
      date: 'August 2025',
      excerpt: `The Designer's Dream
A client from Shahkot contacted us after hearing about our agency from a friend. They introduced themselves and shared that they were starting their own brand. They wanted to create a strong visual identity for their brand, beginning with a logo.

Our team designed a logo for them, which they loved. Beyond the logo, they also requested packaging and labeling for their products, including creams for beauty care and services like facial, hand, and foot treatments.

Samples of the logo and product packaging we created are available in my portfolio for review. The client was very satisfied with the results, and the project highlights our ability to deliver comprehensive branding solutions from logo design to product packaging
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

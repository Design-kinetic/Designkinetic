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
      title: 'Project: Machel Motor – Custom Bike Decal Design',
      icon: '🆔',
      date: 'August 2025',
      excerpt: `Tag: Custom Decal Design | Client Collaboration | Problem-Solving Across Languages

A client from Germany, the owner of Machel Motor, approached us through Discord. Our team connected with them as friends on the platform, where we introduced our professional background, shared our portfolio, and highlighted testimonials from past collaborations. Impressed by our work, the client agreed to a small €30 project for a custom bike decal.

Although neither I nor my team had designed decals before, we accepted the challenge. The client sent us a detailed outline, and we started the design process. However, the initial designs did not meet Machel’s expectations, and after four attempts, the project was at risk of failing.

Determined to deliver, our team made a final attempt, creating a sharp, dynamic design that the client loved. The entire communication was conducted in German—a language none of us spoke—so we used ChatGPT to accurately understand and respond to client feedback.

This project demonstrates our adaptability, perseverance, and ability to deliver professional results even in challenging circumstances. A sample of this project is available in my portfolio, along with the final design and professional references
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

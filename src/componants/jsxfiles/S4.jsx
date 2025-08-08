import React, { useState } from 'react';
import '../cssfiles/S1.css';

export default function S4() {
  
  const [services] = useState([
    {
      id: 1,
      title: "Custom Website Development",
      description: "Full-stack development for small to medium businesses.",
      image: "/images/webdev1.jpg",
      reviews: [
        { rating: 5, date: "2025-08-01" },
        { rating: 4, date: "2025-08-03" }
      ],
      createdAt: "2025-08-01T12:00:00Z",
      category: "web-development"
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Build and deploy scalable e-commerce stores.",
      image: "/images/ecommerce.jpg",
      reviews: [
        { rating: 4, date: "2025-08-02" }
      ],
      createdAt: "2025-08-02T12:00:00Z",
      category: "web-development"
    }
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const getAverageRating = (reviews = []) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, val) => acc + val.rating, 0);
    return sum / reviews.length;
  };

  const formatRating = (rating) => rating.toFixed(1);

  const openFullscreenImage = (image, e) => {
    e.stopPropagation();
    setFullscreenImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
    document.body.style.overflow = 'auto';
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const sortServices = (a, b) => {
    const ratingA = getAverageRating(a.reviews);
    const ratingB = getAverageRating(b.reviews);
    if (ratingA !== ratingB) return ratingB - ratingA;
    if (a.reviews?.length !== b.reviews?.length) return (b.reviews?.length || 0) - (a.reviews?.length || 0);
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  return (
    <div className="s1-main-container">
      <header className="s1-header">
        <h1 className="s1-main-title">UI/UX & Web Design</h1>
        <p className="s1-subtitle">Discover our web design offerings</p>
      </header>

      <div className="s1-controls-container">
        <div className="s1-search-filter-container">
          <div className="s1-search-box">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="s1-search-input"
              aria-label="Search services"
            />
            <span className="s1-search-icon">🔍</span>
          </div>

          <div className="s1-tabs">
            <button
              className={`s1-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button
              className={`s1-tab ${activeTab === 'web-development' ? 'active' : ''}`}
              onClick={() => setActiveTab('web-development')}
            >
            UI/UX & Web Design
            </button>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div 
          className="s1-fullscreen-overlay" 
          onClick={closeFullscreenImage}
          aria-modal="true"
          role="dialog"
        >
          <div className="s1-fullscreen-controls">
            <button 
              onClick={closeFullscreenImage} 
              className="s1-fullscreen-close"
              aria-label="Close image viewer"
            >
              ×
            </button>
          </div>
          <div className="s1-fullscreen-image-container">
            <img 
              src={fullscreenImage} 
              alt="Fullscreen view" 
              className="s1-fullscreen-image" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {filteredServices.length > 0 ? (
        <div className="s1-services-grid">
          {filteredServices.sort(sortServices).map((service) => (
            <article 
              key={service.id} 
              className="s1-service-card"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="s1-card-header">
                <h3 
                  id={`service-title-${service.id}`}
                  className="s1-card-title"
                >
                  {service.title}
                </h3>
              </div>
              
              <div 
                className="s1-card-image-container"
                onClick={(e) => openFullscreenImage(service.image, e)}
                role="button"
                tabIndex="0"
                aria-label={`View fullscreen image of ${service.title}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="s1-card-image" 
                  loading="lazy"
                />
                <div className="s1-card-image-overlay">
                  <span className="s1-view-fullscreen-text">Click to view</span>
                </div>
              </div>
              
              <div className="s1-card-body">
                <p className="s1-card-description">
                  {service.description.length > 150 
                    ? `${service.description.substring(0, 150)}...` 
                    : service.description}
                </p>
                
                <div className="s1-rating-container">
                  <div className="s1-rating-stars" aria-label={`Rating: ${formatRating(getAverageRating(service.reviews))} out of 5`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`s1-star-btn ${star <= Math.round(getAverageRating(service.reviews)) ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  
                  <div className="s1-rating-info">
                    <span className="s1-average-rating">
                      {formatRating(getAverageRating(service.reviews))} ★
                    </span>
                    <span className="s1-review-count">
                      ({service.reviews?.length || 0} {service.reviews?.length === 1 ? 'review' : 'reviews'})
                    </span>
                  </div>
                </div>
                
                <div className="s1-card-footer">
                  <time 
                    dateTime={service.createdAt} 
                    className="s1-created-date"
                  >
                    Added: {new Date(service.createdAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="s1-empty-state">
          <div className="s1-empty-icon">🕸️</div>
          <h3 className="s1-empty-title">No services found</h3>
          <p className="s1-empty-message">
            {searchQuery 
              ? `No services match your search for "${searchQuery}"`
              : activeTab !== 'all'
                ? `No services in this category`
                : 'No services available yet.'}
          </p>
        </div>
      )}
    </div>
  );
}

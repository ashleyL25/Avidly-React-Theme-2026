import React, { useState } from 'react';

interface ServiceData {
  title: string;
  subtitle: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
  imageHeight: number;
  objectFit: string;
}

interface ImageStyles {
  borderRadius: string;
  boxShadow: string;
}

interface ServiceIslandProps {
  services: ServiceData[];
  imageStyles: ImageStyles;
}

export default function ServiceIsland({ services, imageStyles }: ServiceIslandProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const activeService = services[activeIndex] || services[0];
  const imageSrc = activeService?.image?.src || 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/flowerimage.jpeg';
  const imageAlt = activeService?.image?.alt || activeService?.title || 'Service';
  const imageHeight = activeService?.imageHeight || 400;
  const objectFit = activeService?.objectFit || 'cover';
  
  console.log('Active service:', activeService); // Debug log
  console.log('Image src:', imageSrc); // Debug log

  const handleServiceHover = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="row align-items-center">
      {/* Left Column - Featured Image */}
      <div className="col-12 col-lg-5 mb-4 mb-lg-0">
        <div className="cs_service_featured_img" style={{ height: `${imageHeight}px` }}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`w-100 ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              height: '100%',
              objectFit: objectFit as any,
              borderRadius: imageStyles.borderRadius,
              boxShadow: imageStyles.boxShadow,
            }}
          />
        </div>
      </div>

      {/* Right Column - Service List */}
      <div className="col-12 col-lg-7">
        <div className="cs_iconbox_3_list">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`cs_hover_tab ${isActive ? 'active' : ''}`}
                onMouseEnter={() => handleServiceHover(index)}
              >
                <a 
                  href={service.link || '#'} 
                  className="cs_iconbox cs_style_3"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="cs_iconbox_in">
                    <h2 className="cs_iconbox_title cs_fs_29">{service.title || 'Service Title'}</h2>
                    <div className="cs_iconbox_subtitle">{service.subtitle || 'Service description'}</div>
                  </div>
                  <span className="cs_iconbox_icon cs_center">
                    <svg
                      width={30}
                      height={29}
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={29}
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


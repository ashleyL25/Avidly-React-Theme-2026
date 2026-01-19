import React, { useState } from 'react';

interface ServiceData {
  title: string;
  subtitle: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ImageStyles {
  height: string;
  objectFit: string;
  borderRadius: string;
  boxShadow: string;
}

interface ServiceIslandProps {
  services: ServiceData[];
  imageStyles: ImageStyles;
}

export default function ServiceIsland({ services, imageStyles }: ServiceIslandProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="cs_iconbox_3_list" style={imageStyles.height !== 'auto' ? { minHeight: imageStyles.height } : {}}>
      {services.map((service, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            className={`cs_hover_tab ${isActive ? 'active' : ''}`}
            onMouseEnter={() => setActive(index)}
          >
            <a 
              href={service.link || '#'} 
              className="cs_iconbox cs_style_3"
            >
              <div className="cs_image_layer cs_style1 cs_size_md" style={
                imageStyles.height !== 'auto' ? { height: imageStyles.height } : {}
              }>
                <div className="cs_image_layer_in">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="w-100 cs_radius_15"
                    style={{
                      objectFit: imageStyles.objectFit as any,
                      borderRadius: imageStyles.borderRadius,
                      boxShadow: imageStyles.boxShadow,
                    }}
                  />
                </div>
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
              <div className="cs_iconbox_in">
                <h2 className="cs_iconbox_title cs_fs_29">{service.title}</h2>
                <div className="cs_iconbox_subtitle">{service.subtitle}</div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}


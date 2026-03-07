import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

export const Breadcrumb = () => {
  const location = useLocation();
  
  // Define route to breadcrumb path mappings
  const breadcrumbPaths = {
    '/': { label: 'Home', show: false },
    '/our-services': { label: 'Our Services', parent: '/' },
    '/about-us': { label: 'About Us', parent: '/' },
    '/contact-us': { label: 'Contact Us', parent: '/' },
    '/testimonials': { label: 'Testimonials', parent: '/' },
    '/privacy-policy': { label: 'Privacy Policy', parent: '/' },
  };
  
  const currentPath = location.pathname;
  const pathConfig = breadcrumbPaths[currentPath];
  
  // Don't show breadcrumb on home page
  if (!pathConfig || pathConfig.show === false) {
    return null;
  }
  
  const getBreadcrumbs = () => {
    const breadcrumbs = [
      { label: 'Home', path: '/' }
    ];
    
    if (pathConfig) {
      breadcrumbs.push({
        label: pathConfig.label,
        path: currentPath,
        isCurrent: true
      });
    }
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs();
  
  return (
    <nav className='breadcrumb' aria-label='Breadcrumb navigation'>
      <div className='breadcrumb-container'>
        <ol className='breadcrumb-list'>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className='breadcrumb-item'>
              {crumb.isCurrent ? (
                <span className='breadcrumb-current' aria-current='page'>
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link to={crumb.path} className='breadcrumb-link'>
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className='breadcrumb-separator'>/</span>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

# Dynamic Image Gallery

## Project Overview

The Dynamic Image Gallery is a web application designed to showcase a collection of images fetched dynamically from the Unsplash API. It features a responsive layout that adapts to various devices and screen sizes. The application also includes functionality to load more images on demand and implements lazy loading to improve performance and user experience.

## Features

- **Dynamic Image Loading**: Images are fetched in batches from the Unsplash API as the user interacts with the application.
- **Responsive Design**: Utilizes CSS Flexbox and media queries to create a layout that works on desktops, tablets, and mobile phones.
- **Lazy Loading**: Images are loaded lazily, i.e., as they enter the viewport, which helps in reducing initial page load time and saves bandwidth.
- **Load More Images**: Users can load additional images by clicking the 'Load More Images' button, which makes another API call to Unsplash and appends new images to the gallery.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- AJAX for API requests

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/image-gallery.git
   cd image-gallery

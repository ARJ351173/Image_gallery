Here's a properly formatted README for your GitHub repository:

```markdown
# Image Gallery Component

This repository contains a React component that renders an image gallery with accessibility features. The component displays a list of images with their corresponding titles and allows users to open a modal window by clicking or pressing the Enter key on an image.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Props](#props)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [License](#license)
- [Contributing](#contributing)
- [Issues](#issues)
- [Acknowledgments](#acknowledgments)

## Overview
This component is designed to provide an accessible image gallery experience for users. It uses React to render a list of images with their corresponding titles and allows users to open a modal window by clicking or pressing the Enter key on an image.

## Features
- **Accessible Image Gallery**: Displays a list of images with their corresponding titles and allows users to open a modal window by clicking or pressing the Enter key on an image.
- **Keyboard Navigation**: Supports keyboard navigation using the Enter key to open the modal window.
- **Accessibility Features**: Implements accessibility features such as `tabIndex="0"`, `role="button"`, and `aria-label` to provide a descriptive label for screen readers.

## Props
- `onOpenModal`: A required function prop that is called when an image is clicked or the Enter key is pressed. It receives an object with the image URL and title as arguments.

## Usage
To use this component, simply import it and pass the `onOpenModal` function as a prop:

```jsx
import ImageGallery from './ImageGallery';

const handleOpenModal = (image) => {
  // Open a modal window with the selected image
};

<ImageGallery onOpenModal={handleOpenModal} />;
```

## Code Structure
The component is defined in a single file, `ImageGallery.js`. The file imports React and PropTypes, and defines the `ImageGallery` component as a functional component.

The component uses an `images` array to store the list of images, which is then mapped over to render individual image containers. Each image container has an `onClick` event handler that calls the `onOpenModal` function when clicked, and an `onKeyDown` event handler that calls the `onOpenModal` function when the Enter key is pressed.

## License
This component is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contributing
Contributions are welcome! If you'd like to contribute to this component, please fork the repository, make your changes, and submit a pull request.

## Issues
If you encounter any issues with this component, please open an issue on the GitHub repository.

## Acknowledgments
Thanks to the Mainflow Service and Technology team for guidance and support during the development of this project.
```

This README is now formatted properly and includes all the sections you outlined. You can copy and paste this into your `README.md` file in your GitHub repository.

import { createRoot } from "react-dom/client";
import BlogListing from "@components/BlogListing";
//import AnotherComponent from "AnotherComponent/AnotherComponent";

// Map component names to actual components
const componentsMap: { [key: string]: React.FC<any> } = {
  BlogListing,
  //AnotherComponent,
  // Add more components as needed
};

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that should host a React component
  const elements = document.querySelectorAll(".react-component");

  elements.forEach((element) => {
    // Get the component name from the data attribute
    const componentName = element.getAttribute("data-component");

    if (componentName) {
      const Component = componentsMap[componentName];

      if (Component) {
        // Extract props from data-content attribute
        const contentData = element.getAttribute("data-content");
        const content = contentData ? JSON.parse(contentData) : {};

        // Render the component into the element
        const root = createRoot(element);
        root.render(<Component content={content} />);
      } else {
        console.error(`Component "${componentName}" not found in componentsMap.`);
      }
    } else {
      console.error('Attribute "data-component" is missing or null.');
    }
  });
});



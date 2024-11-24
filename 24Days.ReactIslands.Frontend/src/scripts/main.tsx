import { createRoot } from "react-dom/client";
import HelloIsland from "@components/HelloIsland";
import BlogListing from "@components/BlogListing";
//import AnotherComponent from "AnotherComponent/AnotherComponent";

type ComponentMap = {
  // 'any' used for demo purposes
  // For better type safety, use a mapped type with specific prop definitions per component.
  [key: string]: (props: any) => JSX.Element;
};

const componentsMap: ComponentMap = {
  HelloIsland,
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
    if (!componentName) {
      console.error('Attribute "data-component" is missing or null.');
      return;
    }

    const Component = componentsMap[componentName];
    if (!Component) {
      console.error(`Component "${componentName}" not found in componentsMap.`);
      return;
    }

    // Extract content props from data-content attribute
    const contentData = element.getAttribute("data-content");
    const content = contentData ? JSON.parse(contentData) : {};

    // Render the component and pass content props
    const root = createRoot(element);
    root.render(<Component {...content} />);
  });
});

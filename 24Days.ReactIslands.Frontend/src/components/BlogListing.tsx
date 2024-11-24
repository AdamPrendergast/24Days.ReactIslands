import React from "react";
import { Meteors } from "../ui/meteors";

interface Article {
  Name: string;
  Subtitle: string;
}

interface BlogListingProps {
  articles: Article[];
}

const BlogListing = ({ articles }: BlogListingProps): JSX.Element => {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-4">
      {articles.map((article, index) => (
        <>
          <div className="tw-relative tw-shadow-xl tw-bg-gray-900 tw-border tw-border-gray-800 tw-px-4 tw-py-8 tw-h-full tw-overflow-hidden tw-rounded-2xl tw-flex tw-flex-col tw-items-start">
            <div className="tw-h-5 tw-w-5 tw-rounded-full tw-border tw-flex tw-items-center tw-justify-center tw-mb-4 tw-border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="tw-h-2 tw-w-2 tw-text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="tw-font-bold tw-text-xl tw-text-white tw-mb-4 tw-relative tw-z-50">
              {article.Name}
            </h1>

            <p className="tw-font-normal tw-text-base tw-text-slate-500 tw-mb-4 tw-relative tw-z-50">
              {article.Subtitle}
            </p>

            <button className="tw-border tw-px-4 tw-py-1 tw-rounded-lg tw-border-gray-500 tw-text-gray-300">
              Explore
            </button>

            {/* The Festive Part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogListing;

// import React from "react";
// import { Meteors } from "../ui/meteors";

// interface Article {
//   Name: string;
//   Subtitle: string;
// }

// interface Content {
//   articles: Article[];
// }

// interface BlogListingProps {
//   content: Content;
// }

// const BlogListing: React.FC<BlogListingProps> = ({ content }) => {
//   return (
//     <div className="tw-grid tw-grid-cols-3 tw-gap-4">
//       {content.articles.map((article, index) => (
//         <>
//           <div className="tw-relative tw-shadow-xl tw-bg-gray-900 tw-border tw-border-gray-800 tw-px-4 tw-py-8 tw-h-full tw-overflow-hidden tw-rounded-2xl tw-flex tw-flex-col tw-items-start">
//             <div className="tw-h-5 tw-w-5 tw-rounded-full tw-border tw-flex tw-items-center tw-justify-center tw-mb-4 tw-border-gray-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="tw-h-2 tw-w-2 tw-text-gray-300"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//                 />
//               </svg>
//             </div>

//             <h1 className="tw-font-bold tw-text-xl tw-text-white tw-mb-4 tw-relative tw-z-50">
//               {article.Name}
//             </h1>

//             <p className="tw-font-normal tw-text-base tw-text-slate-500 tw-mb-4 tw-relative tw-z-50">
//               {article.Subtitle}
//             </p>

//             <button className="tw-border tw-px-4 tw-py-1 tw-rounded-lg tw-border-gray-500 tw-text-gray-300">
//               Explore
//             </button>

//             {/* Meaty part - Meteor effect */}
//             <Meteors number={20} />
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default BlogListing;

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = {
  path: string;
  data: any;
};

export default function Posts({ path, data }: Props) {
  return (
    <Layout path={path}>
      <SEO title="Posts - Quests In Code" />
      <div className="mt-20">
        {/* {data.allMdx.edges.map(({ node }, index) => {
        const hearts: JSX.IntrinsicElements['img'][] = [];
        for (let i = 0; i < Math.ceil(node.timeToRead / 3); i++) {
          hearts.push(
            <img
              key={i}
              src={heart}
              alt="Pixel heart"
              style={{ height: '24px' }}
              className={i > 0 ? 'ml-1' : ''}
            />
          );
        }

        const postTags = !node.frontmatter.tags.length
          ? null
          : node.frontmatter.tags.map((tag, index) => (
              <Link key={index} to={`/topics?topic=${tag}`} className="my-1">
                <span
                  className={
                    'py-1 px-4 text-sm font-semibold tracking-widest rounded-full cursor-pointer transition duration-200 ease-in-out bg-dblue-100 text-dblue-700 hover:bg-dblue-200 dk:bg-blue-900 dk:text-dblue-100 dk-hover:bg-blue-700' +
                    (index >= 1 ? ' ml-4' : '')
                  }
                >
                  {tag}
                </span>
              </Link>
            ));

        return (
          <div className="mt-12" key={index}>
            <div className="mb-4 flex flex-wrap">{postTags}</div>
            <Link to={node.fields.slug}>
              <h2 className="my-2">{node.frontmatter.title}</h2>
              <div className="mb-8 text-gray-700 dk:text-gray-500 flex flex-col sm:flex-row sm:text-center">
                <span className="mr-2">
                  {node.frontmatter.date}{' '}
                  <span className="hidden sm:inline-block">•</span>{' '}
                </span>
                <span className="flex items-center">
                  <span className="flex mr-2">{hearts}</span> {node.timeToRead}{' '}
                  minute read
                </span>
              </div>
              <p className="-mt-2">
                {node.frontmatter.description
                  ? node.frontmatter.description
                  : node.excerpt}
              </p>
            </Link>
          </div>
        );
      })} */}
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query PostsIndexPosts {
//     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//       edges {
//         node {
//           excerpt
//           timeToRead
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             description
//             title
//             tags
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

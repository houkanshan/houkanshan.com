import React from 'react';
import Img from 'gatsby-image';
import { formatPostDate } from '../utils/helpers';
import { rhythm, sansSerifFont } from '../utils/typography';

import './Showcase.styl';

const coverWidth = 224;
const coverHeight = 140;

function Showcase({ posts, isDetailed = false }) {
  return (
    <section className="showcase" data-is-detailed={isDetailed}>
      {posts.map(({ node }, i) => (
        <article className="works-item" key={i}>
          <div className="works-hd">
            <div
              className={`cover`}
              style={{
                width: 224,
                height: 140,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 0 0 0.5px #ddd',
              }}
            >
              <a href={node.frontmatter.url} className="" target="_blank">
                {node.frontmatter.cover && (
                  <Img
                    fixed={node.frontmatter.cover.childImageSharp.fixed}
                    style={{ display: 'block' }}
                  />
                )}
              </a>
            </div>
          </div>
          <div className="works-bd">
            <div className="title">
              <a href={node.frontmatter.url} className="" target="_blank">
                {node.frontmatter.title}
              </a>
            </div>
            {isDetailed && (
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            )}
            <div className="desc">{node.frontmatter.spoiler}</div>
            <div className="date">
              {formatPostDate(node.frontmatter.date, 'en')}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Showcase;

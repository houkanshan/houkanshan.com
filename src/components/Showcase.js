import React from 'react';
import Img from 'gatsby-image';
import { formatPostDate } from '../utils/helpers';
import { rhythm, sansSerifFont } from '../utils/typography';
import Video from './Video';

import './Showcase.styl';

const coverWidth = 224;
const coverHeight = 160;
const coverSize = {
  width: coverWidth,
  height: coverHeight,
};

function Showcase({ posts, isDetailed = false }) {
  return (
    <section className="showcase" data-is-detailed={isDetailed}>
      {posts.map(({ node }, i) => {
        const hasVideo = node.frontmatter.mp4;
        return (
          <article className="works-item" key={i}>
            <div className="works-hd">
              <div
                className={`cover`}
                data-has-video={!!hasVideo}
                style={{
                  ...coverSize,
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 0 0 0.5px var(--hr)',
                }}
              >
                <a
                  href={node.frontmatter.url}
                  className=""
                  target="_blank"
                  style={{
                    display: 'block',
                    ...coverSize,
                  }}
                >
                  {node.frontmatter.cover.childImageSharp ? (
                    <Img
                      className="image-wrapper"
                      fixed={node.frontmatter.cover.childImageSharp.fixed}
                      fadeIn={false}
                    />
                  ) : (
                    <div
                      className="image-wrapper"
                      style={{
                        position: 'relative',
                        ...coverSize,
                      }}
                    >
                      <img
                        src={node.frontmatter.cover.publicURL}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                        }}
                      />
                    </div>
                  )}
                  {node.frontmatter.mp4 && (
                    <Video
                      size={coverSize}
                      mp4={node.frontmatter.mp4.publicURL}
                      webm={node.frontmatter.webm.publicURL}
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
              {/* {(
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              )} */}
              <div className="content">{node.frontmatter.description}</div>
              <div className="desc">{node.frontmatter.spoiler}</div>
              <div className="date">
                {formatPostDate(node.frontmatter.date, 'en')}
                {node.frontmatter.event ? ` - ${node.frontmatter.event}` : ''}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Showcase;

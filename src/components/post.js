import React from 'react';
const Post = ({ tittle, date }) => {
    return (
        <article>
            <h2>{tittle}</h2>
            <h3>{date}</h3>
        </article>
    );
}

export default Post;
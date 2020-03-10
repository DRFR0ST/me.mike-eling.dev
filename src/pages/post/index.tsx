import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '../../utils/hooks/usePost';
import ReactMarkdown from 'react-markdown';

const Post = () => {
    let { id } = useParams();

    // @ts-ignore
    const {post, error, loading} = usePost(id);
    console.log(post, error, loading);
    if(error) return <h4>Wystąpił błąd, {error}</h4>
    if(loading) return <h4>Loading...</h4>;
    if(!post) return null;

    return <ReactMarkdown source={post} />
}

export default Post;
import { useState, useEffect } from 'react';


const usePost = (id: string) => {
    const [post, setPost] = useState<any>();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(id);

    useEffect(() => {
        setLoading(true);
        const f = async () => {
            fetch(`../../posts/${id}/index_en_US.md`).then(response => {
                return response.text();
            })
            .then(data => {
                console.log('resp', data);
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message)
                setLoading(false);
            })
            
        }
        f();
    }, [id]);

    return {post, error, loading}
}

export default usePost;
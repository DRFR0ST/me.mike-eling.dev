import { useState, useEffect } from 'react';
// @ts-ignore
import {useLitteraMethods} from 'react-littera'


const usePost = (id: string) => {
    const [post, setPost] = useState<any>();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const methods = useLitteraMethods();
    const language = methods.getLocale();
    console.log(id);

    useEffect(() => {
        setLoading(true);
        const f = async () => {
            fetch(`https://raw.githubusercontent.com/DRFR0ST/me.mike-eling.dev/master/src/posts/${id}/index_${language}.md`).then(response => {
                return response.text();
            })
            .then(data => {
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
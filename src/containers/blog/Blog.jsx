import { Article } from '../../components';
import './blog.css';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3-blog section-padding" id='blog'>
            <div className="gpt3-blog-heading">
                <h1 className='gradient-text'></h1>
            </div>
            <div className="gpt3-blog-container">
                <div className="gpt3-blog-container-groupA">
                    <Article imageUrl={blog1} />
                </div>
                <div className="gpt3-blog-container-groupB">
                    <Article imageUrl={blog2} />
                    <Article imageUrl={blog3} />
                    <Article imageUrl={blog4} />
                    <Article imageUrl={blog5} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
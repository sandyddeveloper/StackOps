import BlogText from "../sub/BlogText";
import { BlogScroll } from "../sub/BlogContainer";

const BlogSection = () => {
    return (
      <div className="z-50 bg-transparent" id="blog">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
          
            <BlogText />
            <BlogScroll />
        </div>
      </div>
    );
  };
  
  export default BlogSection;
  
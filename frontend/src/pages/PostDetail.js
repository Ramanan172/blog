export default function PostDetail(){
    return <main className="container my-4">
    <div className="row">
        <article className="col-lg-8">
            <h2 className="blog-post-title">Blog Post Title</h2>
            <p className="blog-post-meta">January 1, 2024 by <a href="#">Author</a></p>

            <img className="mb-3 img-fluid" src="https://via.placeholder.com/300" alt=""/>
            
            <div className="blog-post-content">
                <p>This is where your blog post content goes. You can write your content here and format it as needed.</p>
                <p>You can include text, images, videos, and any other media that enriches your blog post.</p>
            </div>
        </article>

        <aside className="col-lg-4">
            <div className="p-4 bg-light">
                <h3 className="mb-4">Related Posts</h3>

                
                <div className="mb-4">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image"/>
                        </div>
                        <div className="col">
                            <h4><a href="#" className="text-decoration-none">Related Post Title 1</a></h4>
                            <p>Short description or excerpt of the related post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                
                <div className="mb-4">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image"/>
                        </div>
                        <div className="col">
                            <h4><a href="#" className="text-decoration-none">Related Post Title 2</a></h4>
                            <p>Short description or excerpt of the related post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</main>
}
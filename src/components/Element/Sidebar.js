import React,{Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SidebarCarousel from './SidebarCarousel';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

//Images
const pic1 = '/assets/images/blog/recent-blog/pic1.jpg';
const pic2 = '/assets/images/blog/recent-blog/pic2.jpg';
const pic3 = '/assets/images/blog/recent-blog/pic3.jpg';
const gallery1 = '/assets/images/gallery/pic1.jpg';
const gallery2 = '/assets/images/gallery/pic2.jpg';
const gallery3 = '/assets/images/gallery/pic3.jpg';
const gallery4 = '/assets/images/gallery/pic4.jpg';
const gallery5 = '/assets/images/gallery/pic5.jpg';
const gallery7 = '/assets/images/gallery/pic7.jpg';
const gallery8 = '/assets/images/gallery/pic8.jpg';
const gallery9 = '/assets/images/gallery/pic9.jpg';

const widgetPost =  [
	{image: pic1, },{image: pic2, },{image: pic3, },
];
const postThum = [
	{images: gallery1}, {images: gallery2}, {images: gallery3 }, {images: gallery4}, 
	{images: gallery5}, {images: gallery7}, {images: gallery8}, {images: gallery9}, 
];


class Sidebar extends Component{
	render(){
		return(
			<>
				<aside className="side-bar">
					<div className="widget">
						<h5 className="widget-title style-1">Search</h5>
						<div className="search-bx style-1">
							<form role="search" method="post">
								<div className="input-group">
									<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
									<span className="input-group-btn">
										<button type="submit" className="fa fa-search text-primary"></button>
									</span>
								</div>
							</form>
						</div>
					</div>
					<div className="widget recent-posts-entry">
						<h5 className="widget-title style-1">Recent Posts</h5>
						<div className="widget-post-bx">
							{widgetPost.map((item,index)=>(
								<div className="widget-post clearfix" key={index}>
									<div className="dlab-post-media"> <Image src={item.image} width={200} height={123} alt="" /> </div>
									<div className="dlab-post-info">
										<div className="dlab-post-header">
											<h6 className="post-title"><Link to={"#"}>Title of first blog post entry</Link></h6>
										</div>
										<div className="dlab-post-meta">
											<ul>
												<li className="post-author">By Jone</li>
												<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="widget widget-newslatter">
						<h5 className="widget-title style-1">Newsletter</h5>
						<div className="news-box">
							<p>Enter your e-mail and subscribe to our newsletter.</p>
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="input-group">
									<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
									<button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
								</div>
							</form>
						</div>
					</div>	
					<div className="widget widget_gallery gallery-grid-4">
						<h5 className="widget-title style-1">Our services</h5>
						<ul>
							<SimpleReactLightbox>
								<SRLWrapper>
									{postThum.map((data,index)=>(
										<li key={index}>
											<div className="dlab-post-thum">
												<Image src={data.images} alt="" width={100} height={100}/>
											</div>
										</li>
									))}
								</SRLWrapper>
							</SimpleReactLightbox>	
						</ul>
					</div>
					<div className="widget widget_archive">
						<h5 className="widget-title style-1">Categories List</h5>
						<ul>
							<li><Link to={"#"}>aciform</Link></li>
							<li><Link to={"#"}>championship</Link></li>
							<li><Link to={"#"}>chastening</Link></li>
							<li><Link to={"#"}>clerkship</Link></li>
							<li><Link to={"#"}>disinclination</Link></li>
						</ul>
					</div>
					<div className="widget widget-project">
						<h5 className="widget-title style-1">Our Project</h5>
							<SidebarCarousel /> 
					</div>
					<div className="widget widget_tag_cloud radius">
						<h5 className="widget-title style-1">Tags</h5>
						<div className="tagcloud">
							<Link to={"#"} className="mr-1">Design</Link>
							<Link to={"#"} className="mr-1">User interface</Link>
							<Link to={"#"} className="mr-1">SEO</Link>
							<Link to={"#"} className="mr-1">WordPress</Link>
							<Link to={"#"} className="mr-1">Development</Link>
							<Link to={"#"} className="mr-1">Joomla</Link>
							<Link to={"#"} className="mr-1">Design</Link>
							<Link to={"#"} className="mr-1">User interface</Link>
							<Link to={"#"} className="mr-1">SEO</Link>
							<Link to={"#"} className="mr-1">WordPress</Link>
							<Link to={"#"} className="mr-1">Development</Link>
							<Link to={"#"} className="mr-1">Joomla</Link>
							<Link to={"#"} className="mr-1">Design</Link>
							<Link to={"#"} className="mr-1">User interface</Link>
							<Link to={"#"} className="mr-1">SEO</Link>
							<Link to={"#"} className="mr-1">WordPress</Link>
							<Link to={"#"} className="mr-1">Development</Link>
							<Link to={"#"} className="mr-1">Joomla</Link>
						</div>
					</div>
				</aside>
			</>
		)
	}
}
export default Sidebar;
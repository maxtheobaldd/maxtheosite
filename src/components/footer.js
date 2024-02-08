/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        maxi's Website, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
      </p>
      <p>My Only Domain: <Link to="/">maxtheo.tk</Link></p>
    </div>
  </footer>
)

export default Footer

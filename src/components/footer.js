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
        Max Theobald's Website, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        -<Link to="/">maxtheo.tk</Link>
      </p>
    </div>
  </footer>
)

export default Footer

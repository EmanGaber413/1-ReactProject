import { Helmet } from "react-helmet";

export default function Seo(title,keywords,description) {
  return <>
  <Helmet>
    <title>{title}</title>
<meta name="keywords" content={keywords} />
<meta name="description" content={description} />
  </Helmet>
  </>
}

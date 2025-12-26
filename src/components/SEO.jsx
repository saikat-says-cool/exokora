import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = "" }) => {
    const siteTitle = "Exokora | Private Outbound Infrastructure";
    const defaultDescription = "Done-for-you outbound for fractional executives. We find the clients. You close the deals.";
    const config = {
        domain: "https://exokora.online"
    };

    const fullTitle = title ? `${title} | Exokora` : siteTitle;
    const fullDescription = description || defaultDescription;
    const url = `${config.domain}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={`${config.domain}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={fullDescription} />
            <meta property="twitter:image" content={`${config.domain}/og-image.jpg`} />
        </Helmet>
    );
};

export default SEO;

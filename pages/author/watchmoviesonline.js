import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WatchMoviesOnline ({ movie }) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        let searchTermLower = searchTerm.toLowerCase();
        let searchURL;
        if (searchTermLower.includes('tv show')) {
            searchURL = `https://www.google.com/search?q=site:https://watchmoviesonline.vercel.app/tvshow/${encodeURIComponent(searchTermLower)}-2024`;
        } else {
            searchURL = `https://www.google.com/search?q=site:https://watchmoviesonline.vercel.app/movie/${encodeURIComponent(searchTermLower)}-2024`;
        }
        router.push(searchURL);
    };
    return (
        <div className={`w-full bg-gray-600 shadow`}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Watch Movies Online™ - The Best Movies Platform HD Movies</title>
                {/* Add your other meta tags here */}
                <script
                    type="application/ld+json"
                    className="rank-math-schema"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Person",
                                    "@id": "https://watchmoviesonline.vercel.app/#person",
                                    "name": "Dr Trailer"
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://watchmoviesonline.vercel.app/#website",
                                    "url": "https://watchmoviesonline.vercel.app",
                                    "name": "Watch Movies Online™",
                                    "publisher": {
                                        "@id": "https://watchmoviesonline.vercel.app/#person"
                                    },
                                    "inLanguage": "en-US"
                                },
                                {
                                    "@type": "ProfilePage",
                                    "@id": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/#webpage",
                                    "url": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/",
                                    "name": "Dr Trailer",
                                    "isPartOf": {
                                        "@id": "https://watchmoviesonline.vercel.app/#website"
                                    },
                                    "inLanguage": "en-US",
                                    "mainEntityOfPage": {
                                        "@id": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/#webpage"
                                    }
                                },
                                {
                                    "@type": "Person",
                                    "@id": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/",
                                    "name": "Dr Trailer",
                                    "url": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/",
                                    "image": {
                                        "@type": "ImageObject",
                                        "@id": "https://secure.gravatar.com/avatar/5d6510600085b5328aa1ab8e9a14e02a?s=96&d=mm&r=g",
                                        "url": "https://secure.gravatar.com/avatar/5d6510600085b5328aa1ab8e9a14e02a?s=96&d=mm&r=g",
                                        "caption": "Dr Trailer",
                                        "inLanguage": "en-US"
                                    },
                                    "sameAs": [
                                        "http://watchmoviesonline.vercel.app"
                                    ],
                                    "mainEntityOfPage": {
                                        "@id": "https://watchmoviesonline.vercel.app/author/watchmoviesonline/#webpage"
                                    }
                                }
                            ]
                        }`
                    }}
                ></script>
            </Head>
            <div id="main">
            <h1 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Watch Movies Online™ - The Best Movies Platform HD Movies {movie && movie.title} </h1>
                <div className="container" style={{justifyContent: 'center', alignItems: 'center', height: '10vh', marginTop: '100px', }}>
                    <div className="home-main">
                        <div className="hm-logo"><a title="" href="https://watchmoviesonline.vercel.app" id="logo-home"></a></div>
                        <div className="addthis_inline_share_toolbox mb10"></div>
                        <div id="hm-search">
                            <div id="search-homepage" className="search-content">
                                <form onSubmit={handleSearch}>
                                    <input
                                        className="form-control search-input"
                                        type="text"
                                        placeholder="Search.."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                <div id="search-homepage-results"></div>
                            </div>
                        </div>
                        <div className="hm-button"><a href="https://watchmoviesonline.vercel.app/" className="btn btn-lg btn-successful" style={{ color: '#40D7BC', fontSize: '24px', textShadow: '3px 5px 5px #000' }}>Watch Movies Online™</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

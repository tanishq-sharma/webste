import { v4 as uuid } from 'uuid';

function SocialMedia(){
    const socialMediaArr = [
        {
            id: '1',
            platform: 'Linkedin',
            url: 'https://www.linkedin.com/in/tanishqs/',
            icon: 'fab fa-xl fa-linkedin'
        },
        {
            id: '2',
            platform: 'Github',
            url: 'https://github.com/tanishq-sharma',
            icon: 'fab fa-xl fa-github'
        },
        {
            id: '3',
            platform: 'Medium',
            url: 'https://medium.com/@tanishqsharma0798',
            icon: 'fab fa-xl fa-medium'
        },
        {
            id: '4',
            platform: 'Email',
            url: 'mailto:tanishqsharma0798@gmail.com',  // Use a mailto link for email
            icon: 'fas fa-xl fa-envelope'  // Use the envelope icon for email
        }

    ]

    return(
        <ul className="social-media-container">
            {socialMediaArr && socialMediaArr.map(socialMedia =>{
                return <li className="social-media-icon" key={uuid()}>
                            <a href={socialMedia.url} target="_blank" aria-label={socialMedia.platform}>
                                <i className={socialMedia.icon}></i>
                            </a>
                        </li>
                })
            }
        </ul>
    )
}

export default SocialMedia;
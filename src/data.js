const workExperiences = [
    {
        id: 'e1',
        position_duration: 'August 2022 - current',
        position_title: 'Software Engineer 2',
        company_name: 'Fivetran',
        company_website: 'https://www.fivetran.com/',
        experience_content: 'Implemented secure authentication protocol using Basic Auth, OAuth, IAM, and automated Private Link creation for secure database access. Optimized multi-cloud architecture for seamless microservice orchestration and SQL query performance. Additionally, launched Fivetran\'s official Shopify app, ensuring global security.',
        experience_techstack : ['Java', 'Cloud Computing', 'Databases', 'REST API', 'Docker', 'AWS', 'GCP', 'Azure']
    },
    {
        id: 'e2',
        position_duration: 'August 2021 - August 2022',
        position_title: 'Software Engineer',
        company_name: 'Fivetran',
        company_website: 'https://www.fivetran.com/',
        experience_content: 'Built automated data pipelines for <a href=\"https://www.anaplan.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Anaplan</a>, <a href=\"https://squareup.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Square</a>, <a href=\"https://www.workday.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Workday</a>, <a href=\"https://www.shopify.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Shopify</a>, <a href=\"https://getrecharge.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Recharge</a>, <a href=\"https://www.bigcommerce.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BigCommerce</a>, <a href=\"https://www.affirm.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Affirm</a> and reduced data integrity issues in pipelines by implementing best practices across the firm.',
        experience_techstack : ['Java', 'GraphQL', 'Rest API', 'Webhook', 'Jackson']
    }

]

const listOfProjects = [
    {
        id: 'p1',
        project_title: 'Shorten-ly',
        project_description: 'Shorten-ly is a URL shortening service.',
        project_techstack: ['React', 'Nodejs', 'JavaScript', 'MondoDB'],
        project_link: "https://github.com/tanishq-sharma/shorten-ly",
        project_source_code: "https://github.com/tanishq-sharma/shorten-ly",
        project_screenshot: '/assets/projects/project-1.png'
    },
    {
        id: 'p2',
        project_title: 'Cache Routine',
        project_description: 'Full-stack web app implementing a cache routine using LRU algorithm',
        project_techstack: ['Golang', 'Postgres', 'React'],
        project_link: "https://github.com/tanishq-sharma/caching_api",
        project_source_code: "https://github.com/tanishq-sharma/caching_api",
        project_screenshot: '/assets/projects/project-2.png'
    },
    {
        id: 'p3',
        project_title: 'Lane Detection',
        project_description: 'Using Computer vision to detect and mark lanes on road.',
        project_techstack: ['Python', 'Computer Vision'],
        project_link: "https://github.com/tanishq-sharma/Lane-Detection",
        project_source_code: "https://github.com/tanishq-sharma/Lane-Detection",
        project_screenshot: '/assets/projects/project-3.jpg'
    }
]

export {workExperiences, listOfProjects};
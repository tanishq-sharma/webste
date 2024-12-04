import SectionTitle from './SectionTitle';

function About(){
    return(
        <section id="#about">
            <SectionTitle title="About" />

            <p className="about-text">
            Over the past few years, I’ve gained experience in Java, microservices, authentication protocols, and secure communication, focusing on developing systems that are not only optimized but also secure and scalable.
            </p>
            
            <p className="about-text">
                Currently, I'm a Software Engineer at <a href="https://www.fivetran.com" target="_blank" rel="noopener noreferrer">Fivetran</a>. I contribute to the development and maintenance of services that power Fivetran, ensuring our data pipelines are efficient, secure, and reliable.
            </p>

            <p className="about-text">
  Apart from this, I enjoy lifting weights <span style={{ fontSize: '28px' }}>🏋🏻</span>
</p>
        </section>
    )
}

export default About;
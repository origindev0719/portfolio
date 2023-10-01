// import images
import Hero_person from "./assets/images/Hero/person.png";
import software from "./assets/images/Hero/software.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import postman from "./assets/images/Skills/postman.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import next from './assets/images/Skills/next.js.png';
import angular from './assets/images/Skills/angular.png';
import vue from './assets/images/Skills/vue.png';
import react_native from './assets/images/Skills/react_native.png';
import node from './assets/images/Skills/node.png';

import laravel from './assets/images/Skills/laravel.png';
import teamwork from "./assets/images/Skills/teamwork.png";
import python from "./assets/images/Skills/python.png";
import graphql from "./assets/images/Skills/graphql.png";
import symfony from "./assets/images/Skills/symfony.png";
import flask from "./assets/images/Skills/flask.png";
import azure from "./assets/images/Skills/azure.png";
import docker from "./assets/images/Skills/docker.png";
import redis from "./assets/images/Skills/redis.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import cert1 from "./assets/images/Certifications/cert1.png";
import cert2 from "./assets/images/Certifications/cert2.png";
import cert3 from "./assets/images/Certifications/cert3.png";
import cert4 from "./assets/images/Certifications/certificate.png";
import cert5 from "./assets/images/Certifications/cert5.png";
import cert6 from "./assets/images/Certifications/cert6.png";
import cert7 from "./assets/images/Certifications/cert7.png";

import bricoll from "./assets/images/Projects/bricoll.webp";
import boon_bliss from './assets/images/Projects/boon_bliss.png'
import project0 from "./assets/images/Projects/img0.png";
import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/img6.png";
import project7 from "./assets/images/Projects/img7.png";


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar from './assets/images/Hero/avatar.png';

import hireme_person from "./assets/images/Hireme/person.png";


import {GrMail} from "react-icons/gr";
import {GiSkills} from "react-icons/gi";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import {TbCertificate, TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {AiFillGithub, AiFillLinkedin, AiFillPhone} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import {TbBrandFiverr} from "react-icons/tb";
import {RiProjectorLine, RiServiceLine} from "react-icons/ri";

const Nav = [
    {
        link: "#home",
        icon: TbSmartHome,
    },
    {
        link: "#aboutme",
        icon: BiUser,
    },
    {
        link: "#skills",
        icon: GiSkills,
    },
    {
        link: "#certifications",
        icon: TbCertificate,
    },
    {
        link: "#services",
        icon: RiServiceLine,
    },
    {
        link: "#projects",
        icon: RiProjectorLine,
    },
    {
        link: "#contact",
        icon: MdOutlinePermContactCalendar,
    },
];

const social_media = [
    {
        text: "james.lee.wa75@gmail.com",
        icon: GrMail,
        link: "mailto:james.lee.wa75@gmail.com",
    },
    {
        text: "Samuel James",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/samuel-james-0738a0234/",
    },
    {
        text: "+1 815 981 4823",
        icon: AiFillPhone,
    },
    
    {
        text: "Samuel James",
        icon: AiFillGithub,
        link: "https://github.com/origindev0719",
    },
];
const cert_content = [
    {
        title: "MongoDB Node.js Developer Path",
        // link: "https://learn.mongodb.com/c/gQa2lhNtSgqM_tM35YbVkQ",
        image: cert1,
    },
    {
        title: "React + Redux ",
        // link: "https://www.sololearn.com/certificates/CT-MHOKZQZV",
        image: cert4,
    },
    {
        title: "Postman API Fundamentals Student Expert",
        link: "https://badgr.com/public/assertions/JKnbd3dAQwCPpg3dxr1n_A?identity__email=sohaib.manah@etu.uae.ac.ma",
        image: cert5,
    },
];

export const content = {
    en: {
        Nav,
        hero: {
            title: "Senior Full Stack Developr",
            firstName: "Samuel",
            LastName: "James",
            btnText: "View my resume",
            btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: avatar,
            hero_content: [
                {
                    count: `+${new Date(new Date() - new Date("2015-01-01")).getFullYear() - 1970}`,
                    text: "Year of Experience in Web development And software development",
                },
                {
                    count: "10+",
                    text: "Projects Worked in my career",
                },
            ],
        },
        skills: {
            title: "Skills",
            subtitle: "MY TOP SKILLS",
            skills_content: [
                {
                    name: "React js",
                    para: "with Redux - Hooks- Material UI - Typescript - Tailwind css",
                    logo: reactjs,
                },
                {
                    name: "TypeScript | JavaScript",
                    para: "with React & Next js & Node js",
                    logo: typescript,
                },
                {
                    name: "Angular",
                    para: "with Angular & Typescript & Node js",
                    logo: angular,
                },
                {
                    name: "React Native",
                    para: "with React Native & Typescript & Node js",
                    logo: react_native,
                },
                {
                    name: "Laravel",
                    para: "with Laravel & MySQL",
                    logo: laravel,
                },
                {
                    name: "Vue",
                    para: "with Vue & Typescript & Node js",
                    logo: vue,
                },
                {
                    name: "Next JS",
                    para: "with Next js & Node js",
                    logo: next,
                },
                {
                    name: "Node js | Express.js ",
                    para: "with  Rest Api |  GraphQL",
                    logo: nodejs,
                },
                {
                    name: "MongoDB developer | DBA",
                    para: "in NodeJs & Java & Php",
                    logo: mongodb,
                },
                
                
                // {
                //     name: "Symfony",
                //     para: "Full stack Ecommerce App",
                //     logo: symfony,
                // },
                // {
                //     name: "Flask",
                //     para: "Crud app with angular to manage cars",
                //     logo: flask,
                // },
                {
                    name: "Graphql",
                    para: "With Apollo server/client",
                    logo: graphql,
                },
                {
                    name: "MySql | PostgreSql",
                    para: "and relational data modeling with UML & ERD & MERISE ",
                    logo: mysql,
                },
                {
                    name: "c | c++",
                    para: "university projects | data structures & algorithms | OOP",
                    logo: cpp,
                },
                {
                    name: "Linux (Debian based)",
                    para: "Familiar with bash scripting & system administration basics",
                    logo: linux,
                },
                {
                    name: "Git | GitHub",
                    para: "Familiar with git and github",
                    logo: git,
                },
                // {
                //     name: "Data Structure | Problem Solving | Graph Theory",
                //     para: "in c & c++ & java & javascript",
                //     logo: datastructure,
                // },

                {
                    name: "Postman",
                    para: "Automated API testing",
                    logo: postman,
                },
                {
                    name: "Java",
                    para: "Swing (Desktop Graphical User Interface)",
                    logo: java,
                },
                // {
                //     name: "UML | Data Modeling(Sql & NoSql)",
                //     para: "Software Design & Analysis with common design patterns",
                //     logo: uml,
                // },
                {
                    name: "teamwork | communication",
                    para: "I like to work in a team and I am a good communicator",
                    logo: teamwork,
                },
                {
                    name: "Microsoft Azure",
                    para: "with Azure blob storage & Azure VM & Azure App Service",
                    logo: azure,
                }, {
                    name: "Docker",
                    para: "with docker-compose , portainer ...",
                    logo: docker,
                }, {
                    name: "redis",
                    para: "for caching and session management",
                    logo: redis,
                }, {
                    name: "Python",
                    para: "in Graph theory",
                    logo: python,
                },
            ],
        },
        services: {
            title: "Services",
            subtitle: "WHAT I OFFER",
            service_content: [
                {
                    title: "Web Development",
                    para: "As a web developer with 8+ year of experience in this field, I have worked on a variety of projects, from small personal websites to medium web applications. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies and frameworks.",
                    logo: services_logo1,
                },
                {
                    title: "Mobile App Development",
                    para: "As a mobile app developer with over 5 years of experience, I've honed my skills on a range of projects, from compact personal apps to comprehensive mobile applications. I have a deep understanding of both front-end and back-end development, with a specific focus on mobile development technologies. I am proficient in React Native, used for building native mobile apps using JavaScript and React. I have significant experience with Flutter, Google's UI toolkit for crafting beautiful, natively compiled applications from a single codebase. Additionally, I am skilled in using Ionic, a popular framework for developing hybrid mobile applications.",
                    logo: services_logo2,
                },
                {
                    title: "Data modeling & Prototyping",
                    para: "This is the most important phase and crucial step in any project development.And with my experience in this field I can help you to make your project a success",
                    logo: services_logo3,
                },
            ],
        },
        Projects: {
            title: "Projects",
            subtitle: "MY CREATION",
            project_content: [
                {
                    title: "Boon & Bliss",
                    image: boon_bliss,
                    link: "https://https://www.boonandbliss.com/",
                },
                {
                    title: "Bougeons Ensemble ",
                    link: "https://bougeonsensemble.social/",
                    image: project7,
                    githubLink: "https://github.com/orgs/Bougeons-ensemble/",
                },
                {
                    title: "Multiform Registration page",
                    image: project2,
                    link: "https://registration.itgeeks.social/",
                    githubLink: "https://github.com/ItGeeks-fstt/itgeeksinscription",
                },
                {
                    title: "Recipe App(Hackathon)",
                    link: "https://rich-lime-piglet-tam.cyclic.app/#5ed6604591c37cdc054bcf74",
                    image: project3,
                    githubLink: "https://github.com/sohaibMan/FORKIFY-FIND-YOUR-RECIPE",
                },
                {
                    title: "Natours (tourism website)",
                    link: "https://sohaibman.github.io/Natours.github.io/",
                    image: project4,
                    githubLink: "https://github.com/sohaibMan/Natours.github.io",
                },
                {
                    title: "Meal delivered",
                    link: "https://sohaibman.github.io/Omifood.github.io/",
                    image: project5,
                    githubLink: "https://github.com/sohaibMan/Omifood.github.io",
                },
            ],
        },
        Testimonials: {
            title: "Testimonials",
            subtitle: "MY CLIENT REVIEWS",
            testimonials_content: [
                {
                    review:
                        "“Sohaib was terrific, did a great job understanding my projects' needs, and delivered super fast! I highly recommend his services.”",
                    img: avatar3,
                    name: "jean V. Fiver Client",
                    rating: 5

                }, {
                    review:
                        "“I wanted to take a moment to share my positive experience with Sohaib, whom I recently hired to assist with our company's rebranding effort. ”",
                    img: avatar3,
                    name: "khalid D. Fiver Client",
                    rating: 5
                },
                {
                    review:
                        "“Thank you for reaching out and for your great work . we are very satisfied with the final product.Your expertise and professionalism were invaluable to our project, and I have no doubt that you will continue to provide excellent services ”",
                    img: avatar1,
                    name: "Mohamed E. Bougeons ensemble's designer ",
                    rating: 5
                },
                {
                    review:
                        "“I know how important it is to work with reliable, flexible, and responsive individuals, and Sohaib certainly demonstrated these qualities throughout the entire project.  Their expertise and attention to detail were invaluable”",
                    img: avatar2,
                    name: "Manal Z. It Geeks's team leader",
                    rating: 5
                }
            ],
        },
        Aboutme: {
            title: "About Me",
            subtitle: "Hello Dear,This is a brief introduction about me",
            image1: software,
            image2: software,
            para: "A passionate Full stack developer with 8+ years of history who possesses a broad skill set for web and mobile application development. I’m fascinated about the fact that we can do everything we imagine, just need to know how, and that's the challenging part I can’t live without.",
            btnText: "More about me",
        },
        Contact: {
            title: "Contact Me",
            // subtitle: "LET'S GET IN TOUCH"
            social_media,
        },
        Certifications: {
            title: "Certifications",
            subtitle: "My Certifications",
            cert_content,
        },
    },
    fr: {
        Nav,
        hero: {
            title: "ingénieur logiciel",
            firstName: "SOHAIB",
            LastName: "MANAH",
            btnText: "Consulter mon curriculum vitæ",
            btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: Hero_person,
            hero_content: [
                {
                    count: `+${new Date(new Date() - new Date("2021-01-01")).getFullYear() - 1970}`,
                    text: "An d'expérience en développement Web et en développement de logiciels",
                },
                {
                    count: "10+",
                    text: "Projets Travaillé dans ma carrière",
                },
            ],
        },
        skills: {
            title: "compétences",
            subtitle: "MES MEILLEURES COMPÉTENCES",
            skills_content: [
                {
                    name: "MongoDB développeur | DBA",
                    para: "avec NodeJs & Java & Php",
                    logo: mongodb,
                },
                {
                    name: "Node js | Express.js ",
                    para: "avec  Rest Api |  GraphQL",
                    logo: nodejs,
                },
                {
                    name: "React js | Next js",
                    para: "avec Redux - Hooks- Material UI - Typescript - Tailwind css",
                    logo: reactjs,
                }, {
                    name: "Symfony",
                    para: "Application full stack d'ecommerce",
                    logo: symfony,
                },
                {
                    name: "Flask",
                    para: "Application crud avec angular pour gérer les voitures",
                    logo: flask,
                },

                {
                    name: "MySql | PostgreSql",
                    para: "plus la modélisation de données relationnelles avec UML & ERD & MERISE ",
                    logo: mysql,
                },
                {
                    name: "c | c++",
                    para: "projets universitaires | structures de données et algorithmes | POO",
                    logo: cpp,
                },
                {
                    name: "Linux (Basées sur Debian)",
                    para: "Connaissance des bases de script bash et d'administration système",
                    logo: linux,
                },
                {
                    name: "Git | GitHub",
                    para: "Connaissance de git and github",
                    logo: git,
                },
                {
                    name: "Structure des données | Résolution de problèmes | Théorie des graphes",
                    para: "en c & c++ & java & javascript",
                    logo: datastructure,
                },

                {
                    name: "Postman",
                    para: "L'automatisation des test d'API",
                    logo: postman,
                },
                {
                    name: "Java",
                    para: "Swing (Interface utilisateur graphique)",
                    logo: java,
                },
                {
                //     name: "conception UML | Modélisation des données (Sql & NoSql)",
                //     para: "Conception et analyse de logiciels avec des modèles de conception communs",
                //     logo: uml,
                // },
                // {
                    name: "TypeScript | JavaScript",
                    para: "avec React & Next js & Node js",
                    logo: typescript,
                },
                // {
                //     name: "Travail en équipe | communication",
                //     para: "J'aime travailler en équipe et je suis un bon communicateur",
                //     logo: teamwork,
                // },
                {
                    name: "Microsoft Azure",
                    para: "avec Azure blob storage & Azure VM & Azure App Service",
                    logo: azure,
                }, {
                    name: "Docker",
                    para: "avec docker-compose , portainer ...",
                    logo: docker,
                }, {
                    name: "redis",
                    para: "pour la mise en cache et la gestion des sessions",
                    logo: redis,
                },
                {
                    name: "Python",
                    para: "avec la Théorie des graphes",
                    logo: python,
                },
                {
                    name: "Graphql",
                    para: "avec la apollo client/serveurs",
                    logo: graphql,
                },
            ],
        },
        services: {
            title: "Les services",
            subtitle: "ce que j'offre",
            service_content: [
                {
                    title: "Développement web",
                    para: "En tant que développeur Web avec plus de 1 an d'expérience, j'ai travaillé sur une variété de projets, des petits sites Web personnels aux applications Web moyennes. J'ai de l'expérience en développement front end et back end, et je suis à l'aise de travailler avec une variété de technologies.",
                    logo: services_logo1,
                },
                {
                    title: "Développeur MongoDB | DBA",
                    para: "Garder vos données sûres et sécurisées et persistantes est ma priorité et je peux vous aider à le faire avec mon expérience dans ce domaine",
                    logo: services_logo2,
                },
                {
                    title: "Modélisation et conception du project",
                    para: "Il s'agit de la phase la plus importante et de l'étape cruciale de tout développement de projet. Et avec mon expérience dans ce domaine, je peux vous aider à faire de votre projet un succès",
                    logo: services_logo3,
                },
            ],
        },
        Projects: {
            title: "Projects",
            subtitle: "Ma création",
            project_content: [
                {
                    title: "site web de freealnce -- 'bricoll'",
                    image: bricoll,
                    githubLink: "https://github.com/sohaibMan/bricoll",
                },
                {
                    title: "It geeks ",
                    link: "https://itgeeks.social/",
                    image: project1,
                    githubLink: "https://github.com/ItGeeks-fstt/itgeeks",
                },
                {
                    title: "Bougeons Ensemble ",
                    link: "https://bougeonsensemble.social/",
                    image: project7,
                    githubLink: "https://github.com/orgs/Bougeons-ensemble/",
                },
                {
                    title: "Page d'inscription multiforme",
                    image: project2,
                    link: "https://registration.itgeeks.social/",
                    githubLink: "https://github.com/ItGeeks-fstt/itgeeksinscription",
                },
                {
                    title: "Application de recettes (Hackathon)",
                    link: "https://rich-lime-piglet-tam.cyclic.app/#5ed6604591c37cdc054bcf74",
                    image: project3,
                    githubLink: "https://github.com/sohaibMan/FORKIFY-FIND-YOUR-RECIPE",
                },
                {
                    title: "Natours (tourism website)",
                    link: "https://sohaibman.github.io/Natours.github.io/",
                    image: project4,
                    githubLink: "https://github.com/sohaibMan/Natours.github.io",
                },
                {
                    title: "Repas livré",
                    link: "https://sohaibman.github.io/Omifood.github.io/",
                    image: project5,
                    githubLink: "https://github.com/sohaibMan/Omifood.github.io",
                },
                {
                    title: "Bankist (site web de la banque)",
                    link: "https://sohaibman.github.io/Bankist.github.io/",
                    image: project6,
                    githubLink: "https://github.com/sohaibMan/Bankist.github.io",
                },
            ],
        },
        Testimonials: {
            title: "Témoignages",
            subtitle: "ÉVALUATIONS DE MES CLIENTS",
            testimonials_content: [
                {
                    review:
                        "“Merci d’avoir communiqué avec nous et de l’excellent travail que vous avez accompli.  nous sommes très satisfaits du produit final, votre expertise et votre professionnalisme ont été inestimables pour notre projet, et je n’ai aucun doute que vous continuerez à offrir d’excellents services.“",
                    img: avatar1,
                    name: "Mohamed E. Bougeons ensemble club ",
                },
                {
                    review:
                        "“Je sais à quel point il est important de travailler avec des personnes fiables, flexibles et réactives, et Sohaib a certainement démontré ces qualités tout au long du projet.  Leur expertise et leur souci du détail étaient inestimables",
                    img: avatar2,
                    name: "Manal Z. chef d'équipe d'It Geeks",
                },
                {
                    review:
                        "“Sohaib était formidable, a fait un excellent travail en comprenant les besoins de mes projets, et livré super rapide! Je recommande vivement ses services.”",
                    img: avatar3,
                    name: "jean V. Fiverr Client",
                }, {
                    review:
                        "“Je voulais prendre un moment pour partager mon expérience positive avec Sohaib, que j’ai récemment embauché pour aider à l’effort de rebranding de notre entreprise. ”",
                    img: avatar3,
                    name: "khalid D. Fiverr Client",
                },
            ],
        },
        Aboutme: {
            title: "A propos de moi",
            subtitle: "Bonjour Cher,Ceci est une brève introduction sur moi",
            image1: hireme_person,
            image2: hireme_person,
            para: "Bonjour cher, je suis un ingénieur logiciel senior, j’aime construire des logiciels, essayer de nouvelles technologies, apprendre des gens, et partager mes connaissances avec les autres ",
            btnText: "En savoir plus",
        },
        Contact: {
            title: "contactez-moi",
            subtitle: "RESTONS EN CONTACT",
            social_media,
        },
        Certifications: {
            title: "Certifications",
            subtitle: "mes Certifications",
            cert_content,
        },
    },
};

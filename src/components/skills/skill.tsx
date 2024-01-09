import {
  SiJson, SiYaml, SiJavascript, SiDart, SiLua, SiPostman, SiMysql, SiMicrosoftsqlserver, SiMongodb,
  SiMicrosoftazure, SiComposer, SiXampp, SiRedux, SiNextdotjs, SiJquery, SiChartdotjs, SiThreedotjs,
  SiElectron, SiReactrouter, SiBabel, SiTypescript, SiEslint, SiWebpack, SiFontawesome, SiArchlinux,
  SiKalilinux, SiUnrealengine, SiBlender, SiElementor, SiAdobephotoshop, SiCanva, SiObsstudio
} from "react-icons/si";

import {
  FaSass, FaMarkdown, FaCss3, FaHtml5, FaPhp, FaGithub, FaGitAlt, FaLaravel, FaReact,
  FaAngular, FaVuejs, FaNode, FaBootstrap, FaUbuntu, FaWindows, FaUnity, FaWix, FaWordpress,
} from "react-icons/fa";

import { BsFiletypeScss, BsClockHistory } from "react-icons/bs";
import { TbFileTypeXml, TbBrandCSharp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { MdHttp } from "react-icons/md";
import { ISkill } from "../../types";

export const SkillsJson: ISkill[] = [
  {
    "Title": {
      "language": [
        "Markup Languages", 
        "Linguagens de Marcação", 
        "Lenguajes de marcado"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "HTML 5",
        "Level": "Extremamente Avançado",
        "icon": <FaHtml5 color="#FF5733" />, 
        "link": "https://developer.mozilla.org/en-US/docs/Web/HTML", 
        "percentage": 100 
      },
      { 
        "name": "MarkDown", 
        "Level": "Avançado", 
        "icon": <FaMarkdown color="#455A64" />, 
        "link": "https://www.markdownguide.org", 
        "percentage": 75 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Styling Languages", 
        "Linguagens de Estilização", 
        "Lenguajes de estilo"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Css", 
        "Level": "Extremamente Avançado", 
        "icon": <FaCss3 color="#0277BD" />, 
        "link": "https://developer.mozilla.org/en-US/docs/Web/CSS", 
        "percentage": 100 
      },
      { 
        "name": "Sass", 
        "Level": "Avançado", 
        "icon": <FaSass color="#F06292" />, 
        "link": "https://sass-lang.com/documentation/", 
        "percentage": 75 
      },
      { 
        "name": "Scss", 
        "Level": "Avançado", 
        "icon": <BsFiletypeScss color="#F06292" />, 
        "link": "https://docs.gitlab.com/ee/development/fe_guide/style/scss.html", 
        "percentage": 75 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Programming Languages", 
        "Linguagens de Programação", 
        "Lenguajes de programación"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Javascript", 
        "Level": "Extremamente Avançado", 
        "icon": <SiJavascript color="#FFD600" />, 
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
        "percentage": 100 
      },
      { 
        "name": "Php", 
        "Level": "Intermediário", 
        "icon": <FaPhp color="#00BCD4" />, 
        "link": "https://www.php.net/docs.phpL", 
        "percentage": 50 
      },
      { 
        "name": "C#", 
        "Level": "Intermediário", 
        "icon": <TbBrandCSharp color="#546E7A" />, 
        "link": "https://learn.microsoft.com/en-us/dotnet/csharp/", 
        "percentage": 50 
      },
      { 
        "name": "Dart", 
        "Level": "Extremamente Básico", 
        "icon": <SiDart color="#42A5F5" />, 
        "link": "https://dart.dev/guides", 
        "percentage": 25 
      },
      { 
        "name": "Lua", 
        "Level": "Básico", 
        "icon": <SiLua color="#1565C0" />, 
        "link": "https://www.lua.org/docs.html", 
        "percentage": 25 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Data Transfer Languages", 
        "Linguagens de Transferência de Dados", 
        "Lenguajes de transferencia de datos"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Json", 
        "Level": "Extremamente Avançado", 
        "icon": <SiJson color="#CFD95B" />, 
        "link": "https://www.json.org/json-en.html", 
        "percentage": 100 
      },
      { 
        "name": "Xml", 
        "Level": "Intermediário", 
        "icon": <TbFileTypeXml color="#4DB6AC" />, 
        "link": "https://www.xml.com", 
        "percentage": 50 
      },
      { 
        "name": "Yaml", 
        "Level": "Básico", 
        "icon": <SiYaml />, 
        "link": "https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html", 
        "percentage": 25 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Communication Protocols", 
        "Protocolos de Comunicação", 
        "Protocolos de comunicación"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Http", 
        "Level": "Extremamente Avançado", 
        "icon": <MdHttp color="#008EC7" />, 
        "link": "https://developer.mozilla.org/en-US/docs/Web/HTTP", 
        "percentage": 100 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "API Testing Tools", 
        "Ferramentas para Teste de API", 
        "Herramientas de prueba API"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Postman", 
        "Level": "Avançado", 
        "icon": <SiPostman color="#FD6C35" />, 
        "link": "https://learning.postman.com/docs/introduction/overview/", 
        "percentage": 75 
      },
      {
        "name": "Insominia",
        "Level": "Avançado",
        "icon": <img src="https://static-00.iconduck.com/assets.00/apps-insomnia-icon-2048x2048-2mq9u7v5.png" width="64px" height="64px" />,
        "link": "https://docs.insomnia.rest",
        "percentage": 75
      },
      {
        "name": "Thunder Client",
        "Level": "Avançado",
        "icon": <img src="https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.16.2/1700665237141/Microsoft.VisualStudio.Services.Icons.Default" width="64px" height="64px" />,
        "link": "https://www.thunderclient.com",
        "percentage": 75
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Database Languages", 
        "Linguagens de Banco de Dados", 
        "Lenguajes de bases de datos"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Mysql",
        "Level": "Avançado", 
        "icon": <SiMysql color="#00796B" />, 
        "link": "https://dev.mysql.com/doc/", 
        "percentage": 75 
      },
      { 
        "name": "SQL Server", 
        "Level": "Bem Avançado", 
        "icon": <SiMicrosoftsqlserver color="#B71C1C" />, 
        "link": "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16", 
        "percentage": 100
      },
      { 
        "name": "MongoDB", 
        "Level": "Básico", 
        "icon": <SiMongodb color="#4CAF50" />, 
        "link": "https://www.mongodb.com", 
        "percentage": 25 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Code Versioning | DevOps", 
        "Versionamento de Código | DevOps", 
        "Versionado de código | DevOps"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Azure DevOps", 
        "Level": "Intermediário", 
        "icon": <SiMicrosoftazure color="#035BDA" />, 
        "link": "https://azure.microsoft.com/pt-br/products/devops", 
        "percentage": 50 
      },
      { 
        "name": "Github", 
        "Level": "Avançado", 
        "icon": <FaGithub color="#455A64" />, 
        "link": "https://github.com/llr2ll", 
        "percentage": 75 
      },
      { 
        "name": "Git", 
        "Level": "Extremamente Avançado", 
        "icon": <FaGitAlt color="#F4511E" />, 
        "link": "https://git-scm.com", 
        "percentage": 100
      }
    ]
  },
  {
    "Title": {
      "language": [
        "PHP Frameworks", 
        "Bibliotecas de PHP", 
        "Bibliotecas de PHP"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Laravel", 
        "Level": "Intermediário", 
        "icon": <FaLaravel color="#FF2D20" />, 
        "link": "https://laravel.com/docs/10.x/readme", 
        "percentage": 50 
      },
      { 
        "name": "Composer", 
        "Level": "Básico", 
        "icon": <SiComposer color="#503E2B" />, 
        "link": "https://getcomposer.org", 
        "percentage": 25 
      },
      { 
        "name": "Xampp", 
        "Level": "Básico", 
        "icon": <SiXampp color="#FB7A24" />, 
        "link": "https://www.apachefriends.org/pt_br/index.html", 
        "percentage": 25 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "JavaScript Frameworks", 
        "Bibliotecas de JavaScript", 
        "Bibliotecas de JavaScript"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "React", 
        "Level": "Avançado", 
        "icon": <FaReact color="#80DEEA" />, 
        "link": "https://legacy.reactjs.org/docs/getting-started.html", 
        "percentage": 100
      },
      { 
        "name": "Angular", 
        "Level": "Avançado", 
        "icon": <FaAngular color="#DD2C00" />, 
        "link": "https://angular.io/docs", 
        "percentage": 100
      },
      { 
        "name": "Vue", 
        "Level": "Intermediário", 
        "icon": <FaVuejs color="#81C784" />, 
        "link": "https://vuejs.org/guide/introduction.html", 
        "percentage": 50 
      },
      { 
        "name": "Node", 
        "Level": "Avançado", 
        "icon": <FaNode color="#4CAF50" />, 
        "link": "https://nodejs.org/docs/latest/api/", 
        "percentage": 100
      },
      { 
        "name": "Express", 
        "Level": "Intermediário", 
        "icon": <div style={{ fontSize: "2rem", color: "var(--main-color)", display: "flex", height: "70px", justifyContent: "center", alignItems: "center" }}>Express</div>, 
        "link": "https://expressjs.com", 
        "percentage": 50 
      },
      { 
        "name": "Redux", 
        "Level": "Intermediário", 
        "icon": <SiRedux color="#7E57C2" />, 
        "link": "https://redux.js.org", 
        "percentage": 50 
      },
      { 
        "name": "Next", 
        "Level": "Básico", 
        "icon": <SiNextdotjs />, 
        "link": "https://nextjs.org/docs", 
        "percentage": 25 
      },
      { 
        "name": "Jquery", 
        "Level": "Avançado", 
        "icon": <SiJquery color="#21ACE2" />, 
        "link": "https://api.jquery.com", 
        "percentage": 100
      },
      { 
        "name": "Chart JS", 
        "Level": "Básico", 
        "icon": <SiChartdotjs color="#FE777B" />, 
        "link": "https://www.chartjs.org/docs/latest/", 
        "percentage": 25 
      },
      { 
        "name": "Moment JS", 
        "Level": "Básico", 
        "icon": <BsClockHistory color="#6CBAB0" />, 
        "link": "https://momentjs.com/docs/", 
        "percentage": 25 
      },
      { 
        "name": "Three JS", 
        "Level": "Bem Básico", 
        "icon": <SiThreedotjs />, 
        "link": "https://threejs.org/docs/", 
        "percentage": 25 
      },
      { 
        "name": "Electron", 
        "Level": "Intermediário", 
        "icon": <SiElectron color="#9FEAF9" />, 
        "link": "https://www.electronjs.org/docs/latest", 
        "percentage": 50 
      },
      { 
        "name": "React Router", 
        "Level": "Avançado", 
        "icon": <SiReactrouter color="#F94949" />, 
        "link": "https://reactrouter.com/en/main", 
        "percentage": 100
      },
      { 
        "name": "Angular Router", 
        "Level": "Avançado", 
        "icon": <FaAngular color="#DD0330" />, 
        "link": "https://angular.io/api/router", 
        "percentage": 100
      },
      { 
        "name": "Particle JS", 
        "Level": "Intermediário", 
        "icon": <div style={{ fontSize: "2rem", color: "var(--main-color)", display: "flex", height: "70px", justifyContent: "center", alignItems: "center" }}>P</div>, 
        "link": "https://particles.js.org", 
        "percentage": 50
      }
    ]
  },
  {
    "Title": {
      "language": [
        "JavaScript Precompilers | Tools", 
        "Pré-compiladores | Ferramentas de JavaScript", 
        "Precompiladores | Herramientas de JavaScript"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Babel", 
        "Level": "Intermediário", 
        "icon": <SiBabel color="#F9DC3E" />, 
        "link": "https://babeljs.io/docs/", 
        "percentage": 50 
      },
      { 
        "name": "Typescript", 
        "Level": "Bem Avançado", 
        "icon": <SiTypescript color="#1976D2" />, 
        "link": "https://www.typescriptlang.org/docs/", 
        "percentage": 100
      },
      { 
        "name": "ESLint", 
        "Level": "Intermediário", 
        "icon": <SiEslint color="#3949AB" />, 
        "link": "https://eslint.org/docs/latest/", 
        "percentage": 50 
      },
      { 
        "name": "Webpack", 
        "Level": "Intermediário", 
        "icon": <SiWebpack color="#81D4FA" />, 
        "link": "https://webpack.js.org", 
        "percentage": 50 
      },
      { 
        "name": "Vite", 
        "Level": "Intermediário", 
        "icon": <img src="https://vitejs.dev/logo-with-shadow.png" height="64" width="64" />, 
        "link": "https://vitejs.dev", 
        "percentage": 50 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "JavaScript [ Component | Icon ] Frameworks", 
        "Bibliotecas de [ Componentes | Ícones ] JavaScript", 
        "[ Bibliotecas de componentes | ícones ] JavaScript"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      {
        "name": "Devextreme",
        "Level": "Bem Avançado",
        "icon": <svg width="56" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_755_382)">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.12 40H36.87C38.6 40 39.99 38.6004 39.99 36.8808V10.4674C20.62 13.8466 8.92 24.3039 2.77 32.002C1.69 33.2317 0.92 34.4614 0.46 35.3812C0.31 35.6811 0.01 36.4409 0 36.9008C0.02 38.6104 1.41 39.99 3.12 39.99V40Z" fill="#596C7D"></path>
            <path className="header--logo--js" fillRule="evenodd" clipRule="evenodd" d="M3.12 0C1.4 0 0 1.39965 0 3.11922V23.5241C7.08 16.146 19.6 8.62784 38.46 5.9885C39.16 5.88853 39.66 5.81855 40 5.75856V3.11922C40 1.38965 38.6 0 36.88 0L3.12 0Z" fill="#2190F7"></path>
            <path d="M32.8299 26.8233C33.5799 27.4631 34.2199 28.1929 34.7199 28.9927L34.7299 28.9727C35.1099 29.6726 35.2899 30.4424 35.2599 31.2122C35.2999 32.2819 34.8899 33.3417 34.1099 34.1714C33.7299 34.5514 33.2799 34.8413 32.7699 35.0412C32.2899 35.2212 31.7699 35.3212 31.2599 35.3212H31.0799C30.1899 35.3212 29.3099 35.0512 28.5999 34.5614L28.4899 34.4914V31.932L28.8899 32.2219C29.4599 32.6518 30.1599 32.8918 30.9099 32.9418C31.1399 32.9418 31.3799 32.9118 31.5899 32.8318C31.7999 32.7518 31.9899 32.6318 32.1399 32.4819C32.4599 32.132 32.6199 31.6821 32.5899 31.2222C32.5999 30.7523 32.4799 30.2924 32.2299 29.8925C32.0799 29.6626 31.8999 29.4426 31.7099 29.2327C31.4699 28.9727 31.1699 28.6828 30.8199 28.3729C30.1799 27.803 29.7399 27.3931 29.4099 27.0532C29.0999 26.7533 26.2799 23.7341 29.0799 20.9348C29.4499 20.5649 29.9099 20.2849 30.4099 20.095C30.9099 19.905 31.4699 19.825 31.9999 19.845H32.0299C32.8299 19.845 33.6399 20.025 34.3599 20.3549L34.4999 20.4249V23.0042L34.1099 22.7243C33.6099 22.3744 33.0099 22.1645 32.3699 22.1345C32.1299 22.1345 31.8999 22.1744 31.6799 22.2544C31.4599 22.3344 31.2699 22.4644 31.1199 22.6143C30.7799 22.9443 30.0399 24.124 31.6299 25.7136C31.9199 26.0035 32.3099 26.3634 32.8299 26.8233Z" fill="var(--main-color)"></path>
            <path d="M22.69 20.0651H25.41V31.5122C25.41 34.2615 24.03 34.8814 23.51 35.0913C23.09 35.2613 22.63 35.3512 22.16 35.3512C22.11 35.3512 22.0625 35.3487 22.015 35.3462C21.9675 35.3437 21.92 35.3412 21.87 35.3412H21.76C21.12 35.3412 20.48 35.2013 19.9 34.9413L19.75 34.8714V32.302L20.13 32.5319C20.53 32.7819 21 32.9319 21.49 32.9818C22.59 32.9818 22.69 31.9521 22.69 31.4022V20.0651Z" fill="var(--main-color)"></path>
          </g>
          <defs>
            <clipPath id="clip0_755_382">
              <rect width="40" height="40" fill="var(--main-color)"></rect>
            </clipPath>
          </defs>
        </svg>,
        "link": "https://js.devexpress.com/React/Documentation/Guide/React_Components/DevExtreme_React_Components/", 
        "percentage": 100
      },
      {
        "name": "SyncFusion",
        "Level": "Bem Avançado",
        "icon": <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_437c4ded1de3f45d266d36b6dc4363ad/syncfusion-essential-studio-enterprise-edition.png" width="110px" height="64px" />,
        "link": "https://ej2.syncfusion.com/react/documentation/introduction", 
        "percentage": 100
      },
      {
        "name": "Material UI",
        "Level": "Bem Avançado",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="56" height="64" viewBox="0 0 36 32" fill="none" className="css-1170n61">
          <path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF">
          </path>
        </svg>,
        "link": "https://mui.com/x/introduction/", 
        "percentage": 100
      },
      { 
        "name": "Bootstrap", 
        "Level": "Avançado", 
        "icon": <FaBootstrap color="#7C4DFF" />, 
        "link": "https://getbootstrap.com/docs/4.1/getting-started/introduction/", 
        "percentage": 75 
      },
      {
        "name": "React Icons",
        "Level": "Bem Avançado",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="none" viewBox="0 0 602 602">
          <g>
            <path stroke="#E91E63" strokeMiterlimit="10" strokeWidth="24" d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"></path>
            <path stroke="#E91E63" strokeMiterlimit="10" strokeWidth="24" d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"></path>
            <path stroke="#E91E63" strokeMiterlimit="10" strokeWidth="24" d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"></path>
            <animateTransform attributeName="transform" attributeType="XML" dur="20s" from="0 301 301" repeatCount="indefinite" to="360 301 301" type="rotate"></animateTransform></g><path fill="#E91E63" d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"></path>
        </svg>,
        "link": "https://react-icons.github.io/react-icons/", 
        "percentage": 100
      },
      { 
        "name": "Font Awesome", 
        "Level": "Bem Avançado", 
        "icon": <SiFontawesome color="#528DD7" />, 
        "link": "https://fontawesome.com/docs", 
        "percentage": 100
       },
    ]
  },
  {
    "Title": {
      "language": [
        "Operating Systems | Distros", 
        "Sistemas Operacionais | Distros", 
        "Sistemas operativos | Distribuciones"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Linux", 
        "Level": "Intermediário", 
        "icon": <FcLinux />, 
        "link": "https://docs.kernel.org", 
        "percentage": 50 
      },
      { 
        "name": "Windows", 
        "Level": "Bem Avançado", 
        "icon": <FaWindows color="#00B0FF" />, 
        "link": "https://learn.microsoft.com/en-us/windows/", 
        "percentage": 100
      },
      { 
        "name": "Arch Linux", 
        "Level": "Intermediário", 
        "icon": <SiArchlinux color="#1793D1" />, 
        "link": "https://wiki.archlinux.org", 
        "percentage": 50 
      },
      { 
        "name": "Ubuntu", 
        "Level": "Intermediário", 
        "icon": <FaUbuntu color="#E64A19" />, 
        "link": "https://help.ubuntu.com", 
        "percentage": 50 
      },
      { 
        "name": "Kali Linux", 
      "Level": "Básico", 
      "icon": <SiKalilinux />, 
      "link": "https://www.kali.org/docs/", 
      "percentage": 25 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Game Engines | 3D Creation", 
        "Motores de Jogo | Criação 3D", 
        "Motores de juego | Creación 3D"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Unreal Engine 4", 
        "Level": "Intermediário", 
        "icon": <SiUnrealengine color="#1A6DFF" />, 
        "link": "https://docs.unrealengine.com/4.27/en-US/", 
        "percentage": 50 
      },
      { 
        "name": "Unity", 
        "Level": "Intermediário", 
        "icon": <FaUnity color="#37474F" />, 
        "link": "https://docs.unity.com", 
        "percentage": 50 
      },
      { 
        "name": "Blender", 
        "Level": "Intermediário", 
        "icon": <SiBlender color="#FF8800" />, 
        "link": "https://docs.blender.org", 
        "percentage": 50 
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Website Creation", 
        "Criação de Sites", 
        "Creación de sitios web"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Wix", 
        "Level": "Básico", 
        "icon": <FaWix />, 
        "link": "https://dev.wix.com/docs", 
        "percentage": 25 
      },
      { 
        "name": "Wordpress", 
        "Level": "Intermediário", 
        "icon": <FaWordpress color="#01579B" />, 
        "link": "https://wordpress.org/documentation/", 
        "percentage": 50 
      },
      { 
        "name": "Elementor", 
        "Level": "Intermediário", 
        "icon": <SiElementor color="#92003B" />, 
        "link": "https://elementor.com", 
        "percentage": 50 
      },
      {
        "name": "Hostgator",
        "Level": "Básico",
        "icon": <img src="https://seeklogo.com/images/H/hostgator-logo-E1766CB4ED-seeklogo.com.png" width="64" height="64" />,
        "link": "https://www.hostgator.com/help", 
        "percentage": 25
      }
    ]
  },
  {
    "Title": {
      "language": [
        "Image Editors | Video Editors | Live", 
        "Editores de Imagem | Editores de Vídeo | Live", 
        "Editores de imágenes | Editores de vídeo | Live"
      ],
      color: "var(--main-color)"
    },
    "Data": [
      { 
        "name": "Canva", 
        "Level": "Intermediário", 
        "icon": <SiCanva color="#00C3CB" />, 
        "link": "https://www.canva.com/docs/", 
        "percentage": 50 
      },
      { 
        "name": "Photoshop", 
        "Level": "Intermediário", 
        "icon": <SiAdobephotoshop color="#50E6FF" />, 
        "link": "https://helpx.adobe.com/photoshop/user-guide.html", 
        "percentage": 50 
      },
      { 
        "name": "Paint.NET", 
        "Level": "Avançado", 
        "icon": <img src="https://avatars.githubusercontent.com/u/11067286" width="64" height="64" />, 
        "link": "https://www.getpaint.net/doc/latest/", 
        "percentage": 75 
      },
      { 
        "name": "Krita", 
        "Level": "Básico", 
        "icon": <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Calligrakrita-base.svg/1200px-Calligrakrita-base.svg.png" width="64px" height="64px" />, 
        "link": "https://docs.krita.org/en/index.html", 
        "percentage": 25 
      },
      { 
        "name": "OBS", 
        "Level": "Avançado", 
        "icon": <SiObsstudio />, 
        "link": "https://docs.obsproject.com", 
        "percentage": 50 
      },
      {
        "name": "Sony Vegas",     
        "Level": "Intermediário",
        "icon": <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vegas_Pro_15.0.png/480px-Vegas_Pro_15.0.png" width="64px" height="64px" />,
        "link": "https://www.vegascreativesoftware.info/us/tutorials/", 
        "percentage": 50
      },
      {
        "name": "Figma",
        "Level": "Intermediário",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 38 57" aria-label="Homepage">
          <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"></path>
          <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"></path>
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path>
          <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"></path>
          <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"></path>
        </svg>,
        "link": "https://help.figma.com/hc/en-us", 
        "percentage": 50
      }
    ]
  }
]
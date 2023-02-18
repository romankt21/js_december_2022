// let x = 0;
// x++;
// console.log(x);
//
// let y = 0;
// y--
// console.log(y);

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// for (const coursesItem of coursesArray) {
//     document.write(`
//     <div>
//     <h2>${coursesItem.title} duration - ${coursesItem.monthDuration}</h2>
//     <p>${coursesItem.modules}</p>
//
// </div>
//
// `)




    // let modules = coursesItem.modules;
    // console.log(modules);
    // for (const module of modules) {
    //     console.log(module);
    // }

//     document.write(`<div>`);
//
//     document.write(`<h2>${coursesItem.title}</h2>`);
//
//     document.write(`<ol>`);
//     for (const module of coursesItem.modules) {
//         document.write(`<li>${module}</li>`)
//
//     }
//     document.write(`</ol>`);
//     document.write(`</div>`);
//
// }

// let i = 0;
// while (i < coursesArray.length) {
//     let coursesItem = coursesArray[i];
//     document.write(`<div>`);
//     document.write(`<h2> ${coursesItem.title} </h2>`);
//     document.write(`<ul>`);
//     for (const module of coursesItem.modules) {
//         document.write(`<li>${module}</li>`)
//
//     }
//
//
//     document.write(`</ul>`);
//     document.write(`</div>`);
//
//     i++;
//
// }

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs () {
        const {age}=personalPlanPeter;
        const {languages}=personalPlanPeter.skills;
        let b='';
        for (i=0; i<languages.length; i++){
            let a = languages[i].toUpperCase();
            b = i<languages.length ? b+a+' ' : b + a;
            // if(i<languages.length){
            //     b=b+a+' ';
            // }else{
            //     b=b+a;
            // }
        }
        return `Мне ${age} и я владею языками: ${b}`;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
    const copyPlan = plan;
    const {exp}=copyPlan.skills;
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let res = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        res += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return res;
}
showProgrammingLangs(personalPlanPeter);
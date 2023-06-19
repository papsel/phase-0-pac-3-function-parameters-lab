function introduction(name){
    return `Hi, my name is ${name}.`
}
console.log(introduction("Aki"))

function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage(Aki,Ember.js))

function introductionWithLanguageOptional(language ="JavaScript",name){
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageoptional(Gracie,language))

function introductionWithLanguageOptional(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
    console.log(introductionWithLanguageoptional(Gracie,python))


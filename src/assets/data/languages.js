class Language {
    constructor(language, bytes, color) {
      this.language = language;
      this.bytes = bytes;
      this.color = color
    }
  }
   const fetchRepos = async () => {
        const repoResp = await fetch('https://api.github.com/users/elinordin/repos').then(res=> res.json())
        return repoResp
   }

  const fetchLanguages = async (repos) => {
    try {
      let languageArray = []
      let colors = ['#0051A3', '#FEB02B', '#009EFF', '#FDD961', '#272E3D', '#3B7B80', '#323232']
      let hasLanguageBeenSaved = false

      await Promise.all(repos.map(async repo => {
        const langResp = await fetch(repo.languages_url)
        const languageData = await langResp.json()
        const languageBytes = Object.values(languageData)
        const languageNames = Object.keys(languageData)    
  
        if (languageNames.length > 0) { //If project contains languages
          languageNames.forEach((languageName, index) => {
            if (languageArray.length === 0){ 
              languageArray.push(new Language(languageName, languageBytes[index], colors[index]))
            } else {
              languageArray.forEach(language => {
                if(languageName === language.language && !hasLanguageBeenSaved) {
                  language.bytes += languageBytes[index]
                  hasLanguageBeenSaved = true
                }
              })
              if (!hasLanguageBeenSaved){
                languageArray.push(new Language(languageName,languageBytes[index],colors[index]))
              }
              hasLanguageBeenSaved = false
            }
          })
        }
      }))
      return languageArray
    }
    catch(err) {console.log(`Error: ${err}`)}
  }


  const convertToPercent = (languagesInBytes) => {
    let sum = 0;
    let percentage = 0;
  
    languagesInBytes.forEach(language => {
      sum += language.bytes;
    });
  
    let languagesInPercent = languagesInBytes.map(language => {
      percentage = Math.round((language.bytes / sum) * 1000) / 10;
      language.bytes = percentage;
    })
  
    return languagesInPercent;
  }
  

  function checkForOther(languageArray){
    let sumOfOther = 0; 

    let sumFunction = (total, currentLanguage) => {
      return total + currentLanguage.bytes;
    }
  
    sumOfOther = Math.round(languageArray.filter(language => language.bytes < 1).reduce(sumFunction, 0)*10) / 10;
    languageArray = languageArray.filter(language => language.bytes > 1);
  
    if(sumOfOther > 0){
      languageArray.splice()
      languageArray.push(new Language("Other", sumOfOther, '#CCCCCC'));
    }
    return languageArray;
  }


  const getLanguages = async () => {
    const repos = await fetchRepos()
    const languagesInBytes = await fetchLanguages(repos)
    const languages = convertToPercent(languagesInBytes)
    console.log(languages)
  }
  
  export default getLanguages

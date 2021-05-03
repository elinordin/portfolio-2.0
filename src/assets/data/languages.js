class Language {
  constructor(language, value, color) {
    this.id = language
    this.label = language
    this.value = value
    this.color = color
  }
}

const fetchRepos = async () => {
  const repoResp = await fetch('https://api.github.com/users/elinordin/repos').then(res => res.json())
  return repoResp
}


const fetchLanguages = async (repos) => {
  try {
    let languagesInBytes = []
    let colors = ['#0051A3', '#FEB02B', '#009EFF', '#FDD961', '#272E3D', '#3B7B80', '#323232']
    let hasLanguageBeenSaved = false

    await Promise.all(repos.map(async repo => {
      const langResp = await fetch(repo.languages_url)
      const languageData = await langResp.json()
      const languageBytes = Object.values(languageData)
      const languageNames = Object.keys(languageData)

      if (languageNames.length > 0) { //If project contains languages
        languageNames.forEach((languageName, index) => {
          if (languagesInBytes.length === 0) {
            languagesInBytes.push(new Language(languageName, languageBytes[index], colors[index]))
          } else {
            languagesInBytes.forEach(language => {
              if (languageName === language.label && !hasLanguageBeenSaved) {
                language.value += languageBytes[index]
                hasLanguageBeenSaved = true
              }
            })
            if (!hasLanguageBeenSaved) {
              languagesInBytes.push(new Language(languageName, languageBytes[index], colors[index]))
            }
            hasLanguageBeenSaved = false
          }
        })
      }
    }))
    return languagesInBytes
  }
  catch (err) { console.log(`Error: ${err}`) }
}


const convertToPercent = (languages) => {
  
  let sum = 0
  languages.forEach(language => sum += language.value)
  languages.map((language) => language.value = Math.round((language.value / sum) * 1000) / 10)

  return languages
}


const checkForOther = (languages) => {

  let sumOfOther = 0
  languages.filter(language => language.value < 1).forEach(otherLanguage => sumOfOther+= otherLanguage.value)
  languages = languages.filter(language => language.value > 1)
  if (sumOfOther > 0) {languages.push(new Language("Other", sumOfOther, '#CCCCCC'))}
  
  return languages
}


const getLanguages = async () => {
  const repos = await fetchRepos()
  const languagesInBytes = await fetchLanguages(repos)
  const languagesInPercent = convertToPercent(languagesInBytes)
  const languages = checkForOther(languagesInPercent)
  return languages
}

module.exports = {convertToPercent, checkForOther, getLanguages}

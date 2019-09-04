import React from 'react';

export const LanguageInfo = ({languages}) => {

  return (
    <div>
      {languages.map((language) => {
        return <p key={language.native}>{`${language.name} - ${language.native}`}</p>
      })}
    </div>
    )
}

export default LanguageInfo;
import React from 'react'
import ShowCaseRecord from './ShowCaseRecord'
import AboutMeRecord from './AboutMeRecord'
import SkillSetRecord from './SkillSetRecord'
import ContactMeRecord from './ContactMeRecord'

export default function HomeModule({details}) {
    if(details.__typename === "ShowCaseRecord") {
        return <ShowCaseRecord details={details} />;
    } else if(details.__typename === "AboutMeRecord") {
        return <AboutMeRecord details={details} />;
    } else if(details.__typename === "SkillSetRecord") {
        return <SkillSetRecord details={details} />;
    } else if(details.__typename === "ContactMeRecord") {
        return <ContactMeRecord details={details} />
    }
  return (
    <div>
        <h1>Home Module</h1>
    </div>
  )
}
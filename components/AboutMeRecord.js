import about from '../src/styles/modules/About.module.scss';

export default function AboutMeRecord({details}) {
  return (
    <div className={about.main}>
        <div className={about.text}>
        <h1>{details.title}</h1>
          <div>
            <p>
              {details.textOne}
            </p>
            <p>
              {details.textTwo}
            </p>
            <p>
              {details.textThree}
            </p>
          </div>
        </div>
        <div>
            <p>
              <h1>Image</h1>
            </p>
        </div>
    </div>
  )
}

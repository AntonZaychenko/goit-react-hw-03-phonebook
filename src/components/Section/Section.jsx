import s from '../Section/Section.module.css'

const Section = ({title, children}) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>{title}</h2>
            {children}
        </div>
    )
}
export default Section
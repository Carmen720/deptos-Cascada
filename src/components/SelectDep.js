import styles from '../style/Departament.module.css'

const SelectDepartament = (props) => {
    return(
        <article className={styles.select}>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Departamento
                    </option>
                    <option value="Horror">Francisco Morazan</option>
                    <option value="Adventure">El Paraiso</option>
                    <option value="Fiction">La Paz</option>
                    <option value="Nonfiction">Ocotepeque</option>
                    <option value="Tragedy">Copan</option>
                    <option value="Fantasy">Comayagua</option>
                    <option value="Fairytale">Colon</option>
                    <option value="Crime">Cortes</option>
                    <option value="Mystery">Atlantida</option>
                    <option value="Historical Fiction">Choluteca</option>
                    <option value="Humor">Gracias a Dios</option>
                    <option value="Fictional Diaries">Intibuca</option>
                    <option value="Satire">Islas de la Bahia</option>
                    <option value="Romance">Lempira</option>
                    <option value="Dystopian">Olancho</option>
                    <option value="Memoirs">Santa Barbara</option>
                    <option value="Self-Help">Valle</option>
                    <option value="Classic">Yoro</option>
                    
                </select>
            </article>
    )
}

export default SelectDepartament;
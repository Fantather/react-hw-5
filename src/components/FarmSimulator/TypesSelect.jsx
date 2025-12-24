export default function TypesSelect({types, onChange}){

    return(
        <select onChange={(e)=>onChange(e.target.value)}>
            {types.map(({value, text}) => (
                <option key={value} value={value}>{text}</option>
            ))}
        </select>
    )
}
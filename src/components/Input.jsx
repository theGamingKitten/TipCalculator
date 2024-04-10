export default function Input({ id, text, onChange}) {
    return (
        <>
            <label htmlFor={id} className='form-label'>{text}</label>
            <input type='text' placeholder='0' id={id} onChange={e => onChange(e.target.value)}></input>
        </>
    )
}
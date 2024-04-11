export default function Input({ id, text, isInvalid, errorMessage, onChange}) {
    return (
        <>
            <label htmlFor={id} className='form-label'>{text}</label><span className={isInvalid ? "error" : "hidden"}>{errorMessage}</span>
            <input type='text' placeholder='0' id={id} onChange={e => onChange(e.target.value)}></input>
        </>
    )
}
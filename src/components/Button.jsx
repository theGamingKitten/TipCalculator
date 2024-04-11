export default function Button({ name, value, percentage, handleTip }) {
    return (
        <>
            <button 
            name={name}
            onClick={e => handleTip(e.target.value)} 
            value={value}>
            {percentage}%
            </button>
        </>
    )
}
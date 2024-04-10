export default function Button({ value, percentage, handleTip }) {
    return (
        <>
            <button 
            onClick={e => handleTip(e.target.value)} 
            value={value}>
            {percentage}%
            </button>
        </>
    )
}
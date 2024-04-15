export default function Button({ name, tip, value, percentage, handleTip }) {
    return (
        <>
            <button 
            name={name}
            className={tip === percentage ? "active" : ""}
            onClick={() => handleTip(percentage)} 
            value={value}>
            {percentage}%
            </button>
        </>
    )
}
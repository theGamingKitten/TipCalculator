export default function Output({ labelText, labelValue }) {
    return (
        <>
            <span className='output-label'>{labelText} 
            <span className='per-person-label'>/ person</span></span>
            <span className='output-value'>${labelValue}</span>
        </>
    )
}
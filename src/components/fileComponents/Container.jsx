import '@css/fileComponents/container.css'

export default function Container({children, id})
{
    return (
        <div id={id} className='container'>{children}</div>
    )
}
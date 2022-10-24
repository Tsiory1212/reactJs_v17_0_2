const withLogo = (Component) => (props) => {
    return (
        <>
            <Component {...props}/>
            <a target="_blank" href={props.link} rel="noopener noreferrer">{props.content}</a>
        </>
    ) 
    
}

export default withLogo;

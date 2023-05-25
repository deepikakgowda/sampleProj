function Content()
{
    const text = "typescript";
    if(text)
    return <p> hello {text} </p>;
    return <p>hello</p>;
    
}
export default Content;
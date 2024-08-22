import { useParams } from "react-router-dom";

function Pokemon() {
    const params = useParams();
    return <p>{params.name}</p>
}

export default Pokemon;
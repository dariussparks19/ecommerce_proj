import Image from "next/image"

export default function Product({ name, image, price }){
    return(
        <div>
            <h1>{name}</h1>
            {price}
        </div>
    )
}
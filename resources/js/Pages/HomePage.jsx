import { Head } from "@inertiajs/react"
import { data } from "autoprefixer"

export default function name(props) {
    return (
        <>
            <Head title={props.title} />
            <p>{props.description}</p>

            {props.news ? props.news.map((data, i) => {
                return (

                    <div key={i}>
                        <hr />
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                        <p>{data.category}</p>
                        <p>{data.author}</p>
                        <hr />
                    </div>
                )
            }) : <p>data kosong</p>
            }
        </>
    )
}
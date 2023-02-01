import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react"
import { data } from "autoprefixer"

export default function name(props) {
    return (

        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <div>
            <Navbar />
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md rounded-md">
                            <hr />
                            <p className="text-2xl">{data.title}</p>
                            <p className="text-sm">{data.description}</p>
                            <p>{data.category}</p>
                            <p>{data.author}</p>
                            <hr />
                        </div>
                    )
                }) : <p>data kosong</p>
                }
            </div>
        </div>
    )
}
import axios from "axios"
import JobList from "components/JobList"
import { API_ENDPOINT } from "config/constants"

export const getStaticProps = async () => {
    try {
        const res = await fetch(`${API_ENDPOINT}/jobs?populate=*`)
        const { data: jobs } = await res.json()

        return {
            props: {
                jobs,
            },
        }
    } catch (ex) {
        console.log(ex)
        throw ex
    }
}

export default function Home({ jobs }) {
    return <JobList jobs={jobs} />
}

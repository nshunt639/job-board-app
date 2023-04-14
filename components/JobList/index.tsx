import { Loader } from "components/shared/Loader"
import { API_ENDPOINT } from "config/constants"
import Link from "next/link"

const MAX_LENGTH = 250

export default function JobList({ jobs }) {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-24 md:w-4/5">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {jobs.map((job) => (
                    <Link key={job.key} href={"/jobs/" + job.id}>
                        <div>
                            <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                <div
                                    className="text-gray-900 hover:text-purple-700"
                                >
                                    {job.attributes.vacancy}
                                </div>
                            </h2>
                            <p className="mb-4 text-sm font-normal text-gray-600">
                                {job.attributes.description.substring(
                                    0,
                                    MAX_LENGTH
                                ) + " ..."}
                            </p>
                            <div
                                className="flex items-center text-gray-700"
                            >
                                <div className="avatar">
                                    <img
                                        className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                                        src={`${API_ENDPOINT}${job.attributes.image.data.attributes.url}`}
                                        alt={
                                            "Photo of " +
                                            job.attributes.recruiter
                                        }
                                    />
                                </div>
                                <div className="ml-2">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {job.attributes.recruiter}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {job.attributes.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* btns */}
            <div className="mt-20 flex flex-col items-center justify-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <Link href="/">
                    <div
                        className="border border-solid border-indigo-500 px-3 py-2 text-indigo-500 hover:text-black md:w-auto"
                    >
                        Home
                    </div>
                </Link>
            </div>
        </section>
    )
}

import useSWRInfinite from 'swr/infinite';
import { fetchBlogs } from 'actions/index';

export const useGetBlogPages = ({filter}) => {
    const results = useSWRInfinite(
        (index, previousPageData) => {
            if (index === 0) {
                return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`
            }

            if (!previousPageData.length) {
                return null
            }

            return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? `asc` : `desc`}`
        },
        fetchBlogs,
        {persistSize: true}
    )

    let hitEnd = false;
    const {data} = results;

    if (data) {
        hitEnd = data[data.length - 1].length === 0
    }

    return {...results, hitEnd}
}
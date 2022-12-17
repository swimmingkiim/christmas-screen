	import type { PageLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = ({ params }) => {
    return {
        message: params.slug,
    }
}
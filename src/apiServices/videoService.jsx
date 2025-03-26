import * as request from '@/utils/request';

export const video = async (page = '1', per_page = '20') => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

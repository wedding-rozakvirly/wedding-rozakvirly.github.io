import {data} from "../assets/data/data.js";

export const comentarService = {
    getComentar: async function () {
        try {
            const response = await fetch(data.api);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

    addComentar: async function ({id, name, status, message, date, color}) {
        const comentar = {
            id: id,
            name: name,
            status: status,
            message: message,
            date: date,
            color: color,
        };

        try {
            await fetch(data.api, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(comentar),
            });

            return {status: 200, message: 'Data berhasil ditambahkan'};

        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },
};
const fetchapi = {
    get: async function (url) {
        const request = await fetch(url);
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    post: async function (url, data) {
        const request = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    put: async function (url, data) {
        const request = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    delete: async function (url) {
        const request = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
}
let token = '81b75eb00dcd19cfab049df72bbc6608af305b72043fb10f'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://eventful-edge-backend.onrender.com/api/templates`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to pull data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://eventful-edge-backend.onrender.com/api/templates`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to save new template from server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://eventful-edge-backend.onrender.com/api/templates/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id: string) => {
        const response = await fetch(`https://eventful-edge-backend.onrender.com/api/templates/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}
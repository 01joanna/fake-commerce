import type { User } from '../models/User'

const url = "https://api.escuelajs.co/api/v1/users"

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const data: User[] = await response.json()
        return data
    }
    catch (error) {
        console.log("Error fetching users")
        return []
    }
}
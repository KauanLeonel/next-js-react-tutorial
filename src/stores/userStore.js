import {create} from 'zustand'

export const useUserStore = create((set) =>({
    users: [],
    updateUsers: (newUsers)  =>set({users: newUsers}) ,
    addUsers: (newUser) => set((state) => ({users: [...state.users, newUser]}))
}))
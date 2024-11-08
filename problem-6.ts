// Problem - 6 ==>  Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    email: string;
    age: number
}

const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };

// Partial make optional interface key value
const updateProfile = (profile: Profile, newProfile: Partial<Profile>): Profile => {
    return { ...profile, ...newProfile }
}

updateProfile(myProfile, { age: 26 })



const firstName = [
    'James Ian',
    'Ali',
    'Max'

]

const middleName = [
    'Binatac',
    'X',
    'Reyes'
]

const lastName = [
    'Villanueva',
    'Press',
    'Ponce'
]
const Avatar = [

]

const dataHandler = {
    name: {
        firstName: (index) => firstName[index],
        middleName: (index) => middleName[index],
        lastName: (index) => lastName[index],
    },
    image: {
        avatar: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
    }
}

export const _nameData = [...Array(3)].map((_, index) => ({
    firstName: dataHandler.name.firstName(index),
    middleName: dataHandler.name.middleName(index), 
    lastName: dataHandler.name.lastName(index),
    avatar: dataHandler.image.avatar(index + 8)
}));


export default dataHandler
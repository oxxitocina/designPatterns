const overweight = weight => {
    console.log('Training program for overweight people')
    return weight
}

const normalweight = weight => {
    console.log('Training program for people with normal weight')
    return weight
}

const weighing = weight => {
    if(weight < 100){
        return normalweight
    } else {
        return overweight
    }
}

const DimashWeight = 55
const AdilWeight = 120

const weighing1 = weighing(DimashWeight)
const weighing2 = weighing(AdilWeight)

weighing1(DimashWeight)
weighing2(AdilWeight) 


const gain = weight => {
    console.log(weight*2,'The amount of proteins for weight gain')
    return weight
}

const maintain = weight => {
    console.log(weight*1.5,'The amount of protein to maintain mass')
    return weight
}

const weighingPerson = weight => {
    if(weight < 100){
        return maintain
    } else {
        return gain
    }
}

const BaurzhanWeight = 80
const MaxWeight = 150

const weighingPerson1 = weighingPerson(BaurzhanWeight)
const weighingPerson2 = weighingPerson(MaxWeight)

weighingPerson1(BaurzhanWeight)
weighingPerson2(MaxWeight) 
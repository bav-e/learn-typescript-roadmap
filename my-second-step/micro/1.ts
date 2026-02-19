

const gramsPerKg = 1000;

const processWeight = (weight: string | number, grmas: number) => {
    console.log(typeof weight === "number" ?
        `Weight is ${weight} grams`
        : `Weight is ${parseFloat(weight) * grmas} grams`
    );
};
processWeight(2500, gramsPerKg);
processWeight("3.5kg", gramsPerKg);
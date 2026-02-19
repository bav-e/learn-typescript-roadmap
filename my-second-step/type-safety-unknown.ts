function processID(id: string | number) {
    if (typeof id === "string") {
        console.log("This is a String ID. Uppercase:", id.toUpperCase());
    }
    else {
        console.log("This is a Number ID. Multiplied by 10:", id * 10);
    }
}

processID("emp-001");
processID(1052);     
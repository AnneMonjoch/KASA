export async function fetchAppartment() {
    const response = await fetch("../logements.json");
    const appartments = await response.json();
    return appartments;
}
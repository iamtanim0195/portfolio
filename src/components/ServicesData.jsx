export default async function ServicesData() {
    const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae', { cache: 'no-store' });
    if (!response) {
        throw new Error("Could not fetch Services data");
    }
    const data = await response.json();
    return data.user.services;
};
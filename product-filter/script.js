// ÜRÜN ARAMA UYGULAMASI
/*
1-ürünleri tanımla   +
2-ürünleri bir dizinin içine al   +
3-kullanıcıdan bir prompt al  +
4-kullanıcıdan girilen ürünün adını al
5-ürünleri filtrele
6-filtrelenen ürünleri pushla
7-sonucu ekrana bastır
*/
const phoneData = [
    {
        "phoneName": "SmartX Pro",
        "price": 899.99,
        "brand": "TechMaster"
    },
    {
        "phoneName": "GigaMax Ultra",
        "price": 749.95,
        "brand": "ElectroTech"
    },
    {
        "phoneName": "HyperX 3000",
        "price": 1099.50,
        "brand": "InnoGadget"
    },
    {
        "phoneName": "Xplorer Elite",
        "price": 799.99,
        "brand": "NanoVision"
    },
    {
        "phoneName": "Quantum Nexus",
        "price": 1299.99,
        "brand": "TechSavvy"
    }
]
const input = prompt("ürün adını girin: ");

const filteredPhoneData=phoneData.filter((phone)=> {
     
    return phone.phoneName.toUpperCase().indexOf(input.toUpperCase()) > -1
    && phone.price <1000 
});

console.log(filteredPhoneData);
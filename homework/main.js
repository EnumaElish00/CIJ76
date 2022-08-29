const array = [
    {
        gia: "3000",
        san_pham: " as 3 lỗ",
        so_luong: 1,
    },

    {
        gia: "12000",
        san_pham: " quan dui",
        so_luong: 2,
    },

    {
        gia: "3000",
        san_pham: " quan dai",
        so_luong: 5,
    },
];

const  total = array.reduce((acc, item) => {
    return acc += Number(item.gia) * item.so_luong;
}, 0);
console.log(total);


const chuoiNumber = "12234534342"

var bruh = chuoiNumber.split('')
console.log(bruh.filter((item) => item === "2").length);
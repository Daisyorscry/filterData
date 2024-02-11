const body = document.body
const data = [
    {
        nama: 'John Doe',
        tanggal_lahir: '1990-01-01',
        tempat_lahir: 'Jakarta',
        kota: 'Jakarta Selatan',
        tempat_tinggal: 'Jl. Merdeka No. 1',
        umur: 32
    },
    {
        nama: 'Jane Smith',
        tanggal_lahir: '1988-05-15',
        tempat_lahir: 'Bandung',
        kota: 'Bandung',
        tempat_tinggal: 'Jl. ABC No. 10',
        umur: 34
    },
    {
        nama: 'Michael Johnson',
        tanggal_lahir: '1995-11-20',
        tempat_lahir: 'Surabaya',
        kota: 'Surabaya',
        tempat_tinggal: 'Jl. XYZ No. 5',
        umur: 27
    },
    {
        nama: 'Emily Wilson',
        tanggal_lahir: '1992-09-08',
        tempat_lahir: 'Yogyakarta',
        kota: 'Yogyakarta',
        tempat_tinggal: 'Jl. Cilik No. 3',
        umur: 30
    },
    {
        nama: 'David Brown',
        tanggal_lahir: '1986-03-25',
        tempat_lahir: 'Medan',
        kota: 'Medan',
        tempat_tinggal: 'Jl. Harmoni No. 7',
        umur: 36
    },
    {
        nama: 'Sarah Lee',
        tanggal_lahir: '1984-07-12',
        tempat_lahir: 'Semarang',
        kota: 'Semarang',
        tempat_tinggal: 'Jl. Pahlawan No. 15',
        umur: 38
    },
    {
        nama: 'Daniel Wilson',
        tanggal_lahir: '1998-02-28',
        tempat_lahir: 'Denpasar',
        kota: 'Denpasar',
        tempat_tinggal: 'Jl. Baru No. 25',
        umur: 24
    },
    {
        nama: 'Amanda Taylor',
        tanggal_lahir: '1989-12-10',
        tempat_lahir: 'Makassar',
        kota: 'Makassar',
        tempat_tinggal: 'Jl. Sudirman No. 30',
        umur: 33
    },
    {
        nama: 'Ryan Martinez',
        tanggal_lahir: '1991-06-05',
        tempat_lahir: 'Palembang',
        kota: 'Palembang',
        tempat_tinggal: 'Jl. Veteran No. 8',
        umur: 31
    },
    {
        nama: 'Jessica Garcia',
        tanggal_lahir: '1993-10-18',
        tempat_lahir: 'Balikpapan',
        kota: 'Balikpapan',
        tempat_tinggal: 'Jl. Mawar No. 12',
        umur: 29
    }
]


// data.sort((a, b) => a.umur - b.umur)


function buttonClick(){
    const filterUmur = parseInt(document.getElementById('umur').value)
    const tbody = document.getElementById('tabelBody')
    tbody.innerHTML = ''
    
    const filterData = data.filter((x) => x.umur < filterUmur)
    
    filterData.forEach((values)=> {
    const row = document.createElement('tr')

    Object.values(values).forEach((key) => {
        const cell = document.createElement('td')
        cell.textContent = key
        row.appendChild(cell)
    })

    tbody.appendChild(row)
})
}








// filterData.forEach((values)=> {
//     const row = document.createElement('tr')

//     Object.values(values).forEach((key) => {
//         const cell = document.createElement('td')
//         cell.textContent = key
//         row.appendChild(cell)
//     })

//     tbody.appendChild(row)
// })

// console.log(...data)
// const datas = document.createElement('h1')
// datas.textContent = (toString)
// body.appendChild(datas)

// data.map(item => console.log(item))

// data.map((values) => {
//     console.log(values)

//     const datas = document.createElement('h1')
//     datas.textContent = (values)
//     body.appendChild(datas)
// })
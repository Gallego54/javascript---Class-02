class CEmpleado{
    #name; #entryear
    #salary; #address

    constructor(n, ey, sal, add){
        this.#name = n;
        this.#entryear = ey;
        this.#salary = sal;
        this.#address = add;
    }

    getName () {
        return this.#name;
    }

    getEntryAddress () {
        return this.#entryear;
    }

    getSalary () {
        return this.#salary;
    }

    getAddress () {
        return this.#address
    }


    static toHMTLTable = function(obj) {
        let tableHTML = '<table><tr><td>Name</td><td>Year of joining</td><td>Address</td></tr>'
    
        for (const e of obj) {
            tableHTML += `<tr><td>${e.getName()}</td><td>${e.getEntryAddress()}</td><td>${e.getAddress()}</td></tr>`
        }
            
        return tableHTML+'</table>';
    } 
}

window.onload = function () {   
    const obj1 = new CEmpleado('Robert', 1994, undefined, '64C-WallsStreat');
    const obj2 = new CEmpleado('Sam', 2000, undefined, '68D-WallsStreat');
    const obj3 = new CEmpleado('John', 1999, undefined, '26B-WallsStreat');


    const tableHTML = CEmpleado.toHMTLTable ([obj1, obj2, obj3]); 

    document.getElementsByTagName('body')[0].innerHTML = tableHTML;
}
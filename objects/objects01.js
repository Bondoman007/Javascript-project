

let convert1 = function(f)
{
    return { 
    fahrenheit: f,
    kelvin: (f - 32) * ( 5 / 9 )+ 273.15,
    celcius: (5 / 9) * (f - 32)
  }
}

let temps=convert1(74)
console.log(temps)



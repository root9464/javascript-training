//функция принимающая в себя имя и фамилию и выплевывающая полученные значения циклом в обьект 
// который был скопирован по прототипу другого обьекта
const Enum = {
    1:"",
    2:"",
}
function base(name, surname){
    this.name = name,
    this.surname = surname
    const user = Object.create(Enum)
    //сдесь допилить
    
    
}
base('Egor', 'Chervony')


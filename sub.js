const subtract = (input)=>{
    var b = input.split("-");  
    var result = parseFloat(b[0]) - parseFloat(b[1]);
    return result;

  };
  
export default subtract;
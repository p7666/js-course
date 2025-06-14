# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case 'grey' :
        body.style.backgroundColor = e.target.id;
        break;
      case 'white' :
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue' :
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow' :
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'pink'
        break;
    }
  })
});

```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Please give a valid height';
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight';
  }
  else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
});

```

## Project 3 solution code

``` javascript
const clock = document.getElementById('clock')



setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)

```
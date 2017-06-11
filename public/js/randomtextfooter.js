// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};
getJSON('https://ipinfo.io/json',
function(err, data) {
  console.log(data);
  // if (err != null) {
  //   console.log('Something went wrong: ' + err);
  // } else {
  //   console.log('Your query count: ' + data.query.count);
  // }
});

//var ip = httpGet('https://www.l2.io/ip.js?var=userip');
// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————
// httpGet('https://www.l2.io/ip.js?var=userip');
const phrases = [
  'Version: 0.1',
  'Copyright © 2017',
  'Lucas Farmer',
  'All Rights Reserved.'
  
]

const el = document.querySelector('.foot')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1000)
  })
  counter = (counter + 1) % phrases.length
}

next()
/* To learn how to use Cookies JS, go to: https://gist.github.com/errorINA/3d3828d1222a5db96c5934a43695b0cb#cookies-js */
const cookiesjs = { 
  add: function(name, value, exps) { 
    const d = new Date(); d.setTime(d.getTime() + (exps * 3600000)); 
    let expires = "expires=" + d.toUTCString(); 
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; 
    return "";
  },
  get: function(name) {
    name = name + "="; 
    let decodedCookie = decodeURIComponent(document.cookie); 
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ""; 
  },
  remove: function(name) { 
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};

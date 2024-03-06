# Cookies JS
##### By: INA
##### Code Provided By: ashbit_

## How to Import

Add this code inside at the bottom of your ` <body> ` tag
```
<script src="https://gist.githubusercontent.com/errorINA/3d3828d1222a5db96c5934a43695b0cb/raw/19b2d9d8d27ba9c458ee77010d5c58c990eedddf/cookiesjs.js"></script>
```

## How to Use
### Adding a Cookie

```
cookiesjs.add(name, value, expiration);
```

` name `: Name of the cookie

` value `: Value of the cookie

` expiration `: When the cookie expires, how many hours. Example: Two and a half days = 60

***

### Getting a Cookie

```
cookiesjs.get(name);
```

` name `: Name of the cookie

***

### Removing a Cookie

```
cookiesjs.remove(name);
```

` name `: Name of the cookie

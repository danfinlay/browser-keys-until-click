# Keys Until Click

A dirt-simple function that will call you back with an `event` on every key stroke until the next click.

Uses really low level browser javascript, so should work with just about any framework, for times when you really need to just get every key stroke until the next click.

## Usage

Like the name says, it really is all about the keys (until the click, that is).

```javascript
  var keysUntilClick = require('keys-until-click');

  keysUntilClick(function (event){
    console.log("Check out this sweet key press: " + event.keyCode);
  });
```

You might be worried this would keep firing after the next click, but that's patently not what it does.  It most certainly only fires *until* the next click, and not after.  The browser will be behaving normally after *that* kind of thing.

## Contributing

God only knows what you could possibly want to contribute.  Please, submit an issue, enlighten me how this function could be the next Rails.


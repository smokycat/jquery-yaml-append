jquery-yaml-append
==================

This is a jQuery's plugin which creates complex DOM structure like as YAML.

This works with coffee-scrpt
----------------------------

This plugin's syntax depends on coffee script.
So, if you are pure javascript programmer, this plugin make your code more unreadable.

Example
-------

I wish to create this.

```html
<div class="login">
  <span>
    &lt;&lt; LOGIN
  </span>
  <a href="http://example.com/someone" target="_blank">
    someone
  </a>
  <span class="screen_name">
    @someone
  </span>
  <span class="datetime">
    2013/7/13 9:3:15
  </span>
</div>

```

First, I wrote it with jQuery `appendTo`, and coffee-script, as

```coffee
msg = $("<div/>").addClass("login")
$("<span>")
  .html("<< LOGIN")
  .appendTo msg
$("<a>")
  .attr("href", "http://example.com/" + member.screen_name)
  .attr("target", "_blank")
  .html(member.name)
  .appendTo msg
$("<span>").addClass("screen_name")
  .html("@#{member.screen_name}")
  .appendTo msg
$("<span>").addClass("datetime")
  .html(dateFormat(data.date))
  .appendTo msg
```

and imidiately forgot what I wrote.

I wish to create DOM structure simply like Jade, and wrote this plugin.
With this, that structure can be created as

```coffee
$.yaml_append
  div:
    class: "login"
    children: Array \
      span:
        text: "<< LOGIN"
    ,
      a:
        href: "http://example.com/" + member.screen_name
        target: "_blank"
        text: member.name
    ,
      span:
        class: "screen_name"
        text: "@" + member.screen_name
    ,
      span:
        class: "datetime"
        text: dateFormat(data.date)
```

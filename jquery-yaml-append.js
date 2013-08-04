(function($) {
  $.extend({
    yaml_append: function(obj) {
      var tag = Object.keys(obj)[0];
      var attr = obj[tag];
      var children = attr.children;
      if (children)
        delete attr.children;
      var ret = this("<" + tag + ">", attr);
      if (children) {
        attr.children = children;
        for (var i = 0; i < children.length; i++)
          ret.append(this.yaml_append(children[i]));
      }
      return ret;
    }
  });
})(jQuery);

function ord(string) {
  var str = string + "",
    code = str.charCodeAt(0);
  if (0xd800 <= code && code <= 0xdbff) {
    var hi = code;
    if (str.length === 1) {
      return code;
    }
    var low = str.charCodeAt(1);
    return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
  }
  if (0xdc00 <= code && code <= 0xdfff) {
    return code;
  }
  return code;
}

function selectText(containerid) {
  var node = document.getElementById(containerid);

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNodeContents(node);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}

function mapToObject(first, second) {
  if (first.length != second.length) {
    throw "Length of arrays don't match.";
  } else {
    var ret = {};
    for (var loc in first) {
      ret[first[loc]] = second[loc];
    }

    return ret;
  }
}

function cloneArray(initial) {
  var ret = [];
  for (var loc in initial) {
    ret[loc] = initial[loc];
  }
  return ret;
}

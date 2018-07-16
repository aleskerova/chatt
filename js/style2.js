( () => {
     var x = location.hash.substr(1)
     var script = document.createElement ( 'script' )
     script.src = "js/style" + location.hash.slice(1) + ".js"
     document.head.appendChild ( script )
     script.onload = function ( event ) {
          var theScript = document.querySelector ( "script[src='js/style.js']")
          theScript.parentNode.removeChild ( theScript )
     }
     script.onerror = function ( event ) {
          console.error ( "Script error" + script.src )
     }

})()

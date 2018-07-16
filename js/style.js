var User = function ( name = "user",
                      email = "user@sample.com",
                      photo = "https://cdn.pixabay.com/photo/2017/09/19/21/25/boy-2766697_960_720.png" ) {
        this.name = name
        this.email = email
        this.photoURL = photo
        this.info = ''
}
User.__proto__.admin = {
        photoURL: "https://pre00.deviantart.net/3bca/th/pre/f/2013/022/b/e/girl_cute_png_by_danielatutorials-d5s4not.png",
        name: "Jeannie"
}
User.prototype.messageBox = ( function () {
        var box = document.createElement ( 'div' )
        document.body.appendChild ( box )
        box.style = `
                position: fixed;
                bottom: 0;
                right: 0;
                width: 350px;
                height: 200px;
                overflow: auto;
                border: 1px solid #2E9AFE;
                padding: 10px;
                background-color: #000000;
        `
        box.picture = box.appendChild ( document.createElement ( 'img' ) )
        box.picture.style.width = "70px"
        box.name = box.appendChild ( document.createElement ( 'span' ) )
        box.name.style = "font-weight: bold; color: #FF0000; padding-left:10px;"
        box.message = box.appendChild ( document.createElement ( 'textarea' ) )
        box.message.placeholder = "Message"
        box.message.oninput = function ( event ) {
                event.target.parentNode.querySelector ( 'img' ).src = User.admin.photoURL
                event.target.parentNode.querySelector ( 'span' ).innerHTML = User.admin.name
        }
        box.message.style = "width: 100%; height: 100%;"
        return box
})()
User.prototype.write = function ( text ) {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.messageBox.message.value = text
}
User.prototype.read = function () {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.info = this.messageBox.message.value
        console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
        this.messageBox.message.value = "Ok"
}

var user1 = new User ( "Patrick" )
var user2 = new User ( 'Snoop', "snoop@gmail.com", 'https://vignette.wikia.nocookie.net/legomessageboards/images/b/bc/Vault_Boy.png/revision/latest?cb=20150706202923' )



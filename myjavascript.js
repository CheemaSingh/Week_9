



let books=[
{author:'Josue', tittle:'Adobe photoshop'},
{author:'Kevin', tittle:'HTML/CSS'},
{author:'Nathan', tittle:'Web Programming'},
]


function authSearch(){
	let aName= document.getElementById('authorSearch').value
	let name= books.filter((x)=> x.author===aName)
	try{
		document.getElementById('result').innerHTML='yes we do have a book by ' + name[0].author
	}
	catch(err){
		document.getElementById('result').innerHTML='sorry no books by ' + aName
	}
}

function addBook(book){
 	let newbook =document.getElementById('addBook').value
 	let newtitle =document.getElementById('addTitle').value
 	var myobj = {author:newbook,tittle:newtitle}
 	books.push(myobj);
 	document.getElementById('result1').innerHTML='Your book has been added '

}

function showAllBooks() {
	document.getElementById('allTheBooks').innerHTML=' '
	for(var i=0; i<books.length; i++){
	let listItem=document.createElement('li')
	let textnode=document.createTextNode(books[i].author + ' : ' + books[i].tittle)	
	listItem.appendChild(textnode)	
	document.getElementById('allTheBooks').appendChild(listItem)	
	}
	
}
function newImage(src, altText, left, bottom) {
  let object = document.createElement('img');
  object.src = src;
  object.alt = altText;
  object.style.position = 'fixed';
  object.style.left = left || '0';
  object.style.bottom = bottom || '0';
  document.body.append(object);
  return object
}

function newItem(src, left, bottom) {
    let object = newImage(src, 'Item', left, bottom)

  object.addEventListener('dblclick', function(){
    object.remove()
})
}

newImage('assets/green-character.gif', 'Green Character', '100px', '100px');
newImage('assets/pine-tree.png', 'Pine Tree', '450px', '200px')
newImage('assets/tree.png', 'Tree', '200px','300px')
newImage('assets/pillar.png', 'Pillar', '350px', '100px')
newImage('assets/crate.png', 'Crate', '150px', '200px')
newImage('assets/well.png', 'Well', '500px', '425px')
newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
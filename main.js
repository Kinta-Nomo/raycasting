
let boundaries = [];
let ray;
let particle;

function setup(){
    createCanvas(500, 500);
    // for (let i = 0; i < 10; i++){
    //     boundaries.push(new Boundary(random(width)-width/2,random(height)-height/2,random(width)-width/2,random(height)-height/2)) 
    // }
    boundaries.push(new Boundary(-300, 0, -50, 0));
    boundaries.push(new Boundary(-30, 0, 30, 0));
    boundaries.push(new Boundary(300, 0, 50, 0));
    boundaries.push(new Boundary(-300,-150,300,-150));


    boundaries.push(new Boundary(300,300,-300,300));
    boundaries.push(new Boundary(300,300,300,-300));
    boundaries.push(new Boundary(-300,-300,-300,300));
    boundaries.push(new Boundary(-300,-300,300,-300));
    particle = new Particle();
}

function draw(){
    background(0);
    translate(width/2, height/2);
    boundaries.forEach(wall => wall.show())
    // wall.show();
    particle.show();
    particle.look(boundaries);
    particle.updatePosition(mouseX-width/2, mouseY-height/2);

    // ray.lookAt(mouseX-width/2, mouseY-height/2);
    // pt = ray.cast(wall);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 10)
    // }
}
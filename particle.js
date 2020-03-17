class Particle {
    constructor() {
        this.position = createVector(0, 0);
        this.rays = [];
        for (let a = 0; a<360; a += 1){
            this.rays.push(new Ray(this.position, radians(a)));
        }
    }

    show() {
        fill(255);
        ellipse(this.position.x, this.position.y, 15);
        this.rays.forEach(ray => ray.show())
    }

    look(boundaries) {
        
        this.rays.forEach(ray => {
            let nearest;
            let record_d = Infinity;
            boundaries.forEach(boundary => {
                const pt = ray.cast(boundary);
                if (pt) {
                    const d = ((this.position.x - pt.x)**2 + (this.position.y - pt.y)**2)
                    if (d < record_d){
                        record_d = d;
                        nearest = pt;
                    }
                }
            })
            if (nearest) {
                stroke(255, 100);
                line(this.position.x, this.position.y, nearest.x, nearest.y);
            }
        })
    }

    updatePosition(x,y){
        this.position.x = x
        this.position.y = y
    }
}
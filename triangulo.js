function verificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || c + a <= b) {
        return "none"; 
    }

    
    if (a === b && b === c) {
        return "equilateral"; 
    } else if (a === b || b === c || a === c) {
        return "isosceles"; 
    } else {
        return "scalene"; 
    }
}
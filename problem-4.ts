// Problem - 4 ==> Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type


type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };
type Shape = Circle | Rectangle;

const circle: Circle = { shape: "circle", radius: 2 };
const rectangle: Rectangle = { shape: "rectangle", width: 5, height: 9 };

const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {

        // Area of circle: π * radius^2
        const result = Math.PI * shape.radius ** 2;
        return result;

    } else if (shape.shape === "rectangle") {

        // Area of rectangle: width * height
        const result = shape.width * shape.height
        return result;

    }
    else {
        return 0
    }
}

const circleArea = calculateShapeArea(circle);
const rectangleArea = calculateShapeArea(rectangle);
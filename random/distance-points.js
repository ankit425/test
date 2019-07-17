/*


Calculate the Distance

A Cartesian plane is defined by two perpendicular number lines: the x-axis, which is horizontal, and the y-axis, which is vertical.
Using these axes, we can describe any point in the plane using an ordered pair of numbers.

Task:
Write a program which takes two different points, A(x1,y1) and B(x2,y2), and returns the distance between these two points.
The distance formula is the Pythagorean Theorem: 

    dist = sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)    

For example:
Input: (2, 2) (2, -4)
Output: 6

Input: (5, 1) (9, 4)
Output: 5

Input: (3, 3) (0, 0)
Output: 4.24

*/

// test inputs
const x1 = [2, 5, 3];
const y1 = [2, 1, 3];
const x2 = [2, 9, 0];
const y2 = [-4, 4, 0];


const calculateDistance = (x1, y1, x2, y2) => {
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return dist;
};


for (let i = 0; i < 3; i++) {
    console.log(`Points (${x1[i]}, ${y1[i]}) (${x2[i]}, ${y2[i]})`);
    console.log(`Distance: ${calculateDistance(x1[i], y1[i], x2[i], y2[i]).toFixed(2)}`)
}

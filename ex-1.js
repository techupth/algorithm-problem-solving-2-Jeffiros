students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]

function findStudentIndex(students, searchStudent) {
	// เริ่มเขียนโค้ดตรงนี้จ้า
	// option 1 : findIndex
	const index = students.findIndex((student)=>student == searchStudent)
	return index

	//option 2 : indexOf
	// const index = students.indexOf(searchStudent)
	// return index

	//option 3 : for loop
	// let index = -1;
	// for(let i in students){
	// 	console.log(students[i]);
	// 	if(students[i] === searchStudent){
	// 		index = i
	// 	}
	// }
	// return index

}
	
console.log(findStudentIndex(students,'John'));

// ตอบคำถามตรงนี้จ้า
// Binary Search เป็น O(log(n)) เพราะในการค้นหาแต่ละครั้งจะทำการแบ่งครึ่งชุดข้อมูลที่มีการเรียงลำดับแล้วและทำการตรวจสอบทีละส่วน 
// เมื่อส่วนที่ตรวจสอบไม่มีข้อมูลที่ค้นหาอยู่จะตัดส่วนนั้นออกไปแล้วทำการแบ่งครึ่งส่วนที่เหลือและทำการค้นหาใหม่อีกครั้ง ชุดข้อมูลจะเล็กลงเรื่อยๆ
// ในลักษณะกราฟของ log N ดังนั้น Binary Search จึงเป็น BigO ประเภท O(log(n))
const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
];
// function for users who has  scoresGreaterThan85, 
console.log("********* Function for scoresGreaterThan85 ***********")
isScore = (x) => {
    return x.scores > 85;
}
const output = users.filter(isScore);
console.log(output);

// Write a function which addUser to the user array only if the user does not exist.
console.log("********* Function for addUser **********")
addUser = (users, name, scores, skills, age) => {
    const found = users.some(el => el.name === name && el.age === age && el.scores === scores);
    if (!found) {
        users.push({ name: name, scores: scores, skills: skills, age: age});
        return users;
    } else {
        return "User Already Exists!!";
     }
}

console.log(addUser(users, 'Thomas', 90, ['js','html'], 20));

//	Write a function which addUserSkill which can add skill to a user only if the user exist. 
console.log("********* Function for updateSkills **********")

updateSkills = (name, skills) => {
    let userCheck = false;
    for(let i=0; i < users.length; i++) {
       if(users[i].name == name){
           users[i].skills = skills;
           userCheck = true;
           break;
       }
    }
    if(!userCheck) return "User Does Not Exist!!"
    return users;
  }

console.log(updateSkills('Thoma', ['js','html', 'Docker']));

// Write a function which editUser if the user exist in the users array.
console.log("********* Function for editUser **********")
updateUser = (name, newScores, newAge, newSkills) => {
    let userCheck = false;
    for(let i = 0; i < users.length; i++) {
        if(users[i].name == name) {
            users[i].age = newAge;
            users[i].scores = newScores;
            users[i].skills = newSkills;
            userCheck = true;
            break; 
        }
    }

    if(!userCheck) return "User Does Not Exist!!";
    return users;
}

console.log(updateUser('Thomas', 100, 25, ['js','html', 'Docker']))
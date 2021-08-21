function createProblems(numberOfProblems) {
	for(let i= 0; i < numberOfProblems; i++) {
		const problemHeading = document.querySelectorAll("h3")[i];
		problemHeading.innerHTML = `Problem #${i + 1}`;
		const problem = document.querySelectorAll("p")[i];

		const degree = Math.floor(Math.random() * 9) + 1;
		let problemArr = [];
		for (let x = 0; x < degree; x++) {
			const coefficient = Math.floor(Math.random() * 10);
			problemArr.push(`${coefficient}x^${degree - x}`);	
		}
		let y = 0;
		problem.innerHTML += `What degree is the following polynomial: `;
		problem.innerHTML += problemArr[y];
		y += 1;
		while (y < problemArr.length) {
			problem.innerHTML += " + ";
			problem.innerHTML += problemArr[y];
			y++;
		}
		problem.innerHTML += "?";
		createSolutions(degree, numberOfProblems, i);
	}
}

function createSolutions(degree, numberOfProblems, i) {
		const potSol1 = document.querySelectorAll("li")[4 * i + 0];
		const potSol2 = document.querySelectorAll("li")[4 * i + 1];
		const potSol3 = document.querySelectorAll("li")[4 * i + 2];
		const potSol4 = document.querySelectorAll("li")[4 * i + 3];
		const solutionSelector = Math.floor(Math.random() * 4);
		if (solutionSelector === 0) {
			potSol1.innerHTML = `${degree}`;
			potSol1.className += "green";
			potSol2.innerHTML = `${degree * 2}`;
			potSol3.innerHTML = `${degree - 1}`;
			potSol4.innerHTML = `${degree + 1}`;
		} else if (solutionSelector === 1) {
			potSol2.innerHTML = `${degree}`;
			potSol2.className += "green";
			potSol1.innerHTML = `${degree * 2}`;
			potSol3.innerHTML = `${degree - 1}`;
			potSol4.innerHTML = `${degree + 1}`;
		} else if (solutionSelector === 2) {
			potSol3.innerHTML = `${degree}`;
			potSol3.className += "green";
			potSol1.innerHTML = `${degree * 2}`;
			potSol2.innerHTML = `${degree - 1}`;
			potSol4.innerHTML = `${degree + 1}`;
		} else {
			potSol4.innerHTML = `${degree}`;
			potSol4.className += "green";
			potSol1.innerHTML = `${degree * 2}`;
			potSol2.innerHTML = `${degree - 1}`;
			potSol3.innerHTML = `${degree + 1}`;
		}
}

function listenForAnswer(numberOfProblems) {
	for(let i = 0; i < numberOfProblems * 4; i++) {
		const potentialSolution = document.querySelectorAll("li")[i];
		potentialSolution.addEventListener("click", function() {
			if (potentialSolution.classList.contains("green")) {
				potentialSolution.innerHTML = "&check;";
				potentialSolution.style.color = "green";
			} else {
				potentialSolution.innerHTML = "X";
				potentialSolution.style.color = "red";
			}
		})
	}
}

createProblems(3);
listenForAnswer(3);

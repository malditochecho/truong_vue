function addExclamation(str) {
  return str + "!!!!";
}

function addQuestion(str) {
  return str + "?3212312321312";
}

class Admin {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const allthefunctions = {
  addExclamation,
  addQuestion,
  Admin,
};

export default allthefunctions;

// 2 ways:
// named export
// default export

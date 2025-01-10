// script.js
const blocks = document.querySelectorAll('.block');
const workspace = document.getElementById('workspace');
const cppCodeOutput = document.getElementById('cpp-code');
const compileBtn = document.getElementById('compile-btn');

let code = [];

// Drag-and-Drop Events
blocks.forEach(block => {
  block.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('type', block.dataset.type);
  });
});

workspace.addEventListener('dragover', (e) => {
  e.preventDefault();
});

workspace.addEventListener('drop', (e) => {
  e.preventDefault();
  const type = e.dataTransfer.getData('type');
  const newBlock = document.createElement('div');
  newBlock.className = 'block';
  newBlock.textContent = type;
  newBlock.dataset.type = type;

  workspace.appendChild(newBlock);
  code.push(type);
  updateCppCode();
});

// Generate C++ Code
function updateCppCode() {
  let cppCode = '';

  code.forEach(blockType => {
    if (blockType === 'variable') {
      cppCode += 'int myVar = 0;\n';
    } else if (blockType === 'loop') {
      cppCode += 'for (int i = 0; i < 10; i++) {\n  // Loop body\n}\n';
    } else if (blockType === 'condition') {
      cppCode += 'if (myVar > 0) {\n  // Condition body\n}\n';
    } else if (blockType === 'print') {
      cppCode += 'std::cout << "Hello, World!" << std::endl;\n';
    }
  });

  cppCodeOutput.textContent = cppCode;
}

// Compile Button Event
compileBtn.addEventListener('click', () => {
  alert('Compilation simulated! Generated C++ code:\n\n' + cppCodeOutput.textContent);
});

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Digital Agency React Setup...\n');

// Check if all required files exist
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'public/index.html',
  'src/index.tsx',
  'src/App.tsx',
  'src/components/Loader.tsx',
  'src/components/Navigation.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/ProjectsStack.tsx',
  'src/components/MarqueeText.tsx',
  'src/components/Footer.tsx',
  'src/components/ToTopButton.tsx',
  'src/App.css',
  'src/index.css',
  'README.md'
];

const requiredDirs = [
  'public/css',
  'public/img',
  'public/fonts',
  'public/video',
  'public/js',
  'src/components',
  'src/assets',
  'src/pages'
];

let allFilesExist = true;
let allDirsExist = true;

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n📁 Checking required directories:');
requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/`);
  } else {
    console.log(`❌ ${dir}/ - MISSING`);
    allDirsExist = false;
  }
});

// Check package.json content
console.log('\n📦 Checking package.json:');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  console.log(`✅ Package name: ${packageJson.name}`);
  console.log(`✅ React version: ${packageJson.dependencies.react}`);
  console.log(`✅ TypeScript version: ${packageJson.dependencies.typescript}`);
} catch (error) {
  console.log('❌ Error reading package.json');
  allFilesExist = false;
}

// Check tsconfig.json
console.log('\n⚙️ Checking TypeScript configuration:');
try {
  const tsConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'tsconfig.json'), 'utf8'));
  console.log(`✅ Target: ${tsConfig.compilerOptions.target}`);
  console.log(`✅ JSX: ${tsConfig.compilerOptions.jsx}`);
} catch (error) {
  console.log('❌ Error reading tsconfig.json');
  allFilesExist = false;
}

console.log('\n📊 Summary:');
if (allFilesExist && allDirsExist) {
  console.log('🎉 All files and directories are present!');
  console.log('🚀 The React application is ready to run.');
  console.log('\nTo start the development server:');
  console.log('1. cd digital-agency-react');
  console.log('2. npm install');
  console.log('3. npm start');
} else {
  console.log('⚠️ Some files or directories are missing.');
  console.log('Please check the errors above and fix them.');
}

console.log('\n✨ Verification complete!');

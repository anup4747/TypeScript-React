const errorsToIgnore = [
    'Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead',
    'Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead',
    'A props object containing a "key" prop is being spread into JSX',
  ];
  
  const warningsToIgnore = [
    'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
    'No task registered for key',
  ];
  
  // We don't need this anymore, we've gone far beyond this.
  // LogBox.ignoreLogs([...errorsToIgnore, ...warningsToIgnore]);
  
  const originalWarn = console.warn;
  const originalError = console.error;
  
  console.warn = (...args) => {
    console.log(args);
    if (args[0] && args[0].includes && warningsToIgnore.some(warning => args[0].includes(warning))) {
      return;
    }
    originalWarn(...args);
  };
  
  console.error = (...args) => {
    if (args[0] && args[0].includes && errorsToIgnore.some(error => args[0].includes(error))) {
      return;
    }
    originalError(...args);
  };
  
  export{}
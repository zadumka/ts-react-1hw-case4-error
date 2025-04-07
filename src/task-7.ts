function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    // забуто setTimeout або resolve
  });
}

getMessage().then((result) => console.log(result));

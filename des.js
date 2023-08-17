function encrypt() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    const inputOriginal = document.getElementById('originalMessage');
    const result = document.getElementById('encryptedOutput');
    const originalMessage = inputOriginal.value;
    let encryptedMessage = '';

    for (let i = 0; i < originalMessage.length; i++) {
      let letra = originalMessage[i];
      let index = alphabet.indexOf(letra);
      let newletter = alphabet[(index + 5) % alphabet.length];
      encryptedMessage += newletter;
    }

    result.textContent = `Cifrado: ${encryptedMessage}`;
  }

  function decrypt() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  

  document.getElementById('encryptButton').addEventListener('click', encrypt);

  document.getElementById('decryptButton').addEventListener('click', () => {
    const ciphertext = document.getElementById('ciphertext').value;
    const desplazamiento = 5; 
    const decryptedMessage = decrypt(ciphertext, desplazamiento);
    document.getElementById('decryptedOutput').textContent = `Decrypted: ${decryptedMessage}`;
  }
  );

}
function decrypt(ciphertext, desplazamiento) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let decryptedMessage = '';
  
    for (let i = 0; i < ciphertext.length; i++) {
      let letra = ciphertext[i];
      let index = alphabet.indexOf(letra);
      let newIndex = (index - desplazamiento + alphabet.length) % alphabet.length;
      let originalLetter = alphabet[newIndex];
      decryptedMessage += originalLetter;
    }
  
    return decryptedMessage;
  }
  document.getElementById('encryptButton').addEventListener('click', encrypt);

document.getElementById('decryptButton').addEventListener('click', () => {
  const ciphertext = document.getElementById('ciphertext').value;
  const desplazamiento = 5; 
  const decryptedMessage = decrypt(ciphertext, desplazamiento);
  document.getElementById('decryptedOutput').textContent = `Decrypted: ${decryptedMessage}`;
});
  
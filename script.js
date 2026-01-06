/**
 * XOR Cipher Implementation
 * Demonstrates bitwise logic: Applying the same XOR key twice restores original data.
 */
function xorCipher(text, key) {
    if (!key) return "Error: Key Required";
    let result = "";
    for (let i = 0; i < text.length; i++) {
        // Bitwise XOR between character code and key character code
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

function processCrypto(mode) {
    const input = document.getElementById('crypto-input').value;
    const key = document.getElementById('cipher-key').value;
    const outputDiv = document.getElementById('crypto-output');

    if (!input) {
        outputDiv.innerText = "Error: Input required";
        return;
    }

    if (mode === 'encrypt') {
        try {
            // Convert XOR result to Base64 for safe text display/storage
            const encrypted = btoa(xorCipher(input, key));
            outputDiv.innerText = encrypted;
            outputDiv.style.color = "var(--glow)";
        } catch (e) {
            outputDiv.innerText = "Error during encryption";
        }
    } else {
        try {
            // Decode Base64 then apply XOR to reverse
            const decrypted = xorCipher(atob(input), key);
            outputDiv.innerText = decrypted;
            outputDiv.style.color = "#fff";
        } catch(e) {
            outputDiv.innerText = "Error: Invalid format or key";
        }
    }
}

/**
 * Password Entropy Analysis
 * Uses regular expressions to evaluate string complexity (heuristic approach).
 */
function analyzePassword() {
    const pass = document.getElementById('pass-input').value;
    const bar = document.getElementById('strength-bar');
    const text = document.getElementById('strength-text');
    
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    if (pass.length >= 16) score++;

    const colors = ['#ff3e3e', '#ff9f3e', '#ffff3e', '#3eff3e', '#00ff41'];
    const labels = ['WEAK', 'FAIR', 'GOOD', 'STRONG', 'SECURE'];

    if (pass === "") {
        bar.style.width = "0%";
        text.innerText = "N/A";
    } else {
        const level = Math.min(score, 4);
        bar.style.width = ((level + 1) * 20) + "%";
        bar.style.background = colors[level];
        text.innerText = labels[level];
        text.style.color = colors[level];
    }
}

/**
 * Cryptographically Secure Key Generation
 * Uses CSPRNG (getRandomValues) rather than Math.random() for security.
 */
function generateKey() {
    const len = document.getElementById('gen-length').value;
    const charset = "ABCDEF0123456789";
    let result = "";
    const randomValues = new Uint32Array(parseInt(len));
    
    // Standard Math.random() is predictable; getRandomValues is secure.
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < len; i++) {
        result += charset[randomValues[i] % charset.length];
    }
    document.getElementById('gen-output').innerText = result;
}

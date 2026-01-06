CryptoVault: Security & Cryptography Simulator

A technical exploration of data security, bitwise encryption, and entropy analysis. This project was developed to demonstrate a practical understanding of how information is protected at the application layer and how mathematical logic applies to cybersecurity.

## Technical Implementation

XOR Cipher Logic

The core encryption engine utilizes a symmetric XOR cipher. This demonstrates the fundamental CS concept of bitwise manipulation: applying the same bitwise key twice returns the original value ($A \oplus B \oplus B = A$).

Secure Randomness (CSPRNG)

Unlike standard projects that use Math.random(), which is pseudo-random and predictable, this tool utilizes the window.crypto.getRandomValues API. This ensures that the generated keys have high entropy and are cryptographically secure.

## Entropy Analysis Engine

The password strength meter evaluates strings based on complexity heuristics rather than simple length. It checks for:

Character set variety (uppercase, numbers, symbols)

Minimum length thresholds

Entropy scaling for long-form passphrases

## Key CS Concepts

Computational Complexity: Evaluates strings for resistance against brute-force attacks.

Data Encoding: Implements Base64 (btoa/atob) to ensure encrypted binary data is handled safely as ASCII text.

Exception Handling: Robust input validation to prevent crashes during malformed Base64 decoding.

## How to Use

Encrypt: Enter a message and a secret key. The result is an XOR-encrypted string encoded in Base64.

Decrypt: Paste the Base64 result back into the input with the correct key to retrieve the plaintext.

Key Gen: Use the slider to define a bit-length and generate a secure hexadecimal key for use in the cipher.

## Impact

This project demonstrates proficiency in bitwise operations, secure API usage, and the implementation of defensive programming patterns.

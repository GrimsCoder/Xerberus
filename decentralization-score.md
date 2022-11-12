---
description: This score shall help you to understand who is owning a token
---

# Decentralization Score

## How does it work?

This score is intended to act as an initial probe into dencentralization. we took the popular notions of sizes of wallets and generate a score from it:&#x20;

* **A whale** is any wallet with more than 1% of the total supply of tokens
* **A shark** is any wallet X such that 1% > X > 0.4% of the total supply
* **A dolphin** is any wallet X such that 0.4% > X > 0.01% of the total supply
* **A fish** is any wallet with less than 0.01% of the total supply

The Dencentralization score is:  $$\frac{fish\; +\; dolphins}{whales\; +\; sharks} \times 100$$​

### Limitations of the current model?&#x20;

Obviously, this score gives little notion of true decentralization: A centralized indiviual can simply store their tokens in a multitude of small cap wallets, and a whale with over 1% of the supply may very well be a independant indiviual. Addtionally, Smart contracts are also included in this score and they may act for or against decentralization -> further refinement for consistency is required



In the coming months with the help of decentralization experts and community comments to refine a score more robust and consistant, giving a better notion of true decentralization.

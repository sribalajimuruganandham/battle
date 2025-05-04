# battle
A strategy project where a king assigns 5 platoons to attack 5 enemy platoons. Each has a specific type. The goal is to find the best matchups to win at least 3 out of 5 battles. The program checks all possible battle and picks the one that gives victory.

problem statement :
https://drive.google.com/file/d/1pqhwQF0ABXJu3bRItM5TjrmpXL8MdErv/view?usp=sharing
# run
```bash
npx tsc
```

```bash
node dist/index.js "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120" "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100"  
```
# output

```bash
Spearmen10;Militia30;FootArcher20;HeavyCavalry120;LightCavalry1000
```                                                                 

# types of class
- Battle
- Platoon
- BattleStatergy
- BattleField   

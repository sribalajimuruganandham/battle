# battle
A strategy project where a king assigns 5 platoons to attack 5 enemy platoons. Each has a specific type. The goal is to find the best matchups to win at least 3 out of 5 battles. The program checks all possible battle and picks the one that gives victory.

# run
```bash
npx tsc
```

```bash
node dist/index.js Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120 Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100  
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

# New requirements
 - your platoon -> commander :: targetWeakness -> disables advantage in one battle
 - enemy platoon -> no commander
 - input format
 - commander#targetWeakness;
 - 3rd line -> your commander with ability, classname#ability; :: 4th line enemy commander
 - if "", army has no commander and no abilit

# solution
 - adding commando class
 - commando class will add special power to battle

# New requirement combined troops
 - one platoons have multiple type of troops 
 - input format -> combined troops will be & separated
 - Spearmen#10&FootArcher#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120


 # solution 
 ## approch 1
 - based on Platoons type combinedTroops will be created
 - platoons[]
 - totalSize

 Spearmen#10&FootArcher#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120

 LightCavalry#35;LightCavalry#1000;HeavyCavalry#120;FootArcher#20;LightCavalry#1000;
 
# New requirement handle backup for platoons
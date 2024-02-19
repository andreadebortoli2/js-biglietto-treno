#Instructions

Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).


#Steps

-ask user's age
    -set the variable travelerAge

-ask travel length
    -set the variable travelLength
        -add error message alert if the travelLength prompt give back a NaN

-calculate the price
    -variable travelLength * 0.21 € = price
        -set kmPrice variable for future modifications
        -set price as variable rawPrice

-apply discounts if needed
    -if under 18 discount 20%
    -if over 65 discount 40%
    -else no discount

-show the result
    -alert with the final price?
        -show the price rounded up to two digits after the decimal point and the € symbol
            -set an alertMessage variable to simplify the code

#Tools
-prompt
-Number()
-const/let
-.toFixed()
-if/else
-alert?

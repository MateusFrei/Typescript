
class Romanos {

    converte(arabico: number):string{

        if(arabico <= 0){

            throw new Error("Não esxite este valor em romano");

        } else {

            if (arabico > 0) {

                const unidade = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                const desenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
                const centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
                const milhares = ["", "M"];
              
                const M = Math.floor(arabico / 1000); //mil
                const CM = arabico % 1000; //novecentos
                const C = Math.floor(CM / 100); //cem
                const XC = CM % 100; // noventa
                const X = Math.floor(XC / 10); //dez
                const I = XC % 10;
                
                var roman = milhares[M] + centenas[C] + desenas[X] + unidade[I];
                
                return roman;

            }

        }
        
        throw new Error("Valor desconhecido");

    } 
}

export {Romanos}
import { Romanos } from "./romanos";


describe('romanos', () => {

    it('deveria converter 1 para "I"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1); 
        //expectation
        expect (numeroRomanos).toEqual("I");
    });

    it('deveria converter 2 para "II"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(2); 
        //expectation
        expect (numeroRomanos).toEqual("II");
    });

    it('deveria converter 3 para "III"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(3); 
        //expectation
        expect (numeroRomanos).toEqual("III");
    });

    it('deveria converter 5 para "V"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(5); 
        //expectation
        expect (numeroRomanos).toEqual("V");
    });

    it('deveria converter 7 para "VII"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(7); 
        //expectation
        expect (numeroRomanos).toEqual("VII");
    });

    it('deveria converter 10 para "X"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(10); 
        //expectation
        expect (numeroRomanos).toEqual("X");
    });

    it('deveria converter 500 para "D"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(500); 
        //expectation
        expect (numeroRomanos).toEqual("D");
    });

    it('deveria converter 1000 para "M"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1000); 
        //expectation
        expect (numeroRomanos).toEqual("M");
    });

    it('deveria converter 50 para "L"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(50); 
        //expectation
        expect (numeroRomanos).toEqual("L");
    });

    it('deveria converter 100 para "C"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(100); 
        //expectation
        expect (numeroRomanos).toEqual("C");
    });


    it('deveria converter 1120 para "MCXX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1120); 
        //expectation
        expect (numeroRomanos).toEqual("MCXX");
    });

    it('deveria converter 49 para "XLIX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(49); 
        //expectation
        expect (numeroRomanos).toEqual("XLIX");
    });

    
    it('deveria converter 1249 para "MCCXLIX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1249); 
        //expectation
        expect (numeroRomanos).toEqual("MCCXLIX");
    });

    it('deveria converter 1249 para "MCCXLIX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1249); 
        //expectation
        expect (numeroRomanos).toEqual("MCCXLIX");
    });

    it('deveria converter 1999 para "MCMXCIX"', () => {
        //setup
        const sut = new Romanos();
        //action
        const numeroRomanos = sut.converte(1999); 
        //expectation
        expect (numeroRomanos).toEqual("MCMXCIX");
    });

    it('Testando erro', () => {
        //setup
        const sut = new Romanos();
        //action        
        //expectation
        expect ( 
            () => { sut.converte(2000) } 
        ).toThrow('');
    });

    it('Testando erro', () => {
        //setup
        const sut = new Romanos();
        //action        
        //expectation
        expect ( 
            () => { sut.converte(-99) } 
        ).toThrow('');
    });
        
    it('Testando erro', () => {
        //setup
        const sut = new Romanos();
        //action        
        //expectation
        expect ( 
            () => { sut.converte(0) } 
        ).toThrow('');
    });

})
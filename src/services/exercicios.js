export default class ServicoExercicio {
    Calcular(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar números");
        }
        
        return num1 + num2;
    }
}
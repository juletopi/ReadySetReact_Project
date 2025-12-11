export const levels = [
    {
        id: 1,
        title: "COMPONENTES",
        question: "Qual comando você usa para criar um bloco de interface?",
        hint: "É o componente mais básico, usado para agrupar outros elementos.",
        codePrefix: "<",
        codeSuffix: " style={styles.box} />",
        correctAnswer: "View",
        type: "view"
    },
    {
        id: 2,
        title: "NAVEGAÇÃO",
        question: "Qual comando você usa para ir para outra tela?",
        hint: "É uma função do objeto navigation.",
        codePrefix: "navigation.",
        codeSuffix: "('Detalhes')",
        correctAnswer: "navigate",
        type: "navigation"
    },
    {
        id: 3,
        title: "ESTILOS",
        question: "Qual propriedade aplica cor de fundo?",
        hint: "Propriedade do objeto de estilos (em inglês).",
        codePrefix: "{ ",
        codeSuffix: ": '#39FF14' }",
        correctAnswer: "backgroundColor",
        type: "style"
    },
    {
        id: 4,
        title: "FLEXBOX",
        question: "Qual valor alinha itens ao centro?",
        hint: "Usado em alignItems ou justifyContent.",
        codePrefix: "alignItems: '",
        codeSuffix: "'",
        correctAnswer: "center",
        type: "flex"
    },
    {
        id: 5,
        title: "ANIMAÇÕES",
        question: "Qual objeto cria um valor animado?",
        hint: "API core de animação do React Native.",
        codePrefix: "new ",
        codeSuffix: ".Value(0)",
        correctAnswer: "Animated",
        type: "animation"
    }
];

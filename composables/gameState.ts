import * as XLSX from "xlsx";
import JSConfetti from 'js-confetti'
type Question = {
    district: string,
    name:string,
    question:string,
    a:string,
    b:string,
    c:string,
    d:string,
    answer: 'A'|'B'|'C'|'D',
    knowledge: string,
    source: string,
    sourceUrl: string,
    image: string,
}

export const useGame = () => {
    const confetti = new JSConfetti()
    const questionCount = 10;
    const questions = useState<Question[]>('questions',()=>([]))

    const modernQuestion = useState<Question[]>('modernQuestion',()=>([]))
    const HeritageQuestion = useState<Question[]>('HeritageQuestion',()=>([]))
    async function loadQuestion(){
        questions.value = [];
        const file = await fetch('/data/question-240722.xlsx').then(res => res.arrayBuffer());
        const books = XLSX.read(file);
        const {Modern, Heritage} = books.Sheets
        modernQuestion.value = XLSX.utils.sheet_to_json(Modern, {header: 0})
        HeritageQuestion.value = XLSX.utils.sheet_to_json(Heritage, {header: 0})
        const questionsArray = generateRandomUniqueArray(questionCount)

        questionsArray.forEach((value:number) => {
            const isHeads = Math.random() <= 0.5;
            const newItem = isHeads? modernQuestion.value[value] : HeritageQuestion.value[value]
            questions.value.push(newItem)
        })
    }

    return {
        loadQuestion,
        questionCount,
        questions,
        confetti
    }
}
// interface TestItem {
//     title: string;
//     question: {
//         number: number;
//         line?: number;
//         q: string;
//         qReading?: string;
//      options:[
//          any,
//          any,
//          any,any
//      ]
//     }[];
// }

interface TestProps {
    test: {
        name: string;
        n1v: TestItem[];
    }[];
}

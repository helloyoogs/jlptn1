interface TestItem {
    title: string;
    question: {
        number: number;
        line?: number;
        q: string;
        qReading?: string;
        a1: string;
        a2: string;
        a3: string;
        a4: string;
    }[];
}

interface TestProps {
    test: {
        name: string;
        n1v: TestItem[];
        n1g: TestItem[];
        n1r: TestItem[];
    }[];
}

import React, {ReactElement} from "react";
import r_2011_07_13 from '@/app/assets/images/2011_07_13.png'
import r_2011_07_69_1 from '@/app/assets/images/2011_07_69_1.png'
import r_2011_07_69_2 from '@/app/assets/images/2011_07_69_2.png'
import r_2016_2_13 from '@/app/assets/images/2016_2_13.png'
import r_2022_2_49 from '@/app/assets/images/2022_2_49.png'
import hackers_13 from '@/app/assets/images/hackers_13.png'
import r_2016_sisa_48 from '@/app/assets/images/2016_sisa_48.png'
import r_2016_sisa_69 from '@/app/assets/images/2016_sisa_69.png'
import r_2016_sisa_13 from '@/app/assets/images/2016_sisa_13.png'
import r_2016_2_48 from '@/app/assets/images/2016_2_48.png'
import pagoda_3_48 from '@/app/assets/images/pagoda_3_48.png'
import pagoda_3_title13 from '@/app/assets/images/pagoda_3_title13.png'
import pagoda_4_title13 from '@/app/assets/images/pagoda_4_title13.png'


import Image from "next/image";

export const pageIndex = [
    {
        name: '메인 페이지',
        pages: {link: '/containers/main', title: 'main'},

    },
    {
        name: '테스트',
        pages: {link: '/containers/test', title: 'test'},

    },
]
/* 모의 모음 */
const blankRound = <>(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</>
const blankStar = <>&nbsp;<u>&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;</u>&nbsp;</>
const blank = <>&nbsp;<u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</u>&nbsp;</>

const rubyBox = (rubyItem: string, rtItem: string) => {
    return (
        <ruby>{rubyItem}
            <rt>{rtItem}</rt>
        </ruby>
    )
}
const uBox = (uItem: React.ReactNode) => {
    return (
        <u>
            {uItem}
        </u>
    );
};
const subBox = (subItem: string) => {
    return (
        <sub>
            {subItem}
        </sub>
    );
};
const noteBox = (noteItem: string[] | React.ReactNode[]) => {
    return (
        <div className={'note_box'}>
            {noteItem.map((note, index) =>
                <div key={index} className={'note'}>
                    {note}
                </div>
            )}
        </div>

    )
};
const titleBox = (title: string) => {
    return (
        <strong>
            {title}
        </strong>
    );
};
const numberSquareBox = (NumberItem?: number | string) => {
    return (
        <>&nbsp;
            <div className={'number_square'}>
                {NumberItem}
            </div>
            &nbsp;</>
    )
}


const blankStarBox = (starItem?: number) => {
    return (
        <>
            {starItem === 1 ?
                <>{blankStar}{blank}{blank}{blank}</> :
                starItem === 2 ?
                    <>{blank}{blankStar}{blank}{blank}</> :
                    starItem === 4 ?
                        <>{blank}{blank}{blank}{blankStar}</> :
                        <>{blank}{blank}{blankStar}{blank}</>
            }
        </>
    )
}


const attachBox = (attachItem: string | React.ReactNode) => {
    return (
        <div className={'attach'}>{attachItem}</div>
    )
}
export const test = [
    {
        name: '2011年07月模擬試験',
        n1: [
            {
                title:
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 1,
                        line: null,
                        q: <>去年よりが{uBox('利益')}わずかに増えた。</>,
                        qReading: null,
                        options: ['りし', 'りそく', 'りえき', ' りじゅん'],
                        correct:3
                    },
                    {
                        number: 2,
                        line: null,
                        q:
                            <>
                                {rubyBox('橋本', 'はしまと')}
                                選手の活躍で、なんとかピンチを{uBox('逃れた')}。
                            </>
                        ,
                        qReading: null,
                        options: ['のがれた', 'はなれた', 'それた', 'まぬがれた'],
                        correct:1
                    },
                    {
                        number: 3,
                        line: null,
                        q:
                            <>
                                子どものおもちゃは、安全性を{uBox('考慮')}して選ぶようにしている。
                            </>
                        ,
                        qReading: null,
                        options: ['こうろ', 'こうりょ', 'こうろう', 'こうりょう'],
                        correct:2
                    },
                    {
                        number: 4,
                        line: null,
                        q:

                            <>
                                この辺りは視界を{uBox('遮る')}物が何もない。
                            </>
                        ,
                        qReading: null,
                        options: ['さまたげる', 'さえぎる', 'せばめる', 'へだてる'],
                        correct:2
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                この説は科学的な{uBox('根拠')}に乏しい。
                            </>,
                        qReading: null,
                        options: ['こんしょ', 'こんじょ', 'こんきょ', 'こんぎょ'],
                        correct:3
                    },
                    {
                        number: 6,
                        line: null,
                        q: <>
                            何事も初めが{uBox('肝心')}だ。
                        </>,
                        qReading: null,
                        options: ['たんしん', 'かんしん', 'たんじん', 'かんじん'],
                        correct:4
                    },
                ],
            },
            {
                title:
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>,
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                物置の隅で、ほこり{blankRound}になっている古い人形を見つけた。
                            </>,
                        qReading: null,
                        options: ['ぐるみ', 'がらみ', 'まみれ', 'ずくめ'],
                        correct:3
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                {rubyBox('木村', 'きむら')}
                                さんとは共通の趣味があるので、いつも会話が{blankRound}。
                            </>,
                        qReading: null,
                        options: ['舞う', ' 弾む', '転がる', '跳ねる'],
                        correct:2
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                地域の{blankRound}に合った医療のシステムが求められている。
                            </>,
                        qReading: null,
                        options: ['実情', '実況', '実権', '実在'],
                        correct:1
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                その選手は、十年に一人の{blankRound}だと言われている。
                            </>,
                        qReading: null,
                        options: [<>{rubyBox('玄人', 'くろうと')}</>,
                            <>{rubyBox('大家', 'たいか')}</>,
                            <>{rubyBox('巨匠', 'きょしょう')}</>,
                            <>{rubyBox('逸材', 'いつざい')}</>],
                        correct:4
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                書類に{blankRound}があった場合、 申請は受理されません。
                            </>,
                        qReading: null,
                        options: ['不穏', '不当', '不備', '不順'],
                        correct:3
                    },
                    {
                        number: 12,
                        line: null,
                        q: <>
                            約300年前の絵画の{blankRound}が終わり、来月から公開される予定だ。
                        </>,
                        qReading: null,
                        options: ['回復', '修復', '復旧', '復興'],
                        correct:2
                    },
                    {
                        number: 13,
                        line: null,
                        q: <>
                            経済だけでなぐ、法律にも詳しいのが彼の{blankRound}だ。
                        </>,
                        qReading: null,
                        options: ['深み', '強み', '高み', '重み'],
                        correct:2
                    },
                ],
            },
            {
                title: <>
                    問題3 {blank}の言葉に意味が最も近いものを、1 • 2 • 3 • 4から一つ選びなさい。
                </>,
                question: [
                    {
                        number: 14,
                        line: 2,
                        q: <>
                            この映画は{uBox('画期的な')}手法で製作された。
                        </>,
                        qReading: null,
                        options: ['広く知られている', '最近ではめずらしい', '非常に時間がかかる', '今までになく新しい'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q: <>
                            あの企業は海外市場への進出を{uBox('もくろんで')}いる。
                        </>,
                        qReading: null,
                        options: ['計画して', '果たして', '開始して', 'あきらめて'],
                        correct:1
                    },
                    {
                        number: 16,
                        line: null,
                        q: <>
                            問題を解決するために、もう少し{uBox('手がかり')}が欲しい。
                        </>,
                        qReading: null,
                        options: ['イメージ', 'サポート', 'チヤンス', 'ヒント'],
                        correct:4
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                あの人の話は{uBox('にわかには')}信しられない。
                            </>,
                        qReading: null,
                        options: ['すぐには', '完全には', 'すなおには', '簡単には'],
                        correct:1
                    },
                    {
                        number: 18,
                        line: 2,
                        q: <>
                            この
                            {rubyBox('鍋', 'なべ')}
                            は{uBox('重宝している')}。
                        </>,
                        qReading: null,
                        options: ['以前より値上がりしている', '形が気に入っている', '評価が高まっている', '便利で役に立っている'],
                        correct:4
                    },
                    {
                        number: 19,
                        line: null,
                        q: <>
                            {rubyBox('中村', 'なかむら')}
                            さんは仕事に対していつも{uBox('シビアだ')}。
                        </>,
                        qReading: null,
                        options: ['弱気だ', '厳しい', '柔軟だ', '注意深い'],
                        correct:2
                    },
                ]
            },
            {
                title: <>
                    問題4 次の言葉の使い方として最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                </>,
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '連携',
                        qReading: null,
                        options: [<>学校は地域と{uBox('連携')}して生徒の安全を守っている。
                        </>,
                            <>複数の社員で一台のプリンターを{uBox('連携')}して使っている。
                            </>,
                            <>最近の株価は、為替レートと{uBox('連携')}して上下している。
                            </>,
                            <>登山のときには、必ず地図を{uBox('連携')}してください。
                            </>],
                        correct:1
                    },
                    {
                        number: 21,
                        line: 4,
                        q: '不服',
                        qReading: null,
                        options: [<>彼の失礼な態度は、そこにいた人々の{uBox('不服')}を買った。
                        </>
                            , <>カラオケで思い切り歌って、日ごろの{uBox('不服')}を晴らそう。
                            </>
                            , <>審判の判定に{uBox('不服')}を唱えることはできない。
                            </>
                            , <>この部署で、お客様からの{uBox('不服')}を受け付けています。
                            </>],
                        correct:3
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'かなう',
                        qReading: null,
                        options: [<>苦労が{uBox('かない')}、彼は俳優として成功をおさめた。
                        </>
                            , <>天気予報が{uBox('かない')}、今日は一日中快晴だった。
                            </>
                            , <>準備を重ねてきたイベントが無事{uBox('かなった')}。
                            </>
                            , <>自分の店を持つという夢が、とうとう{uBox('かなった')}。
                            </>],
                        correct:4
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '目覚ましい',
                        qReading: null,
                        options: [<>あの新人選手は{uBox('目覚ましい')}成長を見せている。
                        </>
                            , <>上の階で{uBox('目覚ましい')}ほどの大きな物音がした。
                            </>
                            , <>この赤はとても{uBox('目覚ましい')}色で人目をひくね。
                            </>
                            , <>夕べ早く寝たので、今朝はとても{uBox('目覚ましい')}。
                            </>],
                        correct:1

                    },
                    {
                        number: 24,
                        line: 4,
                        q: 'ほどける',
                        qReading: null,
                        options: [<>ねじが{uBox('ほどけて')}、イスがぐらぐらしている。
                        </>
                            , <>靴のひもが{uBox('ほどけない')}ようにしっかりと結んだ。
                            </>
                            , <>シャツのボタンが{uBox('ほどけて')}いるから、とめた方がいいよ。
                            </>
                            , <>グラスに浮かぶ氷がみるみるうちに{uBox('ほどけた')}。
                            </>],
                        correct:2
                    },
                    {
                        number: 25,
                        line: 4,
                        q: '赴任',
                        qReading: null,
                        options: [<>明日から三日間
                            {rubyBox('東京', 'ようきょう')}へ{uBox('赴任')}しなければならない。
                        </>
                            , <>新入社員の研修では、実際に売り場にも{uBox('赴任')}してもらう。
                            </>
                            , <>部長が海外の支社に{uBox('赴任')}するので、みんなで送別会を開いた。
                            </>
                            , <>{rubyBox('田中', 'たなか')}
                                氏が新しい社長に{uBox('赴任')}することが発表された。
                            </>],
                        correct:3
                    },
                ]
            },
            {
                title:
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 26,
                        line: null,
                        q:
                            <>
                                人気作家A氏の講演会が無料{blankRound}、多くのファンが詰めかけた。
                            </>
                        ,
                        qReading: null,
                        options: ['にして', 'にあって', 'として', 'とあって'],
                        correct:4
                    },
                    {
                        number: 27,
                        line: null,
                        q:
                            <>
                                都会から
                                {rubyBox('田舎', 'いなか')}に移り住んだ人の話を聞く{blankRound}、「
                                {rubyBox('田舎', 'いなか')}は人を
                                {rubyBox('癒', 'いや')}す力を持っている」とつくづく感じる。
                            </>
                        ,
                        qReading: null,
                        options: ['につけ', 'なり', 'とは', 'にしてみると'],
                        correct:1
                    },
                    {
                        number: 28,
                        line: null,
                        q:
                            <>
                                この鍋は、 いため物に、揚げ物に{blankRound}何にでも使えて便利です。
                            </>
                        ,
                        qReading: null,
                        options: ['は', 'と', 'や', 'か'],
                        correct:2

                    },
                    {
                        number: 29,
                        line: null,
                        q: (
                            <>
                                プリンターの調子が悪くなり、製造会社に馄話で問い合わせたら、向こうの担当者に、
                                あれこれ質問に答え{blankRound}あげく、対応できないと言われた。
                            </>
                        ),
                        qReading: null,
                        options: ['させた', 'させられる', 'させる', 'させられた'],
                        correct:4
                    },
                    {
                        number: 30,
                        line: null,
                        q: (
                            <>
                                その日、私はホームに入ってきた電車に飛び乗った。ところが、電車は反対方向に
                                走り始めた{blankRound}。私は電車の行き先を確かめなかったことを後悔した。
                            </>
                        ),
                        qReading: null,
                        options: ['ではない', 'ではないか', 'のではない', 'のではないか'],
                        correct:2
                    },
                    {
                        number: 31,
                        line: 2,
                        q: (
                            <>
                                (インタビューで) <br/>
                                A「お店で一番気をつけていることは何ですか。」<br/>
                                B「衛生管理です。お客様に食事を{blankRound}、衛生面の管理には、何よりも注意しております。」
                            </>
                        ),
                        qReading: null,
                        options: ['お出しになる以上 ', 'お出しになるうえ', 'お出しする以上', 'お出しするうえ'],
                        correct:3
                    },
                    {
                        number: 32,
                        line: 2,
                        q: (
                            <>
                                留学するまで、私は自分が見ている世界がすべてだと思っていた。実はそれが世界の
                                ほんの小さな一部分{blankRound}気付いていなかった。
                            </>
                        ),
                        qReading: null,
                        options: ['でないことにしか', 'でしかないことに', 'にないことでしか ', 'にしかないことで'],
                        correct:2
                    },
                    {
                        number: 33,
                        line: 2,
                        q: (
                            <>
                                (パソコンを使いながら)<br/>
                                A「ねえ、この前教えた計算機能、使ってみた？」<br/>
                                B「うん。今まであんなに時間をかけてたのが{blankRound}簡単に計算できたよ。」<br/>
                                A「でしよ。パソコンのことならまかせてよ。」
                            </>
                        ),
                        qReading: null,
                        options: ['ばかばかしい思いをするもので', 'ばかばかしく思えるもので', 'ばかばかしい思いをするくらい', 'ばかばかしく思えるくらい'],
                        correct:4
                    },
                    {
                        number: 34,
                        line: 4,
                        q: (
                            <>
                                (電話で)<br/>
                                {rubyBox('山中', 'やまなか')}
                                「あ、
                                {rubyBox('木村', 'きむら')}
                                先生でいらっしゃいますか。AB出版の
                                {rubyBox('山中', 'やまなか')}でございますが、今から
                                原稿をいただきに上がってもよろしいでしょうか。」<br/>
                                {rubyBox('木村', 'きむら')}
                                「すみません。まだできていないんです。あと3日{blankRound}。」
                            </>
                        ),
                        qReading: null,
                        options: ['待っておいでになります', 'お待ち申し上げております', '待たせていただくことにしましょうか', '待っていただくわけにはいきませんか'],
                        correct:4
                    },
                    {
                        number: 35,
                        line: 4,
                        q: (
                            <>
                                (宇宙飛行士
                                {rubyBox('山田太郎', 'やまだたろう')}
                                へのインタビューで)<br/>
                                {rubyBox('山田', 'やまだ')}
                                「実は、初めから宇宙飛行士になる{blankRound}、そうじゃないんです。大学を出
                                たら、医者になろうと思っていましたから。」<br/>
                                記者「では、何がきっかけで、宇宙飛行士になりたいと思ったんですか。」
                            </>
                        ),
                        qReading: null,
                        options: ['つもりだったかっていうと', 'つもりなのかっていわれたら', 'つもりじゃなかったのかっていわれたら', 'つもりがなかったかっていうと'],
                        correct:1
                    },
                ]
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q: (
                            <>
                                大学入試では、試験当日初めてその大学に行き、迷ってしまった {blankStarBox()} 事前に見学しておくとよい。
                            </>
                        ),
                        qReading: null,
                        options: ['ない', 'という', 'ように', 'ことの'],
                        correct:1
                    },
                    {
                        number: 37,
                        line: null,
                        q: (
                            <>
                                趣味を持つのは良いことだと思いますが 、家庭を犠牲 {blankStarBox()}、それはちょっと問題です。
                            </>
                        ),
                        qReading: null,
                        options: ['となる', 'まで', 'と', 'にして'],
                        correct:1
                    },
                    {
                        number: 38,
                        line: null,
                        q: (
                            <>
                                管理職になったら、たとえ {blankStarBox()} 部下の失敗も引き
                                受けるというくらいの覚悟がなくてはならない。
                            </>
                        ),
                        qReading: null,
                        options: ['だとして', 'がなくても', '自分には責任', '自分の責任'],
                        correct:4
                    },
                    {
                        number: 39,
                        line: null,
                        q: (
                            <>
                                {blankStarBox()} 小さな
                                {rubyBox('町工場', 'まちこうば')}だった。
                            </>
                        ),
                        qReading: null,
                        options: ['もともとは', '我が社だが', '今でこそ', ' 一流企業と言われる'],
                        correct:2
                    },
                    {
                        number: 40,
                        line: null,
                        q: (
                            <>
                                新番組でこれまでにない役柄を演じる俳優の
                                {rubyBox('上田秋', 'うえだあき')}さん。役作りに悩んでいる {blankStarBox()} という。
                            </>
                        ),
                        qReading: null,
                        options: ['と', 'そうでもない', '思いきや', 'のか'],
                        correct:3
                    },
                ]
            },
            {
                title: (
                    <>
                        問題7
                        次の文章を読んで、文章全体の趣旨を踏まえて、 {numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading: (
                            <div className={'question_q_reading'}>
                                {titleBox('広告主の品位')}
                                きようはCMの中身ではなく、CMの出し方について、広告主の人たちにお願い
                                をしたい。
                                番組の途中にCMが{numberSquareBox(41)}。が、モンダイはその入り方のタイミングだ。たと
                                えば、歌やものまねのうまさを競い合う番組の中で、いざ、審査員の点数が出よう
                                とするその直前に、ポンとCMが割って入る。あるいは、クイズ番組の中で正解が
                                発表されようとするその瞬間に、サッと画面がCMに入れ替わる。ああいうせこい{subBox('(注1)')}ことは{numberSquareBox(42)}。
                                あれは広告主がやっているわけでなく、番組を作っているテレビ局の人の考えで
                                やっているんだろう 。が、それだったら、そういういやらしいCMの入れ方はしな
                                いでほしいと、テレビ局の人に注文をつけてもらいたい。
                                {numberSquareBox('43-a')}、みんながテレビの前で身を乗り出している瞬問にCMを入れれば、見ら
                                れる{numberSquareBox('43-b')}。が、わざわざ番組の流れを断ち切り、視聴者の
                                {rubyBox('感興', 'かんきょう')}
                                {subBox('(注2)')}をそいでまで強
                                引にCMを見せようとするやり方って、さもしくないだろうか。みっともなくない
                                だろうか。
                                CMのセンスは、企業のセンスのあらわれである。それはCMの中身だけでなく、
                                CMの出し方にも言えることだ。せっかくいいCMを作っても、ああいう出し方を
                                されると、なんと視聴者をバカにした企業だろうと思われてしまう。いやおうなし
                                に{numberSquareBox(44)}ああいうやり方は、極端に言えば暴力みたいなものであって、消费者を
                                大切に思う企業のやることじゃない。
                                近ごろハヤリの言葉で言えば、これは企業の「品位」にかかわるモンダイである。
                                {numberSquareBox('45-a')}だけじゃない、{numberSquareBox('45-b')}だいぶ前から、「品がねえぞ」と怒ってるよ。
                                {noteBox(['(注1) せこい:ずるい', '(注2) 感興をそく:何かについて持っている興味をなくさせる'])}
                            </div>
                        ),
                        options: ['入るのにいい', '入るのがいいのか', '入るのはいい', '入るのでいいのか'],
                        correct:3
                    },
                    {
                        number: 42,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['やめようと思う', 'やめてほしいのだ', 'やめるのだろうか', 'やめられるものではない'],
                        correct:2
                    },
                    {
                        number: 43,
                        line: 4,
                        q: null,
                        qReading: null,
                        options: [' a やはり / b ところだった', ' a いったい / b のか',
                            ' a といっても / b わけでもない', ' a たしかに / b ことは問違いない'],
                        correct:4
                    },
                    {
                        number: 44,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['見させてしまう', '身を乗り出させる', '見られてしまう', '身を乗り出される'],
                        correct:1
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: [' a ぼく / b みんな', ' a 広告主 / b みんな',
                            ' a 広告主 / b ぼくも', ' a ぼく / b 広告主も'],
                        correct:1
                    },
                ]
            },
            {
                title: (
                    <>
                        問題8 次の(1)から(3)の文章を読んで、後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: (
                            <>
                                筆者の考えに合うのはどれか。
                            </>
                        ),
                        qReading: (
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    食器のバラエティこそ、日本のやき{subBox('(注1)')}ものの特色の一つだと思います。そして、日本人のや
                                    きものに対する思いとか愛着は、食器のみならず、種類の改富さにあらわれているといっ
                                    てもいいでしよう。
                                    私たちは食事のたびに、もちろん料理も食べていますが、知らずに目で食器も食べてい
                                    るのです。だから興味•関心がないというのは、不注意なだけなのです。すでに下地はで
                                    きているのですから、あと一歩踏みこめば、やきものに興味•関心がグッと深まるはずな
                                    のだと思います。
                                    {noteBox(['注1) やきもの:陶芸品'])}
                                </div>
                            </>
                        ),
                        options: ['食事のたびに食器を眺めることで、陶芸品への愛着が強まる',
                            '日常使う食器に注意を向けることで、陶芸品への関心が高まる。',
                            '食器を通して陶芸品に興味を持つことで、芸術全般への関心が高まる。',
                            '家庭にいろいろな食器を取り入れることで、陶芸品への愛着が強まる。'],
                        correct:2
                    },
                    {
                        number: 47,
                        line: 4,
                        q: (
                            <>
                                筆者は、弱者をどのようにとらえているか。
                            </>
                        ),
                        qReading: (
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    おとなは子どもに「
                                    {rubyBox('嘘', 'うそ')}
                                    つきは泥棒の始まり」として正直であることを強要しますが、弱者は苦しい
                                    {rubyBox('嘘', 'うそ')}
                                    をついてでも自らの尊厳を守ろぅとします。
                                    論理的に正しいことを理性と呼ぶとすれば、理性的にあることができるのは強者だからです。
                                    強者はそれゆえに理性的に弱者の過ちを責めようとしますが、弱者の立場からいえば、それは何の意味も持たないことが多いのです。
                                    弱者のする謝罪とは、劣勢を一時的に解消する手続きや儀式にすぎないのです。
                                    {attachBox('(吉田脩二『ヒトとサルのあいだ一精神はいつ生まれたのか』文藝春秋による)')}
                                </div>
                            </>
                        ),
                        options: ['弱者は正直であることで自らの尊厳を守ろうとする。',
                            '弱者は理性を持って自らの過ちをわびようとする。',
                            '弱者は正論に頼って劣勢を解消しようとする。',
                            '弱者は謝罪することで自らを守ろうとする。'],
                        correct:4
                    },
                    {
                        number: 48,
                        line: 4,
                        q: (
                            <>
                                筆者は、思春期を迎える前の子どもにとってどんな経験が必要だと考えているか。
                            </>
                        ),
                        qReading: (
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    思春期を迎えた最近の子どもがストレスに弱いのは、それまでの発達過程で適度にスト
                                    レスにさらされる経験を十分にへてこなかったことが深く関係している。しかもそれは、
                                    彼らが社会化を十分に遂げてこなかったことと等しい。というのも、10代前半までの子ど
                                    もは、それまでの生活圏を出てより広い社会的文脈のなかでいかにして自己を実現させる
                                    かという課題に取り組むなかで、もっとも強くストレスを味わうからにほかならない。
                                    {attachBox(' (正高信男『父親力』中央公論新社による)')}
                                </div>
                            </>
                        ),
                        options: ['家庭の外の社会で多くの社会問題に取り組む経験',
                            '日々の生活の場で自分自身と向き合うような経験',
                            '広い社会の中で自分を鍛えることができるような経験',
                            '日常生活の中で個人の発達段階に応じた役割を担う経験'],
                        correct:3
                    },
                ]
            },
            {
                title: (
                    <>
                        問題9 次(1)から(3)の文章を読んで、後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 49,
                        line: 4,
                        q: (
                            <>
                                筆者は、自分が笑われた原因はどこにあると考えているか。
                            </>
                        ),
                        qReading: (
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    以前、花見をしている時に「桜の花は本当にきれいな正五{subBox('(注1)')}角形だね」と言ったら、風情
                                    のない人だと笑われたことがあった。確かに、桜の花びらには微妙な色合いや形、そして
                                    番りに加えて、散りゆく美しさがある。花を
                                    {rubyBox('愛', 'め')}でる和歌や俳句は数限りないが、そのなか
                                    に「正五角形」という言葉が使われたことはおそらく一度もないであろう。科学者特有の
                                    美意識は、風流とはかなり異質なものなのだと悟った。
                                    科学において本質以外を切り捨てるためには、大胆な抽象化と理想化が必要である。桜
                                    の花びらのたくさんの特徴の中から、「正五角形」という形だけを取り出すこと。これが
                                    抽象化である。実際に数学的な意味で完全な正五角形を示す花びらは少ないだろうが、そ
                                    こにはあまりこだわらない。これが{uBox('理想化')}である。
                                    自然界で正五角形のような対称性を示すためには、必ず規則的な法則があるはずである。
                                    花の場合、品種によって
                                    {rubyBox('花弁', 'かべん')}{subBox('(注2)')}の回転対称性が遺伝子で決定されていることは間違いないか
                                    ら、うまくこの遺伝子を突きとめられれば、花の形を決める普遍的な法則が見つかるに違
                                    いない。このように、抽象化と理想化によって自然現象は単純に整理でき、普遍的な法則
                                    を見つける助けになる。
                                    {attachBox('(酒井邦嘉 「科学者という仕事』 中央公論新社による)')}
                                    {noteBox([
                                        '(注1) 正五角形 : 五つの辺の長さが等しい五角形',
                                        <>
                                            (注2) {rubyBox('花弁', 'かべん')} : 花びら
                                        </>
                                    ])}
                                </div>
                            </>
                        ),
                        options: ['科学者らしくない趣のある表現で桜の花を褒めた点',
                            '自分が桜の美しさを理解できていなかった点',
                            '桜の花は自分が述べた形をしていなかった点',
                            '桜の美しさを科学者的な視点から表現した点'],
                        correct:4
                    },
                    {
                        number: 50,
                        line: 4,
                        q: (
                            <>
                                ここでの{uBox('理想化')}とは何か。
                            </>
                        ),
                        qReading: null,
                        options: ['桜の花はどれも正五角形であるとみなすこと',
                            '桜の花には共通する特徴があるとみなすこと',
                            '桜の花には数学的な美しさがあると考えること',
                            '桜の花は他のどの花よりも正五角形に近いと考えること'],
                        correct:1
                    },
                    {
                        number: 51,
                        line: 4,
                        q: (
                            <>
                                筆者の考えによると、花の場合、抽象化と理想化によって何が期待されるか。
                            </>
                        ),
                        qReading: null,
                        options: ['花には品種を越えた共通点があることが明らかになること',
                            '自然界に咲いている花の美しさに普遍性が見いだされること',
                            '花の形がどのように決まるのかその仕組みが解明されること',
                            '花の形の対称性が遺伝子によるものであることが証明されること'],
                        correct:3
                    },
                    {
                        number: 52,
                        line: 4,
                        q: (
                            <>
                                {uBox('世間一般の価値基準')}として筆者が本文であげているのは何か。
                            </>
                        ),
                        qReading: (
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    住居を買おうとするときは、その資産的な価値に重点を骰いて考える人が多い。普通の
                                    人にとっては、一生に一度の買い物とでもいうべきもので、多額の金を費やさなくてはな
                                    らないので、当然のことだ。買った後で、何らかの事情で売らなくてはならない羽目に
                                    なったときに、価値が減少していたのでは、大損害を被る。
                                    だが、住居にとってより重要なのは、その有用{subBox('(注1)')}性である。住みやすさが必要なのはもち
                                    ろんだが、自分のライフスタイルに合った構造になっているとか、生活のしやすい環境に
                                    あって利便{subBox('(注2)')}性に富んでいるとかの点も、重要な要素である。それらは必ずしも{uBox('世問一般の価値基準')}
                                    とは一致しない。したがって、自分たちの考え方や行動様式に従い、それに照ら
                                    し合わせて判断する必要がある。
                                    特に、
                                    {rubyBox('終', 'つい')}
                                    の{subBox('(注3)')}
                                    {rubyBox('住処', 'すみか')}
                                    として考えるときには、自分たちの生き方をはっきりと見極め、その視
                                    点に立ったうえで、選択し決めていかなくてはならない。年を取ってくれば、当然のこと
                                    ながら、行動する能力は衰えてきて、動き回る範囲は狭まってくる。
                                    自分たちの余生がどのようなものになるかについて、計画を立てたうえに想像力を働か
                                    せて、確実性の髙い予測を組み立ててみる。その未来図に従って、住むべき場所の見当を
                                    つけ、住居の大きさや構造などを決めていく。もちろん、将来の経済状勢の大きな変化に
                                    備えて、予算を大きく下回る出費に抑えておくことも必要であることは、いうまでもない。
                                    {attachBox(' (山崎武也『シニアこそ都会に住もう一田舎暮らしは不安がいっぱい』PHP研究所による)')}
                                    {noteBox([
                                            '(注1) 有用性：役に立つこと',
                                            '(注2) 利便性：便利さ',
                                            <>
                                                (注3) {rubyBox('終', 'つい')}の{rubyBox('住処', 'すみか')}：人生を終えるまで住む家
                                            </>
                                        ]
                                    )
                                    }


                                </div>
                            </>
                        ),
                        options: ['長期にわたって居住できる物件であること',
                            '将来売却するときにも有利な物件であること',
                            '購入者の生活様式に合った物件であること',
                            '購人時の費用負担が抑えられる物件であること'],
                        correct:2

                    },
                    {
                        number: 53,
                        line: 4,
                        q: (
                            <>
                                筆者の考えでは、年を取ってから住む家として住居を選ぶときに最も大切なことは何か。
                            </>
                        ),
                        qReading: null,
                        options: ['老後の生き方や行動範囲に沿っているかを判断する。',
                            '老後は行動する能力が衰えるため家の構造を優先する。',
                            '未来の予測に沿って決めた予算と同じくらいのものを選ぶ。',
                            'いつか売るときのことも考えて資産的な価値を重視する。'],
                        correct:1
                    },
                    {
                        number: 54,
                        line: 4,
                        q: (
                            <>
                                住居選びについて、筆者が最も言いたいことは何か。
                            </>
                        ),
                        qReading: null,
                        options: [
                            <>
                                人が生活する上でどんな住居に住むかはとても大切であり、一般的な価値基準も参考にしたほうがよい。
                            </>,
                            <>
                                他人と考え方が異なったとしても、自分の生活スタイルを重視して将來の住居を決定したほうがよい
                            </>,
                            <>
                                将来の経済状勢の変化に備えて、できるだけ資産価値の下がりにくそうな住居を選んだほうがよい。
                            </>,
                            <>
                                年を取るにつれて住居の好みも変わってくるため、その時々の考えに合わせて住居を選択したほうがよい。
                            </>
                        ],
                        correct:2
                    },
                    {
                        number: 55,
                        line: 4,
                        q: (
                            <>
                                ①{uBox('そういう宿命')}とはどういう意味か。
                            </>
                        ),
                        qReading: (
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    人間は、
                                    {rubyBox('所詮', 'しょせん')}
                                    、時代の子であり、環境の子である。わたしたちの認識は、自分の生きて
                                    きた時代や環境に大きく左右される。ある意味、閉じ込められているといってもいい。認
                                    識できる「世界」はきわめて限定的なのであり、時代や環境の制約によって、認識の
                                    {rubyBox('鋳型', 'いがた')}
                                    {subBox('(注1)')}

                                    ができてしまうから、場合によっては、大きく
                                    {rubyBox('歪', 'ゆが')}められた「世界」像しか見えなくなるこ
                                    ともある。わたしたちは、①{uBox('そういう宿命')}を背負っているのである。
                                    だから、「世界を知る」といいつつ、実は、
                                    {rubyBox('偏狭', 'へんきょう')}な認識の
                                    {rubyBox('鋳型', 'いがた')}で「世界」をくり{subBox('(注2)')}
                                    {rubyBox('貫', 'ぬ')}
                                    いて
                                    いるだけということが生じたりする。
                                    {rubyBox('鋳型', 'いがた')}
                                    が同じであるかぎり、断片的な情報をいくら集
                                    めたところで、「世界」の認識は何も変わらない。固まった世界認識をもつことは、「世
                                    界」が大きく変化する状況では非常に危険なことである。
                                    一方で、これほど情報環境が発達したにもかかわらず、②{uBox('「世界を知る」ことがますます困難になった')}と感じている人も増加している。果てしなく
                                    {rubyBox('茫漠', 'ぼうばく')}{subBox('(注3)')}
                                    と広がり、しかも絶えず
                                    激動する「世界」が、手持ちの世界認識ではさっぱり見えなくなってきているからだ。た
                                    しかに、ただ
                                    {rubyBox('漫然', 'まんぜん')}
                                    とメディアの情報を眺めているだけでは
                                    {rubyBox('激流', 'げきりゅう')}
                                    に
                                    {rubyBox('呑', 'の')}
                                    み込まれてしまう。
                                    いまこそ、時代や環境の制約を乗り越えて、「世界を知る力」を萵めることが痛切に求
                                    められているのではないか。
                                    もちろん、時代や環境の制約から完全に自由になることはない。しかし、凝り固まった
                                    認識の
                                    {rubyBox('鋳型', 'いがた')}
                                    をほぐし、世界認識をできるだけ柔らかく広げ、自分たちが背負っているもの
                                    の見方や考え方の限界がどこにあるのか、しっかりとらえ直すことはできるはずだ。
                                    {attachBox('(寺島実郎『世界を知る力』PHP研究所による))')}
                                    {noteBox(
                                        [
                                            <>
                                                (注1) {rubyBox('鋳型', 'いがた')}：ここでは、画一化した型
                                            </>,
                                            <>
                                                (注2) くり{rubyBox('貫', 'ぬ')}いて：ここでは、切り取って
                                            </>,
                                            <>
                                                (注3) {rubyBox('茫漠', 'ぼうばく')}：広がりがあり過ぎて、はっきりしない様子
                                            </>
                                        ]
                                    )}
                                </div>
                            </>
                        ),
                        options: [
                            <>
                                現代の人々は考えが時代や環境
                                {rubyBox('歪', 'ゆが')}にめられ、「世界」の見方が定まらない。
                            </>,
                            '現代の人々は時代や環境の制約を受けており、「世界」が正しく見えないこともある。',
                            '人間はものの見方が時代や環境に縛られ、「世界」が正しく見えないこともある。',
                            '人間は生き方が時代や環境に大きく影響を受け、「世界」の見方が定まらない。'
                        ],
                        correct:3
                    },
                    {
                        number: 56,
                        line: 4,
                        q: (
                            <>
                                ②{uBox('「世界を知る」ことがますます困難になった')}のはなぜか。
                            </>
                        ),
                        qReading: null,
                        options:[
                            '個人の世界認識が狭まり、実世界の時代の変化をつかみにくいから',
                            '個人の世界認識が固まらず、実世界の情報に惑わされてしまうから',
                            '個人の世界認識が、実世界のめまぐるしい変化や情報量に対応できないから',
                            '個人の世界認識が、高度に発達している実世界の情報環境に追いつけないから'
                        ],
                        correct:3
                    },
                    {
                        number: 57,
                        line: 4,
                        q: (
                            <>
                                筆者は、「世界を知る力」を高めるためにできることは何だと考えているか。
                            </>
                        ),
                        qReading: null,
                        options:[
                            '今までの世界認識を改め、できるだけ多くの情報を得ること',
                            '時代や環境の制約を克服して、自分の世界認識の限界を越えること',
                            '情報の激流に吞み込まれず、自分の世界認識の枠から自由になること',
                            '自分の世界認識にできるだけ柔軟性を持たせ、その範囲を自覚すること'
                        ],
                        correct:4
                    },
                ]
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 58,
                        line: 4,
                        q: (
                            <>
                                ①{uBox('そんな錯覚に捕らえられる')}とはどういう意味か。
                            </>
                        ),
                        qReading: (
                            <div className={'question_q_reading'}>
                                我が身が生涯に望み、知りうることは、世界中を旅行しようと、何をしようと、小さい。
                                あきれるくらい小さいのだが、この小ささに耐えていかなければ、学問はただの
                                {rubyBox('大風呂敷', 'おおぶろしき')}
                                {subBox('(注1)')}
                                になる。言葉の
                                {rubyBox('風呂敷', 'ふろしき')}
                                はいくらでも広げられるから、そうやっているうちに自分は世界的
                                に考えている、そのなかに世界のすべてを包める、①{uBox('そんな錯覚に捕らえられる。')}木でいい
                                家を建てる大工とか、米や野菜を立派に育てる
                                {rubyBox('農夫', 'のうふ')}
                                とかは、そういうことにはならない。
                                世界的に木を削ったり、世界標準の稲を育てたりはできないから、彼らはみな、自分の仕
                                事において賢明である。我が身ひとつの能力でできることを知り抜いている。学問をする
                                こと、書物に学ぶことは、ほんとうは②{uBox('これ')}と少しも変わりはない。なぜなら、そうしたこ
                                とはみな、我が身ひとつが天地の間でしっかりと生きることだからだ。
                                人は世界的にものを考えることなどはできない。それは錯覚であり、空想であり、愚か
                                な思い上がりである。ただし、天地に向かって我が身を開いていることならできる。我が
                                身ひとつでものを考え、ものを作っているほどの人間なら、それがどういう意味合いのこ
                                とかは、もちろん知っている。人は誰でも自分の気質を背負って生まれる。学問する人に
                                とって、この気質、
                                {rubyBox('農夫', 'のうふ')}
                                に与えられる土壌のようなものである。土壌は天地に開かれて
                                いなければ、ひからびて{subBox('(注2)')}不毛になる。
                                与えられたこの土を耕し、水を引き、苗を植える。苗がみずから育つのを、毎日助ける。
                                苗とともに、自分のなかで何かが育つのを感じながら。学問や思想もまた、人の気質に植
                                えられた苗のように育つしかないのではないか。子供は、勉強して自分の気質という土を
                                耕し、水を引き、もらった苗を、書物の言葉を植えるのである。それは、子供自身が何と
                                かやってみるほかはなく、そうやってこそ、子供は学ばれる書物とともに育つことができる。
                                子供が勉強をするのは、自分の気質という土壌から、やがて実る精神の作物を育てるためである。
                                「教養」とは、元来この作物を指して言うのであって、
                                {rubyBox('物識', 'ものし')}
                                り{subBox('(注3)')}たちの
                                {rubyBox('大風呂敷', 'おおぶろしき')}を
                                指して言うのではない。
                                {attachBox('(前田英樹『独学の精神』による)')}
                                {noteBox([
                                    '(注1) 大風呂敷：実際より大きく見せたり言ったりすること',
                                    '(注2) ひからびて：乾ききって',
                                    '(注3) 物識り：物事をよく知っている人'
                                ])}


                            </div>
                        ),
                        options: ['自分は何でも知っていて世界を相手にできると思う。',
                            '言葉でどんなことでも伝えられるような気になる。',
                            '学問から得られることには限界がないと感じてしまう。',
                            '人間が世界から学べることはいかに大きいことかと思う。'],
                        correct:1
                    },
                    {
                        number: 59,
                        line: 4,
                        q: (
                            <>
                                ②{uBox('これ')}とは何を指すか。
                            </>
                        ),
                        qReading: null,
                        options: ['自分にできることを把握したうえで仕事をすること',
                            '自分が世界のために何ができるかを考えて仕事に励むこと',
                            'できる限り多くの知識を得て自分の仕事に役立たせること',
                            '人のためにできることは何かを考えたうえで仕事をすること'],
                        correct:1
                    },
                    {
                        number: 60,
                        line: 4,
                        q: (
                            <>
                                この文章では、学問をするということをどのような例を使って説明しているか。
                            </>
                        ),
                        qReading: null,
                        options: ['与えられた土を耕し、よい苗を選んで植える',
                            '与えられた土を耕し、よい作物になるように苗を育てる',
                            '与えられた土壌を改善するために耕し続ける',
                            '与えられた土壌を改善しながら世界標準の作物を育てる'],
                        correct:2
                    },
                    {
                        number: 61,
                        line: 4,
                        q: (
                            <>
                                筆者は「教養」をどのようなものだと考えているか。
                            </>
                        ),
                        qReading: null,
                        options: ['新たな気質を見いだすことができる学問や思想',
                            '人それぞれの気質の中で育まれた学問や思想',
                            '生きていくうえで必要な専門的な知識',
                            '書物や学問から得られた多くの知識'],
                        correct:2
                    },
                ]
            },
            {
                title:
                    <>
                        問題11 次のAと日は、子どもがテレビを見ることについての専門家の意見である。後の
                        問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 62,
                        line: 4,
                        q: (
                            <>
                                子どもにテレビを長時間見せることについて、A とB の観点はどのようなものか。
                            </>
                        ),
                        qReading: (
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        乳幼児期の子どもは、身近な人とのかかわりあい、そして遊びなどの実体験を重ねるこ
                                        とによって、人間関係を築き、心と身体を成長させます。ところが乳児期からのメディ
                                        ア{subBox('(注1)')}漬けの生活では、外遊びの機会を礁い、人とのかかわり体験の不足を招きます。
                                        実際、
                                        運動不足、央眠不足そしてコミュニケーション能力の低下などを生じさせ、その結果、
                                        心身の発達の遅れや
                                        {rubyBox('歪', 'ゆが')}
                                        みが生じた事例が
                                        {rubyBox('臨床', 'りんしょう')}
                                        の場{subBox('(注2)')}から報告されています。このようなメ
                                        ディアの弊害は、ごく一部の影響を受けすい個々の子どもの問題としてではなく、メ
                                        ディアが子ども全体に及ぼす影響の基大さの警鐘と私たちはとらえています。特に象徴
                                        機能{subBox('(注3)')}が未熟な2歳以下の子どもや、発達に問題のあめる子どものテレビ画面への早期接触
                                        や長時間化は、親子が顔をあわせ -緒に遊ぶ時間を奪い、言葉や心の発達を妨げます。
                                        {attachBox('(社団法人日本小児科医会 2010年6月18日取得による)')}
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        専門家からは「テレビをやめて積極的に外遊びをしましょう」 「自然の中で遊びま
                                        しょう」という意見が聞かれますが、お母さんたちは進んでテレビを見せているのでは
                                        なく、地域に出ても同世代の子どもがいない、昔と比べて自然がなくなった、という問
                                        題ももちるのだと思います。 (中略)
                                        多くの親は、テレビの長時間視聴がよくないことを自覚しており、見せる内容にも気
                                        を遣っています。生活の中からテレビを排除するだけではなく、一日に六時間も七時間
                                        も子どもにテレビを見せる親の背景に何があるのかを考えなければ、問題の根本的な解
                                        決にはならないのです。
                                        したがって、私たちの生活スタイルと、子どもにとって望ましいテレビ視聴のあり方
                                        のバランスをとりながら、これらの検証を進める必要があるのではないでしょうか。
                                        {attachBox('(小西行郎「早期教育と脳」による)')}
                                    </div>
                                </div>
                                {noteBox([
                                    '(注1) メディア : ここでは、テレビやビデオ',
                                    '(注2) 臨床の場 : 実際の診察、治療の現場',
                                    '(注3) 象徴機能: ここでは、身の回りのものを、例えば言葉などで表す働き'
                                ])}


                            </>
                        ),
                        options: ['Aは問題解決を意識した今後の課題を述べ、Bは批判的に現状を報告している。',
                            'Aは解決を意識した問題提起をし、Bは問題の原因は社会的背景にあると指摘している。',
                            'Aは影響の大きさを示して注意を喚起し、Bは問題解決を意識した今後の課題を述べている。',
                            'Aは問題の原因は社会的背景にあると指摘し、Bは影響の大きさを示して注意を喚起している。'],
                        correct:3
                    },
                    {
                        number: 63,
                        line: 4,
                        q: (
                            <>
                                子どもとテレビの関係について、A とB はどのように述べているか。
                            </>
                        ),
                        qReading: null,
                        options: ['Aはメディアとの接触より親子のかかわりが大切だと述べ、Bはテレビを見せるよりも外での遊びを重視したほうがいいと述べている。',
                            'Aはメディアとの接触が子どもの発育を妨げる要因だと述べ、Bは子育てを取り巻く状況がテレビの見せ過ぎを引き起こす場合があると述べている。',
                            'Aはメディアとの接触が長いことよりも実体験の不足のほうが問題だと述べ、Bは生活の中からテレビを排除しただけでは問題は解決しないと述べている。',
                            'Aはメディアに長時間接することが子どもの成長に影響を与える場合が多いと述べ、Bは親が子どもに適切にテレビを見せることが大切だと述べている。'],
                        correct:2
                    },
                ]
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 64,
                        line: 4,
                        q: (
                            <>
                                {uBox('かたちにならないもの')}として筆者が挙げているのはどれか。
                            </>
                        ),
                        qReading: (
                            <div className={'question_q_reading'}>
                                最近、思想を表現する方法について考えることが多くなった。たとえば、文章は思想を
                                表現する方法のひとつだけれど、その文章にもいろいろな表現形式がある。哲学の勉強を
                                はじめた
                                {rubyBox('頃', 'ころ')}の私は、さまざまな形式のなかで論文という形式だけが、思想表現の方法にふさ
                                わしいと思っていた。
                                しかし、後に、この考え方を訂正しなければならなくなった。思想の表現として、論文
                                が唯一の方法だということは絶対にない。私たちは、すぐれたエッセーや小説、詩をとお
                                して、しばしば思想を学びとる。とすれば、思想を表現する文章のかたちは、自在であっ
                                てよいはずである。
                                ところが、そう考えてもまだ問題はある。というのは、思想の表現形式は、文章という
                                かたちをとるとは限らないのだから。絵でも彫刻でも、音楽でも、つまり実にさまざまな
                                ものを用いて、思想を表現するのは可能なはずである。そのなかには、{uBox('かたちにならないもの')}もある。
                                たとえば私の村に暮らす人々のなかに、自然に対する深い思想をもっていない人など一
                                人もいない。村の面積の96パーセントを森や川がしめるこの村で、自然に対する思想をも
                                たなかったら、人は暮らしていけない。ところが村人は、＜自然について＞などという
                                論文を書くことも、文章を書くこともないのである。そればかりか、自分の自然哲学を、
                                絵や音楽で表現しようとも考えない。
                                そんなふうにみていくと、村人は自然に対してだけではなく、農についての深い思想や、
                                村とは何かという思想をももっているのに、それらを何らかのかたちで表現することも、
                                またないのである。
                                とすると、村人たちは、どんな方法で自分たちの思想を表現しているのであろうか。私
                                は、それは、＜作法＞をとおしてではないかという気がする。
                                (中略)
                                考えてみれば、もともとは、作法は、思想と結びつきながら伝承されてきたものであっ
                                た。たとえば昔は、食事の作法を厳しくしつけられた。食べ物を残すことはもちろんのこ
                                と、さわぎながら食事をすることも、けっしてしてはいけなかった。それは、食事は生命
                                をいただくものだ、という厳かな思想があったからである。
                                {rubyBox('茶碗', 'ちゃわん')}
                                の中の米だけをみても、
                                人間はおそらく何万という生命をいただかなければならない。だから、そういう人間のあ
                                り方を考えながら、いま自分の身体のなかへと移ってくれる生命に感謝する。この思想が
                                食事の作法をつくりだした。
                                ところが、近代から現代の思想は、このような、日々の暮らしとともにあった思想を無
                                視したのである。その結果、思想は、文章という表現形式をもち、文章を書く思想家のも
                                のになった。そして、いつの間にか人間の上に君臨し、現実を支配する手段になっていっ
                                た。
                                {attachBox('(内山節『「里」という思想』による)')}
                            </div>
                        ),
                        options: ['自然',
                            '生命',
                            '感謝',
                            '作法'],
                        correct:4
                    },
                    {
                        number: 65,
                        line: 4,
                        q: (
                            <>
                                この文章中で筆者は、自分の村に暮らす人々がどんな思想をもっていると述べているか。
                            </>
                        ),
                        qReading: null,
                        options: ['自然の中で生きるための思想や、農業や村のあり方についての思想',
                            '自然を壊さずに暮らすために、農業や村人はどうあるべきかという思想',
                            '自然に対する感謝を表すために、村人としてどうするべきかという思想',
                            '自然を取り戻すための思想や、自然を利用する農業のあり方についての思想'],
                        correct:1
                    },
                    {
                        number: 66,
                        line: 4,
                        q: (
                            <>
                                食事の作法は、次のどのような考え方と結びついているか。
                            </>
                        ),
                        qReading: null,
                        options: ['多くの労力がささげられて作られた食べ物が、いかに尊いものであるかという考え方',
                            '何かを食べないでは生きてはいけない人間のあり方が、いかに罪深いものであるかという考え方',
                            '食事は農が生み出したものをいただくものであり、農業を営む村人への感謝が必要だという考え方',
                            '食事は他の生命を自分の身体に取り入れるものであり、それらの生命に感謝しなければいけないという考え方'],
                        correct:4
                    },
                    {
                        number: 67,
                        line: 4,
                        q: (
                            <>
                                この文章中で筆者が述べていることはどれか。
                            </>
                        ),
                        qReading: null,
                        options: ['思想の表現は必ずしも文章や作品というかたちをとるとは限らず、かたちにならないものもある',
                            '思想は絵や音楽のようなかたちに表わされるものと考えられてきたが、深い思想とはかたちにならないものである',
                            '思想の表現には絵や音楽などもあるし、かたちにならないものもあるが、文章で表現されたものが最上のものである',
                            '思想は文章や作品のようなかたちになったものが尊重されるが、生活と結びついた深い思想はかたちにならないものである'],
                        correct:1
                    },
                ]
            },
            {
                title: (
                    <>
                        問題13 右のページは、清森市が主催する「秋の美術コンクール」の作品募集の案内で
                        ある。高木さんは、今回このコンクールに応募しようと思っている。下の問いに
                        対する答えとして最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 68,
                        line: 4,
                        q: (
                            <>
                                高木さんが製作した以下の作品のうち、応募できるものはどれか。
                            </>
                        ),
                        qReading: (
                            <Image src={r_2011_07_13} alt={'r_2011_7_13'}/>
                        ),
                        options: ['清森高校に通っていたとき入賞した秋の風景画',
                            '清森市にある清森温泉の紅葉の油絵とイラスト',
                            '清森市にある清森公園で撮った春の木々の写真',
                            '去年清森市で行われた秋祭りの写真と水彩画'],
                        correct:4
                    },
                    {
                        number: 69,
                        line: 4,
                        q: (
                            <>
                                入賞したかどうかを知るには、高木さんはどうしたらよいか。
                            </>
                        ),
                        qReading: null,
                        options: ['1月中旬に清森市のホームページを見る。',
                            '1月中旬に直接、観光係に電話して聞く。',
                            '2月下旬に市役所の窓口に問い合わせる。',
                            '2月下旬に届く予定の通知を待つ。'],
                        correct:1
                    },
                ]
            },
        ],
    },
    {
        name: '2016年12月模擬試験',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、1 • 2 • 3 • 4から一つ
                        選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q: (
                            <>
                                社会活動に参加することで、{uBox('人脈')}を広げることができた
                            </>
                        ),
                        qReading: null,
                        options: ['じんみゃく', 'じんまく', 'にんみゃく', 'にんまく'],
                        correct:1
                    },
                    {
                        number: 2,
                        line: null,
                        q: (
                            <>
                                {rubyBox('鈴木', 'すずき')}
                                さんは指摘がいつも的確で、本当に{uBox('賢い')}人だと思う。
                            </>
                        ),
                        qReading: null,
                        options: ['するどい', 'かしこい', 'すごい', 'えらい'],
                        correct:2
                    },
                    {
                        number: 3,
                        line: null,
                        q: (
                            <>
                                文化の違いが食生活に{uBox('顕著')}に現れている。
                            </>
                        ),
                        qReading: null,
                        options: ['げんちょ', 'けんしょ', 'けんちょ', 'げんしょ'],
                        correct:3
                    },
                    {
                        number: 4,
                        line: null,
                        q: (
                            <>
                                相談の内容は{uBox('多岐')}にわたった。
                            </>
                        ),
                        qReading: null,
                        options: ['たき', 'たじ', 'たぎ', 'たし'],
                        correct:1
                    },
                    {
                        number: 5,
                        line: null,
                        q: (
                            <>
                                その風習は、今はもう{uBox('廃れて')}しまった。
                            </>
                        ),
                        qReading: null,
                        options: ['くずれて', 'かすれて', 'つぶれて', 'すたれて'],
                        correct:4
                    },
                    {
                        number: 6,
                        line: null,
                        q: (
                            <>
                                家賃の{uBox('相場')}は地域によって違う。
                            </>
                        ),
                        qReading: null,
                        options: ['あいば', 'そうば', 'あいじょう', 'そうじょう'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blank}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q: (
                            <>
                                私はこの土地で定職に就き、生活の{blankRound}を築いた。
                            </>
                        ),
                        qReading: null,
                        options: ['根拠', '基盤', '根源', '基地'],
                        correct:2
                    },
                    {
                        number: 8,
                        line: null,
                        q: (
                            <>
                                議論は難航すると思ったが、すぐに意見がまとまり、{blankRound}結論が出た。
                            </>
                        ),
                        qReading: null,
                        options: ['すんなり', 'うっとり', 'ふんわり', 'こっそり'],
                        correct:1
                    },
                    {
                        number: 9,
                        line: null,
                        q: (
                            <>
                                さっき駅前で
                                {rubyBox('佐藤', 'さとう')}
                                さんを{blankRound}んですが、今、海外にいるはずなのに変ですね。
                            </>
                        ),
                        qReading: null,
                        options: ['見合わせた', '見過ごした', '見かけた', '見違えた'],
                        correct:3
                    },
                    {
                        number: 10,
                        line: null,
                        q: (
                            <>
                                市長の責任ある行動が住民の不安を{blankRound}し、行政に対する期待が一気に高まった。
                            </>
                        ),
                        qReading: null,
                        options: ['一掃', '追放', '削除', '排出'],
                        correct:1
                    },
                    {
                        number: 11,
                        line: null,
                        q: (
                            <>
                                十分に煮た野菜は味が{blankRound}柔らかく、とてもおいしかった。
                            </>
                        ),
                        qReading: null,
                        options:[
                            <>
                                {rubyBox('溶', 'と')}
                                けて
                            </>,
                            <>
                                {rubyBox('染', 'し')}
                                みて
                            </>,
                            <>
                                {rubyBox('潤', 'うるお')}
                                って
                            </>,
                            <>
                                {rubyBox('沈', 'しず')}
                                んで
                            </>
                        ],
                        correct:2
                    },
                    {
                        number: 12,
                        line: null,
                        q: (
                            <>
                                このテーブルは私が子どものころから使っているので、{blankRound}があって捨てられ
                                ない。
                            </>
                        ),
                        qReading: null,
                        options: ['心情', '好感', '熱意', '愛着'],
                        correct:4
                    },
                    {
                        number: 13,
                        line: null,
                        q: (
                            <>
                                現社長は創立者から経営の{blankRound}を学んだ。
                            </>
                        ),
                        qReading: null,
                        options: ['データベース', 'ベテラン', 'ライフワーク', 'ノウハウ'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q: (
                            <>
                                {rubyBox('高橋', 'たかはし')}
                                さんには{uBox('かねがね')}お会いしたいと思っていました。
                            </>
                        ),
                        qReading: null,
                        options: ['直接', 'ぜひ', '早く', '以前から'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q: (
                            <>
                                {rubyBox('林', 'はやし')}
                                さんはそれを{uBox('故意')}に捨てたらしい。
                            </>
                        ),
                        qReading: null,
                        options: ['わざと', 'うっかり', 'いやいや', 'さっさと'],
                        correct:1
                    },
                    {
                        number: 16,
                        line: null,
                        q: (
                            <>
                                昨日、
                                {rubyBox('鈴木', 'すずき')}さんに{uBox('おわびした')}。
                            </>
                        ),
                        qReading: null,
                        options: ['文句を言った', 'お礼を言った', '断った', '謝った'],
                        correct:4
                    },
                    {
                        number: 17,
                        line: null,
                        q: (
                            <>
                                {rubyBox('中村', 'なかむら')}
                                さんの言葉からは強い{uBox('意気込み')}が伝わってくる。
                            </>
                        ),
                        qReading: null,
                        options: ['敬意', '自信', '意欲', '信頼'],
                        correct:3
                    },
                    {
                        number: 18,
                        line: null,
                        q: (
                            <>
                                妹は少し{uBox('おびえて')}いるようだった。
                            </>
                        ),
                        qReading: null,
                        options: ['焦って', '怖がって', '悩んで', '悔やんで'],
                        correct:2
                    },
                    {
                        number: 19,
                        line: null,
                        q: <>
                                私はその一言に{uBox(
                                    <>{rubyBox('安堵', 'あんど')}した</>
                            )}。
                            </>,
                        qReading: null,
                        options: ['すっとした', 'はっとした', 'ほっとした', 'かっとした'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '閑静',
                        qReading: null,
                        options:[
                            <>
                                そのレストランは繁華街から外れた{uBox('閑静')}な場所にある。
                            </>,
                            <>
                                今日は朝から具合が悪かったので、会社を休んで家で{uBox('閑静')}にしていた。
                            </>,
                            <>
                                用事が早く済み、{uBox('閑静')}な時間ができたので、映画を見に行くことにした。
                            </>,
                            <>
                                日中はにぎやかな公園だが、夜になると急に{uBox('閑静')}になる。
                            </>
                        ],
                        correct:1
                    },
                    {
                        number: 21,
                        line: 4,
                        q: 'たやすい',
                        qReading: null,
                        options:[
                            <>
                                弟は寝坊したらしく、{uBox('たやすい')}物だけ食べて、慌てて出かけていった。
                            </>,
                            <>
                                {rubyBox('伊藤', 'いと')}
                                氏とは大学時代からの親友で、
                                {rubyBox('本音', 'ほんね')}
                                が言える{uBox('たやすい')}関係だ。
                            </>,
                            <>
                                せっかくの日曜日だから、ゆっくり休んで{uBox('たやすく')}過ごそうと思う。
                            </>,
                            <>
                                この問題は想像以上に複雑で、{uBox('たやすく')}解決できるものではなかった。
                            </>
                        ],
                        correct:4
                    },
                    {
                        number: 22,
                        line: 4,
                        q: '察する',
                        qReading: null,
                        options: [
                            <>
                                医師たちはチームを組み、意見を出し合って、最良の治療法を{uBox('察した')}。
                            </>,
                            <>
                                気象予報士はテレビの天気予報で、来週の気温の変化を{uBox('察し')}始めた。
                            </>,
                            <>
                                {rubyBox('鈴木', 'すずき')}
                                さんは、私が何も言わなくても、私の気持ちを{uBox('察して')}慰めてくれた。
                            </>,
                            <>
                                外を歩いていたら急にいいアイディアを{uBox('察した')}ので、手帳にメモをした。
                            </>
                        ],
                        correct:3
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '内訳',
                        qReading: null,
                        options:[
                            <>
                                来週の{uBox('内訳')}を確認したが、予定がないのは木曜の夜だけだ。
                            </>,
                            <>
                                前回の出張費の{uBox('内訳')}を見たら、交通費の割合が予想外に高かった。
                            </>,
                            <>
                                司会者は進行を間違えないように、式の{uBox('内訳')}を何度も見直した。
                            </>,
                            <>
                                家族の健康のため、栄養の{uBox('内訳')}を考えて食事を作っている。
                            </>
                        ],
                        correct:2
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '食い違う',
                        qReading: null,
                        options:[
                            <>
                                この事件は、複数の目撃者の話がそれぞれ{uBox('食い違って')}おり、不明な点が多い。
                            </>,
                            <>
                                金庫を開けようと思ったが、どの鍵も{uBox('食い違って')}開けられなかった。
                            </>,
                            <>
                                何だか歩きにくいと思ったら、サンダルの左右が{uBox('食い違って')}いた。
                            </>,
                            <>
                                調味料を変えたのか、この料理はいつもと味が{uBox('食い違って')}いるように感じる。
                            </>
                        ],
                        correct:1
                    },
                    {
                        number: 25,
                        line: 4,
                        q: '過密',
                        qReading: null,
                        options:[
                            <>
                                雑誌で紹介されてから、この商品への{uBox('過密')}な注文が続いているらしい。
                            </>,
                            <>
                                水質汚染に関して人々の抗議が{uBox('過密')}になり、政府は対策を迫られている。
                            </>,
                            <>
                                今回の出張は{uBox('過密')}なスケジュールで、ゆっくり食事する時間もなさそうだ。,
                            </>,
                            <>
                                春になると、この池の周りには、色とりどりの花が{uBox('過密')}に咲き乱れる。
                            </>
                        ],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ
                        選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q: (
                            <>
                                朝の満員電車。車内の混雑を{blankRound}、私の目の前に座っている学生風の男は、平
                                然とノートパソコンを広げて、作業に没頭していた。
                            </>
                        ),
                        qReading: null,
                        options: ['含めて',
                            'もとに',
                            '除いて',
                            'よそに'],
                        correct:4
                    },
                    {
                        number: 27,
                        line: null,
                        q: (
                            <>
                                私の父は、{blankRound}もしないで漫画を批判するから、本当に嫌になる。
                            </>
                        ),
                        qReading: null,
                        options: ['読まない',
                            '読み',
                            '読もう',
                            '読んで'],
                        correct:2
                    },
                    {
                        number: 28,
                        line: null,
                        q: (
                            <>
                                (卒業生へのインタビューで)<br/>
                                聞き手「学生時代にやったことで、今の仕事に役立っていることは何でしょうか。」<br/>
                                {rubyBox('田中', 'たなか')}
                                「ラグビー部での経験ですね。チームワークの大切さを痛感しました。{blankRound}、
                                それは去年企画チームのリーダーになって初めて気づいたことですが。」
                            </>
                        ),
                        qReading: null,
                        options: ['要するに',
                            'あるいは',
                            'もっとも',
                            'ついては'],
                        correct:3
                    },
                    {
                        number: 29,
                        line: null,
                        q: (
                            <>
                                村の郷土史をまとめるにあたり、今年90歳になる元村長の
                                {rubyBox('東山', 'ひがしやま')}
                                さんにお話を伺った。
                                村に初めて汽車が走ったときのことを鮮明に覚えて{blankRound}、その記憶力に驚いた。
                            </>
                        ),
                        qReading: null,
                        options: ['おいでになり',
                            '差し上げ',
                            'まいり',
                            '申し上げ'],
                        correct:1
                    },
                    {
                        number: 30,
                        line: 2,
                        q: (
                            <>
                                (求人サイトの「よくある質問」で)<br/>
                                Ｑ : インテリアに関する知識がないのですが、働けますか。<br/>
                                Ａ : 研修があるので大丈夫です。知識はある{blankRound}が、それよりも人柄や仕事
                                に取り組む姿勢を重視しています。
                            </>
                        ),
                        qReading: null,
                        options: ['にすぎません',
                            'ことは否めません',
                            'に越したことはありません',
                            'といっても過言ではありません'],
                        correct:3
                    },
                    {
                        number: 31,
                        line: null,
                        q: (
                            <>
                                (お知らせで)<br/>
                                水道管破裂による断水のため、８月12日まで市民プールの営業を休止します。復旧
                                状況{blankRound}、営業再開が遅れる可能性がありますので、ご了承ください。
                            </>
                        ),
                        qReading: null,
                        options: ['次第には',
                            '次第に',
                            '次第では',
                            '次第'],
                        correct:3
                    },
                    {
                        number: 32,
                        line: 2,
                        q: (
                            <>
                                クレジットカードの番号等、他人に{blankRound}困る情報は、電子メールには書かな
                                いほうがいいそうだ。
                            </>
                        ),
                        qReading: null,
                        options: ['知っていても',
                            '知っていなくても',
                            '知らなくては',
                            '知られては'],
                        correct:4
                    },
                    {
                        number: 33,
                        line: 4,
                        q: (
                            <>
                                仕事は、決められた時間内に、いかに成果を上げるかが大切であり、単に時間をか
                                けて{blankRound}と私は思う。
                            </>
                        ),
                        qReading: null,
                        options: ['がんばることだといってもおかしくない',
                            'がんばればいいというものではない',
                            'がんばることでしかない',
                            'がんばりようがない'],
                        correct:2
                    },
                    {
                        number: 34,
                        line: 2,
                        q: (
                            <>
                                現在、潜水調査船を用いた調査研究が進展中であり、いずれ近いうちに海底のより
                                詳細な地質構造が明らかに{blankRound}。
                            </>
                        ),
                        qReading: null,
                        options: ['なるものと思われる',
                            'するという思いがある',
                            'なったかに思える',
                            'するだろうと思う'],
                        correct:1
                    },
                    {
                        number: 35,
                        line: null,
                        q: (
                            <>
                                {rubyBox('山下', 'やました')}
                                「あのう、
                                {rubyBox('西村', 'にしむら')}
                                先輩。私、今日でこのサークルを( )。」
                                {rubyBox('西村', 'にしむら')}
                                「ええ？ 辞める？ 急にどうして？」
                            </>
                        ),
                        qReading: null,
                        options: ['辞めてしまわれたのでしょうか',
                            '辞めてしまったのかと思って',
                            '辞めさせたらどうでしょうか',
                            '辞めさせてもらおうかと思って'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: 2,
                        q: (
                            <>
                                「アセビ」という、白い花を咲かせる樹木を漢字で「馬酔木」と書くのは、アセビ
                                には {blankStarBox(1)}そうです。
                            </>
                        ),
                        qReading: null,
                        options: ['由来する',
                            '有毒成分があり',
                            '状態になることに',
                            '馬が食べると酔ったような'],
                        correct:2
                    },
                    {
                        number: 37,
                        line: 2,
                        q: (
                            <>
                                家族の時間を大切にする夫は、つい{blankStarBox()}ありがた
                                い存在です。
                            </>
                        ),
                        qReading: null,
                        options: ['本当に大切なものは何なのか',
                            '私に',
                            '仕事に夢中になりすぎる',
                            '気づかせてくれる'],
                        correct:1
                    },
                    {
                        number: 38,
                        line: 2,
                        q: (
                            <>
                                Ｚ県知事の林和夫氏は、週刊誌で、脱税を行った {blankStarBox()}
                                異なり、名誉を傷つけられたとして、発行元のＸ社を相手取り訴訟を起こした。
                            </>
                        ),
                        qReading: null,
                        options: ['事実とは全く',
                            '疑いがあるなどと',
                            '報じられた',
                            'ことに対し'],
                        correct:4
                    },
                    {
                        number: 39,
                        line: null,
                        q: (
                            <>
                                Ｑ鉄道が1０年ぶりに運賃値上げに踏み切った。安全対策や原油の高騰で支出が増え、
                                経営努力だけでは対応しきれないと判断{blankStarBox()} 。
                            </>
                        ),
                        qReading: null,
                        options: ['という',
                            'の',
                            'ことだ',
                            'して'],
                        correct:3
                    },
                    {
                        number: 40,
                        line: 2,
                        q: (
                            <>
                                世の中にはさまざまな資格があふれているが、資格を取った{blankStarBox(4)}
                                世間は甘くないらしい
                            </>
                        ),
                        qReading: null,
                        options: ['だけ',
                            'ほど',
                            'で',
                            '希望の職につける'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、文章全体の趣旨を踏まえて、{numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 4,
                        q: null,
                        qReading:
                            (
                                <>
                                    以下は、小説家が書いたエッセイである。
                                    <div className={'question_q_reading'}>
                                        {titleBox('十人十色')}
                                        マニュアルというものが、この世には存在する。機械を買った場合には、これを読む。
                                        書かれてある通りに動かないと困る。ビデオの再生ボタンを押したのに、録画が始まって
                                        はたまらない。ところが、生き物はそうはいかない。あちらに通用したことが、 {numberSquareBox(41)}。
                                        うちで、ねこを飼い始めた当座は、何も分からなかった。吐いたりすると、それだけで
                                        びっくりしてしまった。あわてて、ねこを飼っている人に電話した。一番にかけたところ
                                        が留守だと、ますます、動揺する。結局、関西の知り合いにまでかけて、
                                        「心配ありませんよ。ねこは吐くものですよ」
                                        という言葉をいただき、やっと安心。こんな具合だった。
                                        さて、 {numberSquareBox(42)}時に、当然のことながら「ねこの飼い方」の本も読んだ。マニュアルで
                                        ある。なるほど と思えることが書いてある。中でも納得したのが、 {numberSquareBox(43)}。
                                        「動物にとって、
                                        用足ししている{subBox('(注1)')}時は、最も
                                        無防備な状態{subBox('(注2)')}です。襲われたら大ピン
                                        チ。その最中、人に近づかれることを、ねこはとても嫌います。飼い主は、離れるように
                                        し、のびのびとした気分でさせてやりましょう」
                                        これは
                                        {rubyBox('頷', 'うなず')}
                                        ける。そこで、ゆずが うちのねこの名前はゆずという そうする時は遠
                                        慮していた。
                                        {numberSquareBox(44)}。朝、
                                        ねこトイレ{subBox('(注3)')}の砂をかきまわし、汚れ物を取り始めると、「ご苦労」という
                                        ように、ゆずがやって来る。そして、まだトイレに手を入れているのに、「どけどけ」と
                                        いうように中に入ってくる。そして、足を踏ん張り、 行うのだ。
                                        これ見よがしに{subBox('(注4)')}。
                                        あの説得力のあるマニュアルは、一体全体、何だったのか。なるほど、生きている物に
                                        は個性があると、あらためて{numberSquareBox(45)}。
                                        {attachBox('(北村薫『書かずにはいられない 北村薫のエッセイ』新潮社による)')}
                                        {noteBox([
                                            '(注1) 用足ししている : 大便や小便をしている',
                                            '(注2) 無防備な状態 : 危険に備えていない様子',
                                            '(注3) ねこトイレ : 箱の底に砂などを敷いた、ねこ用のトイレ',
                                            '(注4) これ見よがしに : 自慢げに見せつけるように'
                                        ])}
                                    </div>
                                </>
                            )
                        ,
                        options: ['こちらにはいえないこともない',
                            'こちらにいえるとは限らない',
                            'こちらにもいえるとは思わなかった',
                            'こちらにはいえないと思うのか'],
                        correct:2
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['そういう',
                            'する',
                            'あの',
                            'やろうという'],
                        correct:1
                    },
                    {
                        number: 43,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['トイレのことだ',
                            'トイレのことであるに違いない',
                            'トイレだからである',
                            'トイレだと聞いている'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['もっともである',
                            '当然である',
                            'ところがである',
                            '例えばである'],
                        correct:3
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['認識させられたことがある',
                            '認識させられたおかげだ',
                            '認識させられる話があった',
                            '認識させられる出来事だった'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題８ 次の(1)から(4)の文章を読んで、後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: '筆者の考えに合うのはどれか。',
                        qReading:
                            (
                                <>
                                    (1)
                                    <div className={'question_q_reading'}>
                                        教師＝話す人、生徒＝聞く人という構造が知らず知らずのうちに教室空間にできあがり、
                                        そして固定化してしまうのは恐ろしいことではないかと思う。教師が先取りしてしまうこ
                                        とで、生徒が自分自身で考え、解決しようとする芽をつみとってしまう場合がある。
                                        いつも話し続けるのがコミュニケーションでない。教師側が沈黙し、「待つ」という行
                                        為も時には大切であろう。もう少し話したい、と思うところで
                                        一歩ひいてみる{subBox('(注)')}ことで、相
                                        手が言おうとすることを引き出すことができるのである。
                                        {attachBox('(徳井厚子『日本語教師の「衣」再考 多文化共生への課題』くろしお出版による)')}
                                        {noteBox(['(注) 一歩ひいてみる : ここでは、話すのをやめてみる'])}

                                    </div>
                                </>
                            )
                        ,
                        options: ['教師と生徒が自由に発言し合うことも必要だ。',
                            '教師は生徒の考えを想像するべきだ。',
                            '教師は生徒の発言を待つことも必要だ。',
                            '教師は生徒に沈黙の時間を与えないようにすべきだ。'],
                        correct:3
                    },
                    {
                        number: 47,
                        line: 4,
                        q: '市民運動場の予約について、このお知らせは何を知らせているか。',
                        qReading:
                            (
                                <>
                                    (2)
                                    以下は、ある市役所のホームページに掲載されたお知らせである。
                                    <div className={'question_q_reading'}>
                                        2016年11月1日
                                        スポーツ課
                                        {titleBox('市民運動場の予約について')}
                                        市民運動場の予約は、これまで管理事務所窓口で受け付けておりましたが、2017
                                        年2月1日よりインターネット上の予約システムでも行うことができるようにな
                                        ります。予約システムの利用は平日、土日祝日を問わず24時間可能で、予約は、
                                        窓口での予約と同様に、使用日の一か月前から受け付けます。
                                        予約システムの利用に際しては、事前に利用者登録が必要となりますので、身分
                                        を証明できるものを持って管理事務所窓口にお越しください。
                                        市民運動場管理事務所 〒002‐3833 南松市中央町3-2 中央公園内
                                        (受付時間 : 月曜日～金曜日 9:00～17:00)
                                    </div>
                                </>
                            ),
                        options: ['管理事務所窓口での予約受付期間が変更になること',
                            '管理事務所窓口で利用者登録をすれば、インターネット上で予約ができるようになること',
                            'インターネット上での予約受付時間がこれまでより長くなること',
                            'インターネット上の予約システムの導入により、管理事務所窓口での予約ができなくなること'],
                        correct:2
                    },
                    {
                        number: 48,
                        line: 4,
                        q: '筆者によると、異文化間で対話を通して人間関係を築く上で最も大切なことは何か。',
                        qReading: (
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    異文化間での対話を議論するときに，必ずといってよいくらい出てくるのが，価値観の
                                    理解と共有である。他者と対話を通して，人間関係を樹立していくには，自己の価値観を
                                    保存したままで，他者の価値観を理解するという方略だけでは十分ではない。相互的な働
                                    きかけを通じて，何か新たな価値を共有することが要求されるのである。すなわち，自ら
                                    の価値観を相対化し，新たな価値を対話という共同作業を通して創り上げ，それを共有し
                                    ていく態度が必要なのだ。
                                    {attachBox('(ARCLE 編集委員会・田中茂範・アレン玉井光江・根岸雅史・吉田研作編著\n' +
                                        '                                    『幼児から成人まで一貫した英語教育のための枠組み ECF English Curriculum Framework』\n' +
                                        '                                    リーベル出版による)')}
                                </div>
                            </>
                        ),
                        options: ['自己の価値観を理解してもらおうとする態度',
                            '自己の価値観を保ちながら、他者の価値観を理解する態度',
                            '他者と自己の共通の価値観を創り上げていく態度',
                            '他者の価値観の中に自己の価値観との共通点を見つける態度'],
                        correct:3
                    },
                    {
                        number: 49,
                        line: 4,
                        q: 'この文章で筆者が述べていることは何か。',
                        qReading: (
                            <>
                                (4)
                                以下は、劇を作ることを仕事にしている人が書いた文章である。
                                <div className={'question_q_reading'}>
                                    僕は「変な人」です。そうでなければ、こんな仕事はしてません。そして僕は「普通の人」
                                    です。だから こそこの仕事が成立しています。 「特別なもの」を生み出そうとするとき、
                                    それがどんなふうに特別なのかを「普通」という視点から見極める必要があります。
                                    「特別」と「普通」、定規を何度も持ち替えるのです。そのために自分の中の普通
                                    さを死守するのです。
                                    {attachBox('(小林賢太郎『僕がコントや演劇のために考えていること』による)')}
                                </div>
                            </>
                        ),
                        options: ['「普通」という視点がないと、「特別なもの」は作れない。',
                            '「普通の人」が普通のものを作ると、「特別なもの」になる。',
                            '「変な人」が普通のものを作ると、「特別なもの」になる。',
                            '「変な人」の視点でしか、「特別なもの」は作れない。'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の1から3の文章を読んで、後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q: (
                            <>
                                {uBox('謎が多い')}とあるが、に合うのはどれか。
                            </>
                        ),
                        qReading: (
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    人に従順な飼い犬は、もともとオオカミの仲間を飼い
                                    {rubyBox('馴', 'な')}らしたものである。(中略)
                                    ところが、「人間がオオカミを飼い {rubyBox('馴', 'な')}らした」という話には{uBox('謎が多い')}。犬が人間と暮ら
                                    すようになったのは、15０００年ほど前の旧石器時代のことであると推測されている。当時
                                    の人類にとって、 {rubyBox('肉食獣', 'にくしょくじゅう')}は恐るべき敵であった。そんな恐ろしい {rubyBox('肉食獣', 'にくしょくじゅう')}を飼い
                                    {rubyBox('馴', 'な')}
                                    らすとい
                                    う発想を当時の人類が持ち得たのだろうか。しかも犬を飼うということは、犬にエサをや
                                    らなければならない。わずかな食糧で暮らしていた人類に、犬を飼うほどの余裕があった
                                    のだろうか。また当時の人類は犬がいなくても、狩りをすることができた。犬を必要とす
                                    る理由はなかったのである。
                                    最近の研究では、人間が犬を必要としたのではなく、犬の方から人間を求めて寄り添っ
                                    てきたと考えられている。犬の祖先となったとされる弱いオオカミたちは、群れの中での
                                    順位が低く、食べ物も十分ではない。そこで、人間に近づき、食べ残しをあさるように
                                    なったのではないかと考えられているのである。
                                    弱いオオカミだけでは、狩りをすることができないが、人間の手助けをすることはでき
                                    る。そして、やがて人間と犬とが共に狩りをするようになったと推察されている。こう考
                                    えると、当時、自然界の中で強い存在となりつつあった人間に寄り添うことは、犬にとっ
                                    て得なことが多かった。つまり、人間が犬を利用したのではなく、犬が人間を利用したか
                                    もしれないのである。
                                    {attachBox('(稲垣栄洋『弱者の戦略』新潮社による)')}
                                </div>
                            </>
                        ),
                        options: ['犬ではなくオオカミを飼おうとしたこと',
                            <>
                                オオカミを
                                {rubyBox('肉食獣', 'にくしょくじゅう')}
                                肉食獣だと思わなかったこと
                            </>,
                            '恐ろしいオオカミを飼って利用しようと考えたこと',
                            '狩りの邪魔になるのに恐ろしいオオカミを飼おうとしたこと'],
                        correct:3
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '筆者によると、どのようなオオカミが犬の祖先だと考えられるか。',
                        qReading: null,
                        options: ['人間から頼りにされたオオカミ',
                            '狩りの上手なオオカミ',
                            '群れから追い出されたオオカミ',
                            '群れの中で下位のオオカミ'],
                        correct:4
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '犬の祖先が人間と暮らすようになったきっかけについて、筆者はどのように考えているか。',
                        qReading: null,
                        options: ['人間を利用して仲間からの危険を避けようとした。',
                            '人間に近づいて食糧を得ようとした。',
                            '人間が狩りの手助けをさせた。',
                            '人間がエサを与えた。'],
                        correct:2
                    },
                    {
                        number: 53,
                        line: 4,
                        q: (
                            <>
                                ①{uBox('そんなふうに')}とあるが、子どもはどんなふうに大人を見ているのか。
                            </>
                        ),
                        qReading: (
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    子どもはこれから自分は大人になっていくのだから、自分はどうなるのだろうとそれは
                                    一所懸命に大人を観察している。その大人に魅力を感じれば、あんなふうになりたいと思
                                    うかもしれない。ほんのちょっとチャーミングなところを認めて、ああ失敗しても、 どじ{subBox('(注1)')}
                                    ばかりでもいいんだと思えることもあるかもしれない。あるいは、僕はあんな大人にはな
                                    らないだろうけれど、あんなふうにするのもすてきだなと感じることもあるに違いない。
                                    とにかく子どもは、①{uBox('そんなふうに')}常に大人を見ているのである。
                                    (中略)
                                    子どもはやがて大人になる。その大人に魅力がなかったら、それは自分に明日がないと
                                    言われているのと同じことだ。大人になってもつまらなそうだ、楽しいことがなさそうだ
                                    と感じたら、君の未来はこの程度のものだとつきつけられているのと変わらない。
                                    ②{uBox('これほど子どもにとって不幸なことはない。')}
                                    大人はいつも子どもに見つめられている、子どもが自分を観察しているということを自
                                    覚していなければいけないと思う。わが身をつくろって、いいかっこするのではない。正
                                    直に失敗するのなら、子どもより上手に失敗してみせよう、傷つくなら子どもより上手に
                                    傷ついてみせよう。人生の先輩としてというより、現役の子どもに対してベテランの子ど
                                    もとして、ベテランらしいところを見せてやろうじゃないか。そういう
                                    {rubyBox('気概', 'きがい')}
                                    の{subBox('(注2)')}大人がたく
                                    さんいれば、子どもたちはきっと大人の世界に魅力を見いだすに違いない。それが幸福な
                                    子どもの将来につながるのだと思う。
                                    {attachBox('(大林宣彦『父の失恋 娘の結婚 べそっかきの幸福そうな顔』フレーベル館による)')}
                                    {noteBox([
                                        '(注1) どじ : うっかりした失敗',
                                        <>
                                            (注2) {rubyBox('気概', 'きがい')}の : ここでは、強い気持ちを持った
                                        </>
                                    ])}


                                </div>
                            </>
                        ),
                        options: ['早く大人になりたいと思っている。',
                            '大人の姿から魅力的な部分を探している。',
                            '自分が失敗したときどうするか考えている。',
                            'あんな大人にはなりたくないと思っている。'],
                        correct:2
                    },
                    {
                        number: 54,
                        line: 4,
                        q: (
                            <>
                                ②{uBox('これほど子どもにとって不幸なことはない')}とあるが、何が不幸なのか。
                            </>
                        ),
                        qReading: null,
                        options: ['大人を見ても未来の自分に希望が持てないこと',
                            '大人を見てもすてきな大人になる自信が持てないこと',
                            '大人を見ても今何をしておけばいいか分からないこと',
                            '大人を見ても将来自分のしたいことが見つからないこと'],
                        correct:1
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '筆者が大人に対して伝えたいことは何か。',
                        qReading: null,
                        options: ['人生の先輩らしく、いつもかっこいい大人でいよう。',
                            'ベテランの子どもとして、子どもを幸福な将来へ導いてあげよう。',
                            '子どもたちに、大人の魅力的な世界を教えよう。',
                            '子どもたちに、ベテランの子どもとしての行いを示そう。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q: (
                            <>
                                {uBox('変われば変わるものだ')}とあるが、科学者はどのように変わったのか。
                            </>
                        ),
                        qReading: (
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    科学記者を始めた20年ほど前、記者の訪問を歓迎しない科学者は、けっして珍しくな
                                    かった。「新聞記者との付き合いには何のメリットもなく、時間の無駄。記者と親しい科
                                    学者は、同僚からうさんくさい目で見られる。真理の探究に没頭する科学者が、記者なん
                                    ていう世俗を相手にしては
                                    {rubyBox('沽券', 'こけん')}にかかわる{subBox('(注1)')}」というわけだ。それが今は、まったく違う。
                                    科学者も、研究に税金を使うからには自分の仕事を積極的に世間に説明するのが当然だと
                                    みなされ、大学や研究所はメディア戦略を練るまでになった。{uBox('変われば変わるものだ。')}
                                    (中略)
                                    科学者側の広報が巧みになればなるほど、科学ジャーナリズムは科学者集団のたんなる宣
                                    伝係で仕事をした気になってしまう恐れがある。
                                    「サイエンス」や英国の「ネイチャー」に載る科学者の論文を、どの新聞も毎週のよう
                                    に記事にして紹介している。その多くが、これらの論文誌の巧みな広報資料や研究者の記
                                    者発表をもとにしているのだが、これなどまさに、何を社会に伝えるかは自分で決めると
                                    いうジャーナリズムの
                                    {rubyBox('要', 'かなめ')}{subBox('(注2)')}を、科学者集団側になかば預けてしまっているのではないか。
                                    自分でネタ探しをするよりも、このほうがたしかに効率的なのだ。
                                    米国の科学ジャーナリズムの教科書には、科学者たちはマスメディアを自分たちの広報

                                    機関のようにとらえるものだと書いてある。科学ジャーナリズムは、広報戦略に
                                    {rubyBox('長', 'た')}
                                    けてき
                                    た{subBox('(注3)')}科学者たちとどう付き合っていくべきか。その哲学と戦略を、こちら側も改めて
                                    {rubyBox('肝', 'きも')}に
                                    {rubyBox('銘', 'めい')}

                                    じて{subBox('(注4)')}おかなければならない時代になった。
                                    {attachBox('(YOMIURI ONLINE\n' +
                                        '                                    ＜http://www.yomiuri.co.jp/column/science/20090513-OYT8T00319.htm＞2010年3月7日取得による)')}
                                    {noteBox([
                                        <>
                                            (注1) {rubyBox('沽券', 'こけん')}にかかわる : 体面を損ねる
                                        </>,
                                        <>
                                            (注2) {rubyBox('要', 'かなめ')} : 最も大切な部分
                                        </>,
                                        <>
                                            (注3) {rubyBox('長', 'た')}けてきた : 上手になってきた
                                        </>,
                                        <>
                                            (注4) {rubyBox('肝', 'きも')}に{rubyBox('銘', 'めい')}じて : 忘れないように心にしっかりととどめて
                                        </>
                                    ])}


                                </div>
                            </>
                        ),
                        options: ['以前は記者を世俗的だと見ていたが、現在はメディアを信頼するようになった。',
                            '以前は記者と距離を置いていたが、現在は積極的にメディアとかかわるようになった。',
                            '以前は同僚の目を気にしていたが、現在は記者の目をより気にするようになった。',
                            '以前は自らメディア戦略を練っていたが、現在は記者の力を借りるようになった。'],
                        correct:2
                    },
                    {
                        number: 57,
                        line: 4,
                        q: '科学者との関係で、今のジャーナリズムにはどのような問題があるか。',
                        qReading: null,
                        options: ['科学者が望む論文を記事にしていない。',
                            '科学者が十分満足できる広報をしていない。',
                            '科学者から提供された情報をそのまま伝えている。',
                            '科学者から提供された情報を十分理解せずに報じている。'],
                        correct:3
                    },
                    {
                        number: 58,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading: null,
                        options: ['科学者は、科学ジャーナリズムの立場をもっと理解すべきである。',
                            '科学者は、科学ジャーナリズムとの関係のあり方を改めて見直すべきである。',
                            '科学ジャーナリズムは、報道内容の決定にあたって主体的であるべきだ。',
                            '科学ジャーナリズムは、科学の価値を正しく認めてもらえるよう努めるべきだ。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q: '筆者によると、まちの樹木の大きな役割とは何か。',
                        qReading: (
                            <>
                                <div className={'question_q_reading'}>
                                    暮らしの中で身近な木といえば、街路樹と公園の樹木、そして住宅の庭の木あたりで
                                    しょうか。いずれも毎日目にはしているものの、あらためて意識することは少ないと思い
                                    ます。でも、例えばこれがすべて枯れてしまったとしたらどうでしょう。なんとも寂しく、
                                    無味乾燥な、あるいは何か病気を連想させるようなイメージのまちになってしまうのでは
                                    ないでしょうか。また、昨今は、維持管理の面などから街路樹を植えないまちなどもある
                                    ようですが、一見近代的、未来都市的なイメージもしますが、うるおいややすらぎのない
                                    まちのようにも見えます。このようにまちの樹木は、実はとても大きな役割を持っていま
                                    す。
                                    では、この木々たちは、ただ植えるだけ、存在するだけでいいのでしょうか。そうでは
                                    ありません。そこに意味や意義がなければならないのです。わかりやすく言うと、街路樹
                                    の
                                    {rubyBox('樹種', 'じゅしゅ')}を何にするかというようなことです。
                                    その土地の植生{subBox('(注1)')}を踏まえ、その上に歴史性や
                                    未来性を重ね合わせる。季節の移ろいの中で、人々がその木をどのように眺めながら暮ら
                                    していくのか。そんな積み重ねの上にはじめて「ここにはこの木を植えよう」ということ
                                    になる。 ①{uBox('それ')}がその木がその場所に存在する意義です。
                                    住宅の庭木も同じです。単に自分の好みばかりでなく、その木が住宅街の小路をどのよ
                                    うに演出するのか、まわりとの調和はどうなのか。そんなことを考えていくのがまちづく
                                    りの中の「木」です。昨今のガーデニングブームで、確かに個々の家の庭は立派になりま
                                    した。花や木の種類もずいぶん増えて、ひと昔前には無かったような色や形も見られます。
                                    そして、ガーデニングをする人達の情報交流も盛んとなり、新たなコミュニティも生まれ
                                    ているようです。しかし、いま一つ自分の土地から外に広がっていない感じがします。道
                                    路や公園は地域にとっての共有の庭であり、個々の部分と共有の部分が美しくなってこそ
                                    はじめて全体が美しくなるのです。美しく楽しい庭を作っている人々には、
                                    ②{uBox('もっと欲張っ')}
                                    て美しく楽しいまちを作ってほしいと思います。
                                    「
                                    {rubyBox('愛', 'め')}
                                    でる」という言葉があります。これは主に植物に対して使われます。満開の桜や初
                                    夏の新緑、真夏の木陰や秋の紅葉・・・。私たちは折々に{subBox('(注2)')}木々を眺め、そこに日々の暮ら
                                    しを重ね合わせたり、育ちゆく木々に子供達の明るい未来を願ったりしているのではない
                                    でしょうか。そしてそんな思いをこめて水やりや手入れをする。これが「
                                    {rubyBox('愛', 'め')}
                                    でる」という
                                    ことだと思うのです。その
                                    {rubyBox('愛', 'め')}でる心と
                                    {rubyBox('愛', 'め')}でられる木々があってはじめてよいまちとなるの
                                    です。
                                    {attachBox('(加藤美浩『まちづくりのススメ』による)')}
                                    {noteBox([
                                        <>
                                            (注1) その土地の植生 : その土地にどのような植物が生えているか
                                        </>,
                                        <>
                                            (注2) 折々に : ここでは、機会があるごとに
                                        </>
                                    ])}
                                </div>
                            </>
                        ),
                        options: ['人々に木が身近な存在であることを意識させる。',
                            '人々に未来都市的なイメージを与える。',
                            '人々を現実の煩わしさから逃れさせる。',
                            '人々を落ち着いた気持ちにさせる。'],
                        correct:4
                    },
                    {
                        number: 60,
                        line: 4,
                        q: (
                            <>
                                ①{uBox('それ')}とはどういうことか。
                            </>
                        ),
                        qReading: null,
                        options: ['その土地に暮らす人々の好みに合わせた樹木を植えること',
                            'その土地の特性と人々の暮らしを考慮し、樹木を植えること',
                            'その土地の歴史的な樹木を大切にし、保存すること',
                            'その土地の季節の移ろいを感じさせる樹木を大切にすること'],
                        correct:2
                    },
                    {
                        number: 61,
                        line: 4,
                        q: (
                            <>
                                ②{uBox('もっと欲張って')}とあるが、筆者の気持ちと合うものはどれか。
                            </>
                        ),
                        qReading: null,
                        options: ['自分の好みだけではなく、まち全体との調和も考えてほしい。',
                            'ガーデニングをする人達同士で、もっと情報交換をしてほしい。',
                            '個々の庭の花や木が、さらに美しく育つようにしてほしい。',
                            '個々の庭よりも、まちの共有の部分のほうに力を入れてほしい。'],
                        correct:1
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '筆者の考えに合うのはどれか。',
                        qReading: null,
                        options: [
                            <>
                                人々がまちの木々を
                                {rubyBox('愛', 'め')}
                                でることで、子供達が自然に関心を持つようになる。
                            </>,
                            <>
                                人々がまちの木々を
                                {rubyBox('愛', 'め')}
                                でることが、よいまちづくりにつながる。
                            </>,
                            '人々がまちの木々の手入れを怠らなければ、よいまちになる。',
                            <>
                                人々が季節による木々の変化に関心を持つことで、
                                {rubyBox('愛', 'め')}
                                でる心が生まれる。
                            </>
                        ],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のＡとＢの文章を読んで、後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: '雑談の良い点について、ＡとＢはどのように述べているか。',
                        qReading: (
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        雑談はいろいろな意見を交換し合うことによって、ヒントを得ようというスケールの
                                        大きな場である。そこにいる誰もが自由に発言する権利を持っている。仮に自分とは反
                                        対意見であっても、まずは聞くという姿勢を保つこと、心理学のカウンセリングと同じ
                                        である。
                                        そして相手の発言に対して、自分の意見を軽い気分で述べる、それが雑談である。
                                        どんなに間違っている、バカバカしいと思われる意見であっても、いったんそれを受
                                        け入れること。「なぜあの人はこのような発言をするのか」と考えていくと、自分がそ
                                        れまで見落としていたことがあることに気がつくこともある。
                                        「話し上手は聞き上手」という言葉があるように、雑談では「いかに発言するか」より
                                        も「いかに聞くか」が大切になる。
                                        {attachBox('(多湖輝『人の心をつかむ「雑談力」情報が集まる「雑談力」』新講社による)')}
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        雑談は無駄だという人がいるが、本当にそうだろうか。辞書を調べると「無駄話」と
                                        いう意味もあるが、「さまざまなことを気楽に話し合うこと」という意味もある。気楽
                                        な気持ちのとき、人は本音を話すものだ。バカらしいと思う話もあるかもしれないが、
                                        雑談の中から相手の人間性が見えてくる。
                                        そうはいっても、気楽に話せる雰囲気を作るのは簡単なことではない。まずは、自分
                                        から話のきっかけになりそうな小さなエピソードを話そう。相手が話に乗って{subBox('(注1)')}きたと
                                        思ったら、そこで自分の本音を話してみよう。そうすれば、相手もやがて心を開いて話
                                        し始めるだろう。そうなれば、雑談も意味のある時間となる。
                                    </div>
                                </div>
                                {noteBox([<>(注) 話に乗る : ここでは、話に興味を持つ</>])}
                            </>
                        ),
                        options:[
                            'Ａはお互いの考えを認め合えると述べ、Ｂは相手の人間性が見えてくると述べている。',
                            'Ａは相手と意見交換ができると述べ、Ｂはバカらしい話をしても受け入れてもらえると述べている。',
                            'Ａは自分が気づいていなかったことに気づけると述べ、Ｂは相手の本音を知ることができると述べている。',
                            'Ａは誰もが自由に意見を発言できると述べ、Ｂは相手と自分との共通点を見つけることができると述べている。'
                        ],
                        correct:3
                    },
                    {
                        number: 64,
                        line: 4,
                        q: '雑談をするときの姿勢について、ＡとＢはどのように述べているか。',
                        qReading: null,
                        options: ['ＡもＢも、相手の話をよく聞くことが大切だと述べている。',
                            'ＡもＢも、相手と自分が同じぐらいの割合で話すようにしようと述べている。',
                            <>
                                Ａは相手の話を聞くことが大切だと述べ、Ｂは自分から話すようにしようと述べて
                                いる。
                            </>,
                            <>
                                Ａは相手の発言の意図を考えることが大切だと述べ、Ｂはまずは相手に話をさせる
                                ことが大切だと述べている。
                            </>
                        ],
                        correct:3
                    },
                ],
            },
            {
                title: <>
                    問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から
                    一つ選びなさい。
                </>,
                question: [
                    {
                        number: 65,
                        line: 4,
                        q: (
                            <>
                                {uBox('そうした人に出会うのが、現場に通う楽しみのひとつだ')}とあるが、なぜか。
                            </>
                        ),
                        qReading: (
                            <>
                                <div className={'question_q_reading'}>
                                    建築の設計をやっていると様々な職人に出会う。大小を問わずどの現場でも一人や二人、
                                    主役を張れる{subBox('(注1)')}人がいる。{uBox('そうした人に出会うのが、現場に通う楽しみのひとつだ')}。長い時
                                    間、図面にばかり接していると、現実を離れて思考が一人歩きすることがよくある。そん
                                    な時、彼らからもらう情報が
                                    かけがえのない{subBox('(注2)')}ものであることが分かる。我々が作り出す図
                                    面は、線で描かれた抽象的な記号に過ぎない。彼らは物に触っている。経験則によって裏
                                    付けられた、物に近い、深くて確かな情報を持っている。
                                    図面は人間の頭の中だけで作り出されたものだ。それを現実の建物に移し替えるには、
                                    木や鉄やコンクリートといった、物から手によって直接に得られる情報が不可欠だ。頭で
                                    生み出されたものは、思いこみや錯誤によって間違うことが多いからだ。
                                    今はコンピューターと情報通信の時代だ。それにともなって、手を動かす機会がどんど
                                    ん少なくなってきている。建築の設計でも CAD(コンピューター利用設計)化の勢いは
                                    すさまじい。しかし、その図面は、設計の全体を把握しにくい。きれい過ぎて、何であれ、
                                    すべてうまくいっているように見えてしまう。手を経ずに、頭の中だけで作業が完結して
                                    しまっているからだろう。
                                    トレーシングペーパー{subBox('(注3)')}に鉛筆で苦労をして描かれた
                                    旧来の{subBox('(注4)')}図面は、そこに描く人の感情
                                    が入っている。うまくいっていないところは消しゴムで消し、描き直して修正していく。
                                    技術的に問題のあるところ、デザイン的にうまくいっていないところほど、線はにじみ、
                                    トレーシングペーパーは人の手の脂で汚れてくる。何回も描き直した個所は、しまいには
                                    擦り切れて穴が開いてしまうこともある。
                                    描いた当人の自信がなければ、鉛筆の線にもその迷いを見て取ることもできる。慣れて
                                    くると、図面上の線から、描いた人の経験的なレベルや人柄さえ分かるようになる。手書
                                    きの図面には、すてがたい様々な種類の情報が塗り込められている。均質な図面の向こう
                                    側に人の姿が見えにくい分、CAD では大きなリスクを見落とす可能性もある。
                                    手から遠いコンピューターの出現によって、リスクの所在をかぎ取ることが、旧来の経
                                    験則では難しくなってきている。これは設計に限ったことではないだろう。今や情報通信
                                    とコンピューターはあらゆる分野に浸透し、社会全体を変えつつある。頭から生み出され
                                    たものが暴走している。リスクの所在が、より巨大で、見えにくくなった。
                                    どこかでそれを、生身の身体を持つ人間の側に引き戻す必要がある。手から得られる情
                                    報は、効率は悪いが、現実の世界を
                                    まさぐって{subBox('(注5)')}得られるものだ。その人の身体だけにとど
                                    まる固有の情報といってもよい。忘れられつつある手の行き場を考えるべきだろう。
                                    {attachBox('(内藤廣『建築のはじまりに向かって』王国社による)')}
                                    {noteBox([
                                        '(注1) 主役を張る : ここでは、主要な役割を果たす',
                                        '(注2) かけがえのない : 他に代わりがないほど貴重な',
                                        '(注3) トレーシングペーパー : ここでは、設計図を描くための紙',
                                        '(注4) 旧来の : 昔からの',
                                        '(注5) まさぐる : 手探りをする'
                                    ])}
                                </div>
                            </>
                        ),
                        options: ['職人から得る情報で自分のやり方の正しさが確かめられるから',
                            '職人たちの経験に基づいた信頼できる情報が得られるから',
                            '様々な職人たちから建築設計の多様性が学べるから',
                            '経験豊かな職人たちの仕事ぶりが見られるから'],
                        correct:2
                    },
                    {
                        number: 66,
                        line: 4,
                        q: '鉛筆で描かれた図面について、筆者はどのように述べているか。',
                        qReading: null,
                        options: ['設計の過程や描いた人に関する情報が得られる。',
                            '経験を積んで設計に自信のある人にしか描けない。',
                            '細部は分かりにくいが、全体は把握しやすい。',
                            '情報を読み取りにくいが、描いた人の感情がこもっている。'],
                        correct:1
                    },
                    {
                        number: 67,
                        line: 4,
                        q: '筆者は、コンピューターが社会にどのような影響を与えたと述べているか。',
                        qReading: null,
                        options: ['多くの情報の中から必要な情報を選び出しにくくなった。',
                            <>
                                リスクの高い様々な種類の情報が
                                {rubyBox('氾濫', 'はんらん')}
                                するようになった。
                            </>,
                            'これまでに得られた経験則が社会で必要とされなくなった。',
                            'どこにどのようなリスクが潜んでいるか把握しにくくなった。'],
                        correct:4
                    },
                    {
                        number: 68,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading: null,
                        options: ['コンピューター化によるリスクを経験則によって回避すべきだ。',
                            'コンピューター化による効率重視の風潮を改めるべきだ。',
                            '手によってなされる仕事の伝統を守っていくべきだ。',
                            '手によってなされる仕事の価値を再認識すべきだ。'],
                        correct:4
                    },
                ]
            },
            {
                title:
                    <>
                        問題13 右のページは、大森大学の図書館のホームページに書かれたサービスの案内であ
                        る。下の問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ,
                question: [
                    {
                        number: 69,
                        line: 4,
                        q:
                            <>
                                大森大学の学生のリンさんは、明日中に借りたい本がある。明日行ける図書館の中で
                                は、以下の4館が所蔵していることがわかったので、メモをした。リンさんが本を借り
                                られるのは、次の方法のうちどれか。
                            </>
                        ,
                        qReading:
                            <>
                                <Image src={r_2011_07_69_1} alt={'r_2011_07_69_1'}/>
                                <Image src={r_2011_07_69_2} alt={'r_2011_07_69_2'}/>
                            </>,
                        options: ['学生証を持参して、長島大学図書館に行く。',
                            '今から紹介状を申請し、それを持参して、あおば大学図書館に行く。',
                            '学生証を持参して、中山工業大学図書館に行く。',
                            '今から紹介状を申請し、それを持参して、さくら大学図書館に行く。'],
                        correct:1
                    },
                    {
                        number: 70,
                        line: 4,
                        q: (
                            <>
                                大森大学の学生のロイさんは利用したい資料があるが、大森大学にはなかった。他大
                                学に行く時間がないため、複写依頼か資料借用のサービスを利用しようと考えている。
                                ロイさんが注意しなければならないこととして合っているのは、次のどれか。
                            </>
                        ),
                        qReading: null,
                        options: ['複写依頼は、資料を所蔵する大学のホームページから行わなければならない。',
                            '複写依頼は、一度に2件以上まとめて申し込むことはできない。',
                            '資料の借用に必要な送料は、半額を自身が負担しなければならない。',
                            '借用した資料は、大森大学図書館内で閲覧しなければならない。'],
                        correct:4
                    },
                ]
            },
        ],
    },
    {
        name: '2021한끝_1',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、1 • 2 • 3 • 4から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q: (
                            <>
                                その路線バスは{uBox('頻繁')}に出ている。
                            </>
                        ),
                        qReading: null,
                        options: ['びんしょう', 'ひんはん', 'びんじょう', 'ひんぱん'],
                        correct:4
                    },
                    {
                        number: 2,
                        line: null,
                        q: (
                            <>
                                各ビール会社がシェアを{uBox('競って')}いる。
                            </>
                        ),
                        qReading: null,
                        options: ['たたかって', 'あせって', 'きそって', 'ちかって'],
                        correct:3
                    },
                    {
                        number: 3,
                        line: null,
                        q: (
                            <>
                                アメリカの企業と技術的に{uBox('提携')}する。
                            </>
                        ),
                        qReading: null,
                        options: ['ていけい', 'ていきょう', 'けいたい', 'けいせい'],
                        correct:1
                    },
                    {
                        number: 4,
                        line: null,
                        q: (
                            <>
                                父親の一徹な性格に手を焼いている。
                            </>
                        ),
                        qReading: null,
                        options: ['いっぺん', 'いっせい', 'いっぴつ', 'いってつ'],
                        correct:4
                    },
                    {
                        number: 5,
                        line: null,
                        q: (
                            <>
                                超一流のテクニックでヨッ トを操る。
                            </>
                        ),
                        qReading: null,
                        options: ['あやつる', 'いたわる', 'はかどる', 'ののしる'],
                        correct:1
                    },
                    {
                        number: 6,
                        line: null,
                        q: (
                            <>
                                近年の流行にはめっぽう{uBox('疎い')}。
                            </>
                        ),
                        qReading: null,
                        options: ['しぶい', 'うとい', 'あわい', 'きつい'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blank}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                彼とは小さいときから家族{blank}のつきあいです。
                            </>
                        ,
                        qReading: null,
                        options: ['まみれ', 'ぐるみ', 'ずくめ', 'がらみ'],
                        correct:2
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                その手紙は私の心を打ち、思わずあふれた涙で字が{blank}、最後まで読め
                                ませんでした
                            </>
                        ,
                        qReading: null,
                        options: ['にじんで', 'ゆらいで', 'しみて', 'ひろがって'],
                        correct:1
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                友人の言葉に{blank}を覚える。
                            </>
                        ,
                        qReading: null,
                        options: ['同感', '直感', '共感', '実感'],
                        correct:3
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                万一失敗したときは私が{blank}するから安心してください。
                            </>
                        ,
                        qReading: null,
                        options: ['アップ', 'フォロー', 'キープ', 'マッチ'],
                        correct:2
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                この実験には{blank}準備が必要だ。
                            </>
                        ,
                        qReading: null,
                        options: ['繊細な', '濃密な', '雰細な', '綿密な'],
                        correct:4
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                父は昨日、{blank}会社帰りに本屋に寄って、僕の好きなマンガを買ってき
                                てくれた。
                            </>
                        ,
                        qReading: null,
                        options: ['わざわざ', 'たびたび', 'みすみす', 'はるばる'],
                        correct:1
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                彼は曰本に来たばかりで、まだ日本語が{blank}。
                            </>
                        ,
                        qReading: null,
                        options: ['おくゆかしい', 'よそよそしい', 'たどたどしい', 'おびただしい'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 の言葉に意味が最も近いものを、1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                {rubyBox('霧', 'きり')}
                                がたちこめて彼の顔は{uBox('さだかには')}見えなかった。
                            </>
                        ,
                        qReading: null,
                        options: ['ぼんやりと', 'きっぱりと', 'やんわりと', 'はっきりと'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                私は{uBox('ピンチ')}を切り抜けた。
                            </>
                        ,
                        qReading: null,
                        options: ['焦点', '危機', '貧乏', '束縛'],
                        correct:2
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                宝くじというのは発行元がもうかる{uBox('仕組み')}になっている。
                            </>
                        ,
                        qReading: null,
                        options: ['コントロール', 'コスト', 'スぺース', 'システム'],
                        correct:4
                    },
                    {
                        number: 17,
                        line: 2,
                        q:
                            <>
                                ある日、我が家に{uBox('朗報')}が届いた。
                            </>
                        ,
                        qReading: 2,
                        options: ['うれしい知らせ', '意外な知らせ', 'めずらしい知らせ', '大切な知らせ'],
                        correct:1
                    },
                    {
                        number: 18,
                        line: 2,
                        q:
                            <>
                                {uBox('みすぼらしい')}身なりの男だ。
                            </>
                        ,
                        qReading: null,
                        options: ['みごとな', '中がすけて見えるような', '貧弱で見苦しい', 'いかにも金持ちらしい'],
                        correct:3
                    },
                    {
                        number: 19,
                        line: 2,
                        q:
                            <>
                                うわさは{uBox('たちまち')}学校中に広まった。
                            </>
                        ,
                        qReading: null,
                        options: ['いつの間にか', 'ゆっくりと', 'あっという間に', 'しだいに'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '一律',
                        qReading: null,
                        options: [<>昨夜東京地方{uBox('一建')}にひょうが降った。
                        </>,
                            <>給料は{uBox('一建')}に10パーセン トのアップとなった。
                            </>,
                            <>上りと下りの列車が{uBox('一建')}に到着した。
                            </>,
                            <>その本は5日に全国{uBox('一建')}に発売される。
                            </>],
                        correct:2
                    },
                    {
                        number: 21,
                        line: 4,
                        q: '手際',
                        qReading: null,
                        options: [<>お姉さんは料理の{uBox('手際')}がよい。
                        </>,
                            <>彼は私の{uBox('手際')}を横取りした。
                            </>,
                            <>食べる前に、{uBox('手際')}を洗った。
                            </>,
                            <>夕飯はどこか{uBox('手際')}な所で済ませよう。
                            </>],
                        correct:1
                    },
                    {
                        number: 22,
                        line: 4,
                        q: '心構え',
                        qReading: null,
                        options: [<>最悪の事態に対する{uBox('心構え')}はできている。
                        </>,
                            <>親切なタクシーの運転手に{uBox('心構え')}をはずんだ。
                            </>,
                            <>だれがこんないたずらをしたのか全く{uBox('心構え')}がない。
                            </>,
                            <>奥さんの細やかな{uBox('心構え')}がうれしかった。
                            </>],
                        correct:1
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '一息',
                        qReading: null,
                        options: [<>リンゴを{uBox('一息')}かじったら、すっぱかったです。
                        </>,
                            <>山の頂上まであと{uBox('一息')}です。
                            </>,
                            <>ご指名により、{uBox('一息')}ごあいさつ申し上げます。
                            </>,
                            <>お水を{uBox('一息')}だけ飲みました。
                            </>],
                        correct:2
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '当てはめる',
                        qReading: null,
                        options: [<>この布は日に{uBox('当てはめる')}と変色する。
                        </>,
                            <>母に背中のボタンを{uBox('当てはめる')}もらった。
                            </>,
                            <>その部品を{uBox('当てはめる')}だけで完成だ。
                            </>,
                            <>この規則はその場合に{uBox('当てはめる')}ことはできない。
                            </>],
                        correct:4
                    },
                    {
                        number: 25,
                        line: 4,
                        q: '口出し',
                        qReading: null,
                        options: [<>その新薬のうわさが{uBox('口出し')}で伝わった。
                        </>,
                            <>彼は{uBox('口出し')}だから何を考えているのかよくわからない。
                            </>,
                            <>私の仕事に{uBox('口出し')}しないでください。
                            </>,
                            <>その俳優の死は各紙で大{uBox('口出し')}で報じられた。
                            </>],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blank}に入れるのに最もよいものを、1 • 2 • 3 • 4から一
                        つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q:
                            <>
                                屋根{blank}屋根は大雪でおしつぶされそうになっていた。
                            </>,
                        qReading: null,
                        options: ['という', 'といい', 'というか', 'というと'],
                        correct:1
                    },
                    {
                        number: 27,
                        line: null,
                        q:
                            <>
                                周りの目もあるので{blank}やめられず、ヘロヘロになりながらも10キロ
                                走ってみま した。
                            </>,
                        qReading: null,
                        options: ['やめても', 'やめるまいか', 'やめるに', 'やめたいにも'],
                        correct:3
                    },
                    {
                        number: 28,
                        line: 2,
                        q:
                            <>
                                日本語で{blank}のですが、自信がないからすぐあきらめる人が多いです。
                            </>,
                        qReading: null,
                        options: ['しゃべられっこない', 'しゃべられなくはない', 'しゃべれるどころじゃない', 'しゃべろうにもしゃべれない'],
                        correct:2
                    },
                    {
                        number: 29,
                        line: 2,
                        q:
                            <><br/>
                                A「そんなことで大人をだませると思うのは
                                {rubyBox('浅', 'あさ')}はか{blank}よ。」<br/>
                                B「だまそうと思ったのではありません。」
                            </>,
                        qReading: null,
                        options: ['というそうだ', 'というようだ', 'というはずだ', 'というものだ'],
                        correct:4
                    },
                    {
                        number: 30,
                        line: null,
                        q:
                            <>
                                我が社は本日{blank}「A商事」としての幕を下ろし、明日から社名を「才
                                フィ スA」に変更することになりました。
                            </>,
                        qReading: null,
                        options: ['をピークに', 'を皮切りに', 'をもって', 'を受けて'],
                        correct:3
                    },
                    {
                        number: 31,
                        line: 2,
                        q:
                            <>
                                本当のことを{blank}、彼はうそをついて信用を失ってしまった。
                            </>,
                        qReading: null,
                        options: ['言ったものだから', '言うが早いか', '言わないもので', '言えばいいものを'],
                        correct:4
                    },
                    {
                        number: 32,
                        line: null,
                        q:
                            <>
                                金利が上がったこともあり、{blank}株価は下落した。
                            </>,
                        qReading: null,
                        options: ['かりに', 'どうやら', 'おそらく', 'はたして'],
                        correct:4
                    },
                    {
                        number: 33,
                        line: 2,
                        q:
                            <><br/>
                                A「たくさんの本を読んでいるから、テストの勉強は進んでいるみたいだね。」<br/>
                                B「そうでもないんだ。本は読んでいるけど、{blank}内容を忘れてしまう
                                から、困っているんだ。」
                            </>,
                        qReading: null,
                        options: ['読んだそばから', '読んでいる問に', '読んだかたわら', '読んでいるうちに'],
                        correct:1
                    },
                    {
                        number: 34,
                        line: 2,
                        q:
                            <>
                                学位審査が終わる と「やれやれ、やっと終わった。もう二度と研究
                                {blank}。」という状況になってしまいます。
                            </>,
                        qReading: null,
                        options: ['こそするものか', 'などするものか', 'こそするものなのか', 'などするものなのか'],
                        correct:2
                    },
                    {
                        number: 35,
                        line: 2,
                        q:
                            <><br/>
                                A「彼はこの高校では有名な生徒みたいですね。」<br/>
                                B「ええ、成績が優秀な点{blank}、野球部のエースですから。
                            </>,
                        qReading: null,
                        options: ['をものともせず', 'としたところで', 'もさることながら', 'にいたっては'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを 、 1 • 2 • 3 • 4から一つ選びな
                        さい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: 2,
                        q:
                            <>
                                子供たちの可能性をただひたすらに信じながら親身に{blankStarBox()}
                                までに変わっていきます。
                            </>,
                        qReading: null,
                        options: ['見事な', '生徒たちは', 'いくうちにやがて', 'なって接して'],
                        correct:2
                    },
                    {
                        number: 37,
                        line: null,
                        q:
                            <>
                                インターネッ トの発展に伴って、世界のあらゆる場所で同時に情報を得ること
                                ができるようになった。コンピューター{blankStarBox()}過言
                                ではない。
                            </>,
                        qReading: null,
                        options: ['現代社会は', '成り立たない', 'なくしては', 'といっても'],
                        correct:2
                    },
                    {
                        number: 38,
                        line: null,
                        q:
                            <>
                                {blankStarBox()}いたとは、信じられない。
                            </>,
                        qReading: null,
                        options: ['崩れ落ちた', '生き延びて', '2週問も', 'ビルの中で'],
                        correct:3
                    },
                    {
                        number: 39,
                        line: null,
                        q:
                            <>
                                勝てば本戦出場の一発勝負だが、不安要素がずらり。それでも山田キャプテンは
                                「リーグ戦ではない。 {blankStarBox()}。雨でも晴れでも、どんな
                                状況でも勝つ。」 と力を込めた。
                            </>,
                        qReading: null,
                        options: ['チームだろう', 'どういう', '勝つ', '相手が'],
                        correct:1
                    },
                    {
                        number: 40,
                        line: null,
                        q:
                            <>
                                あの時、僕は{blankStarBox()}、だからこそ、忘れられない思い
                                出となった。
                            </>,
                        qReading: null,
                        options: ['なかったけど', 'それっきりで', '彼女に会って', 'もう会うことは'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、文章全体の趣旨を踏まえて、{numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    {titleBox('夜の駅')}
                                    駅ということばも、 おそらくすべての人にとって、 さまざまな思い出を
                                    {rubyBox('抱', 'いだ')}
                                    か
                                    せているだろう。
                                    わたしのそのひとつは子どものころ、 父親の{numberSquareBox(41)}東京から広島へ長旅をし
                                    た時のことだ。いわゆる夜行列車で東京を
                                    {rubyBox('発', 'た')}った。 寝台車がものめずらしく、
                                    最初のうちは喜んでいたが、{numberSquareBox(42)}眠ってしまった。
                                    ガタゴトと伝わってくる 振動も、この時にはむしろ快い体感だったと記憶する。
                                    {numberSquareBox(43)}、 ふと目がさめた。駅に待っている。 そっとカーテンをあけて、小さ
                                    な窓から外を見ると、 まさに眠っている夜の駅があった。 まるで
                                    {rubyBox('画', 'え')}のようであ
                                    った。
                                    今にして思うことだが、わたしが好きなシュールレアリスムの画家、 P・デ
                                    ルボーの画と似ている。 彼も鉄道少年だったといわれるように列車をよく
                                    {rubyBox('描', 'えが')}い
                                    た。
                                    {rubyBox('森閑', 'しんかん')}
                                    {subBox('(注)')}
                                    として、 人ひとりいないホームが白々と広がり、 あたりを夜の闇が包
                                    んでいた。 {numberSquareBox(44)}と思って看板をさがすと「きょうと」とあった。
                                    {rubyBox('吊', 'つ')}
                                    り下げら
                                    れたホームの時計は、まさに12時にふたつの針が重なろうとしていた。
                                    「ああ、 きょうとか」 と今までは地名でしかなかったものが、 とつぜん風景と
                                    なった。 その印象が強烈だったのだろう。 何か体が浮くようになった実感を今
                                    でも忘れられない。
                                    そして、むかしの人の夜の駅はどうだったのだろうと思う。なにしろ駅という
                                    {rubyBox('馬偏', 'うまへん')}
                                    の字をいまだに使っているように、 むかしは交通手段としての馬を置いた所
                                    が駅だったのだから、 プラットホームもない。 風景はまったく別の{numberSquareBox(45)}だ。
                                    {attachBox('(中西進『夜の駅』による)')}
                                    {noteBox([<> (注) 森閑:物音一つせず、静まりかえっているさま</>])}
                                </div>
                            </>,
                        options: ['転勤にともなって', '通勤にともなって', '転勤にあたって', '通勤にあたって'],
                        correct:1
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['なにか', 'なにも', 'いつも', 'いつか'],
                        correct:4
                    },
                    {
                        number: 43,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['と', 'で', 'だが', 'さて'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['どうだろう', 'そうだろう', 'どこだろう', 'そこだろう'],
                        correct:3
                    },
                    {
                        number: 45,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['こと', 'はず', '場合', '結果'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の(1)から(4)の文章を読んで、後の問いに対する答えとして最もよいも
                        のを、1 • 2 • 3 • 4 から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: '本文の内容と違うのはどれか。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    拝啓 新緑の候、貴社益々ご隆盛のこととお慶び申し上げます。
                                    平素大変お世話になっております。
                                    さて、先般いただきました見積書通り、貴社のカタログNo.123の商品を別紙によ
                                    り注文致しますのでよろしくお願い申し上げます。
                                    ご不明のことがございましたら、 担当営業1課山田正夫にお問い合わせください。
                                    尚、 最短納期をお知らせくださるようにお願い申し上げます。
                                    {attachBox('敬具')}
                                </div>
                            </>,
                        options: ['季節は5月ごろである。',
                            '価格は決定している。',
                            '不明な点は山田さんに尋ねる。',
                            '納品日を早めてもらいたい。'],
                        correct:4
                    },
                    {
                        number: 47,
                        line: 4,
                        q: '書かれていないことは何か。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    {titleBox('防災訓練のお知らせ')}
                                    8月25日の日曜日、午前10時から正午まで市内全地域の小学校において防災訓
                                    練を実施いたしますので、皆様是非ご参加ください。 午前10時に市内全域に「緊
                                    急地震速報」を放送いたしますので、 まず身の回りの安全を確保してください。
                                    10分後に 「避難勧告」 が放送されましたら、 市民の皆様は近くの訓練会場にお集
                                    まり下さい。 その後、バケツリレーや消化器による訓練を実施します。 小雨決行で
                                    すが、荒天の場合は中止します。 その際には 「中止」 の放送があります。
                                </div>
                            </>,
                        options: ['訓練の実施日時', '訓練の実施場所', '訓練の主催者', '訓練の内容'],
                        correct:3
                    },
                    {
                        number: 48,
                        line: 4,
                        q: 'もっとも重要な情報はどれか。',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    ニンニクはそのまま食べても体にいいが、 更にニンニクだけが持つ大腸ガン治療
                                    に効果があるS-アリルシステインを格段に増加させる方法がある。 野菜を切ってし
                                    ばらくおいておくとその栄養価が増すことは知られている。 すりおろしたり、煮た
                                    り、焼酎に漬けたり色々試した結果、 みじん切りにして一晩おいたニンニクはS-ア
                                    リルシステインが1.8倍、 電子レンジでチンしたら1.3倍、
                                    {rubyBox('塩麹', 'しおこうじ')}
                                    に漬けたら1.6倍に増
                                    加したそうだ。3つ全てをこの順に行った塩麹ニンニクは2.7倍だったそうだ。冷蔵
                                    庫で約3ヶ月ぐらい保存できるので是非試していただきたい。
                                </div>
                            </>,
                        options: ['ニンニクのS-アリルシステインが体にいいこと',
                            '野菜は切っておくと栄養価が増すこと',
                            'ニンニクのS-アリルシステインが増すいろいろな方法',
                            'ニンニクのS-アリルシステインを最も増やす方法'],
                        correct:4
                    },
                    {
                        number: 49,
                        line: 4,
                        q: '青いドレスの説明はどれか。',
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    人工的に合成した 「クモの糸」 の生産がいよいよ始まる。 このクモの糸は同じ太
                                    さなら鋼鉄より強く柔軟性でもナイロンを上回るそうだ。 その素晴らしさを知らし
                                    めるために青いドレスが
                                    {rubyBox('披露', 'ひろう')}
                                    された。 それは光沢もあり驚くほど美しい高級感溢れ
                                    るドレスだった。 クモの遺伝子を組み込んだ微生物を使って大量生産が可能になっ
                                    たお陰でドレスが制作できた。 会社はこれを自動車の車体や人工心臓など幅広い分
                                    野で使用する新ビジネスを立ち上げる予定である。
                                </div>
                            </>,
                        options: ['艶がある人工のクモの糸で作られている。',
                            'このドレスの布で車体を造ることができる。',
                            '鋼鉄より強いクモの糸なので破れることがない。',
                            'クモが紡ぎ出した自然な糸で作られている。'],
                        correct:1
                    },
                ],
            },
            {
                title:
                    <>
                        問題 9 次の(1)から(3)の文章を読んで、後の問いに対する答えとして最もよいも
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 50,
                        line: 4,
                        q:
                            <>
                                なぜ{uBox('日本全体ではお寒い限りである')}のか。
                            </>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    何らかの政治的 「性別クォーター制」を取り入れている国は世界中で90か国以上
                                    にも及ぶ。 「クォーター制」というのは政治・経済・学術などの各分野に於いて人種
                                    ・性別・宗教などを考慮して一定の比率の人数を割り当てる制度である。 導入に対
                                    して 「平等原理の侵害」 とか 「逆差別」 だという声もあったが、 実施した国では思
                                    わぬ効果があった。 特に経済界では効果があれば業績として数値で表されるので、
                                    導入の是非が明らかになった。 それにもかかわらず日本で導入に消極的な企業があ
                                    るのは理解できない。
                                    ノルウェーでは4名以上の構成員からなる公的機関はそれぞれ異なる性から40%
                                    以上を選ばなければならない。 また産業界の大反対を押し切って現在は民間企業の
                                    取締役の40%以上を両性に開放している。 それで多くの会社は業績が悪くなるどこ
                                    ろか、却ってよくなったそうだ。 消費者の半分が女性なのだから、 女性の視点の必
                                    要性は議論の余地がない。
                                    日本でも女性管理職の割合を30%以上にするなどと明確な目標値を挙げて取り組
                                    んでいる会社も出現している。 そのような会社は女性が働きやすいので優秀な女性
                                    が集まる傾向にあり、 業績も上がっている。 しかし{uBox('日本全体ではお寒い限りである')}。
                                    まずは国や地方自治体からクォーター制を取り入れて遅れを取り戻したい。 日
                                    本の変化を期待している。
                                </div>
                            </>,
                        options: ['女性管理職を増やした会社の業績が振るわないから',
                            '国や地方自治体で活躍する女性がいないから',
                            '目標値を決めて女性管理職を増やしている会社が少数だから',
                            'まだまだクォーター制が日本全体に知れ渡っていないから'],
                        correct:3
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '著者が現在求めているのはどれか。',
                        qReading: null,
                        options: ['経済界の性別クォーター制',
                            '公的機関の性別クォーター制',
                            '全分野の人種別クォーター制',
                            '全分野の性別クォーター制'],
                        correct:2
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '本文の内容と合っているのはどれか。',
                        qReading: null,
                        options: ['全分野でクォーター制度を採用しているのは90か国以上だ',
                            'ノルウェーの国会では女性議員が70%を占めてもかまわない。',
                            '日本では30%の会社が女性管理職を採用している。',
                            '著者はクォーター制に希望を見いだしている。'],
                        correct:4
                    },
                    {
                        number: 53,
                        line: 4,
                        q: '日本の建築の歴史の記述で正しいのはどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    木が燃えないというと驚くだろう。 「燃えんウッド」 という木材は1000度で1時間
                                    燃やしても外側は黒い炭になるが燃え止まる。 熱を吸収しやすいモルタルを内部に
                                    {rubyBox('挟', 'はさ')}
                                    んで作るからである。 またCLTパネル{subBox('(注)')}もある。 こちらは木を組み合わせただけの
                                    燃えない木材である。 木を交互に何層にも組み合わせて作られているだけなのに内
                                    部は燃えない。
                                    日本には世界で一番古い木造の建築物で世界遺産になっている
                                    {rubyBox('法隆寺', 'ほうりゅうじ')}
                                    を始め重要
                                    文化財の木造建築物がたくさん残っている。 昔から重要な建物も一般の住宅も木で
                                    造られていた。 しかし燃えると危険だと言って、 戦後、 木造の高層建築物の建築は
                                    一時禁止された。 建築基準法が改正され、 耐火基準を守れば木造高層建築物も建て
                                    られるようになったのは2000年になってからだ。 日が浅いから日本ではまだなかな
                                    か木造高層建築物は建設されていない。
                                    最近外国では木造高層建築物が次々と建てられ人目を引いている。 その利点は工
                                    期の短縮や低価格だ。 日本でも建築されたがそのビルはコンクリート造りと違い狭
                                    い土地をめいっぱい利用できて注目を浴びている。 また柱の出っ張りがないので室
                                    内が広く使えると評判がいい。
                                    木は生きている。 生きて呼吸している。 そして空間の温度や湿度の変化を抑える
                                    ことができる優しい材料だ。 コンクリートを使うより環境にも良い。 見た目や
                                    {rubyBox('肌触', 'はだざわ')}
                                    りのよさも利点として挙げられる。 今後高層建築物が増えていくのは間違いないだ
                                    ろう。
                                    {noteBox([<>
                                        (注) CTLパネル: Cross Laminated Timberの略。 直交 (90度で交差) 積層木材。 木
                                        を90度に交差させて層にして作った木材
                                    </>])}
                                </div>
                            </>,
                        options: ['現在は制限なく木造高層建築ができる。',
                            '戦前は木造高層建築物を造ってもよかった。',
                            '昔は木造高層建築物を造る技術がなかった。',
                            '建築基準法は2000年に作成された。'],
                        correct:2
                    },
                    {
                        number: 54,
                        line: 4,
                        q: '二種類の燃えない木材の説明はどれか。',
                        qReading: null,
                        options: ['どちらも1000度で1時間燃やしても燃えない木材である。',
                            'どちらも材料を合わせて造られている合成の木材である。',
                            'どちらも材料を90度に組み合わせた木材である。',
                            'どちらも木材だけで作られている木材である。'],
                        correct:2
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '木造高層建築物に対する著者の考えでないのはどれか。',
                        qReading: null,
                        options: ['自然のままの木材を使っているので優しい。',
                            '安く建てられることも長所だ。',
                            '見た目も美しいし触った感じも良い。',
                            '評判が良いので今後増えていく。'],
                        correct:1
                    },
                    {
                        number: 56,
                        line: 4,
                        q:
                            <>
                                ①{uBox('金に糸目をつけない')}建物とはどんなものか。
                            </>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    オリンピックでは広い競技場を必要とする。 しかしその後、その維持費に四苦八
                                    苦する国が多い。 国の威信をかけて開くのだから、①{uBox('金に糸目をつけない')}のが当然だ
                                    という考えで建築され、その後収入と支出のアンバランスから莫大な維持費の負担
                                    に泣くことになる。 大きな競技場は広いので当然
                                    {rubyBox('空調', 'くつちょう')}{subBox('(注)')}
                                    一つとってもそれなりに経費
                                    が
                                    {rubyBox('嵩', ' かさ')}
                                    む。2002年のサッカーのワールドカップ開催時に日本はいくつもの競技場を造
                                    りその大半が大赤字で困窮しているという現実がある。 そんな問題を見事に解決し
                                    て造られたのがロンドンで使用されたオリンピック競技場だ。 設計者に最初から減
                                    築を念頭に入れた設計を依頼した珍しい例だ。 オリンピック競技中は80000席あっ
                                    たが、シートが現在は25000席と3分の1以下にされて経費の節減に大いに役立って
                                    いるそうだ。 日本では新国立競技場の維持費が年間40億円もかかることが議論の的
                                    にもなっている。 イギリスを見習ったらどうだろうか。
                                    個人の家の場合の減築は主に子供が結婚して家を出て夫婦二人になった場合に行
                                    われる。 減築する家は長年使われた家が多く、住人が建て替えや移住を考える時期
                                    に来ている。 減築を選択したほとんどの人はそれと引き替えに、 効率的な冷暖房の
                                    ほか、耐震性や居住性が向上した快適な家を手に入れることができる。
                                    公共の建物も個人の建物も②{uBox('身の丈にあった広さ')}があるはずだ。 個人の家は別とし
                                    て特に公共の建物は税金で賄っているのだから、 建築に当たり建築後のことも考慮
                                    して建てるべきではないだろうか。
                                    {noteBox([<>
                                        (注) {rubyBox('空調', 'くうちょう')} : 空気調節の略。 エアコンディショニング。
                                    </>])}


                                </div>
                            </>,
                        options: ['予算を決めないで建てられた建物',
                            '国の威信を示す立派な建物',
                            'お金を十分に使った建物',
                            'お金のことを考えて造った豪華な建物'],
                        correct:3
                    },
                    {
                        number: 57,
                        line: 4,
                        q:
                            <>
                                ②{uBox('身の丈にあった広さ')}とはここではどのような広さか。
                            </>
                        ,
                        qReading: null,
                        options: ['背の高さに合っている大きさ',
                            '誰もが使いやすい大きさ',
                            '後で困らない広すぎない大きさ',
                            '自分達に相応しい大きさ'],
                        correct:4
                    },
                    {
                        number: 58,
                        line: 4,
                        q: '著者の考えはどれか。',
                        qReading: null,
                        options: ['国立競技場の維持費が嵩むのはやむを得ない。',
                            '古い家は減築を考えたほうがよい。',
                            '建物は最初から減築を考えて建てるべきだ。',
                            '大きな建物は維持費も高いきらいがある。'],
                        correct:4
                    },
                ]
            },
            {
                title:
                    <>
                        問題10 次の文章を読んで、 後の問いに対する答えとして最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 59,
                        line: 4,
                        q:
                            <>
                                {uBox('美しさで他の追随を許さない')}とはどんな意味か。
                            </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    東京駅はその名の通り東京の玄関と言える。 日本で最初に鉄道が開通したのは
                                    1872年新橋 横浜間のことだった。 その後、 上野と新橋を結ぶ鉄道が敷かれ、 その
                                    中央に駅が必要になり、 当時の建築技術の粋を集めて中央駅としての赤レンガの東
                                    京駅が造られた。 その日本の近代化の象徴である東京駅が2014年12月20日、 開業
                                    100週年を迎えた。100年前にはホームが4面で線路は8本、 列車の本数は平均130
                                    本、 乗車人数は1日1600人ほどだった。 その後拡張され1995年にホームが11面、 線
                                    路は28本になり、 現在に至っている。 1日の乗車人数は2013年の統計では約41万
                                    人、 首都圏では新宿75万人、 池袋55万人に次ぐ3位に甘んじている。 しかし、 東
                                    京駅といえば誰もが丸の内駅舎を思い浮かべるようにそれは赤レンガ造りの建物の
                                    {uBox('美しさで他の追随を許さないのである')}。 実は駅舎は第二次世界大戦で爆撃を受けそ
                                    のほとんどが消失してしまった。 戦後の修復時に3階から2階建てに変更されてい
                                    た。 駅舎は2階建ての美しい姿そのままであったが、 東京駅の内部はホームが拡張
                                    された。それに伴い乗客数も増え、駅舎自体も次第に手狭になってきた。 そこで東
                                    京駅新建設計画が持ち上がり、 その際機能性の追求から一時は高層ビルへ建て替え
                                    られようとしていた。 しかし建設計画が発表されると東京駅を復原しようという運
                                    動が起きた。その結果幸いなことに保存・復原されることになったのである。 当
                                    時、2003年に国の重要文化財に指定されていた2階建てのまま保存するか、 創建時
                                    の3階建てに戻すかで活発な議論が戦わされた。 結局外観は3階建ての創建時の姿
                                    が再現されることとなった。 同時に地下部分が新設され、 機能が拡大され免震工事
                                    も施工され、 約5年の歳月を経て、 丸の内駅舎は2012年10月に完成した。 現在、 木
                                    来の駅機能の他にホテルや飲食店などが設けられている。 重厚な長い直線部分の廊
                                    下に面して客室が並んでいるが、東側のドーム部分の客室は特別な造りになってい
                                    て 客室から下に通行している人の姿を眺めることができるし、 部屋も機能的で天
                                    井が高く雰囲気がよい。 珍しいことに浴室に日本風の洗い場が設けられている。ド
                                    ーム部分の客室は僅か28室しかなく予約がなかなか取れないので垂涎の的になって
                                    いる。 西側のドームからも下を見ることができる。そこには喫茶室やバーなどが設
                                    けられている。一度は泊まってみたいホテルを含むこの駅舎はその外見でも多くの
                                    観光客の目を引きつけて止まない。 更にその効果を高めることになるのが100周年を
                                    記念して行われたプロジェクションマッピングだ。 2014年は大正時代をイメージし
                                    当時流行した紫色や緑がかった青色が駅舎を彩り素晴らしい光景であった。 今後も
                                    丸の内駅舎は多くの人に感動を与え続けていくことは間違いないと思う。
                                </div>
                            </>,
                        options: ['新宿駅と池袋駅には負けない美しさがあるのである。',
                            '駅を見た誰もが認めるほど美しいのである。',
                            '何と言っても美しいので言葉が出ないのである。',
                            '他の駅と比べものにならないほど美しいのである。'],
                        correct:4
                    },
                    {
                        number: 60,
                        line: 4,
                        q: '駅舎の復原ではどんな議論が起きたか。',
                        qReading: null,
                        options: ['全て創建時通りに復原するかどうか',
                            'いつの時代の外観にするか',
                            'ホテルや飲食店を設けるかどうか',
                            'どんな機能を持たせるか'],
                        correct:2
                    },
                    {
                        number: 61,
                        line: 4,
                        q: 'ドームホテルの説明はどれか。',
                        qReading: null,
                        options: ['客室からの景色がよい。',
                            '和風の浴槽が備えられている。',
                            '室数が少ないので予約が取りにくい。',
                            '天井も高く部屋が広々としている。'],
                        correct:3
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '丸の内駅舎に対する作者の考えはどれか。',
                        qReading: null,
                        options: ['駅舎はプロジェクションマッピングのおかげで美しい。',
                            'ホテルは予約が取れないので人気が高い。',
                            '外観重視で建てられたので機能性には問題がある。',
                            '新駅舎ならではの客室も造られ、 大人気である。'],
                        correct:4
                    },
                ]
            },
            {
                title:
                    <>
                        問題11 次のAとBの文章を読んで、 後の問いに対する答えとして最もよいものを、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'AとBの両方が取り上げていることは何か。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        2014年日本政府は今まで社員が仕事で発明した特許は社員のものという特許
                                        法を改定して、 無条件で会社のものとする方針を発表した。 特許を巡っては「青
                                        色発色ダイオード」の発明対価として200億円の支払いを命じた判決が有名だ。
                                        その後も同様の裁判が起き、 発明者への支払いに企業は四苦八苦する状態が続
                                        いていた。 今回の決定は経済界の要望を全面的に受け入れたものである。 これ
                                        で日本企業は
                                        {rubyBox('目先', 'めさき')}
                                        楽になるかもしれないが、 長期的には日本経済は再度苦境に
                                        陥ることになるだろう。 研究者達の意欲を削ぐことは間違いないし、優秀な人
                                        ほど海外の企業に移ってしまうだろう。 国は真に日本の将来を考えるのなら、
                                        「十分な報奨金を社員に支払う」 条件を付けるべきである。この無条件の法改正
                                        に対して個々の企業は生き残りたいならば、 法は法として成果に対して十分な
                                        報酬を用意すべきである。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        特許はたとえ企業の研究所などで発明した研究であろうともその帰属は社
                                        員であるという特許法がとうとう改正され、 特許が企業の所有となる。 これ
                                        で社員との交渉に汲々としていた企業も一息つくだろう。 特許の帰属が会社
                                        になると研究者の意欲が減退したり退職が加速される恐れがあるという意見
                                        もあるが、 結果に対してそれ相応の報酬を与えることで食い止められるはず
                                        だ。 そもそも研究者の給料は一般社員より高額であるし、 研究者は会社で育
                                        てられる面もある。 また研究は一人ではなくグループで行うことが多い。 社
                                        員はその身分や生活を全面的に保障された上で研究開発をしていて何のリス
                                        クも冒さないが、会社は研究開発が失敗に帰した場合の全てのリスクを引き
                                        受けている。 であるから、 今回の改正はこのことが全面的に認められたもの
                                        と解釈している。 特許の帰属が会社になるのに何の問題も生じようがない。
                                    </div>
                                </div>
                            </>,
                        options: ['開発時に会社と社員が負うリスクの違い',
                            '法施行後の研究者の研究意欲減退',
                            '将来生ずる日本経済への悪影響',
                            '現在の研究者達の待遇状況'],
                        correct:2
                    },
                    {
                        number: 64,
                        line: 4,
                        q: 'AとBは今回の特許法改正についてどう考えているか。',
                        qReading: null,
                        options: [<>Aは改正後の特許法に欠陥がある、 Bは以前の法の欠陥が改正されたからよ
                            かったと考えている。
                        </>
                            ,
                            <>AもBも経済界の要望を受け入れた結果改正されたので、 経済の発展のため
                                になると考えている。
                            </>,
                            '改正後の特許法に欠陥があることは承知の上で、 Aは反対、Bは賛成している。',
                            '改正前の特許法に欠陥があることは承知の上で、Aは賛成、Bは反対している。'],
                        correct:1
                    },
                ]
            },
            {
                title:
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 65,
                        line: 4,
                        q:
                            <>
                                なぜ各国は①{uBox('固唾を呑んで見ている')}のか。
                            </>,
                        qReading:
                            <div className={'question_q_reading'}>
                                日本は2014年には4人に1人が65歳以上の高齢者となった。 こんな超高齢社会は
                                どの国も未だに経験したことがない。 しかし多くの国でいずれ起きる恐れがある。
                                だから高齢化の最先端を進む日本は他国にとっては格好のモデルである。 日本で成
                                功したことは取り入れ、 失敗策は実行しなければよいのだ。 各国が今日本を①{uBox('固唾を呑んで見ている')}。
                                高齢化社会では色々な問題が生じる。 まず経済的な問題である。 高齢化社会は労
                                働人口が減少するのでGDPも減り、 結果国力の低下を招く。 更に税収が減るので高
                                齢者を支える社会保障費の増加に対応できなくなる。 この点で日本では既に
                                {rubyBox('歪', ' ひず')}
                                みが
                                生じている。 まず高齢者の生活を支えている年金問題である。 高齢者の年金を20歳
                                以上60歳までの人が支えている計算では現在一人の高齢者を支える人はたったの
                                2.3人しかいない。 このまま若年人口が減り続けると近い将来支えきれなくなる
                                のは自明の理である。 年金改革が急がれるわけである。 次に医療費の問題である。
                                高齢者は収入が少ないから支払い保険料も少ない。 しかし健康を損ないがちなので
                                支払う医療費は膨大である。 2011年度の総医療費38.5兆円中21.5兆円が65歳以上の
                                高齢者の医療費である。 この解決策として2014年に消費税が5%から8%に引き
                                上げられたが、 根本的な解決には至っていない。 費用の問題だけではない。 労働人
                                口減のため高齢者の介護をする人が慢性的に不足している。 労働者不足は介護ばか
                                りではなく日本全体が陥っている問題である。 そのため政府は女性や老人が働きや
                                すい環境を整えようとしている。 また外国人移民導入も現実味を帯びてきた。 実際
                                には多くの問題を孕んでいるので無条件に移民を受け入れることにはならないだろ
                                うが、現実には多くの外国人が 「研修生」という名の下に安い賃金で働かされてい
                                る。 彼ら抜きには農業、漁業、 工業などどの部門でも日本の産業は立ちゆかなくな
                                っているという現実から目を背けてはならない。 高齢化社会との関連では医療や介
                                一護の世界でも多くのアジアの人々の手を借りているのである。
                                はら
                                日本人の平均寿命は84歳で世界一であるが、 健康寿命は75歳とかなり低い。 健康
                                寿命というのは心身共に健康で介護を必要としない生存期間のことである。②{uBox('この差が問題だ')}。
                                差を縮めることができれば、医療費や介護費用が削減できるし、労働者
                                不足もさほど怖くない。 そこでもっと予防医学に重点を置くべきだと考える。 参考
                                になりそうなのがイギリスの改革だ。 治療だけでなく予防に貢献した医師に診療報
                                酬を払うシステムにしたところ、 大幅に医療費が削減されたそうだ。 ③{uBox('待ったがきかない')}日本の状況にこの導入が効果的ではないだろうか。
                            </div>,
                        options: ['日本の高齢化社会で起きたことを参考にしたいから',
                            '日本に起きたことは自分の国でも必ず起きるから',
                            '自分の国も超高齢化社会だから日本のやり方を学びたいから',
                            '日本がしたことを全て取り入れたいと考えているから'],
                        correct:1
                    },
                    {
                        number: 66,
                        line: 4,
                        q:
                            <>
                                ②{uBox('この差が問題だ')}と言っているがそれはなぜか。
                            </>,
                        qReading: null,
                        options: ['健康な時と病気の時の生活に差がありすぎるから',
                            '介護者と介護される人の数に差がありすぎるから',
                            '高齢者が平均9年も介護を必要としているから',
                            '高齢者が9年分の介護費用を負担できないから'],
                        correct:3
                    },
                    {
                        number: 67,
                        line: 4,
                        q:
                            <>
                                ③ なぜ{uBox('待ったがきかない')}のか。
                            </>,
                        qReading: null,
                        options: ['高齢化率が直ぐに20%を超えそうであるから',
                            '医療費削減は直ぐにしなければならないから',
                            '高齢者が死んでいくのを待っていられないから',
                            '予防医療の実行は直ぐでなければ効果がないから'],
                        correct:2
                    },
                    {
                        number: 68,
                        line: 4,
                        q: '本文の内容と合っているのはどれか。',
                        qReading: null,
                        options: ['イギリスの改革を取り入れれば高齢者問題は解決できる。',
                            '高齢化社会の問題点は移民を入れなければ解決できない。',
                            '今後日本の高齢化率が下がることはない。',
                            '高齢化社会と労働人口不足は密接な関係がある。'],
                        correct:4
                    },
                ]
            },
            {
                title:
                    <>
                        問題13 右のページは手紙の書き方である。 これを読んで、 下の問いに対する答
                        えとして最もよいものを、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ,
                question: [
                    {
                        number: 69,
                        line: 4,
                        q:
                            <>
                                「①その後いかがお過ごしでしょうか。」 と 「②お
                                {rubyBox('風邪', ' かぜ')}
                                をひきませんように。」
                                という文は本文の1~ 7のどこで使ったらよいか。
                            </>,
                        qReading:
                            <div className={'question_q_reading'}>
                                {titleBox('個人宛の横書き手紙の書き方')}
                                1 宛名 (相手の名前。 ~様、 ~先生などと書く。)
                                2
                                {rubyBox('頭語', 'とうご')}
                                (手紙の最初に書く短い言葉。 例として拝啓、 謹啓などがある。)
                                3 季節の挨拶と安否を聞く挨拶 (季節を表す言葉の後に相手の健康などを聞く
                                文。 季節を表す言葉は種々ある。 例、 早春の候、皆様お変わりございません
                                でしょうか。 秋風の吹く季節になりましたが、 お元気ですか。)
                                4 本文
                                5 結びの挨拶など(手紙を終えるための文。 内容は相手の健康や活躍を祈る。
                                今後の指導や付き合いをお願いする。 本文を纏めたり、 返事をお願いしたり
                                する。 字や文が下手なことを詫びる。)
                                6
                                {rubyBox('結語', 'けつご')}
                                (手紙の最後に書く短い言葉。 例として敬具などがある。)
                                7 日付(年月日)
                                8 署名
                                縦書きの場合は最後に宛名を書く。
                                3の挨拶と安否などを省略したい場合は頭語を 「前略」 とし、 結語は 「早々」
                                とする。
                                相手や相手の関係者の名前を行の後ろに、 自分や家族の名前を行の最初に書か
                                ないようにする。
                                丁寧な手紙でも 「年賀状や暑中見舞いなどの季節の挨拶、 お見舞いや
                                {rubyBox('弔事', ' ちょうじ')}{subBox('(注)')}
                                の場
                                合は頭語や結語は要らない。 弔事の手紙は 「、」 や 「。」 を使わない。
                                手紙が1枚で書き終わった場合でも白紙を入れて2枚にする。 弔事の場合は必
                                ず1枚で終わらせる。 不幸が重なる重ねることを嫌うからである。
                                そのほか各国で共通の手紙のマナーは省略する。
                                {noteBox([<>
                                    (注) {rubyBox('弔事', ' ちょうじ')} : 死亡や葬式などの不幸なこと
                                </>])}

                            </div>,
                        options: ['①は2、 ②は5',
                            '①は3、 ②は5',
                            '①は3、 ②は6',
                            '①は2、 ②は4'],
                        correct:2
                    },
                    {
                        number: 70,
                        line: 4,
                        q: '手紙を書くときの決まりはどれか。',
                        qReading: null,
                        options: ['「拝啓」 の後は直ぐに本文を書く。',
                            '縦書きの手紙の場合宛名を最初に書く。',
                            '4月の挨拶に 「新春の候」 を使う。',
                            '相手の名前はどの行でも後ろに書かない。'],
                        correct:4
                    },
                ]
            }
        ],
    },
    {
        name: '2021한끝_2',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、 1 • 2 • 3 • 4から 一つ選びなさい。
                        事務レベルでの折衝を重ねる。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q: (
                            <>
                                事務レベルでの{uBox('折衝')}を重ねる。
                            </>
                        ),
                        qReading: null,
                        options: ['せっこう', 'せっしょう', 'せっこ', 'せっしょ'],
                        correct:2
                    },
                    {
                        number: 2,
                        line: null,
                        q: (
                            <>
                                新聞は汚職の実態を{uBox('暴いた')}。
                            </>
                        ),
                        qReading: null,
                        options: ['のぞいた', 'かわいた', 'きずいた', 'あばいた'],
                        correct:4
                    },
                    {
                        number: 3,
                        line: null,
                        q: (
                            <>
                                何とか{uBox('工面')}して旅費を確保する。
                            </>
                        ),
                        qReading: null,
                        options: ['くめん', 'くうめん', 'こめん', 'こうめん'],
                        correct:1
                    },
                    {
                        number: 4,
                        line: null,
                        q: (
                            <>
                                彼はいつも{uBox('柔和')}な笑顔を絶やさない。
                            </>
                        ),
                        qReading: null,
                        options: ['じゅうわ', 'じゅわ', 'にゅうわ', 'にゅわ'],
                        correct:3
                    },
                    {
                        number: 5,
                        line: null,
                        q: (
                            <>
                                スポーツで{uBox('鍛えた')}体には自信がある。
                            </>
                        ),
                        qReading: null,
                        options: ['そなえた', 'あたえた', 'きたえた', 'うったえた'],
                        correct:3
                    },
                    {
                        number: 6,
                        line: null,
                        q: (
                            <>
                                資料を一つ一つ{uBox('丹念')}に調査する。
                            </>
                        ),
                        qReading: null,
                        options: ['たんねん', 'だんねん', 'しんねん', 'じんねん'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2{blankRound}に入れるのに最もよいものを、 1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q: (
                            <>
                                好きな食べ物はいくつあるが、 {blankRound}カレーライスが好きだ。
                            </>
                        ),
                        qReading: null,
                        options: ['とりわけ', 'とうてい', 'どうやら', 'とりもなおさず'],
                        correct:1
                    },
                    {
                        number: 8,
                        line: null,
                        q: (
                            <>
                                悲しみで
                                {rubyBox('胸', 'むね')}
                                が{blankRound}そうだった。
                            </>
                        ),
                        qReading: null,
                        options: ['切りさけ', 'はりさけ', '切りぬけ', 'はち切れ'],
                        correct:2
                    },
                    {
                        number: 9,
                        line: null,
                        q: (
                            <>
                                田中さんは{blankRound}と建前を使い分けるのがうまい。
                            </>
                        ),
                        qReading: null,
                        options: ['弱気', '本気', '弱音', '本音'],
                        correct:4
                    },
                    {
                        number: 10,
                        line: null,
                        q: (
                            <>
                                雲の{blankRound}が、 水蒸気の変化したものだということは知っているでしょう。
                            </>
                        ),
                        qReading: null,
                        options: ['実際', '現実', '正体', '事実'],
                        correct:3
                    },
                    {
                        number: 11,
                        line: null,
                        q: (
                            <>
                                初めてのイタリア旅行への期待感で心が{blankRound}いる。
                            </>
                        ),
                        qReading: null,
                        options: ['跳ねて', '弾んで', '転がって', '畳んで'],
                        correct:2
                    },
                    {
                        number: 12,
                        line: null,
                        q: (
                            <>
                                この連載小説は次号で{blankRound}する。
                            </>
                        ),
                        qReading: null,
                        options: ['終息', '成就', '静止', '完結'],
                        correct:4
                    },
                    {
                        number: 13,
                        line: null,
                        q: (
                            <>
                                地元は難民受け入れを{blankRound}断ってきた。
                            </>
                        ),
                        qReading: null,
                        options: ['やんわり', 'ひんやり', 'うんざり', 'しんなり'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q: (
                            <>
                                君に{uBox('ふさわしい')}仕事だ。
                            </>
                        ),
                        qReading: null,
                        options: ['おしいような', 'ふさつける', '少し無理な', 'よく似合った'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q: (
                            <>
                                {uBox('やんちゃな')}弟は、 いたずらばかりして母に注意されていた。
                            </>
                        ),
                        qReading: null,
                        options: ['ねんごろな', 'わがままな', 'せっかちな', 'のんきな'],
                        correct:2
                    },
                    {
                        number: 16,
                        line: null,
                        q: (
                            <>
                                君は時間どおりに現れた{uBox('ためし')}がないじゃないか。
                            </>
                        ),
                        qReading: null,
                        options: ['例', '案', '件', '際'],
                        correct:1
                    },
                    {
                        number: 17,
                        line: null,
                        q: (
                            <>
                                {rubyBox('山田', ' やまだ')}
                                さんは仕事に対していつも{uBox('シビアだ')}。
                            </>
                        ),
                        qReading: null,
                        options: ['柔軟だ', '弱気だ', '厳しい', '注意深い'],
                        correct:3
                    },
                    {
                        number: 18,
                        line: null,
                        q: (
                            <>
                                あの兄弟はいつもお互いに{uBox('張り合って')}いる。
                            </>
                        ),
                        qReading: null,
                        options: ['尊重して', '応援して', '無視して', '競争して'],
                        correct:4
                    },
                    {
                        number: 19,
                        line: null,
                        q: (
                            <>
                                編物をしていたかと思うと、{uBox('つと')}手を止めて考え事をする。
                            </>
                        ),
                        qReading: null,
                        options: ['そっと', '不意に', 'ずっと', 'ゆっくりと'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、 1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '拍子',
                        qReading: null,
                        options: [<>転んだ{uBox('拍子')}にしたたかひざを打った。
                        </>,
                            <>努力した{uBox('拍子')}にすべてが水泡に帰した。
                            </>,
                            <>パソコンは一日中起動した{uBox('拍子')}にしてある。
                            </>,
                            <>買い物の{uBox('拍子')}におばさんの家に寄ってきた。
                            </>],
                        correct:1
                    },
                    {
                        number: 21,
                        line: 4,
                        q: 'はがす',
                        qReading: null,
                        options: [<>この席は友人のために{uBox('はがして')}あるんです。
                        </>,
                            <>瓶のふたを{uBox('はがして')}くれませんか。
                            </>,
                            <>シールを{uBox('はがす')}と番号があります。
                            </>,
                            <>ビールの栓を{uBox('はがしましょう')}か。
                            </>],
                        correct:3
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'ひとまず',
                        qReading: null,
                        options: [<>ご飯を食べて{uBox('ひとまず')}たってから、 薬を飲んでください。
                        </>,
                            <>この機械は{uBox('ひとまず')}動かすとすぐには止められない。
                            </>,
                            <>政府が発表した経済対策は、{uBox('ひとまず')}しか効果がなかった。
                            </>,
                            <>発作が{uBox('ひとまず')}治まったので病院から帰った。
                            </>],
                        correct:4
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '煩雜',
                        qReading: null,
                        options: [<>元カレが結婚するので{uBox('煩雑')}な心境だ。
                        </>,
                            <>年金の手続きはほんとうに{uBox('煩雑')}だ。
                            </>,
                            <>彼は{uBox('煩雑')}を払って勉学に励んだ。
                            </>,
                            <>高温多湿の環境は細菌の{uBox('煩雑')}に適している。
                            </>],
                        correct:2
                    },
                    {
                        number: 24,
                        line: 4,
                        q: 'しがみつく',
                        qReading: null,
                        options: [<>落ちないように必死で窓枠に{uBox('しがみついた')}。
                        </>,
                            <>彼女は先頭の走者にぴったり{uBox('しがみついて')}走った。
                            </>,
                            <>彼女はダイヤを盗もうとしたところを{uBox('しがみついた')}。
                            </>,
                            <>そのカメラマンはずっと現場に{uBox('しがみついて')}取材をしていた。
                            </>],
                        correct:1
                    },
                    {
                        number: 25,
                        line: 4,
                        q: 'じりじり',
                        qReading: null,
                        options: [<>日の光を浴びて露が{uBox('じりじり')}光っていた。
                        </>,
                            <>夜空に星が{uBox('じりじり')}輝いている。
                            </>,
                            <>暑い日の光が{uBox('じりじり')}とあたる。
                            </>,
                            <>宝石を見て彼女の目が{uBox('じりじり')}と輝いた。
                            </>],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}
                        に入れるのに最もよいものを、1 • 2 • 3 • 4から一
                        つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q:
                            <>
                                こんな日は、気持ち{blankRound}春を先取りということで、
                                {rubyBox('桜餅', 'さくらもち')}
                                を作ってみました。
                            </>,
                        qReading: null,
                        options: ['のみも',
                            'だけでも',
                            'くらいも',
                            'ですらも'],
                        correct:2
                    },
                    {
                        number: 27,
                        line: 2,
                        q:
                            <>
                                見積書を{blankRound}、お決めくださればけっこうです。
                            </>,
                        qReading: null,
                        options: ['ご覧の結果',
                            'ご覧くださった上に',
                            'ご覧になった結果',
                            'ご覧になった上で'],
                        correct:4
                    },
                    {
                        number: 28,
                        line: null,
                        q:
                            <>
                                個人消費や設備投資の回復傾向{blankRound}地方でも人手不足感が強まっている。
                            </>,
                        qReading: null,
                        options: ['を受けて',
                            'を込めて',
                            'をかねて',
                            'をひかえて'],
                        correct:1
                    },
                    {
                        number: 29,
                        line: 2,
                        q:
                            <><br/>
                                A 「公園で高校生たちがライブコンサートをしているみたいだから、聞きに行
                                こうよ。」<br/>
                                B 「いや、 行かない。 その高校生たちのことは知っているけど、 {blankRound}もの
                                があるから。」
                            </>,
                        qReading: null,
                        options: ['聞くにかたくない',
                            '聞くまでもない',
                            '聞くにたえない',
                            '聞かないではおかない'],
                        correct:3
                    },
                    {
                        number: 30,
                        line: null,
                        q:
                            <>
                                当社は、お客様から{blankRound}個人情報について外部へ流出しないよう努めま
                                す。
                            </>,
                        qReading: null,
                        options: ['迷惑した',
                            '頂戴した',
                            '世話した',
                            '拝見した'],
                        correct:2
                    },
                    {
                        number: 31,
                        line: null,
                        q:
                            <>
                                彼女はたくさんの書物を持っていたが、{blankRound}読んではいないらしかった。
                            </>,
                        qReading: null,
                        options: ['あいにく',
                            'どうやら',
                            'しかるに',
                            'いまにも'],
                        correct:2
                    },
                    {
                        number: 32,
                        line: 2,
                        q:
                            <>
                                先日、交差点に{blankRound}の所でお互い側面をこする形での物損事故にあいました。
                            </>,
                        qReading: null,
                        options: ['入るか入るか',
                            '入るか入っているか',
                            '入るか入らないか',
                            '入るか入っていないか'],
                        correct:3
                    },
                    {
                        number: 33,
                        line: 2,
                        q:
                            <>
                                能力は{blankRound}便利だし、無ければ無くても問題はないと思う。
                            </>,
                        qReading: null,
                        options: ['あったらあっても',
                            'あってもあっても',
                            'あったらあったで',
                            'あってもあったで'],
                        correct:3
                    },
                    {
                        number: 34,
                        line: null,
                        q:
                            <><br/>
                                A 「山田さんは毎日遅くまで働いているけど、 体の方は大丈夫かしら。」<br/>
                                B 「うん、 その点は心配しているんだ。 いくら頑張っても、 病気になってしま
                                えば{blankRound}からね。」
                            </>,
                        qReading: null,
                        options: ['そのものだ',
                            'それだけだ',
                            'そのままだ',
                            'それまでだ'],
                        correct:4
                    },
                    {
                        number: 35,
                        line: 2,
                        q:
                            <>
                                大臣は当然の職責を{blankRound}、 批判される理由はない。
                            </>,
                        qReading: null,
                        options: ['果たそうとしたにすぎず',
                            '果たそうとしたほどで',
                            '果たしそうになったにすぎず',
                            '果たしそうになったほどで'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q:
                            <>
                                君に金を貸したところで、{blankStarBox()}決まっている。
                            </>,
                        qReading: null,
                        options: ['するに',
                            '必要なものを',
                            '買わずに',
                            'むだ使いを'],
                        correct:4
                    },
                    {
                        number: 37,
                        line: 2,
                        q:
                            <>
                                彼の作品はよく{blankStarBox()}前にすると「版画でここまで
                                表現できるのか。」 と驚かされることが多々ある。
                            </>,
                        qReading: null,
                        options: ['知っているつもりの',
                            '実際に',
                            '作品を目の',
                            '私でも'],
                        correct:2
                    },
                    {
                        number: 38,
                        line: 2,
                        q:
                            <>
                                日曜日だから自分の{blankStarBox()}ものでもなく、 家族の
                                イベントや集まりが入ることが多いです。
                            </>,
                        qReading: null,
                        options: ['かというと',
                            'そういう',
                            '好きなことを',
                            'なんでもできる'],
                        correct:1
                    },
                    {
                        number: 39,
                        line: null,
                        q:
                            <>
                                今回処分{blankStarBox()}については以下のとおりです。
                            </>,
                        qReading: null,
                        options: ['経緯',
                            'に至った',
                            '今後の対応',
                            '及び'],
                        correct:4
                    },
                    {
                        number: 40,
                        line: 2,
                        q:
                            <>
                                お
                                {rubyBox('家騒動', 'いえそうどう')}
                                の
                                {rubyBox('勃発', 'ぼっぱつ')}
                                当時、 A氏は本社のプロデューサーだったが、 現経営陣はそ
                                の後、A氏を子会社に転属させた。 その際、A氏は{blankStarBox()} 、
                                経営陣は 「なんであいつは辞めないか。」 と怒っていた。
                            </>,
                        qReading: null,
                        options: ['見られていたが',
                            '辞めるのではないかと',
                            '結果的に',
                            '辞めず'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7
                        次の文章を読んで、文章全体の趣旨を踏まえて、 {numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 4,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    {titleBox('工場見学')}
                                    小学生の頃、 社会科の時間にバスを連ねて出掛ける工場見学が好きだった。
                                    遠足で植物園や古墳やプラネタリウムへ行くよりも、ずっとわくわくした。 何
                                    を作っている工場であろうが、 工場と名前の付く場所には、 未知の世界を予感
                                    させる魅力がある。
                                    コンビナートの製鉄所、 新聞の印刷所、 酸っぱい匂いのする
                                    {rubyBox('蔵元', 'くらもと')}
                                    {subBox('(注)')}、 学生服専
                                    門の縫製会社、牧場の中のチーズとバターの製造所。 かつて訪問した工場を一
                                    つ一つ思い浮かべてゆくと、自分の住んでいる世界がいかに複雑な構造を持っ
                                    ているか、実感することができる。 あるいは、 自分が実際目にしている世界が
                                    {numberSquareBox(41)}を思い知る。
                                    新聞やチーズはごくありふれた物なのに、 それが製造されている現場があん
                                    なにも日常からかけ離れているのは{numberSquareBox(42)}。 どんな種類の工場でも、一歩足を
                                    踏み入れた瞬間、 どこか遠い場所へ旅してきたような気分になる。
                                    まず天井の高さに圧倒される。 ただ{numberSquareBox(43)}普段見慣れている天井とは意味
                                    合いが違って見える。 天に向かってそびえる教会の塔を、はるばるとした気持
                                    ちで眺めるのに似ている。 もちろん工場の天井が高いのは、 神様に近付くため
                                    ではなく、 巨大な機械を動かしたり、 換気を良くしたりするためなのは分かっ
                                    ている{numberSquareBox(44)}やはり工場と教会は似ていると思う。 懸命に物を作り出そうと
                                    している人間たちの熱気に触れると、 しばしば私は両手を合わせ、 感謝の祈り
                                    を捧げたくなる。
                                    それからあの音だ。 静かな工場も、どこかにはあるのかもしれない。(たとえ
                                    ば、 補聴器を作る工場?)。 しかし私の知っている工場はどこもすさまじい音を
                                    発していた。 しかもそれが途切れない。 ベルトコンベヤーは流れ続け、ミシン
                                    うな
                                    は糸を吐き出し続け、モーターは唸り続ける。 規則正しい機械音の{numberSquareBox(45)}に、
                                    所々、 火花が飛び散ったり、 異常を知らせるブザーが鳴り響いたりして、絶妙
                                    のアクセントを付け加える。
                                    {attachBox('(小川洋子 『工場見学』 による)')}
                                    {noteBox([<>(注) {rubyBox('蔵元', 'くらもと')}: 酒造りなどをする家や会社</>])}
                                </div>
                            </>,
                        options: ['いかにほんの小さな部分でしかないか',
                            'いかに巨大な機械ばかりなのか',
                            'なんと発展した会社だったのか',
                            'なんと複雑な物ばかりだったのか'],
                        correct:1
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['いつだろう',
                            'なんだろう',
                            'なぜだろう',
                            'どこだろう'],
                        correct:3
                    },
                    {
                        number: 43,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['高いというだけで',
                            '高くなるというだけで',
                            '高いだけのことで',
                            '高くなるだけのことで'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['その場合',
                            'その結果',
                            'ところで',
                            'けれど'],
                        correct:4
                    },
                    {
                        number: 45,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['間柄',
                            '合間',
                            '途中',
                            '中央'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の(1)から(4)の文章を読んで、後の問いに対する答えとして最もよいも
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: '正しい情報はどれか。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    熱中症のご注意
                                    この夏、 まだ8月半ばなのに既に4万人以上の人が熱中症のために救急車で搬送
                                    されています。 今後も猛暑が継続致しますのでご注意下さい。 熱中症の予防には
                                    「水分補給」 と 「暑さ対策」 が必須です。 喉が渇いていなくてもこまめに水分を補給
                                    し、なるべく暑い時間帯は外出を避け、 やむを得ず外に出る時には日傘や帽子など
                                    を着用してください。 また室内だからといって安心はできません。 室温に注意し、
                                    エアコン 扇風機を上手に利用しましょう。 特にお年寄りは自分では熱中症になっ
                                    たことに気がつかないことがありますから、周りの方は十分注意を払ってあげてく
                                    ださい。
                                </div>
                            </>,
                        options: ['水分は喉が渇いたら摂る',
                            '水さえ飲んでいれば防げる',
                            '家の中でも熱中症になる',
                            '熱中症は老人の病気だ'],
                        correct:3
                    },
                    {
                        number: 47,
                        line: 4,
                        q: 'このお知らせでわからないことは何か。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    水道管本管交換工事のお知らせ
                                    水道管の老朽化のために度々水道管が破裂したり漏水したりして市民の皆様には
                                    大変ご迷惑をお掛けしております。 漸次水道管の本管取り替え工事を進め3年で全
                                    地域に新水道管を埋設する予定です。 先日、 市民の皆様にお集まりいただきまし
                                    て、討議いたしました結果、 地域を緊急度を考慮して1から5までに分類させてい
                                    ただきました。 人口密集地は断水になった場合の影響が大きいので、優先順位を高
                                    く設定しました。 病院、 公共施設に通じる水道管は辺鄙な地域にありましても最優
                                    先の1にしてあります。 また工事決定の場合は事前にお知らせいたしますのでよろ
                                    しくお願いいたします。
                                </div>
                            </>,
                        options: ['工事が何年間かかるか',
                            'なぜ工事をするのか',
                            'いつ工事を始めるか',
                            'なぜ優先順位を決めたのか'],
                        correct:3
                    },
                    {
                        number: 48,
                        line: 4,
                        q: 'ナスニンの成分を失わないために調理前にすることはどれか。',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    なすは紫色の皮の部分に 「ナスニン」 という物質があり、 それは病気の原因とな
                                    る活性酸素を消す働きつまり抗酸化作用をする。 変色はなすが酸化した証拠で、そ
                                    うなるともう坑酸化作用はない。 それを防ぐためには酸素に触れないようにラップ
                                    して電子レンジの500Wで2分間加熱し、 しばらくそのままにしておく。 するとなす
                                    は酸化されずに美しい色が保てる。 揚げる場合は塩をまぶし10分置いて、水気を取
                                    り、小麦粉をまぶすと良い。 塩は酸化を抑え、 渋みが出ず坑酸化作用が保てる。 ま
                                    た調理前に電子レンジにかけると油が3分の2ぐらいに抑えられる。
                                </div>
                            </>,
                        options: ['小麦粉をまぶして水分を取り塩を付けておくこと',
                            '電子レンジでなすをそのまま2分間温めること',
                            '空気を遮断するようにしてレンジで温めること',
                            '電子レンジで油を減らし水分を取り去ること'],
                        correct:3
                    },
                    {
                        number: 49,
                        line: 4,
                        q:
                            <>
                                {uBox('いたちごっこ')}になっているのは何か。
                            </>,
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    バングラディシュにはフェイスブックの 「いいね」や、ツイッターの「フォロア
                                    一」 をクリックするビジネスがあるそうだ。 私たちはインターネット上で、 「いい
                                    ね」 などの数が多かったらその商品や店がいいのだろうと考えがちで、 それを参考
                                    にして、 商品を買ったりレストランに行ったりする。 それが期待はずれだと、 詐欺
                                    にあったような気がしてしまう。 これを避けるために問題が出現する度に様々な処
                                    置が施されるが、 また
                                    {rubyBox('新手', 'あらて')}
                                    の方法が現れる。 {uBox('いたちごっこ')}なのである。
                                </div>
                            </>,
                        options: ['不正なクリックを予防する技術と詐欺の増加を防ぐ方法',
                            '不正なクリックを阻止するシステムとそれを破る技術',
                            '不正にクリックする人の増加とそれを削除するシステム',
                            '「いいね」 を増やす人とそれを見て参考にする人'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題 9 次の(1)から(3)の文章を読んで、 後の問いに対する答えとして最もよいも
                        を、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q:
                            <>
                                {uBox(<>
                                    {rubyBox('目利', 'めき')}きがいなかった</>)}とはここではどのような意味か。
                            </>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    もう何十年も前のことだが、 秋田に行ったときに、 姑が魚を干して粉にした物を
                                    使って
                                    {rubyBox('出汁', 'だし')}
                                    を取っていたのを見た。 後日、 それが市場で無造作にビニールの袋に入
                                    れられて販売されていたのを知ってとても便利なのでこれを商売にしたら
                                    {rubyBox('儲', 'もう')}
                                    かるだ
                                    ろうなあと思った。 その1年後同じような物が 「出汁の素」として売り出され、 あ
                                    っという間に日本中を席巻して行った。
                                    「使い捨てカイロ」 も同じだ。 鉄が酸素に触れると熱を出すという性質は科学者な
                                    ら誰もが知っている知識だったのに、それを使って体を温めるカイロを作ろうとは
                                    誰も考えなかったのだ。 日本のハイテクトイレとして普及している温水
                                    {rubyBox('便座', 'べんざ')}
                                    も元々
                                    はアメリカで医療用として発明された製品だ。 それを日本の企業が進化させ、一般
                                    用として売り出した。 アメリカの企業はこんなに人気がある商品に育つとは考えな
                                    かったのだろう。
                                    {uBox(
                                        <>
                                            {rubyBox('目利', 'めき')}きがいなかった
                                        </>
                                    )}

                                    のだ。
                                    今、 日本の中小企業は労働力の安い国に仕事を奪われて、 売上が減少し困窮して
                                    いる。 しかし技術力が高い中小企業も多い。 それを応用して新製品を作り上げるこ
                                    とができれば、会社は以前より発展していくはずだ。 社内の人間だけでもそれがで
                                    きるだろうが、他の中小企業と協力するのも一つの手だ。 企業自身は
                                    {rubyBox('身近', 'みぢか')}
                                    過ぎて、
                                    自分たちの技術力の真の凄さに気がつかないことも多いから、 外部の力を拝借した
                                    方がよいかもしれない。 中小企業は情報が少なかったり、 資金が少なくてできない
                                    ことが大変多いから国や地方公共団体{subBox('(注)')}が手をさしのべる必要があるのではないだろ
                                    うか。
                                    {noteBox(['(注) 地方公共団体 : 都 • 道 • 府 • 県や市 • 区 • 町 • 村など。'])}
                                </div>
                            </>,
                        options: ['温水便座のビジネスの可能性を理解した人がいなかった。',
                            '温水便座を見ても使用方法がわかる人がいなかった。',
                            '温水便座を発展させる技術力をもった人がいなかった。',
                            'アメリカの製品が日本で売れると考えた人がいなかった。'],
                        correct:1
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '国や地方公共団体はどのように手をさしのべたらよいか。',
                        qReading: null,
                        options: ['倒産防止のために中小企業にお金を貸す。',
                            '中小企業のために大企業から情報を集める。',
                            '中小企業の新製品の発売の手伝いをする。',
                            '中小企業の新製品開発時に資金援助する。'],
                        correct:4
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '本文に書かれていないことはどれか。 ',
                        qReading: null,
                        options: ['日本の中小企業の状況は大変苦しい。 ',
                            'ビジネスチャンスを掴むのは難しい。',
                            '中小企業が自力で生き残るのは無理だ。 ',
                            '日本には技術力がある中小企業が多い。'],
                        correct:3
                    },
                    {
                        number: 53,
                        line: 4,
                        q:
                            <>
                                {blankRound}の中にどれを入れたら良いか。
                            </>,
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    味には日味 • 辛味 • 酸味 • 塩味 • うま味の5つがある。 日本では5番目の味であ
                                    るうま味の存在は周知の事実だったが、 世界で認識されるようになったのは1980
                                    年代になってからである。 海草を干して作った昆布や
                                    {rubyBox('鰹', 'かつお')}
                                    という魚を干して作った
                                    {rubyBox('鰹', 'かつお')}
                                    {rubyBox('節', 'ぶし')}
                                    、 小さな干した魚、 きのこの一種の
                                    {rubyBox('椎茸', 'しいたけ')}
                                    を干した物などを煮出して作ったスープ
                                    の中にうま味が溶出してくる。 材料は一つだけ使うことも同時にいくつか使うこと
                                    もある。それらはそれ自体を食べるのではなく味を良くするためにだけ使われるこ
                                    とが多いので、うま味を取った後、 除去されるのが普通である。 だからうま味がお
                                    いしさの
                                    {rubyBox('素', 'もと')}
                                    で4つの味とは全く違ったものだということを日本人は認識していた。
                                    そして作られたうま味が豊富なスープを出汁と言って、 料理に使用する材料をおい
                                    しくするために使用していた。 そのうま味の成分を発見したのは日本人で1908年に
                                    昆布からグルタミン酸を取り出すことに成功した。 その後、鰹節からイノシン酸、
                                    椎茸からグアニル酸が抽出された。 これらも違う成分のうま味である。
                                    うま味が知られるにつれ、 最近では西洋の料理人も昆布や鰹節を日本から輸入し
                                    て使用するようになった。 しかし実はうま味は他の物からも取ることができるので
                                    ある。 西洋料理で良く使われるチーズやタマネギ、 トマトにも肉類や魚介類にも含
                                    まれている。 中華料理でも同様である。 つまり{blankRound}といっても良いのであ
                                    る。 しかし料理法が違うので、 日本料理のようにうま味その物の存在に気がつかな
                                    かったのだ。
                                </div>
                            </>,
                        options: ['料理によってうま味が違うのである ',
                            '多くの食材にうま味が含まれている ',
                            'うま味がない食べ物はまずい ',
                            'たくさんの食料にうま味を見つけた '],
                        correct:2
                    },
                    {
                        number: 54,
                        line: 4,
                        q: 'なぜ西洋などではうま味の存在がなかなか認められなかったのか。 ',
                        qReading: null,
                        options: ['日本以外にうま味を研究する人がいなかったから ',
                            'うま味成分が一つではなくいろいろ存在していたから ',
                            '料理法が違うのでうま味だけを取り出すことがなかったから ',
                            '西洋などにはうま味が含まれている食材が存在しなかったから '],
                        correct:3
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '味についての正しい記述はどれか。 ',
                        qReading: null,
                        options: ['甘味・辛味・酸味・塩味・うま味の順番に発見された。 ',
                            'うま味が発見されるまで西洋にうま味は存在していなかった。 ',
                            'うま味を感じる能力は日本人がもっとも優れている。 ',
                            '西洋でうま味が知られなかったのは仕方がないことだ。 '],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q: '3Dプリンターの登場はどんな変化をもたらしたか。 ',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    印刷するような感覚で複雑な形の立体物が簡単に造形できる3Dプリンターが耳
                                    目を集めている。 医療分野では既に多大な恩恵を受けている。 従来の人工骨は患者
                                    に合うように削るため手間がかかった。
                                    しかし3DプリンターはCT{subBox('(注1)')}やMRI{subBox('(注2)')}の画像
                                    を基に骨の大きさや形状を確認し簡単に個々の患者にぴったり合った物が製作でき
                                    る。 朗報である。
                                    種々の製品製造現場に導入されるとどうなるか。 製品製造にはそれを造るための
                                    金型が必要であり、 日本の金型製造技術は世界一だと言われているが、 多くの金型
                                    形成はもう不要になる恐れがある。 試作品も簡単にできるからそれらを仕事にして
                                    いた中小企業は大打撃を受けるだろう。 反面、 試作品が簡単に造れるから、 個人
                                    も中小企業も製造メーカーとして起業できる可能性がある。 多品種少量生産も可
                                    能だ。 しかし何でも安くできるわけではない。 まだ形成物質にも制限があるので強
                                    度にも問題がある。 大量生産は価格の低下をもたらすが、 3Dプリンターで製造す
                                    る場合は1個あたりの製作費は1万になっても同じである。 また製作に時間もかか
                                    る。 まだまだだという感じは否めない。
                                    別の問題もある。 銃の製造設計図がインターネット上に公開され問題になった
                                    り、複製ができないはずの鍵が造られたりしている。 3Dプリンターは使い方を誤
                                    れば大変なことになることも念頭においておかなければならない。
                                    {noteBox([
                                        '(注1) CT: 断層撮影装置',
                                        '(注2) MRI: 磁気共鳴画像装置'
                                    ])}
                                </div>
                            </>,
                        options: ['金型メーカーが激減してしまった。',
                            '金型製造技術が不要になってしまった。',
                            '医療分野での人工骨の制作が容易になった。',
                            '銃の製造が禁止されるようになった。'],
                        correct:3
                    },
                    {
                        number: 57,
                        line: 4,
                        q: '3Dプリンターの良い点は何か。 ',
                        qReading: null,
                        options: ['製造単価が安いこと',
                            '時間が短縮できること',
                            '材料を選ばないこと',
                            '形成が簡単なこと'],
                        correct:4
                    },
                    {
                        number: 58,
                        line: 4,
                        q: 'この文章の題として最も相応しいものはどれか。 ',
                        qReading: null,
                        options: ['3Dプリンターの光と影',
                            '3Dプリンターの経済効果',
                            '3Dプリンターの危険性',
                            '3Dプリンターの現状と未来'],
                        correct:1
                    },
                ]
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、 後の問いに対する答えとして最もよいものを、 1 •
                        2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q:
                            <>
                                ①{uBox('一石二鳥どころか何鳥にもなる')}とはここではどういう意味か。
                            </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    日本の夏は暑さと湿気が相まって耐えられないほどだ。 エアコンが効いた部屋は
                                    体に悪いし消費電力も大きい。 その上エアコンは家の中は冷やすが外に温風を吹き
                                    出しもする。 結果として外気を暖めることになるから、 環境悪化が促進される。 そ
                                    こに自然を利用して涼しくする工夫が求められる理由がある。
                                    日本は昔から少しでも涼しく過ごせるように南北に窓を広くとって風の道を作っ
                                    た家を建ててきた。 夏の直射日光を遮るすだれ{subBox('(注1)')}やよしず{subBox('(注2)')}もよく使われた。
                                    特に最近
                                    つるせい
                                    は蔓性の植物を植えて緑のカーテンを作る人が増加している。 こちらは生きた植物
                                    が使われるだけに葉から水分を蒸発させることができ、 更に温度を下げる効果が大
                                    きい。 よしずが熱を26%削減するのに対して緑のカーテンでは60%減らすことがで
                                    きるそうだ。 また葉や花は見るだけでも心が和むし、 植物は炭酸ガスを吸収するの
                                    で①{uBox('一石二鳥どころか何鳥にもなる')}。
                                    大きな建物でも屋上や壁面の緑化が推進されている。 こちらは地方自治体の要請
                                    が影響している面が大きいが、最近では罰金を課したり、 反対に補助金を出したり
                                    する自治体も出現した。 ②{uBox('それだけ')}大きい建物の緑化が効果的だということだろう。
                                    屋上緑化の普及には技術の進歩も大いに貢献している。 初期の屋上庭園は土を使
                                    用していたので、建物がどれだけその重量に耐えられるか、 散水の頻度や水はけ
                                    など難問を抱えていた。 現在は土に変わる軽い材料が使用されているので、変化に
                                    富んだ庭を造ることが可能になった。 また、 トレーに植えられている乾燥に強い植
                                    物をただ置いて固定するだけで水やりも不要、 放りっぱなしで済むという緑化方法
                                    が開発され、これを採用するビルも少なくない。 更に屋上同様壁面緑化も各地で見
                                    受けるようになった。 壁面は道路からもよく見えるので通行人にとって癒し効果も
                                    ある。 また屋上や壁面の緑地スペースは地上の緑地として同じように計算されるの
                                    で、緑地を屋上や壁面に移すことで工場や駐車場などのスペースを広く確保できる
                                    という長所もある。
                                    良いことずくめのように見える建物本体への緑化だが、 当然やり方によっては建
                                    物を傷めることもある。 しかし実行してみるとずっと利点のほうが大きいことがわ
                                    かるに違いない。
                                    {noteBox([
                                        '(注1) すだれ: 細く切った竹やアシなどを編んで作った窓の外に下げるもの。 目隠しにしたり日差しを遮るために使われる。',
                                        '(注2) よしず ヨシという植物の茎を編んで作った物。 目隠しにしたり日差しを遮るために使われる。'
                                    ])}
                                </div>
                            </>,
                        options: ['緑化が花などを見たり植物を食べたり建物の温度を下げたりする。',
                            '緑化で建物の温度を下げるだけでなく、見た目も楽しむことができる。',
                            '緑化が涼しくしたり、 花を楽しんだり、 炭酸ガスを吸収したりする。',
                            '緑化で建物を冷やせるし炭酸ガスを減らすことができる。'],
                        correct:3
                    },
                    {
                        number: 60,
                        line: 4,
                        q:
                            <>
                                ②{uBox('それだけ')}の示すものは何か。
                            </>,
                        qReading: null,
                        options: ['自治体が要請するほど',
                            '罰金や補助金で実施させたいほど',
                            '大きいビルを緑化すればするほど',
                            'ビルの緑化推進に絶大な効果があるほど'],
                        correct:2
                    },
                    {
                        number: 61,
                        line: 4,
                        q: ' ビルが緑化を進める一番の理由は何か。 ',
                        qReading: null,
                        options: ['自治体の要請に従わなければならないから',
                            '炭酸ガスを削減しなければならないから',
                            '室内の温度を下げなければならないから',
                            '駐車場の土地を確保しなければならないから'],
                        correct:1
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '著者の意見はどれか。',
                        qReading: null,
                        options: ['緑のカーテンには涼しさ以外の楽しみがある。',
                            '緑化を進めてエアコンを使わないようにするべきだ。',
                            'エアコンは環境悪化の妨げになる。',
                            '緑化以外建物を涼しくする方法はない。'],
                        correct:1
                    },
                ]
            },
            {
                title: (
                    <>
                        問題11 次のAとBの文章を読んで、 後の問いに対する答えとして最もよいものを、
                        1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: '代理母出産についてAとBの立場を述べているのはどれか。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        医学の進歩の結果、 代理母出産が可能になったが、これは多くの問題を
                                        {rubyBox('孕', 'はら')}
                                        ん
                                        でいる。 貧しいが故に代理母を希望する女性がほとんどであり、 先進国から途
                                        上国への代理出産ツアーの存在などビジネス化している現状がある。 依頼人が
                                        1回1000万円以上の謝礼を支払うのにも関わらず、 代理母が受け取る報酬はそ
                                        の1割にも満たないことが多いそうだ。 それでも途上国の人にとって何年分も
                                        の生活が賄える故に希望者が後を絶たない。 代理母に不利な契約が多く、 実際
                                        障害児の引き取りを拒否されたなどの問題も生じている。 妊娠出産には絶えず
                                        危険が伴う。 そのリスクを負わせて良いのか。 世界には親に見捨てられた多く
                                        の子供達がいる。 彼らは育ててくれる人を求めている。 血縁に拘る必要はない
                                        のではないだろうか。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        以前は
                                        {rubyBox('子宮', 'しきゅう')}
                                        を摘出したり何らかの理由で不妊症になった女性は子供が欲しい
                                        とき代理母に依頼していた。 しかしその子供は遺伝的に夫と代理母の間の子供
                                        であった。 現在は夫婦の遺伝子を持つ体外受精した卵を他人の子宮に挿入して
                                        出産させる技術が確立した。 そして代理母と遺伝的に繋がりがない子供の出産
                                        が可能になった。 嬉しいことに
                                        {rubyBox('卵子', 'らんし')}
                                        はあるが出産はできない女性も血の繋がり
                                        のある子供を授かることができるようになった。 それがどんな意味を持つか普
                                        通に出産できる人には到底理解できないだろう。 費用は高額であるが、 どんな
                                        ことをしても我が子が欲しいという欲求に逆らえないから当然のことだ。 代理
                                        母出産には多くの問題があるのも現実だが、それは契約によって解決できると
                                        考える。
                                    </div>
                                </div>
                            </>,
                        options: ['Aは社会的なことに、 Bは個人的なことに視点をおいている。',
                            'Aは出産できる状況から、 Bはできない状況から意見を述べている。',
                            'Aはビジネス的な考え、Bは社会分析の立場に立っている。',
                            'Aは代理母の代弁者、Bは不妊治療者の立場で意見を述べている。'],
                        correct:1
                    },
                    {
                        number: 64,
                        line: 4,
                        q: '代理母出産に対するAとBの意見はどれか。',
                        qReading: null,
                        options: ['Aは捨て子を救いたいので反対、 Bは不妊症の人には他に手段がないので賛成',
                            'Aは代理母の負担が大きいので反対、Bは不妊症の人のためになるので賛成',
                            'Aは契約に問題があるので反対、 Bは夫婦の本当の子供ができるので賛成',
                            'Aはビジネス化しているので反対、 Bは問題は契約で解決できるので賛成'],
                        correct:2
                    },
                ]
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、 後の問いに対する答えとして最もよいものを、 1 •
                        2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 65,
                        line: 4,
                        q:
                            <>
                                ①{uBox('人類は瀬戸際に立っているのではないか')}とはここではどのような状態か。
                            </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    A 地球の温暖化がもたらすものには種々ある。 海に沈んでしまう島国や氷河
                                    が解けだして押し寄せているヒマラヤの高地の村々にとってはそこに住めなく
                                    なるだけにまさに死活問題である。 また気候の変動により巨大な台風やハリケ
                                    ーン, 集中豪雨などに度々襲われる地域が増加し, その被害も甚大である。 一
                                    方また極度に少雨になり砂漠化が進んでいる地域もあり、 穀物の生産額が減
                                    り、世界的な価格上昇を招く頻度が上がっている。 これが食糧不足で苦境に陥
                                    っている貧困国の人々の生活を更に追い詰めている。 ①{uBox('人類は瀬戸際に立っているのではないか')}。
                                    B 温暖化は20世紀半ば以降、 我々人間の活動による化石燃料の使用や森林の
                                    減少により急速に二酸化炭素などの温室効果ガス濃度が増加したことが主な原因
                                    で起きた。 このまま温室効果ガスが排出されれば100年後には気温が4度上昇し
                                    人類史上未曾有の悪影響をもたらす恐れがある。 そのため上昇を2度未満に抑え
                                    ようと国連気候変動会議が中心となり討議が繰り返されているが、 各国とも自国
                                    の利益を損ないたくないとの思惑でなかなか②{uBox('これはという策')}が打ち出せないでい
                                    る。 とはいえ手を
                                    {rubyBox('拱', 'こまぬ')}
                                    いていたわけではない。国も企業も個人さえそれぞれ
                                    {rubyBox('啓蒙', 'けいもう')}

                                    活動を始めることから、 省エネ製品の開発、 車に乗らないなど個人生活に関わる
                                    ことまでそれなりに努力してきたが、 なかなか効果が上がっていない。
                                    C そんな中、 二酸化炭素を地中の奥に封じ込めるCCS技術 (CO2回収・貯蓄)
                                    が開発された。 これは工場の排気などから二酸化炭素だけを回収し、圧力をか
                                    けて地中に注入して保存する技術である。 閉じこめられたCO2は地下水に溶け
                                    て炭酸水になり長い年月を経て炭酸塩鉱物に変化していくと見られる。 CCSに
                                    よる二酸化炭素の貯蔵可能量は全世界で2兆トンと推定され、 日本に限っても
                                    年間排出量の100年分を貯蔵できるそうだから、 温暖化阻止の強力な助っ人とな
                                    る可能性が高い。 しかし折角埋め込んだ二酸化炭素が地表や海底に漏れださな
                                    いようなしっかりした地層が必要だし、 1トン当たりの貯蔵コストもまだかなり
                                    高いなどの課題もある。 今後は更なる技術革新でコストの削減に努めなければ
                                    ならない。 とはいえ、 最早この技術無しには気温の上昇を2度以下に抑えるこ
                                    とはできないと言われているから、早急に実用化を進めなければならないので
                                    ある。
                                </div>
                            </>,
                        options: ['温暖化が人類の生存に関わるほどの危機的状態',
                            '温暖化が人類によって防げるかどうかわからない状態',
                            '温暖化が人類の生活に様々な悪影響を与えている状態',
                            '温暖化でも人類が何とか生きていける状態'],
                        correct:1
                    },
                    {
                        number: 66,
                        line: 2,
                        q:
                            <>
                                ②{uBox('これはという策')}とはどのような策か。
                            </>,
                        qReading: null,
                        options: ['各国の利益を損なわないような策',
                            '確実に効果が上がるような策',
                            'みんなが驚くような策',
                            'CO2を封じ込める'],
                        correct:2
                    },
                    {
                        number: 67,
                        line: 4,
                        q: 'CCS技術の説明はどれか。',
                        qReading: null,
                        options: ['温室効果ガスを回収して圧縮してしまう技術である。',
                            '設備を設置する場所を問わない技術である。',
                            'CO2を圧縮して地下に封じ込める技術である。',
                            'CO2をそのまま地下に長期的に保存する技術である。'],
                        correct:3
                    },
                    {
                        number: 68,
                        line: 4,
                        q: 'A・B・Cの段落は何について述べているか。 間違っているのはどれか。',
                        qReading: null,
                        options: ['Aで温暖化で起きている異常気象など、 Bで温暖化の原因について述べている。',
                            <>Aで温暖化の原因や解決に向けた動き、 Cでそれを阻止できる最新技術につ
                                いて述べている。
                            </>,
                            <>Aで温暖化のもたらした世界的な異常気象など、 Bで解決するためにしなけ
                                ればならないことについて述べている。
                            </>,
                            <>Bで温暖化の原因や影響と削減のための国際会議、Cで解決できる新しい技
                                術について述べている。
                            </>],
                        correct:2
                    },
                ]
            },
            {
                title: (
                    <>
                        問題13 右のページはダイエット方に関するパンフレットである。 これを読んで、
                        下の問いに対する答えとして最もよいものを、 1 • 2 • 3 • 4から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 69,
                        line: 4,
                        q: '運動しないで楽にダイエットしたい人はどれを選べば良いか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    ①基礎代謝ダイエット
                                    私たちが消費するカロリーの70%は活動しないでじっとしていても生命を維持
                                    するために必要なエネルギーつまり基礎代謝のために消費されています。 私たち
                                    は残りの30%で活動しているのです。 一生懸命運動しても5%ぐらいしか減らせ
                                    ません。 ですからダイエットしたいならこの基礎代謝量を増やすことが一番大切
                                    です。 基礎代謝量を上げる方法として一番重要なのは筋肉を付けることです。 筋
                                    肉が多ければそれだけエネルギーを使いますから。 そのほか朝食は寝ている間に
                                    下がった体温を上げて基礎代謝量を上げることができます。 半身浴やストレッチ
                                    で血行をよくすることも効果があります。 食事制限をすると飢餓状態になりエネ
                                    ルギー消費を抑えることになるので絶対に止めましょう。
                                    ②8時間ダイエット
                                    これは何でも食べてよいので一見楽そうに思えますが、 実行は大変難しいで
                                    す。8時間以内なら何を食べてもどれだけたくさん食べてもいいのですが、 残り
                                    の16時間は空腹に耐えなければなりません。 つまりその間は断食しているのと同
                                    じ効果があります。 血糖値が下がっている空腹時に活動することで体脂肪が燃焼
                                    しやすくなります。 これを実行するときに大切なことは水分補給を十分にするこ
                                    とと食事を抜かないことです。
                                    ③体内時計コントロールダイエット
                                    私たちは体の中に体内時計を持っています。 体内時計を調節する物質は体内に
                                    脂肪をため込む作業もしますが、 その量は時間によって違います。 ですからこの
                                    物質が多い時間に食事をとらなければ体内に脂肪を取り込まなくてすみます。 14
                                    時が一番少ない時間で、 夜10時ごろから夜中の2時ごろまでは大変多いです。 20
                                    倍もため込むとも言われています。 ですから何を食べるのかではなく、いつ食べ
                                    るのかが重要です。
                                    ④
                                    {rubyBox('四股', 'しこ')}
                                    ダイエット
                                    背筋をまっすぐ伸ばし
                                    {rubyBox('顎', 'あご')}
                                    を引きます。 足を開いた状態で腰を膝の高さまで落と
                                    します。
                                    {rubyBox('股関節', 'こかんせつ')}
                                    の筋肉を意識しながら足を上げます。 これを朝晩10回繰り返しま
                                    す。 運動不足の人がすれば、要らない脂肪が取れます。 普段股間接の筋肉は使っ
                                    ていないので動かすと要らない脂肪が取れ筋肉の代謝が高まります。 体の中で太
                                    ももやふくらはぎは一番筋肉量が多いのでここを鍛えると基礎代謝が増えます。
                                    ⑤そのほか
                                    気温が下がると体温を維持しようとして基礎代謝が上がります。 つまり体を動
                                    かさないとか食べ過ぎるとかの要素を除くと夏より冬の方がやせやすいのです。
                                    また薄着だと更に効果があります。
                                    {rubyBox('柑橘系', 'かんきつけい')}
                                    の香り、中でもグレープフルーツの香
                                    りをかぐとダイエットになります。 交感神経を刺激、 血行がよくなって代謝も上
                                    がります。 勿論、 食べてもいいです。
                                </div>
                            </>,
                        options: ['①',
                            '②',
                            '③',
                            '④'],
                        correct:3
                    },
                    {
                        number: 70,
                        line: 4,
                        q: '①から⑤の項目の説明で正しいのはどれか。',
                        qReading: null,
                        options: ['各項目の内容で矛盾するような記述はない。',
                            '基礎代謝の重要性を全ての項目で述べている。',
                            '何を食べるかについて説明している項目はない。',
                            '食べる量を減らすように指示している項目はない。'],
                        correct:4
                    },
                ]
            },
        ],
    },
    {
        name: '2016한끝_1',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、１•２•３•４から一つ選
                        びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q: (
                            <>
                                会場は{uBox('緊迫')}した空気に包まれていた。
                            </>
                        ),
                        qReading: null,
                        options: ['きんぴゃく', 'きんびゃく', 'きんぱく', 'きんばく'],
                        correct:3
                    },
                    {
                        number: 2,
                        line: null,
                        q: (
                            <>
                                生産性の向上が{uBox('著しい')}のは新しい設備の導入によるものだ。
                            </>
                        ),
                        qReading: null,
                        options: ['いちじるしい', 'いさぎよい', 'はなはだしい', 'あわただしい'],
                        correct:1
                    },
                    {
                        number: 3,
                        line: null,
                        q: (
                            <>
                                若いころ彼が{uBox('志した')}のはこのような人生ではなかった。
                            </>
                        ),
                        qReading: null,
                        options: ['くつがえした', 'あまやかした', 'わずらわした', 'こころざした'],
                        correct:4
                    },
                    {
                        number: 4,
                        line: null,
                        q: (
                            <>
                                皆が心身共に{uBox('健やかに')}育ってほしい。
                            </>
                        ),
                        qReading: null,
                        options: ['おだやかに', 'すこやかに', 'にぎやかに', 'ゆるやかに'],
                        correct:2
                    },
                    {
                        number: 5,
                        line: null,
                        q: (
                            <>
                                毛皮は{uBox('価')}が高いので、とても手に入らない。
                            </>
                        ),
                        qReading: null,
                        options: ['いこい', 'やまい', 'あたい', 'もとい'],
                        correct:3
                    },
                    {
                        number: 6,
                        line: null,
                        q: (
                            <>
                                彼は病院を相手に、 医療過誤{uBox('訴訟')}を起こした。
                            </>
                        ),
                        qReading: null,
                        options: ['そこう', 'そしょう', 'せっこう', 'せきしょう'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、 １•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q: (
                            <>
                                今回の飛行機事故のそもそもの{blankRound}はまだ分かっていません。
                            </>
                        ),
                        qReading: null,
                        options: ['成因', '原因', '起因', '因果'],
                        correct:2
                    },
                    {
                        number: 8,
                        line: null,
                        q: (
                            <>
                                子供のとき、飼っているうさぎの{blankRound}をするのが私の仕事でした。
                            </>
                        ),
                        qReading: null,
                        options: ['印象', '工夫', '支度', '世話'],
                        correct:4
                    },
                    {
                        number: 9,
                        line: null,
                        q: (
                            <>
                                {blankRound}お力落としのことと存じます。
                            </>
                        ),
                        qReading: null,
                        options: ['さぞ', 'たぶん', 'たしか', 'だんじて'],
                        correct:1
                    },
                    {
                        number: 10,
                        line: null,
                        q: (
                            <>
                                実質の伴わない提案は経営{blankRound}に受け入れられにくい。
                            </>
                        ),
                        qReading: null,
                        options: ['網', '派', '帯', '陣'],
                        correct:4
                    },
                    {
                        number: 11,
                        line: null,
                        q: (
                            <>
                                {blankRound}天気の日が続いている。
                            </>
                        ),
                        qReading: null,
                        options: ['にぎやかな', 'つめたい', 'さわやかな', 'さわがしい'],
                        correct:3
                    },
                    {
                        number: 12,
                        line: null,
                        q: (
                            <>
                                このカメラは、のどから{blankRound}ほど欲しかった。
                            </>
                        ),
                        qReading: null,
                        options: ['手が出る', '手に入れる', '目がない', '目がまわる'],
                        correct:1
                    },
                    {
                        number: 13,
                        line: null,
                        q: (
                            <>
                                新聞には今年のナンバーワンの映画だと書いてあったが、 映画館は{blankRound}
                                だった。
                            </>
                        ),
                        qReading: null,
                        options: ['ぼそぼそ', 'がらがら', 'ぼつぼつ', 'ぽつぽつ'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q: (
                            <>
                                彼は{uBox('あたかも')}その家の主人のようなふるまいをする。
                            </>
                        ),
                        qReading: null,
                        options: ['しいて', 'せめて', 'まるで', 'てんで'],
                        correct:3
                    },
                    {
                        number: 15,
                        line: null,
                        q: (
                            <>
                                子供向けの絵本に{uBox('ややこしい')}説明はない。
                            </>
                        ),
                        qReading: null,
                        options: ['奇妙な', '複雑な', '簡潔な', '明確な'],
                        correct:2
                    },
                    {
                        number: 16,
                        line: null,
                        q: (
                            <>
                                医者からもらった薬を飲んだが風邪は{uBox('一向に')}治らない。
                            </>
                        ),
                        qReading: null,
                        options: ['全然', '偶然', '自然', '断然'],
                        correct:1
                    },
                    {
                        number: 17,
                        line: null,
                        q: (
                            <>
                                私は彼女が怒るのを見た{uBox('ためし')}がありません。
                            </>
                        ),
                        qReading: null,
                        options: ['見物', '人間', '前例', '試験'],
                        correct:3
                    },
                    {
                        number: 18,
                        line: null,
                        q: (
                            <>
                                アメリカの大統領選挙の{uBox('しくみ')}はとても複雑だ。
                            </>
                        ),
                        qReading: null,
                        options: ['設備', '分析', '執行', '構造'],
                        correct:4
                    },
                    {
                        number: 19,
                        line: null,
                        q: (
                            <>
                                彼は奥さんに{uBox('コントロール')}されている。
                            </>
                        ),
                        qReading: null,
                        options: ['操縦', '滞在', '発揮', '粗末'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、１•２•３•４から一つ選びな
                        さい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: 'ひたすら',
                        qReading: null,
                        options: [<>彼が引っ越してしまうといううわさは、{uBox('ひたすら')}広がっていた。
                        </>,
                            <>彼はミスを取り返そうと{uBox('ひたすら')}に働いた。
                            </>,
                            <>足が痛かったが、 {uBox('ひたすら')}我慢して家まで帰った。
                            </>,
                            <>彼の家の庭には、{uBox('ひたすら')}多くのニワトリがいる。
                            </>],
                        correct:2
                    },
                    {
                        number: 21,
                        line: 4,
                        q: 'ののしる',
                        qReading: null,
                        options: [<>彼女は彼らをうそつきだと{uBox('ののしった')}。
                        </>,
                            <>先生は学生にもっと勉強するようにと{uBox('ののしった')}。
                            </>,
                            <>母は部屋の掃除をしなかったことで私を{uBox('ののしった')}。
                            </>,
                            <>先方がだめだと言うなら、 私からひとつ{uBox('ののしって')}あげましょう。
                            </>],
                        correct:1
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'とっさに',
                        qReading: null,
                        options: [<>彼女は育てていた花が{uBox('とっさに')}咲いてうれしかった。
                        </>,
                            <>彼はよく勉強したが、 {uBox('とっさに')}成績は上がらなかった。
                            </>,
                            <>車にぶつかりそうになったが、 {uBox('とっさに')}身をかわした。
                            </>,
                            <>彼女は20歳を過ぎてから{uBox('とっさに')}ダンスを始めた。
                            </>],
                        correct:3
                    },
                    {
                        number: 23,
                        line: 4,
                        q: 'わざわざ',
                        qReading: null,
                        options: [<>{uBox('わざわざ')}準備した部屋は小さすぎて使えなかった。
                        </>,
                            <>となりに立っていた人が{uBox('わざわざ')}私の足を踏んだ。
                            </>,
                            <>{uBox('わざわざ')}ためたお金をどこかでなくしてしまった。
                            </>,
                            <>彼はその映画を見るため{uBox('わざわざ')}東京まで出かけた。
                            </>],
                        correct:4
                    },
                    {
                        number: 24,
                        line: 4,
                        q: 'あざやか',
                        qReading: null,
                        options: [<>病院は{uBox('あざやか')}に薬のにおいがする。
                        </>,
                            <>あの日のことは今も{uBox('あざやか')}に覚えています。
                            </>,
                            <>その絵は私にまったく{uBox('あざやか')}な印象を与えた。
                            </>,
                            <>病気が{uBox('あざやか')}に早く治ってよかったですね。
                            </>],
                        correct:2
                    },
                    {
                        number: 25,
                        line: 4,
                        q: 'いたわる',
                        qReading: null,
                        options: [<>弱い立場の人を{uBox('いたわる')}のはとても大切なことだ。
                        </>,
                            <>政治家は国民の生活を{uBox('いたわる')}べきである。
                            </>,
                            <>母は孫が遊びに来たら、 いつも{uBox('いたわって')}いた。
                            </>,
                            <>山田さんはこれまでの努力を{uBox('いたわって')}くれた。
                            </>],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、 １•２•３•４から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q: (
                            <>
                                水を{blankRound}にしないようにね。
                            </>
                        ),
                        qReading: null,
                        options: ['出しっぱなし', '出しつづけ', '出しながし', '出しかけ'],
                        correct:1
                    },
                    {
                        number: 27,
                        line: null,
                        q: (
                            <>
                                病院の中でたばこを吸ってはいけないということは言う{blankRound}。
                            </>
                        ),
                        qReading: null,
                        options: ['ことはない', 'ものでもない', 'までもない', 'はずがない'],
                        correct:3
                    },
                    {
                        number: 28,
                        line: null,
                        q: (
                            <>
                                この大雨と風では、学校へ{blankRound}にも行けません。
                            </>
                        ),
                        qReading: null,
                        options: ['行って', '行こう', '行った', '行ける'],
                        correct:2
                    },
                    {
                        number: 29,
                        line: null,
                        q: (
                            <>
                                これ{blankRound}、 卒業式を終了いたします。
                            </>
                        ),
                        qReading: null,
                        options: ['をもって', 'として', 'において', 'について'],
                        correct:1
                    },
                    {
                        number: 30,
                        line: null,
                        q: (
                            <>
                                津波による被害は沿岸部に{blankRound}内陸部にまで広がっている。
                            </>
                        ),
                        qReading: null,
                        options: ['かけて', 'つれて', 'ともなって', 'とどまらず'],
                        correct:4
                    },
                    {
                        number: 31,
                        line: 2,
                        q: (
                            <>
                                参加者多数のため、 会場の変更{blankRound}。
                            </>
                        ),
                        qReading: null,
                        options: ['を禁じ得なかった', 'には及ばなかった', 'を余儀なくされた', 'にあずからなかった'],
                        correct:2
                    },
                    {
                        number: 32,
                        line: null,
                        q: (
                            <>
                                100年ほど前まで、 今や常識であるビタミンの効用は{blankRound}、 そんなものが
                                あることすら知られていなかった。
                            </>
                        ),
                        qReading: null,
                        options: ['おろか', 'まだしも', 'むしろ', 'ついで'],
                        correct:1
                    },
                    {
                        number: 33,
                        line: null,
                        q: (
                            <>
                                留学生と{blankRound}、法律によれば国民健康保険料を払わなければならない。
                            </>
                        ),
                        qReading: null,
                        options: ['いえば', 'いって', 'いえども', 'いったら'],
                        correct:3
                    },
                    {
                        number: 34,
                        line: null,
                        q: (
                            <>
                                長い間悩んだが、 私{blankRound}考えて出した結論である。
                            </>
                        ),
                        qReading: null,
                        options: ['だけに', 'うえに', 'なりに', 'よそに'],
                        correct:3
                    },
                    {
                        number: 35,
                        line: null,
                        q: (
                            <><br/>
                                A「たくさん本を読んでいるから、テストの勉強は進んでいるみたいだね」<br/>
                                B 「そうでもないんだ。 本は読んでいるけど、 読んだそば{blankRound}内容を忘れ
                                てしまうから、困っているんだ」
                            </>
                        ),
                        qReading: null,
                        options: ['から', 'に', 'で', 'まで'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、 １•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q: (
                            <>
                                みんなの{blankStarBox(2)}、ここであきらめるわけにはいかな
                                い。
                            </>
                        ),
                        qReading: null,
                        options: ['てまえ', '約束した', '前で', 'やると'],
                        correct:4
                    },
                    {
                        number: 37,
                        line: null,
                        q: (
                            <>
                                結果がどうなったのか、 彼の方から{blankStarBox()}。
                            </>
                        ),
                        qReading: null,
                        options: ['しかる', 'よこして', 'べきだ', '連絡を'],
                        correct:1
                    },
                    {
                        number: 38,
                        line: null,
                        q: (
                            <>
                                私は朝型人間で、 夜は9時とも{blankStarBox()}
                                眠くなります。
                            </>
                        ),
                        qReading: null,
                        options: ['なると', 'しようも', 'どう', 'なく'],
                        correct:2
                    },
                    {
                        number: 39,
                        line: null,
                        q: (
                            <>
                                {blankStarBox()}は冒険の旅に出発した。
                            </>
                        ),
                        qReading: null,
                        options: ['親を', '子供たち', 'よそに', '不安がる'],
                        correct:3
                    },
                    {
                        number: 40,
                        line: null,
                        q: (
                            <><br/>
                                A 「公園で高校生たちがライブコンサートをしているみたいだから、 聞きに
                                行こうよ」<br/>
                                B 「いや、行かない。 その高校生たちのことは知っているけど、{blankStarBox(2)}
                                から」
                            </>
                        ),
                        qReading: null,
                        options: ['ものが', 'たえない', 'ある', '聞くに'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、
                        文章全体の趣旨を踏まえて、{numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、 １•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    フォナックにおいては、 従業員が、 国籍や{numberSquareBox(41)}互いに受け入れあわなけれ
                                    ばならない。 もしチームで働くことができなければ、どんなに優秀な人でも辞
                                    めるように促される。 ロルフ・シュヴァイツァーは、「わが社では32か国の従業
                                    員が働いていますが、 政治的偏見を許していません。 ここは政治的には中立的
                                    な領域です。 そしてそれこそがフォナックなのです。 従業員は、 肌の色や政治
                                    的信条、宗教にかかわらず、互いに全員の価値を認めていることを行動で示さ
                                    なくてはなりません。 わが社の従業員は、{numberSquareBox(42)}すばらしい人々だと周囲から
                                    思われる存在であってほしいのです」と述べている。 フォナックのオフィスビル
                                    の屋上で行われる毎年恒例のバーベキューや、アジア人の従業員が集まって催
                                    される手料理の会は、ともに友好的な共同意識を促進している。 コミュニティ
                                    一精神は、社内で使用される共通言語に表れている。 {numberSquareBox(43)}、 「彼ら」 という言
                                    葉は禁止されている。 クリスチャン・バークがいうには、 「「私たち」 が物事に取
                                    り組んでいるのであり、 もしうまく行かなかったら、 「私たち」 の失敗なのです」
                                    ということである。
                                    互いに受け入れるだけにとどまらず、 従業員たちは自らの{numberSquareBox(44)}奨励されて
                                    いる。もし社内に暗黙のきまりが
                                    {rubyBox('溢', 'あふ')}
                                    れていると、何か間違いを犯してしまうの
                                    を恐れ、従業員は防衛的になってしまう。 組織内のほとんどの人が「自分の言葉
                                    に{numberSquareBox(45)}」と思うようになると、 イノベーション、 創造的な発想、 代替案の提示
                                    などは押えられてしまう。 マネジャーはまた、不可能な基準を設定したり、 「全能
                                    の神」のように振る舞ったりして従業員を臆病にさせてはならない。オープンで
                                    直接的、 建設的な対話がなされるためには、地位を示すシンボルや階層の類は
                                    すべてなくすべきなのである。
                                    {attachBox('(一條和生、野中郁次郎「ナレッジ・イネーブリング」による)')}
                                </div>
                            </>,
                        options: ['部署に際して', '部署にかかわらず', '部署にしたら', '部署にもとづき'],
                        correct:2
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['あらゆる分で', 'あらゆる面で', 'いわゆる分で', 'いわゆる面で'],
                        correct:2
                    },
                    {
                        number: 43,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['たとえば', 'もちろん', 'それなのに', 'つまり'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['感覚を表現するように', '感覚を表現するために', '感情を表現するように', '感情を表現するために'],
                        correct:3
                    },
                    {
                        number: 45,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['気をつけても', '気をつけては', '気をつけたら', '気をつけねば'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の文章を読んで、後の問いに対する答えとして最もよいものを、1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: '石鹸を作る時、どんなことに注意したらいいか。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    家庭で揚げ物などをした後に油が残ります。 この油は何度も使ううちに使え
                                    なくなります。 これを捨ててしまってはもったいないです。 これで
                                    {rubyBox('石鹸', 'せっけん')}
                                    を作り
                                    ましょう。 石鹸の作り方について説明します。 作り方はとても簡単です。 まず
                                    ボールに水を50ml入れて、 15gの
                                    {rubyBox('苛性', 'かせい')}
                                    ソーダ{subBox('(注1)')}を加えてよく混ぜます。 苛性
                                    ソーダは薬局で買えます。 ペットボトルや牛乳のパックに入れて振ってもいい
                                    です。 このとき発熱するので気をつけてください。 よく混ざったら油100gを
                                    入れてまたかき混ぜます。 そしてこれを入れ物に入れて固めます。 1日ぐらい
                                    で固まりますから、出して乾かします。 作業をするときには必ずゴムの手袋を
                                    してください。 苛性ソーダが体につくと火傷のようになりますから。
                                    {noteBox([<>
                                        (注1) {rubyBox('苛性', 'かせい')}
                                        ソーダ: 水酸化ナトリウム (NaOH)、 化学物質の一つ
                                    </>])}
                                </div>
                            </>,
                        options: ['苛性ソーダに触れないようにする。',
                            '水、油、 苛性ソーダの順番に入れるようにする。',
                            'よく混ぜてから苛性ソーダを入れるようにする。',
                            '熱を出すので冷やすようにする。'],
                        correct:1
                    },
                    {
                        number: 47,
                        line: 4,
                        q: '写真コンテストの申込みを受け付けてもらえるのは次のうちのどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    {titleBox('「桜の花」 写真コンテストのお知らせ')}
                                    「レストラン桜」では今年も桜の花を題材にした写真のコンテストを行います。
                                    がそ
                                    応募規定 : 四つ切りかA4判 デジタル可 (400万画素以上、 加工した物は不可)
                                    カラーのみ ・ 今年撮影した物に限る
                                    応募数 : 1人2点まで
                                    応募方法 : 写真の裏面に必要事項を記入の上、下記住所に郵送のこと
                                    必要事項: 作品名(タイトル)・撮影場所・撮影日・住所・氏名・年齢・電話番
                                    号・コンテストを知ったきっかけ
                                    応募先: 東京都西東京市ひばりが丘北××× レストラン桜 「桜の花」写真コ ンテスト係
                                    締め切り: 5月31日(消印有効)
                                    発表 : 「レストラン桜」店頭
                                    賞 : 最優秀作品1点: 賞金20万円 佳作3点: 賞金3万円
                                </div>
                            </>,
                        options: ['よく撮れたので3枚郵送する。',
                            '白黒写真を2枚郵送する。',
                            '600万画素のデジタル写真を1枚郵送する。',
                            'ひばりが丘の友だちの家に行くついでに写真を届ける'],
                        correct:3
                    },
                    {
                        number: 48,
                        line: 4,
                        q: '音楽運動療法とはどんな治療法か。',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    脳の機能の回復に役立つ音楽運動療法というのがあります。 サクソホン奏者
                                    で、 大阪芸術大学教授の野田氏が実践しているトランポリンの上下運動と、そ
                                    れに合わせた音楽の生演奏による治療です。 音楽はトランポリンをする患者1
                                    人1人の動作に合わせますから、 治療は一対一で行われます。 上下の動きに合
                                    わせた音楽が流れると脳が楽しいとか快適だとか感じて、 意欲を引き出すドー
                                    パミンが出ます。 そして脳が刺激されて機能が回復するようです。 事実20年近
                                    く全く歩けなかった患者が歩けるようになったり、 文字が書けるようになった
                                    り、患者や家族にとっては奇跡のようなことが起きています。 脳の研究はずい
                                    ぶん進んだと言っても、 まだ研究の余地が大いにあると思います。
                                </div>
                            </>,
                        options: ['音楽をかけながらみんなでトランポリンする治療法',
                            'トランポリンで上下左右などいろいろな動作をしてみる治療法',
                            'トランポリンで上下に跳ねながら生演奏を聴く治療法',
                            '動きに合わせた演奏を聴きながら上下にトランポリンする治療法'],
                        correct:4
                    },
                    {
                        number: 49,
                        line: 4,
                        q: '著者の暦に対する考えはどれか。',
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    3月3日は 「ひな祭り」 またの名を 「桃の節句」 と言って、 女の子の健やかな成
                                    長を祝う日です。 実はこのころまだ実際には桃の花は咲いていません。 しかし
                                    日本人が旧暦で暮らしていたころは確かに桃の花が咲いていたのです。 このよ
                                    うに最近は日本の行事は本来の季節とかけ離れているなあと感じることが多々
                                    あります。 お正月もこれから寒くなると言うのに初春とか新春などと言うので
                                    すから変です。でもこれが旧暦ならば寒い冬が終わってこれから春がやってく
                                    る喜びを表すのに相応しい時期です。 長い鎖国の時代が終わって西洋文明が入っ
                                    て来た明治6年(1873年)に日本政府は旧暦を改め新暦に移行しました。 その結果
                                    このような不都合が生じたのです。
                                </div>
                            </>,
                        options: ['旧暦に戻すべきだ。',
                            '行事の季節感は旧暦と合っている。',
                            '行事は旧暦でするべきだ。',
                            '新暦に移行するべきではなかった。'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の文章を読んで、 後の問いに対する答えとして、 最もよいものを1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q: (
                            <>
                                ①{uBox('これ')}は何を指しているか。
                            </>
                        ),
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    花の役割は何か。 花は見るだけでも心が癒される。 香りを楽しむこともでき
                                    る。 気分をよくする。 これはもう理屈ではない。 また花や木を育てる土いじり
                                    が私たちの体を守る免疫力を高めるという説もある。 花が発する気を使って
                                    健康を維持しようと言うのが花セラピーだ。 青い花は肝臓、
                                    {rubyBox('胆嚢', 'たんのう')}
                                    、眼、 血液調
                                    節、 自律神経など、 赤い花は心臓、 循環器、 舌、 神経系など、 紫の花は
                                    {rubyBox('腎臓', 'じんぞう')}
                                    、
                                    {rubyBox('膀胱', 'ぼうこう')}
                                    、耳、生殖器など、 白い花は肺、 呼吸器、 鼻、 大腸、 皮膚など、 黄色い花
                                    は口、消化器官、 胃、 代謝機能などに影響を与えるそうだ。 こんな知識がなく
                                    ても私たちは白、青、紫の花からは静けさや落ち着きを、 時には寂しさや悲し
                                    みを感じる。 一方、赤や黄色の花からは喜びや力を感じる。 だから気持ちを落
                                    ち着けたいときには前者を、元気をもらいたいときには後者を使うのがいい。
                                    大きさも関係がある。 大きな花からは元気を、 小さな花からは可愛らしさや静
                                    けさを受け取る。 例えば黄色いひまわりはいかにも元気いっぱいという感じを
                                    発散させていると思う。 ①{uBox('これ')}は性別や人種に関係ない。 自分の感性でその日の
                                    花を選んでもいいが、 花セラピーを知った上で選ぶともっと効果的だ。 あるい
                                    は花なら何でもいいと言う考えもある。 ともあれいつも花に囲まれて暮らすこ
                                    とは幸せなことだと思う。
                                    {noteBox(['(注1) トイレが近い: トイレに行く間隔が短い'])}

                                </div>
                            </>,
                        options: ['ひまわりが元気いっぱいだということ',
                            '花に対する感じ方',
                            '花に対する知識',
                            '花から元気をもらうこと'],
                        correct:2
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '花の感じ方について何と言っているか。',
                        qReading: null,
                        options: ['大きさは感じ方に影響しない。',
                            '力は赤色の花だけに感じる。',
                            '色だけが感じ方に影響するのではない。',
                            '白、黄色、紫の花には時々悲しみを感じる。'],
                        correct:3
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '花セラピーのやり方に合っていないのはどれか。',
                        qReading: null,
                        options: ['息切れするときは赤い花',
                            'よく聞こえないときは紫の花',
                            <>トイレが近い{subBox('(注1)')}ときは紫の花
                            </>,
                            'おなかの具合が悪いときは青い花'],
                        correct:4
                    },
                    {
                        number: 53,
                        line: 4,
                        q: 'バイオエタノールが最も期待されている理由は何か。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    石油の埋蔵量は後40年から80年だと言われている。 また地球の温暖化防止
                                    のためにも新エネルギーの開発は必要なことだ。 太陽光、 風力、 波力、 地熱な
                                    ど様々な自然エネルギーが作り出されている。 その一つにバイオエタノールが
                                    ある。再生可能な自然エネルギーで燃焼によって空気中のCO2を増やさないの
                                    で、カーボンニュートラルエネルギーと言われている。 原料は炭水化物を含む
                                    生物資源ならば何でもいい。 しかし糖質やでんぷん質が多く含まれる物のほう
                                    が生産効率がいいので、アメリカなどではトウモロコシなどが使われている。
                                    それで食料の高騰を招いてしまった。 最近ジャトロファという植物が注目され
                                    ている。ジャトロファは毒があって食べられないし、 荒れた土地でも育てやす
                                    い。 また種の30%が油だからバイオ燃料{subBox('(注1)')}を搾り出すのに最適だ。 大豆の5
                                    倍、 菜種の3倍、 油分があるので将来有望な燃料になりそうだ。 暖かい地方で
                                    しか育たないので日本は沖縄で栽培を始めた。 日本には耕作放棄地{subBox('(注2)')}が多いの
                                    でこれを活用したら良いと思う。 品質のよい苗の育成などまだまだ研究の余地
                                    もあるが、 搾り
                                    {rubyBox('滓', 'かす')}
                                    の処置方法も開発された。 優秀なジャトロファ苗の育成も進
                                    んでいて既に培養装置を世界へ売り込むことにも成功している。
                                    {noteBox([
                                        '(注1) バイオ燃料 : 主に植物をエネルギー原料とする燃料',
                                        '(注2) 耕作放棄地: 以前は田や畑だったが、 1年間以上作物を作らず、 また数年の間に再び耕し、 作物を作るはっきりした意思のない土地'
                                    ])}
                                </div>
                            </>,
                        options: ['新エネルギーだから。', '原料が何でもいいから。', 'CO2を増やさないから。', '生産効率が高いから。'],
                        correct:3
                    },
                    {
                        number: 54,
                        line: 4,
                        q: 'ジャトロファの長所は何か。',
                        qReading: null,
                        options: ['手入れされていない土地でも育つ。',
                            '大豆や菜種の5倍も油分が取れる。',
                            '暖かい地方で育つ。',
                            '優秀な苗が作りやすい。'],
                        correct:1
                    },
                    {
                        number: 55,
                        line: 4,
                        q: 'ジャトロファに対する日本での状況を述べていないのはどれか。',
                        qReading: null,
                        options: ['沖縄で栽培が始まった。', '苗の培養装置が完成した。', '搾り滓の処置も出来る。', '優秀な苗の研究は終わった。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q:
                            <>
                                ①{uBox('時代の流れを掴んで')}とはどんなことか。
                            </>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    日本にはキティ、ポケモンなど多くのキャラクターがある。 中でもハローキ
                                    ティは最も人気があるキャラクターだろう。 人気が高いので1983年には米ユ
                                    ニセフの子供大使に、1994年には日本ユニセフ協会の子供親善使節に、その
                                    ほかユニセフの 「子供たちの特別な友達」 にもなったことがある。 1974年にキ
                                    ティは赤いリボンの横向きに座った猫として誕生した。 翌年最初のキャラクター
                                    商品が発売され大ヒットしたが、 人気が継続したわけではなく苦しい時期が続
                                    いた。 ①{uBox('時代の流れを掴んで')}大人にも受け入れられるように子供用のデザインを
                                    変えたのを契機に、 キティは躍進を遂げた。 パールピンク色のキルティング生
                                    地を使ったバッグやポーチなどが大人の女性に受け入れられたのだ。更に海外
                                    の有名女優やモデル、ミュージシャン達までが競ってキティグッズを身につけ
                                    るようになると、更に人気に火がついた。 それはペンダントから洋服生地にま
                                    で及んだ。 そしてアメリカからヨーロッパ、 特にフランスやイタリアなどのフ
                                    ァッションをリードするような国にまで広まった。 今や世界中のどこでも見か
                                    けられる存在になったのである。その商品は約5万種類、 あらゆる物につけら
                                    れ、世界70ヶ国で販売されているそうだ。
                                </div>
                            </>,
                        options: ['子供用を止めて大人用の商品を発売したこと',
                            '子供の嗜好を無視した商品を発売したこと',
                            'ちょっと大人びた商品を発売したこと',
                            '大人だけに向けた商品を発売したこと'],
                        correct:3
                    },
                    {
                        number: 57,
                        line: 4,
                        q: 'キティの歴史について述べているのはどれか。',
                        qReading: null,
                        options: ['キティは誕生から高い人気を維持してきた。',
                            '大人に受け入れられた商品が飛躍の契機になった。',
                            '1974年に最初のキティグッズが売り出された。',
                            '海外の有名人がキティファンになるまで大人はキティに関心がなかった。'],
                        correct:2
                    },
                    {
                        number: 58,
                        line: 4,
                        q: 'キティ人気に関係がないのはどれか。',
                        qReading: null,
                        options: ['ユニセフの子供親善大使に任命されたこと',
                            'グッズが5万種類もあること',
                            '世界70ヶ国で商品が売れていること',
                            '日本生まれのキャラクターであること'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、 後の問いに対する答えとして、最もよいものを1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q: '玉川温泉の特徴はどれか。',
                        qReading: <>
                            <div className={'question_q_reading'}>
                                温泉の効能は厳密にいうと成分によって違います。 しかし成分に関係ない温
                                泉の一般的な効能もあります。 神経痛、筋肉痛、関節痛、肩こり、冷え性、慢
                                性消化器病、疲労回復などは体が温まることによって
                                {rubyBox('緩解', 'かんかい')}
                                する{subBox('(注1)')}症状です。
                                日本は昔から
                                {rubyBox('湯治', 'とうじ')}
                                といって温泉を病気の治療に役立てていました。 いまでも各
                                地の温泉に湯治場が設けられています。 例えば秋田県にある玉川温泉は効能
                                書きには癌に効くとは書かれてないにもかかわらず、 口コミで日本で一番癌に
                                効くと言われて常に湯治客で満杯です。 希望者が多くて湯治出来ない人が続出
                                したので、直ぐ近くに新玉川温泉が開発されたほどです。 玉川温泉は強酸性
                                (pH1.05) の温泉という点では日本一です。 また微量の放射能を含有していま
                                す。 あまり強力で長時間湯に浸かることができないので温泉を飲んだり、 蒸気
                                を吸入したり岩盤浴をして過ごします。 玉川温泉での湯治によって病気が治る
                                とは断言できませんが、 病人が持っている免疫力が向上して、その結果かなり
                                回復するらしいです。 体を温めることが免疫力強化に役立つことは知られてい
                                ます。ですから玉川温泉に限らず全ての温泉に病気を回復させる力があると思
                                います。
                                日本には約2万の温泉があると言われていますから、 外国の観光客にも温泉
                                を楽しんでもらいたいです。 裸になって一緒に入浴する習慣がない国から来た
                                人にとって、温泉は日本文化を知るいい機会になると思います。 珍しい温泉も
                                あります。 海や川の中に出現するものもあります。 海を眺めながら入ったら気
                                分がいいでしょう。 動物も温泉に入ることがあります。
                                {rubyBox('地獄谷', 'じごくだに')}
                                温泉は猿が入っ
                                ているのが見られる温泉として有名です。 また指宿の砂湯は 「砂むし」 と呼ばれ
                                て観光客に人気が高いです。 海辺に浅く掘った砂の上に浴衣を着て寝て、上か
                                ら砂を掛けてもらいます。 10分から15分の入浴で全身が温まり汗が出ます。
                                海を見ながらの入浴は爽快です。 このように一口に温泉と言っても様々です。
                                いぶすき
                                日本に来たからには一回ぐらいは温泉に入ってみたらどうでしょうか。 その
                                際、気をつけなければならないことは、入浴のマナーを守ることと入りすぎて
                                {rubyBox('湯中', 'ゆあた')}
                                り{subBox('(注2)')}を起こさないようにすることです。 湯中りとは一般的に、 全身の倦怠
                                感、食欲不振、 頭痛、 患部の再発、腹痛、不眠、 便秘、 局所症状の皮膚炎など
                                という症状を起こすことです。 直ぐに治る症状は、 湯治により現れる生体反応
                                であり、むしろ温泉の効果を現すものと考えられています。 最近は外国人も温
                                泉地に大勢来ます。 英語や中国語あるいは韓国語の入浴方法や成分表がありま
                                すから、 よく読んで温泉を楽しんでもらいたいです。
                                {noteBox([
                                    <>
                                        (注1) {rubyBox('緩解', 'かんかい')}する : 病気の症状が軽くなる
                                    </>,
                                    <>
                                        (注2) {rubyBox('湯中', 'ゆあた')}り: 一般的には何度も入浴したり、長く湯に入っていたりしたため
                                        に、気分が悪くなること
                                    </>
                                ])}


                            </div>
                        </>,
                        options: ['癌を治す。',
                            '強酸性なので短時間で効果が上がる。',
                            '湯治客が日本一多い。',
                            '強酸性湯である。'],
                        correct:4
                    },
                    {
                        number: 60,
                        line: 2,
                        q: '日本にはどんな温泉があるか。',
                        qReading: null,
                        options: ['猿と一緒に入る温泉', '裸で砂の中に入る温泉', '浴衣でお湯に入る温泉', '海の中にある温泉'],
                        correct:4
                    },
                    {
                        number: 61,
                        line: 2,
                        q: '温泉に入るときに気にしなくていいことはどれか。',
                        qReading: null,
                        options: ['入浴の入り方', '入浴時間', '温泉の効果', '入浴の回数'],
                        correct:3
                    },
                    {
                        number: 62,
                        line: 2,
                        q: '著者はどうして外国人観光客に温泉を勧めているか。',
                        qReading: null,
                        options: ['温泉がたくさんあるから。', 'いい経験になるから。', '温泉は面白いから。', 'いろいろな温泉があるから。'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のAとBの文章を読んで、後の問いに対する答えとして、 最もよいもの
                        を1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'AとBが共に触れていることは何か。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        2003年のPISA(国際学習到達度調査)の15歳への調査で14位、2006年に
                                        15位となり、 日本の子供達の読解力が落ちていることが明らかになった。また
                                        企業の面接時に準備していなかったことなどを聞かれると、 簡単なことでも一
                                        言も発することができない若者が増加しているそうだ。 作文が書けない学生も
                                        目立つ。言語力が落ちているのだ。 言語力とは日常生活に欠かせないコミュニ
                                        ケーション能力だ。 相手が理解できるように文を組み立てて意見を述べること
                                        だ。日本の国語教育ではこのような能力を育てる訓練をしてこなかったが、こ
                                        れまで問題にはならなかった。 外国人に比べると議論する力が弱くてもそれな
                                        りに言語力が自然に身についていたからだ。 言語能力低下の原因は携帯メール
                                        や家族間での会話の減少だと言う説がある。 確かに子供達が言語力を磨く場が
                                        減っていることや短い文を遣り取りするメールが影響しているのは確かだと私
                                        も考えている。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        言語力は情報を整理したり、考えを組み立てて論理的に説明したりできる能
                                        力だ。その低下は円滑な日常生活が困難になることを意味する。 以前は成長す
                                        るに従って自然に身に付いていたが、今は子供を取り巻く環境が激変した。兄
                                        弟も少なくなり、 塾や習い事で忙しく友だちと遊ぶ時間も減った。 食事も
                                        {rubyBox('孤食', 'こしょく')}
                                        {subBox('(注1)')}
                                        が増えている。 毎日揃って夕食を食べる家族はこの30年間で30%も減ってい
                                        る。 ある学者は子ども時代に交わした会話の量の減少が問題だと言っている。
                                        子供は10歳ごろから論理的に会話する能力が身についてくるが、その会話をす
                                        る機会が激減している。 言語力低下はこれが原因だ。 また切れ切れの文で意思
                                        を伝える携帯メールの普及も影響している。 2009年には言語能力を測定する
                                        検定が発足した。 検定に合格するための技術を習得することもいい。しかし私
                                        はもっと子供たちの話に耳を傾けようと大人達に訴えたい。
                                        {noteBox(['(注1) 孤食: 一人だけで食事すること'])}
                                    </div>
                                </div>
                            </>,
                        options: ['子供の言語能力低下を示す例',
                            '言語能力を付けさせる方法',
                            '言語力の低下とその原因',
                            '子供を取り巻く環境の変化の具体例'],
                        correct:3
                    },
                    {
                        number: 64,
                        line: 4,
                        q: 'AとBに共通する言語能力に対する考えは何か。',
                        qReading: null,
                        options: ['言語力低下の原因は会話不足やメールである。',
                            '言語力は自然につくものである。',
                            '日本人は外国人より言語能力が低い。',
                            '言語能力検定に合格させるのがいい。'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 65,
                        line: 2,
                        q:
                            <>
                                ①{uBox('農業の未来に希望が出てきたとき')}とはどんなときか。
                            </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    現在世界の10億人とも言われる貧困層の人々を中心に慢性的に食糧危機が続
                                    いている。 2008年に世界中を食料価格の高騰が襲い、 食料を求めて暴動が起
                                    きた。2009年には国連食糧農業機関(FAO) によるとアフリカのケニア・エ
                                    チオピアを中心に 2,300万人が飢餓状態に陥ったそうだ。 原因は主に1. 人口の
                                    増加、 2. 異常気象による不作、 3. 砂漠化などによる耕地の減少、 4. バイオ燃
                                    料への転化、 5. 投機などだ。 世界の人口は2025年には80億に膨れる見込み
                                    だから更に食料不足が進む。 食料輸出国だった国も自国民の食糧確保に事欠く
                                    ようになる恐れがある。 原因の1番は主に人口増加が激しい発展途上国の問題
                                    だ。2番、3番は地球の温暖化問題だから、 世界中で早急にCO2削減に取り組
                                    むことだ。4番はエネルギー問題で食用トウモロコシなどのバイオ燃料への転
                                    換が原因だ。バイオ燃料に食料を使わないなどの取り決めが必要だと思う。 5
                                    番は金融政策によりある程度は解決できるはずだが、 市場を考えるとかなり難
                                    しいことがわかる。 どれもが一朝一夕には解決できないことばかりだ。
                                    日本の場合、 食料自給率が約41% で危機的状況だ。 お金があっても売って貰
                                    えないようになるかもしれない。 しかし現在多くの日本人は食糧危機など、ど
                                    この話かとばかりに毎日贅沢な食事をしたり、食べ残しをしたり、食べすぎて
                                    病気になったりしている。 食料の25%を捨てていると聞くと心が痛む。 解決策
                                    として穀物をそのまま食べれば食糧危機はかなり遠のく。 家畜の飼育には大量
                                    の穀物が必要で、 牛は8~10倍、 豚5倍、 鶏2~3倍の穀物が必要だそうだ。
                                    食生活の変化が食料不足の原因とも言える。 肉を食べるなというのではない
                                    が、日本人が食べすぎているのも確かだ。 反省するべきではないか。
                                    日本は世界の国と協力して上記で述べた原因を取り除く努力をするべきだ。
                                    しかし今各国は自国民の食糧確保にばかり目が向いている。 ヨーロッパや韓
                                    国、最近では中国までが安いアフリカやアジア、ロシア、東欧、 南米の国の土
                                    地を買ったり長期で借りたりしている。 日本も同じことをするだろう。しかし
                                    この政策が将来的にうまくいくかどうかはわからない。 その国の食料が不足す
                                    れば必ず大問題になるからだ。 私は日本はまず
                                    {rubyBox('休耕田', 'きゅうこうでん')}
                                    {subBox('(注1)')}を活用するべきだと思
                                    う。今、安い輸入食物に押されて日本の農業は
                                    {rubyBox('疲弊', 'ひへい')}
                                    している。 各地に多くの荒
                                    れた休耕田がある。 早急に農地に戻すように政策を転換するべきだ。 農地法の
                                    せいで新たに農業に参入することが難しいそうだ。 新規参入者を増やし農業を
                                    活発化できるように政策変更するべきだ。 ①{uBox('農業の未来に希望が出てきたとき')}、
                                    食料危機のかなりの部分が解決するのではないだろうか。
                                    {noteBox([<>
                                        (注1) {rubyBox('休耕田', 'きゅうこうでん')} : 耕作していない土地
                                    </>])}

                                </div>
                            </>,
                        options: ['輸入作物が高くなったとき',
                            '国が補助金をくれるとき',
                            '農地が増えたとき',
                            '農業が経済的に成り立つとき'],
                        correct:4
                    },
                    {
                        number: 66,
                        line: 2,
                        q: '近年の食糧危機がもたらしたものでないのは何か。',
                        qReading: null,
                        options: ['自給率の低下', '作物の高騰', '土地の買い占め', '飢餓状態の増加'],
                        correct:1
                    },
                    {
                        number: 67,
                        line: 2,
                        q: '国にしてほしい農業政策は何か。',
                        qReading: null,
                        options: ['他国で農地を確保する。', '農業に参入しやすくする。', '休耕地を売らせる。', '安い作物を輸入しない。'],
                        correct:2
                    },
                    {
                        number: 68,
                        line: 4,
                        q: '食糧危機に対する著者の考えでないのはどれか。',
                        qReading: null,
                        options: ['自給率40%は危機的状況だ。',
                            '国がするべきことも個人がするべきこともある。',
                            '国外に農地を確保してほしい。',
                            '食糧危機回避のために国際協力するべきだ。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        13
                    </>
                ),
                question: [
                    {
                        number: 69,
                        line: 4,
                        q: '学童クラブに申し込める条件はどれか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    {titleBox('学童クラブの申請')}
                                    II 対象児童 : 学童クラブに入会できる児童は、ひばり市に住所を有し、 小学
                                    校に在学中の3年生までです。 但し、 障害児は6年生までです。
                                    III 大会要件: 保護者等 (祖父母など同居家族の方を含む)の方が次のいずれか
                                    に該当することにより、 当該児童が監護を受けられないと認められる場合
                                    とします。
                                    1 就労を常態{subBox('(注1)')}としていること。 (但し、65歳以上の方は除く)※
                                    2 長期にわたり疾病の状態である、又は精神若しくは身体に障害を有し
                                    ていること。又は、 常時その看護・介護に当たっていること。
                                    3 求職活動中又は、 就労に伴う準備として技術修得に当たっていること。
                                    4 保護者の方が、 出産予定で出産前6週から出産後8週までの期間内で
                                    あること。
                                    5 育児休業を取得されている場合、 出産後1年以内であること。
                                    6 震災、 風水害、火災など災害により被害を受け、その復旧に当たって
                                    いること。
                                    就労の常態とは、 就労日数が週3日以上かつ就労時間が4時間以上。 但し日
                                    中勤務の方で午後2時30分頃に家にいる場合は除く。
                                    IV 学童クラブの利用には、 育成料及び間食費がかかります。
                                    月額5千円 (育成料4千円、 おやつ代千円)です。 但し、同一世帯{subBox('(注2)')}で学童
                                    クラブに在籍する児童が2人以上の場合、 2人目以降の児童については、
                                    1人当たり育成料{subBox('(注3)')}が半額になります。
                                    {noteBox([
                                        '(注1) 常態: 普通の状態',
                                        '(注2) 世帯: 住まいや生活するための家計を一緒にする人の集まり',
                                        '(注3) 育成料 : 育てるための料金つまり子どもの世話をする料金'
                                    ])}
                                </div>
                            </>,
                        options: ['障害がある中学生',
                            '60歳の不就労の祖父がいる',
                            '毎日9時から1時までの勤務',
                            '週4日1時から5時までの勤務'],
                        correct:4
                    },
                    {
                        number: 70,
                        line: 4,
                        q: '学童クラブの費用が正しいのはどれか。',
                        qReading: null,
                        options: ['2人在籍の場合7千円', '2人在籍の場合8千円', '3人在籍の場合9千円', '3人在籍の場合1万円'],
                        correct:2
                    },
                ],
            },
        ],
    },
    {
        name: '2016한끝_2',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、1 • 2 • 3 • 4から一つ選
                        びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q:
                            <>
                                この家を買うことは{uBox('潔く')}あきらめた。
                            </>,
                        qReading: null,
                        options: ['こころよく', 'いさぎよく', 'きよく', 'くやしく'],
                        correct:2
                    },
                    {
                        number: 2,
                        line: null,
                        q:
                            <>
                                2人の目撃者の証言には{uBox('微妙')}な食い違いがあった。
                            </>,
                        qReading: null,
                        options: ['びみょう', 'びびょう', 'みみょう', 'みびょう'],
                        correct:1
                    },
                    {
                        number: 3,
                        line: null,
                        q:
                            <>
                                {uBox('秩序')}を守らない生徒は修学旅行に連れていきません。
                            </>,
                        qReading: null,
                        options: ['ちつしょ', 'ちつじょ', 'しつしょ', 'しつじょ'],
                        correct:2
                    },
                    {
                        number: 4,
                        line: null,
                        q:
                            <>
                                海外の企業に比べ、不利な環境で研究開発に{uBox('挑んで')}いる。
                            </>,
                        qReading: null,
                        options: ['からんで', 'のぞんで', 'いどんで', 'はげんで'],
                        correct:3
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                この国は天然資源に{uBox('乏しい')}が人材は豊富である。
                            </>,
                        qReading: null,
                        options: ['くわしい', 'はげしい', 'けわしい', 'とぼしい'],
                        correct:4
                    },
                    {
                        number: 6,
                        line: null,
                        q:
                            <>
                                資料で、説明不足のところを補った。
                            </>,
                        qReading: null,
                        options: ['おぎなった', 'よそおった', 'ただよった', 'まかなった'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                果物は箱に{blankRound}、運ばれる。
                            </>,
                        qReading: null,
                        options: ['かぶせて', 'こんで', 'しめて', 'つめて'],
                        correct:4
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                残念ながら、 今はまだ将来の{blankRound}が立たないのです。
                            </>,
                        qReading: null,
                        options: ['希望', '期待', '見通し', '約束'],
                        correct:3
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                新種の{blankRound}が銀行のコンピューターシステムに侵入した。
                            </>,
                        qReading: null,
                        options: ['ブラウス', 'サイクル', 'ウイルス', 'アクセル'],
                        correct:3
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                船旅は退屈するかと思っていたが、{blankRound}に楽しく時間が過ごせた。
                            </>,
                        qReading: null,
                        options: ['矛盾', '反意', '意外', '不覚'],
                        correct:3
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                まだ体調がよくないので、 {blankRound}運動はしない方がいいでしょう。
                            </>,
                        qReading: null,
                        options: ['はげしい', 'まずしい', 'やかましい', 'なつかしい'],
                        correct:1
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                先生は{blankRound}になって相談にのってくださいました。
                            </>,
                        qReading: null,
                        options: ['親身', '親切', '親和', '親類'],
                        correct:1
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                去年生まれた子猫は、みんな元気で、{blankRound}育っています。
                            </>,
                        qReading: null,
                        options: ['どしどし', 'すくすく', 'もりもり', 'めきめき'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                彼は鉄棒ですばらしい{uBox('わざ')}を見せた。
                            </>,
                        qReading: null,
                        options: ['企画', '構造', '現象', '技術'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                昔から大雪は豊年の{uBox('きざし')}と言われている。
                            </>,
                        qReading: null,
                        options: ['まえおき', 'まえぶれ', 'あとおし', 'あとつぎ'],
                        correct:2
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                犯行の詳しい動機については、{uBox('日下')}取り調べ中です。
                            </>,
                        qReading: null,
                        options: ['漸次', '若干', '現在', '将来'],
                        correct:3
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                山田さんは、なかなか{uBox('ユニークな')}考えを持っている。
                            </>,
                        qReading: null,
                        options: ['独特な', '有名な', '美しい', 'すぐれた'],
                        correct:1
                    },
                    {
                        number: 18,
                        line: null,
                        q:
                            <>
                                彼は絶対に友だちを{uBox('あざむく')}ような人間ではない。
                            </>,
                        qReading: null,
                        options: ['くるしませる', 'だます', 'きずつける', 'まよわせる'],
                        correct:2
                    },
                    {
                        number: 19,
                        line: null,
                        q:
                            <>
                                {uBox('バランス')}のとれた食事をしようという考え方が広まってきている。
                            </>,
                        qReading: null,
                        options: ['対象', '環境', '基礎', '均衡'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、 1 • 2 • 3 • 4から一つ選びな
                        さい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: 'よほど',
                        qReading: null,
                        options: [<>日本語は僕より娘のほうが{uBox('よほど')}よくできる。
                        </>,
                            <>今朝、 私は電車の事故で学校に{uBox('よほど')}遅刻した。
                            </>,
                            <>こんなにたくさんは{uBox('よほど')}食べ切れない。
                            </>,
                            <>今ごろは、{uBox('よほど')}到着しているだろう。
                            </>],
                        correct:1
                    },
                    {
                        number: 21,
                        line: 4,
                        q: 'おろか',
                        qReading: null,
                        options: [<>彼女は日本語を話すのは{uBox('おろか')}書くこともとても上手だ。
                        </>,
                            <>能力は{uBox('おろか')}健康も大切だ。
                            </>,
                            <>困ったときは、 国の先輩に相談するも{uBox('おろか')}質問しなさい。
                            </>,
                            <>彼は、日本語を書くことは{uBox('おろか')}読むこともほとんどできない。
                            </>],
                        correct:4
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'どうやら',
                        qReading: null,
                        options: [<>{uBox('どうやら')}して明日までにこの仕事を終わらせたいと思う。
                        </>,
                            <>{uBox('どうやら')}雨はあがったらしい。
                            </>,
                            <>あまり早く話すと、 生徒には先生の言うことが{uBox('どうやら')}わからない。
                            </>,
                            <>もう子どもではないから、一人でも{uBox('どうやら')}やっていくだろう。
                            </>],
                        correct:2
                    },
                    {
                        number: 23,
                        line: 4,
                        q: 'ぺこぺこ',
                        qReading: null,
                        options: [<>熱があるので頭が{uBox('ぺこぺこ')}になってしまった。
                        </>,
                            <>あの部長は社長には{uBox('ぺこぺこ')}するが、 部下にはがみがみ言う。
                            </>,
                            <>入試前の子どもを{uBox('ぺこぺこ')}しながら見守っている毎日です。
                            </>,
                            <>サーカスの芸人が見物人を{uBox('ぺこぺこ')}させる。
                            </>],
                        correct:2
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '一括',
                        qReading: null,
                        options: [<>新婚旅行の費用は{uBox('一括')}して100万円だった。
                        </>,
                            <>彼女は{uBox('一括')}して5時間働いた。
                            </>,
                            <>今日は弟と{uBox('一括')}して買い物に行くつもりだ。
                            </>,
                            <>このような多種多様な問題を{uBox('一括')}処理することは不可能だ。
                            </>],
                        correct:4
                    },
                    {
                        number: 25,
                        line: 4,
                        q: 'キャリア',
                        qReading: null,
                        options: [<>昨日、異動の発表があって、夫の{uBox('キャリア')}は部長になった。
                        </>,
                            <>この分野の{uBox('キャリア')}になるには、 長い間の努力が必要だ。
                            </>,
                            <>先月賞をとったあの人の{uBox('キャリア')}は苦労の連続だったそうだ。
                            </>,
                            <>山田さんは外交官としての長い{uBox('キャリア')}がある。
                            </>],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、1 • 2 • 3 • 4から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q:
                            <>
                                努力すればそれ{blankRound}よい結果が出るでしょう。
                            </>,
                        qReading: null,
                        options: ['わりに',
                            'だけに',
                            'うちに',
                            'なりに'],
                        correct:4
                    },
                    {
                        number: 27,
                        line: null,
                        q:
                            <>
                                このカメラは小型{blankRound}色々な性能をそなえている。
                            </>,
                        qReading: null,
                        options: ['にともなって',
                            'だけに',
                            'ながら',
                            'にとどまらず'],
                        correct:3
                    },
                    {
                        number: 28,
                        line: null,
                        q:
                            <>
                                いろいろ心配はあるが、 何にも{blankRound}気がかりなのは就職である。
                            </>,
                        qReading: null,
                        options: ['たして',
                            'こして',
                            'おして',
                            'まして'],
                        correct:4
                    },
                    {
                        number: 29,
                        line: null,
                        q:
                            <>
                                古くなった{blankRound}まだまだ使えますよ。
                            </>,
                        qReading: null,
                        options: ['のみ',
                            'ながら',
                            'すら',
                            'とはいえ'],
                        correct:4
                    },
                    {
                        number: 30,
                        line: null,
                        q:
                            <>
                                彼は盗みをする{blankRound}飢え死にした方がいいと思っている。
                            </>,
                        qReading: null,
                        options: ['のみか',
                            'もので',
                            'くらいなら',
                            'かいもなく'],
                        correct:3
                    },
                    {
                        number: 31,
                        line: null,
                        q:
                            <>
                                あの兄弟は民話の分野は言うに{blankRound}、言語学においても大きな業績を残
                                している。
                            </>,
                        qReading: null,
                        options: ['および',
                            'およんで',
                            'およばず',
                            'およばなくて'],
                        correct:3
                    },
                    {
                        number: 32,
                        line: null,
                        q:
                            <><br/>
                                A 「彼はこの高校では有名な生徒みたいですね」<br/>
                                B 「ええ、 成績が優秀な点{blankRound}、野球部のエースですから」
                            </>,
                        qReading: null,
                        options: ['はおろか',
                            'もさることながら',
                            'をものともせず',
                            'に反して'],
                        correct:2
                    },
                    {
                        number: 33,
                        line: null,
                        q:
                            <>
                                留学生が{blankRound}というもの、研究室の学生は外国に興味を持つようになり
                                ました。
                            </>,
                        qReading: null,
                        options: ['来てから',
                            '来よう',
                            '来そう',
                            '来たから'],
                        correct:1
                    },
                    {
                        number: 34,
                        line: null,
                        q:
                            <>
                                みんなが実験を手伝ってくれないのは、心細い{blankRound}である。
                            </>,
                        qReading: null,
                        options: ['ばかり',
                            'ところ',
                            'よう',
                            'かぎり'],
                        correct:4
                    },
                    {
                        number: 35,
                        line: null,
                        q:
                            <><br/>
                                A 「山田さんは毎日遅くまで働いているけど、 体の方は大丈夫かしら。」<br/>
                                B 「うん、 その点は心配しているんだ。 いくら頑張っても、 病気になってしま
                                えば( )からね。」
                            </>,
                        qReading: null,
                        options: ['そのままだ',
                            'そのものだ',
                            'それだけだ',
                            'それまでだ'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q:
                            <>
                                君たちの{blankStarBox()}ないわけではない。
                            </>,
                        qReading: null,
                        options: ['努力',
                            'いかんでは',
                            '成功の',
                            '可能性が'],
                        correct:3
                    },
                    {
                        number: 37,
                        line: null,
                        q:
                            <>
                                仲間の会話を{blankStarBox(2)}君の名前が出てきた。
                            </>,
                        qReading: null,
                        options: ['なしに',
                            '聞くとも',
                            '聞いて',
                            'いると'],
                        correct:1
                    },
                    {
                        number: 38,
                        line: null,
                        q:
                            <>
                                その迷子の女の子は、{blankStarBox(2)}僕たちはただ途方に
                                暮れた。
                            </>,
                        qReading: null,
                        options: ['始末で',
                            '泣きだす',
                            '聞いても',
                            '名前を'],
                        correct:3
                    },
                    {
                        number: 39,
                        line: null,
                        q:
                            <>
                                彼女は{blankStarBox()}、 怒ってぜんぜん口もきいてくれな
                                い。
                            </>,
                        qReading: null,
                        options: ['けんかして',
                            'という',
                            'もの',
                            'から'],
                        correct:2
                    },
                    {
                        number: 40,
                        line: null,
                        q:
                            <><br/>
                                A 「ホテルの完成までもう少しですね。」<br/>
                                B 「完成したら、忙しくなるぞ。完成記念{blankStarBox()}
                                イベントがたくさん入っているから。」
                            </>,
                        qReading: null,
                        options: ['皮切りに',
                            'その他の',
                            'パーティーを',
                            '結婚披露宴や'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、
                        文章全体の趣旨を踏まえて、 {numberSquareBox(41)}から{numberSquareBox(45)}の中に
                        入る最もよいものを、 1 • 2 • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    アメリカの親が子供を叱る時に、子どもが目を
                                    {rubyBox('逸', 'そ')}
                                    らそうものなら、 「ちゃん
                                    と目を見てよく聞きなさい!」と怒鳴るという。 英語では相手と 「視線を合わす」
                                    ことを eye contact (「目の接触」) と表現し、アメリカの人間関係では重要な非言
                                    語行動である。 相手に 「視線を向ける」ことが{numberSquareBox(41)}、 相手から「視線をそらす」
                                    と、 何かやましいことを隠しているのではと疑われる。 これとは対照的に日本
                                    では、相手に言いがかりを付ける{numberSquareBox(42)}]、 「
                                    {rubyBox('眼', 'がん')}
                                    を付ける」という表現がある。 相手
                                    の目をじっと見ると、 いつ
                                    {rubyBox('何時', 'なんどき')}
                                    言いがかりをつけられるかもしれないことを恐れ
                                    て、対人コミュニケーションでは{numberSquareBox(43)}、 さっと目を逸らす習慣が身についてい
                                    るようである。
                                    情のこもった目つきは、口で話すのと同じほど相手に気持ちを伝えることを
                                    いった「目は口ほど物をいう」 ということわざを筆頭として、 目に代表される非
                                    言語側面が口の言語側面より信用性が高いことを示唆するものが他にもいくつ
                                    かある。 自分の目で事情をはっきりと確かめてから口に出して語れと戒めた「
                                    目で見て口で言え」 とか、 目を見ればその人のことばの真偽がわかるという「
                                    {numberSquareBox(44)}」ということわざもある。
                                    言語と非言語の信用性についてはいろいろな研究が報告されているが、もし
                                    言語と非言語の行動に矛盾が生じた時には、 その本音は*バーバルよりノンバ
                                    ーバルにあるとの結果で一致している。 その理由はいまひとつはっきりしない
                                    が、口に代表される語るという言語行動はつねに人をだます可能性がある意識
                                    行動だとわれわれが{numberSquareBox(45)}、 目を通しての非言語行動のかなりが無意識レベル
                                    のもので、 計算されない本音がここに表れるのだと、 日々の経験を通して直感
                                    しているためかもしれない。
                                    {attachBox('(岡部朗一『目は口ほどに物をいう視線』による)')}
                                    *バーバル: 「言語的な」 という意
                                </div>
                            </>,
                        options: ['コマーシャルであり',
                            'ボイコットであり',
                            'エチケットであり',
                            'カンニングであり'],
                        correct:3
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['結果として',
                            '契機として',
                            '口実として',
                            '中心として'],
                        correct:3
                    },
                    {
                        number: 43,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['相手をちらっと見て',
                            '子供をちらっと見て',
                            '相手をじっくり調べて',
                            '子供をじっくり調べて'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['目の上のこぶ',
                            '目と鼻の間',
                            '目のかたき',
                            '目は心の鏡'],
                        correct:4
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['見ていないのに対して',
                            '見ているのに対して',
                            '見ていないのによって',
                            '見ているのによって'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の文章を読んで、 後の問いに対する答えとして最もよいものを、1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: '育児に関する日本の状態を述べているのはどれか。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    「イクメン」が増えつつある。 「イクメン」 とは子育てに積極的に参加する父親
                                    のことだ。最近は学校の入学式や授業参観日にも多くの父親が参加している
                                    し、 専業主夫{subBox('(注1)')}さえいる。 しかし育児休暇を取った男性は1.23%で、 欧米に
                                    比べて大変低い。 実際に育児休暇を取った多くの男性は子育てに目覚め、とて
                                    も楽しかったと述べている。 統計によると、 父親が子育てに協力的なほど子ど
                                    もの出生率が高いそうだ。 子どもの減少に悩んでいる政府も、父親の育児への
                                    参加を促すために 「育児・介護休業法」 を改正した。 以前から男性にも育児休暇
                                    は認められていたが、更に男性の育児休暇が取りやすくなった。 しかし職場の
                                    理解がなければ権利があっても休暇は取れない。 職場環境が変わらなければこ
                                    の法律は絵に描いた餅に終わるかもしれないのだ。
                                    {noteBox(['(注1) 主夫:家事・育児などを担当する夫のこと。'])}

                                </div>
                            </>,
                        options: ['育児休暇を取る男性が増えている。',
                            '子育てに協力的な男性が増えてきている。',
                            '政府も社会もイクメンを支援している。',
                            '法律はあっても全く役に立たない。'],
                        correct:2
                    },
                    {
                        number: 47,
                        line: 4,
                        q:
                            <>
                                ①{uBox('どこの国も同じだ')}とはどういう意味か。
                            </>,
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    友人が犬をもらってきた。 彼女が飼わなければもう少しで処分される運命だっ
                                    た犬だ。 彼女のおかげで幸運にも生き延びることができた。 ペットは一度飼った
                                    ら最後まで面倒をみるのが当たり前なのに捨てる人が後を絶たない{subBox('(注1)')}。 日本
                                    で1年間に殺される犬は10年前の3分の1に減っているとはいえ約12万匹に
                                    もなる。ギリシャを訪れたときにあまりに野良犬が多いので驚いた。 人なつっ
                                    こいのでガイドに聞いてみたら案の定観光客が捨てて行った飼い犬だった。 ど
                                    この国も同じだ。 人間は本当に身勝手だ。
                                    {noteBox(['(注1) 後を絶たない : 起こらなくなることはない、続く'])}

                                </div>
                            </>,
                        options: ['野良犬が多い。',
                            '殺される犬が多い。',
                            '犬を捨てる人がいる。',
                            'ルールを守らない人がいる。'],
                        correct:3
                    },
                    {
                        number: 48,
                        line: 4,
                        q: 'お知らせで分かる応募者の行動についての説明は何か。',
                        qReading:
                            <>
                                (3)
                                <Image src={r_2016_2_48} alt={'2016_2_48'}/>
                            </>,
                        options: ['4日間拘束される。',
                            '旅行日だけ参加すればいい。',
                            '宿泊場所に行けばいい。',
                            '最低3日は拘束される。'],
                        correct:4
                    },
                    {
                        number: 49,
                        line: 4,
                        q: '著者は何が知りたいと言っているか。',
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    働き蟻や働き蜂にも怠け者がいると知って、 動物の世界も人間と同じなんだ
                                    と妙に納得してしまいました。 しかしその怠け蟻がいる方が蟻の活動がスムー
                                    ズに行くのだと聞いて驚きました。またどんなグループ分けをしても必ず怠け
                                    る者が一定数出てくるのだそうです。 私たち人間がグループで何か仕事を進め
                                    るときに必ず怠け者が出てくるとは限りません。 グループによって勤勉な人が
                                    集まったり怠け者が集まったりするので、 仕事の進捗に差が出ます。 また怠け
                                    者は必ず足を引っ張る人としてみんなから糾弾されるのが普通です。人間と昆
                                    虫たちと何が違うのでしょうか。 それとも蟻や蜂たちのような大きな集団になっ
                                    た時には人間も同じ結果が出るのでしょうか。 知りたいことです。
                                </div>
                            </>,
                        options: ['なぜ蟻や蜂に怠け者がいるのか',
                            '人間に怠け者が出てこないこと',
                            '人間にもこの法則が当てはまるかどうか',
                            '怠け蟻たちが糾弾されるのかどうか'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の文章を読んで、 後の問いに対する答えとして、 最もよいものを1 • 2
                        • 3 • 4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q: 'この会社が行っている人間の心理を掴んだ方法とは何か。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    「褒める」。 褒められると人は変わる。 褒めることを仕事にしている会社があ
                                    る。従業員の調査をする 「覆面調査会社」 だ。 普通はこのような会社は従業員の
                                    短所を見つけて報告するのだが、この会社は反対だ。 店に客として行って従業
                                    員の長所を探す。 人間探せばどこかに長所があるものだ。 それを報告する。そ
                                    れを見て直接経営者が従業員を褒めることも、 従業員に報告書をそのまま見せ
                                    ることもある。 褒められて悪い気がする人はいない。 やる気が出てその店の売
                                    り上げは上がるそうだ。 人間の心理を掴んだ方法ではないだろうか。 今褒めら
                                    れる必要を感じている人が大勢いる。 「ほめ言葉のシャワー」 という冊子が売れ
                                    ている。日常生活で口にする 「あなただとなんか安心して話せるなあ」 「いつも
                                    一生懸命やってるよね」 などという65の褒め言葉が載っている。 特別な言葉を
                                    揃えているわけではないが、読む人の心を打つのだ。 孤独感が強くなってむな
                                    しいと感じていたときに友人から贈られたこの本の中に自分が言ってほしかっ
                                    た言葉を見つけて泣いたという人もいる。 人間はいくつになっても褒められた
                                    いし認められたいのだ。 褒められると嬉しいし意欲も湧くし人にも優しくなれ
                                    る。もっと人を褒めて世の中を明るくしたらどうだろうか。
                                </div>
                            </>,
                        options: ['客として従業員を直接褒める。',
                            '調査員として従業員をその場で褒める。',
                            '報告書を基に後で従業員を褒める。',
                            '従業員の長所を経営者に連絡する。'],
                        correct:4
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '冊子はどうして売れているのか。',
                        qReading: null,
                        options: ['読んで感動するから。',
                            '褒め言葉が網羅されているから。',
                            '褒め言葉を知りたい人が多いから。',
                            '褒めてもらえない人が多いから。'],
                        correct:1
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '褒めることに対する著者の考えと違うのはどれか。',
                        qReading: null,
                        options: ['もっと人を褒めた方がいい。',
                            '褒められて気分を害する人はいない。',
                            '誰もが褒められたがっている。',
                            '褒める言葉は65の中から探せばいい。'],
                        correct:4
                    },
                    {
                        number: 53,
                        line: 4,
                        q: '瞬足の説明と合っているのはどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    運動会の季節になると速い子はもっと速く、 遅い子も何とか速く走りたいと
                                    思うものだ。 その子供達の願いを叶える靴がある。 重さ約170g、 「瞬足」 と言
                                    う。値段も決して高くなく平均 2,500円だ。 2009年に630万足も売れてヒッ
                                    ト商品になった。 日本の小学生は約700万人いるそうだから、 驚異的な数字
                                    だ。 開発会社は当初は高級品は有名ブランドに、 一般の子供靴は安い海外製品
                                    に押されていた。 だから何か画期的な製品が必要だった。 「速く走れる靴」を目
                                    指したのは子供達の真の要求に応えたからだ。 それで、コーナーを回るときに
                                    転ばない靴を作るために、 靴の裏の右足の内側と左足の外側にスパイクをつけ
                                    た。 左右が全く違った靴だ。 柔らかいゴムでスパイクを作ることでバランスよ
                                    く歩けるように工夫した。 また足形の調査から、 幅と甲の周りが細い靴にして
                                    素材も通気性の良い物に変えた。 この新製品は発売当初思ったようには売れな
                                    かった。 しかし確実なデータを元に作られた靴はやがてその良さが口コミで伝
                                    わるとあっという間に人気商品になった。 そして今では超人気ブランドになっ
                                    たのである。 左右が違う靴はそれまであり得ない存在だった。 あり得ないこと
                                    を考えつく人がいることとその実行を許す会社がある。 そこに成功の鍵があっ
                                    たと思う。
                                </div>
                            </>,
                        options: ['左右の大きさが違う。',
                            'スパイクが靴の外側についている。',
                            '決して転ばない。',
                            'ゴムのスパイクがついている。'],
                        correct:4
                    },
                    {
                        number: 54,
                        line: 4,
                        q: '瞬足の売れ行きはどうだったか。',
                        qReading: null,
                        options: ['運動会シーズンになって初めて売れるようになった。',
                            '口コミで良さが広がるまでなかなか売れなかった。',
                            'マスコミに取り上げられて爆発的に売れた。',
                            '初めは全く売れなかった。'],
                        correct:2
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '瞬足が成功した理由と違うのはどれか。',
                        qReading: null,
                        options: ['子供の願望に合わせたこと',
                            '足形の調査をしたこと',
                            'ブランド品より安いこと',
                            '他の会社にはない靴を作ったこと'],
                        correct:3
                    },
                    {
                        number: 56,
                        line: 4,
                        q:
                            <>
                                ①{uBox('消費税に手をつけなくても済む')}とはどういう意味か。
                            </>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    共通番号制度の導入が取りざたされている。 国民一人一人に番号を付けて税
                                    金や社会保障に使おうというのだ。 社会保障番号を税務を始め幅広い行政分野
                                    に利用する国、 出生時や国内居住時に強制的に住民登録番号を付与して税務だ
                                    けでなくあらゆる行政分野に使う国、 税務だけに限定している国がある。 共通
                                    番号制度は徴税の効率化や脱税の防止につながると期待されている。 日本の税
                                    制は収入の捕捉率{subBox('(注1)')}がトーゴーサン{subBox('(注2)')}とかクロヨン{subBox('(注3)')}などと言われる問題を
                                    かかえている。サラリーマンは給料から源泉徴収されるので10割だが、事業者
                                    は5割、 農家は3割しか(一説にそれぞれ9割、 6割、 3割とも言われている)
                                    収入を捕捉されない。 大変不公平だ。 税金を基にして健康保険料や保育園の料
                                    金、医療補助なども決めるから、 捕捉率が違うと不公平が拡大する。 導入して
                                    年金などの社会保障番号を共通すれば、 現在問題になっているデータの不備も
                                    防げるし所得による手当の給付も簡単になる。 ネットでの世論調査では60%以
                                    上の人が賛成している。 反対の人はプライバシーの侵害やデータ漏れなどを心
                                    配している。しかしそれ以上にメリットがあると思う。 100%は無理でも捕捉
                                    率が上がれば①{uBox('消費税に手をつけなくても済む')}かもしれない。
                                    {noteBox([
                                        '(注1) 捕捉率: どれだけ把握できるかの率',
                                        '(注2) トーゴーサン: 給与所得者は10割、 事業者は5割、 農家は3割のそれぞれの収入が税務署に捕捉されている。 それぞれの割合を数字からこう呼ぶ',
                                        '(注3) クロヨン: 給与所得者は9割、 事業者は6割、 農家は4割のそれぞれの収入が税務署に捕捉されている。 それぞれの割合を数字からこう呼ぶ'
                                    ])}


                                </div>
                            </>,
                        options: ['消費税を使ってもいい',
                            '消費税を調べなければならない',
                            '消費税を上げなければならない',
                            '消費税を上げなくてもいい'],
                        correct:4
                    },
                    {
                        number: 57,
                        line: 4,
                        q: '日本の税制の一番の問題点は何か。',
                        qReading: null,
                        options: ['収入の捕捉率に差があること',
                            'ほとんどの税金はサラリーマンが負担していること',
                            '税金がほかのことにも影響すること',
                            '徴税が円滑にいかないこと'],
                        correct:1
                    },
                    {
                        number: 58,
                        line: 4,
                        q: '共通番号制度の導入に対する著者の意見はどれか。',
                        qReading: null,
                        options: ['心配なことは何もないので導入に賛成',
                            '社会保障などが改善されるので賛成',
                            '問題が起きるかもしれないが導入に賛成',
                            '心配なことが多いので導入に反対'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、 後の問いに対する答えとして、 最もよいものを1・2
                        ・3・4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q: '電話について主にどんなことが書かれているか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    現代の若者は黒電話{subBox('(注1)')}のダイヤルの回し方がわからない。 当時の電話は携帯
                                    電話と比べると大変大きかった。 ダイヤルは指が入る大きさが必要だったし、
                                    受話器は耳と口の長さが必要だったからだ。 それが1998年の携帯では黒電話
                                    の機能全てが1センチ角ぐらいの大きさでベースバンドチップ(通信を制御する
                                    ための回路)に収まった。 画期的だった。 しかしその後携帯は更に進化を遂げ、
                                    手の中に収まる大きさになった。 2001年当時の携帯は通話・メール・インタ
                                    ーネットを複数のLSI (大規模集積回路 Large Scale Integration) で分担してい
                                    が、2008年になると音楽の再生やカメラの撮影などを1センチのシステムL
                                    SIに収められるようになった。 わずか10,000分の1ミリメートルの大きさの
                                    線を立体的に配線できるようになったからだ。 回路はウエハーと呼ばれるシリ
                                    コンの円盤状に作られる。 まず回路の設計図をレーザーでシリコンに焼き付け
                                    る。そこにアルミなどの金属を吹き付けて配線を作る。 絶縁体で土台を作る。
                                    それを磨いて平らにする。 100万分の数ミリメートルの大きさで現在は10層積
                                    み重ねることができるそうだ。 10年前のLSIの機能は現在のシステムLSI
                                    の64分の1にしかならない。 小さくなったので消費電力も減った。 現在は69
                                    gの最小の携帯もある。 しかし小さすぎるのも使いにくいので、 最近また大き
                                    くなってきている。 テレビを見る時などに画面が小さすぎて見づらいからだ。
                                    現在130g~150gの物が主流になっている。 ここに携帯の小型化は完成した
                                    と言えよう。この携帯の小型化に貢献したもう一つの要素がリチウム電池だ。
                                    リチウム電池は従来の電池に比べ、 4倍以上長持ちするので小型化が可能にな
                                    った。 リチウム電池は家庭用ビデオカメラの電池の開発に携わっていた吉野彰
                                    が10年かけて開発したもので、1992年より携帯電話に使用されるようになっ
                                    た。
                                    今後の携帯電話の開発は充電後の有効使用時間だ。 水素と酸素を化学反応さ
                                    せて発電する燃料電池はリチウム電池の10倍近い能力を持ち、 発電機能もある
                                    ので充電の必要もない。 使用頻度が高くて電池切れを起こしている人にとって
                                    朗報であろう。 現在電池自体が携帯電話ほどの大きさにまで縮小しているから
                                    現実化も近いかもしれない。
                                    {noteBox(['(注1) 黒電話: 一般用の電話は黒かったのでこう呼ばれていた'])}
                                </div>
                            </>,
                        options: ['電話の小型化について',
                            '電話発展の歴史について',
                            '携帯電話の仕組みについて',
                            '携帯電話の技術の説明について'],
                        correct:1
                    },
                    {
                        number: 60,
                        line: 4,
                        q: '携帯電話の小型化に貢献したのは何か。',
                        qReading: null,
                        options: ['システムLSI',
                            'リチウム電池',
                            'LSIとリチウム電池',
                            'システムLSIとリチウム電池'],
                        correct:4
                    },
                    {
                        number: 61,
                        line: 4,
                        q: 'なぜ小型化は完成したと言えるのか。',
                        qReading: null,
                        options: ['これ以上小さい携帯電話は作れないから',
                            'これ以上小さくする必要がないから',
                            '一番小さい携帯電話が出来上がったから',
                            '小さい携帯電話は使いにくいから'],
                        correct:2
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '現在の携帯電話に一番求められているのは何か。',
                        qReading: null,
                        options: ['携帯の軽量化',
                            '電池の小型化',
                            '使用頻度の減少',
                            '電池の使用時間の延長'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のAとBの文章を読んで、 後の問いに対する答えとして、 最もよいもの
                        を１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'AとB、 両新聞が触れていることは何か。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A新聞
                                    <div className={'question_q_reading'}>
                                        地球の温暖化防止のために急速に原子力発電所の地位が上がってきた。 原子
                                        力発電所はCO2の排出を抑えられるからだ。 ドイツは2020年までに原子力発
                                        電所を全面閉鎖するはずだったがそれを放棄することに、スウェーデンも全
                                        廃から新規建設まで考えるようになった。 特に2007年にロシアからのガス供
                                        給の停止や原油価格の急上昇後にエネルギー安全保障の面からこの傾向が強
                                        まった。 中国は2020年までに約30基を新設予定だし、 アメリカも原子力発
                                        電所に頼る傾向がある。 日本の世論調査では 「原子力発電はCO2を排出せず、
                                        地球温暖化対策に貢献する」 と考える人が、 4年前と比べて14.4ポイント増
                                        え、 50.0%に達した。 今後の原子力発電所推進も 59.6%が賛成で、 「廃止」の
                                        16.2%を大きく上回り、 原発の有用性が広まっている実態を裏付けている。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B新聞
                                    <div className={'question_q_reading'}>
                                        最近世界的に原子力発電所への回帰が言われている。 ヨーロッパの政策変更
                                        や中国を始めサウジアラビアなど多くの国が原発新設に動いている。 地球温暖
                                        化の問題やエネルギー安全保障もあり、 自国でエネルギーを賄おうとしてい
                                        る。 しかし原発の原料のウランの埋蔵量は約100年、 限りがあることを忘れる
                                        べきではない。 原発が世界中に建てられることで核開発の危険性も高まる。 ま
                                        た問題は40年~ 60年ぐらいで廃棄する放射能で汚染された建物や施設の処分
                                        費用が莫大にかかることだ。 日本では原子力は他の電力と比べて安いと言われ
                                        ているが、この費用は含まれていない。 また年々、 積み上がる高レベル放射性
                                        廃棄物が2021年には現在の約2倍4万本ほどになる。 この処分地もまだ確定
                                        していないのだ。
                                    </div>
                                </div>
                            </>,
                        options: ['世界の原発政策の傾向',
                            '日本人の原発に関する意識',
                            '原発の弱点',
                            '放射性廃棄物の問題'],
                        correct:1
                    },
                    {
                        number: 64,
                        line: 4,
                        q: 'AとBの記事の内容と合っているのはどれか。',
                        qReading: null,
                        options: ['ABとも原発推進の傾向のみを述べている。',
                            'ABとも温暖化防止には原発が必要だと言っている。',
                            'Bは原発の問題点も取りあげている。',
                            'Aは原発賛成の立場を取っている。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、 後の問いに対する答えとして最もよいものを、1・2
                        ・3・4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 65,
                        line: 4,
                        q: 'コーヒーの価格はどのようにして決まると書かれているか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    コーヒーはわが国で、
                                    {rubyBox('香', 'かぐわ')}
                                    しい風味と独特の飲み心地で親しまれている。 缶コ
                                    ーヒーやインスタント製品も買えるし、 一杯100円から200円前後のファース
                                    トフード店も登場しているためか、コーヒーの値段を気にかける人は少ないの
                                    ではないだろうか。
                                    しかしこのコーヒーは限られた発展途上国で生産されるのに、 消費されるの
                                    は欧米などの先進諸国がほとんどだ。 その上、 価格はニューヨーク商品取引所
                                    の
                                    {rubyBox('先物取引', 'さきものとりひき')}
                                    {subBox('(注1)')}で基本的に決定され、 小規模栽培が多い現地生産者は価格形成に
                                    おいて無力に等しいと言う。 こういう投機的で不公平な価格メカニズムが、 先
                                    進国消費者の無知と無関心に支えられ、 発展途上国の社会生活を著しく歪めて
                                    いると言うのが本書の基本的な認識である。 主に取り上げられているのは、 わ
                                    が国で人気の高い品種キリマンジャロだ。 アフリカ・タンザニアで生産される
                                    このコーヒーは、 生産量は多くないけれど、 酸味が強くコクのある味わいが好
                                    まれている高級種の一つだ。 著者の調査によると、 日本の喫茶店で飲むキリマ
                                    ンジャロが一杯450円だとすると生産者の取り分は僅か2円に過ぎない。最
                                    近はコーヒーの国際価格が落ち込んだ上にタンザニアのシリング相場が降下し
                                    て、 日本のコーヒー価格は現地生産者価格の800倍を超える 「驚愕の数字」にな
                                    ると言う。 「コーヒーの香味は7割が
                                    {rubyBox('生豆', 'なままめ')}
                                    {subBox('(注2)')}の生産・流通、 2割が焙煎、 1割が
                                    抽出の技術に依存する」のに、 「7割の貢献」 が何百分の一という価値にしか評価
                                    されないメカニズムこそ価格形成の歪みを示していると言うのだ。 世界のコー
                                    ヒー生産量の約4割はブラジルが占めている。 しかも天候などによって生産量
                                    は毎年変化する。 ところがブラジルの価格はニューヨークの先物取引で決まる
                                    ため、 投機対象とされて乱高下する。 アフリカの生産者があずかり知らないう
                                    ちに影響をもろにかぶってしまう。価格の下落が続くと、 家族栽培がほとんど
                                    のタンザニアでは. 生産者の生活が成り立たない。 世帯主が出稼ぎ{subBox('(注3)')}に行かざ
                                    るを得なくなるだけでなく、 子どもを学校に行かせられなくなるなど影響は大
                                    きい。 そこで生産者らの暮らしを保証する最低価格で取引を進めようというフ
                                    ェアトレードが大きな課題になってくると言う。
                                    実はこういう不公平な価格メカニズムはコーヒーに限らない。 バナナや養殖
                                    エビ、 衣料など挙げ始めるときりがない。 身の回りの品々がどういう仕組みで
                                    輸入されているか、 現地の人々の暮らしを支える仕組みはどうなっているか。
                                    本書は単にコーヒーの問題を提起するだけでなく、 私たちの暮らしと世界の繋
                                    がりを見る目を刺激して、 おいしい飲み物や食べ物が、 実は途上国の苦い現実
                                    から生まれていることを教えているのである。
                                    {attachBox('(辻村英之著 『おいしいコーヒーの経済論』 の書評-久保田千秋による)')}
                                    {noteBox([
                                        <>
                                            (注1) {rubyBox('先物取引', 'さきものとりひき')}：価格や数値が変動する商品や指数について予想を立て未来の
                                            売買を確定しておく取引
                                        </>,
                                        <>
                                            (注2) {rubyBox('生豆', 'なままめ')}：生産されたままの生の状態である豆
                                        </>,
                                        '(注3) 出稼ぎ：就職先が少ない地域に住む人が家族と離れて他の地域に行って一時的に就職すること'
                                    ])}


                                </div>
                            </>,
                        options: ['現地生産者と国際的な業者の取引で基本的な価格が決まる。',
                            '先進国と現地のフェアトレードで価格が決まる。',
                            'ブラジルのコーヒー価格が自動的に国際価格になる。',
                            'ニューヨーク商品取引所の先物取引で基本的に決定される。'],
                        correct:4
                    },
                    {
                        number: 66,
                        line: 4,
                        q: 'コーヒーの価格はなぜ不公平だと言うのか。',
                        qReading: null,
                        options: ['途上国の生産者を支援するフェアトレードがまだ実施されていないから。',
                            '途上国の生活水準があまりに低いから。',
                            '投機的な先物取引で価格が決まり、 生産者の意向が届かない仕組みだから。',
                            'コーヒーを飲むのはほとんど先進国の人々だから。'],
                        correct:3
                    },
                    {
                        number: 67,
                        line: 4,
                        q: 'コーヒー問題で取りあげていないことはどれか。',
                        qReading: null,
                        options: ['農産物価格を決めるための途上国生産者の団結',
                            '価格形成メカニズムの不公平、 不公正',
                            '途上国生産者の現状や価格メカニズムに対する先進国消費者の無知と無関心',
                            <>コーヒーだけでなく、 先進国が輸入する途上国の生産物に共通の問題がある
                                こと
                            </>],
                        correct:1
                    },
                    {
                        number: 68,
                        line: 4,
                        q: '文章全体のタイトルとしてふさわしくないのはどれか。',
                        qReading: null,
                        options: ['うまいコーヒーの苦い現実',
                            'コーヒーにフェアトレードを',
                            'コーヒーが教える不公平な価格メカニズム',
                            'タンザニアの苦しい生活'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題13 次のページは、ホテルの利用案内の抜粋である。 下の問いに対する答えと
                        して、最もよいものを１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 69,
                        line: 4,
                        q: '10,000円の部屋に1泊した場合、 いくら払うか。',
                        qReading:
                            <>
                                <Image src={r_2016_2_13} alt={'r_2016_2_13'}/>
                            </>,
                        options: ['10,500円',
                            '11,000円',
                            '11,550円',
                            '11,650円'],
                        correct:4
                    },
                    {
                        number: 70,
                        line: 4,
                        q: '解約料金が正しいのはどれか。',
                        qReading: null,
                        options: ['当日キャンセルは全て100%の解約料金を払う。',
                            '1週間前に15名宿泊を解約した場合、解約料金は払わない。',
                            '30名の予約が25名になった場合、 2名分の解約料金を払う。',
                            '当日事故で100名の団体を解約した場合、 80% の解約料金を払う。'],
                        correct:3
                    },
                ],
            },
        ],
    },
    {
        name: '2022年2回模擬試験해커스',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q:
                            <>
                                その男の人は{uBox('清々しい')}表情をしていた。
                            </>,
                        qReading: null,
                        options: ['あらあらしい', 'すがすがしい', 'ふてぶてしい', 'よそよそしい'],
                        correct:2
                    },
                    {
                        number: 2,
                        line: null,
                        q:
                            <>
                                隣の市と{uBox('合併')}し、市の名称が変わった。
                            </>,
                        qReading: null,
                        options: ['ごうへい\t ', 'ごうぺい', 'がっへい', 'がっぺい'],
                        correct:4
                    },
                    {
                        number: 3,
                        line: null,
                        q:
                            <>
                                彼の鋭い目つきは、まるで{uBox('獲物')}を狙う動物のようだった。
                            </>,
                        qReading: null,
                        options: ['えぶつ', 'とくぶつ', 'えもの', 'とくもの'],
                        correct:3
                    },
                    {
                        number: 4,
                        line: null,
                        q:
                            <>
                                国内のゲーム市場は{uBox('飽和')}した状態となっている。
                            </>,
                        qReading: null,
                        options: ['ほわ', 'ほうわ', 'ふわ', 'ふうわ'],
                        correct:2
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                先生に{uBox('無礼')}な態度を取ったことを謝罪すべきだ。
                            </>,
                        qReading: null,
                        options: ['ぶれい', 'むれい', 'ぶらい', 'むらい'],
                        correct:1
                    },
                    {
                        number: 6,
                        line: null,
                        q:
                            <>
                                この料理は{uBox('本場')}の具材とレシピで作られ、現地で食べた味そのものだった。
                            </>,
                        qReading: null,
                        options: ['ほんじょう', 'もとば', 'もとじょう', 'ほんば'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                彼は新しい部署に移るやいなや、すぐに重要なプロジェクトを{blankRound}ことになった。
                            </>,
                        qReading: null,
                        options: ['負う', '担う', '託す', '任す'],
                        correct:2
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                たまには目的もなくただ{blankRound}歩くだけの旅行も悪くない。
                            </>,
                        qReading: null,
                        options: ['ばらばら', 'ひらひら', 'ぶらぶら', 'へらへら'],
                        correct:3
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                私は常に目標を{blankRound}に置いて業務に取り組むようにしている。
                            </>,
                        qReading: null,
                        options: ['先頭', '冒頭', '路頭', '念頭'],
                        correct:4
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                人の家にお邪魔するときは、靴を{blankRound}揃えなさいとしつけられた。
                            </>,
                        qReading: null,
                        options: ['きちっと', 'すらっと', 'がらっと', 'ずらっと'],
                        correct:1
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                判断を{blankRound}しまい、取り返しのつかない事態にまで発展した。
                            </>,
                        qReading: null,
                        options: ['外して', '損なって', '誤って', '狂って'],
                        correct:3
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                店の{blankRound}を切らす前に商品の発注をしている。
                            </>,
                        qReading: null,
                        options: ['在庫', '備蓄', '倉庫', '備品'],
                        correct:1
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                普段からコンディションを{blankRound}おくこともスポーツ選手の仕事の一つだ。
                            </>,
                        qReading: null,
                        options: ['収めて', '支えて', '揃えて', '整えて'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                両親は海外への移住を反対していたが、私はそれを{uBox('押し切った')}。
                            </>,
                        qReading: null,
                        options: ['説得した', '非難した', '切望した', '強行した'],
                        correct:4
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                寝坊したが、会議には{uBox('かろうじて')}間に合いそうだ。
                            </>,
                        qReading: null,
                        options: ['十分', '確実に', '何とか', '難なく'],
                        correct:3
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                現在その情報の{uBox('ソース')}を確認中だ。
                            </>,
                        qReading: null,
                        options: ['手がかり', '背景', '真偽', '出所'],
                        correct:4
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                寮の生活に{uBox('なじむ')}のに時間はかからなかった。
                            </>,
                        qReading: null,
                        options: ['慣れる', '備える', '憧れる', '飽きる'],
                        correct:1
                    },
                    {
                        number: 18,
                        line: null,
                        q:
                            <>
                                このミステリーサークルの謎は{uBox('未だ')}解明されていない。
                            </>,
                        qReading: null,
                        options: ['ごくわずかしか', '相も変わらず', '今となっては', '考えられる限り'],
                        correct:2
                    },
                    {
                        number: 19,
                        line: null,
                        q:
                            <>
                                エレベーター設置の工事は{uBox('順調に進んでいる')}そうだ。
                            </>,
                        qReading: null,
                        options: ['はかどっている', '見合わせている', 'とどこおっている', '延びている'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '加味',
                        qReading: null,
                        options: [<>学生一人一人の特徴を{uBox('加味')}した新たな指導方針の必要性が高まりつつある。
                        </>,
                            <>一定条件を満たす労働者は雇用保険に{uBox('加味')}することが義務付けられている。
                            </>,
                            <>政府は災害で被害を受けた人の家賃を一部国で{uBox('加味')}することを発表した。
                            </>,
                            <>海外から仕入れた素材を国内の工場で扱いやすい形に{uBox('加味')}して販売している。
                            </>],
                        correct:1
                    },
                    {
                        number: 21,
                        line: 4,
                        q: '規制',
                        qReading: null,
                        options: [<>この春から、妊婦に対して医療費免除の{uBox('規制')}が導入されることが明らかになった。
                        </>,
                            <>社会生活を送るにあたって、会社の{uBox('規制')}を守ることは非常に重要である。
                            </>,
                            <>祭りの時期は、警察が車の通行を{uBox('規制')}するなどして事故の予防に努めている。
                            </>,
                            <>大学に入学するのに年齢の{uBox('規制')}はなく、誰でも教育を受ける権利がある。
                            </>],
                        correct:3
                    },
                    {
                        number: 22,
                        line: 4,
                        q: '交錯',
                        qReading: null,
                        options: [<>私は入社当初から仕事と私生活を{uBox('交錯')}しないように心掛けている。
                        </>,
                            <>議論は両者の意見を{uBox('交錯')}するという結論で落ち着きました。
                            </>,
                            <>春は新しい出会いもあれば別れもある、複雑な思いが{uBox('交錯')}する季節だ。
                            </>,
                            <>この絵は誰もが写真と{uBox('交錯')}してしまうくらい精巧に描かれている。
                            </>],
                        correct:3
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '未開',
                        qReading: null,
                        options: [<>山の{uBox('未開')}の地形を生かした施設を作るのにずいぶんと苦労した。
                        </>,
                            <>人事担当者に問い合わせたところ、結果発表の日時は{uBox('未開')}だそうだ。
                            </>,
                            <>この旅館の自慢はなんといっても{uBox('未開')}の温泉が湧いているところだ。
                            </>,
                            <>探検家たちは誰も足を踏み入れたことのない{uBox('未開')}の地にたどり着いた。
                            </>],
                        correct:4
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '打ち明けた',
                        qReading: null,
                        options: [<>その航空会社はこれまでの常識を覆すような新たな戦略を{uBox('打ち明けた')}。
                        </>,
                            <>ずっと悩み続けるぐらいなら、早く{uBox('打ち明けて')}楽になればいいのにと思う。
                            </>,
                            <>イベントの司会の件について、担当者と大まかな流れを{uBox('打ち明けた')}。
                            </>,
                            <>寝る時間さえも惜しみながら研究に{uBox('打ち明けて')}いたあの頃が懐かしい。
                            </>],
                        correct:2
                    },
                    {
                        number: 25,
                        line: 4,
                        q: 'おおげさ',
                        qReading: null,
                        options: [<>肉体的な疲労だけでなく、{uBox('おおげさ')}なストレスも心身に影響を与える。
                        </>,
                            <>いくらかわいそうでも野生動物を{uBox('おおげさ')}に保護してはいけません。
                            </>,
                            <>{rubyBox(' 吉田', 'よしだ')}
                                さんは相手の話にいつも{uBox('おおげさ')}にうなずくところがある。
                            </>,
                            <>歴史に名を残す人物の中には{uBox('おおげさ')}な発想で周囲を驚かせた人が多い。
                            </>],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: 4,
                        q:
                            <>
                                都心の朝の満員電車{blank}、息もできないくらいで朝からぐったりと疲れてしまう。
                            </>,
                        qReading: null,
                        options: ['ならでは',
                            'ときたら',
                            'にしては',
                            'にかかわり'],
                        correct:2
                    },
                    {
                        number: 27,
                        line: 4,
                        q:
                            <>
                                あの人は物事をあまり深く考察せず、楽観的に{blank}きらいがあるようだ。
                            </>,
                        qReading: null,
                        options: ['考え',
                            '考えた',
                            '考えて',
                            '考える'],
                        correct:4
                    },
                    {
                        number: 28,
                        line: 4,
                        q:
                            <>
                                子供が一人で料理を始めたが、あまりの手際の悪さに黙って{blank}、結局手伝ってしまった。
                            </>,
                        qReading: null,
                        options: ['見ていられず',
                            '見るかたわら',
                            '見ないまでも',
                            '見るとばかりに'],
                        correct:1
                    },
                    {
                        number: 29,
                        line: 4,
                        q:
                            <>
                                我が社は大切な情報が社外に漏れないように厳重に管理している。部長{blank}、勝手に持ち出すことはで
                                きない。
                            </>,
                        qReading: null,
                        options: ['はおろか',
                            'といえども',
                            'に至っては',
                            'ともなれば'],
                        correct:2
                    },
                    {
                        number: 30,
                        line: 4,
                        q:
                            <><br/>
                                (オンラインショップのお知らせで)<br/>
                                交換・返品をご希望の場合、商品到着後７日以内にお申し込みください。それ以降のご要望は{blank}ので、
                                ご了承ください。
                            </>,
                        qReading: null,
                        options: ['承れません',
                            'いただけません',
                            '伺いません',
                            '存じません'],
                        correct:1
                    },
                    {
                        number: 31,
                        line: 4,
                        q:
                            <>
                                春に昇進して以来、平日は仕事に追われて自分の時間が全くなくなってしまった。{blank}、責任も一段と重く
                                なったのでストレスが溜まっている。
                            </>,
                        qReading: null,
                        options: ['直ちに',
                            'まさしく',
                            'その上',
                            'もっとも'],
                        correct:3
                    },
                    {
                        number: 32,
                        line: 4,
                        q:
                            <>
                                地球温暖化により世界中が深刻な災害に見舞われているなか、日本国内でも{blank}集中豪雨が多発し、
                                河川の氾濫などによる甚大な被害がもたらされている。
                            </>,
                        qReading: null,
                        options: ['例年からすれば',
                            '例年にとどまらず',
                            '例年にもまして',
                            '例年であろうと'],
                        correct:3
                    },
                    {
                        number: 33,
                        line: 2,
                        q:
                            <><br/>
                                妻「明日、中央動物公園に行かない？ 家からだと、電車で2時間はかかるけど。」<br/>
                                夫「{blank}けど、ちょっと遠いからなあ。今週、仕事で疲れたから、来週にしてくれない？」
                            </>,
                        qReading: null,
                        options: ['行けなくもない',
                            '行きたくもない',
                            '行かないではいられない',
                            '行かないではおかない'],
                        correct:1
                    },
                    {
                        number: 34,
                        line: 2,
                        q:
                            <><br/>
                                息子「風邪は治ったと思うんだけど、なかなか体調が戻らなくて。今日も学校を休もうかなあ。」<br/>
                                父 「安静に{blank}、バイトなんかに行くからだ。」
                            </>,
                        qReading: null,
                        options: ['するまでもないのに　',
                            'させたそばから',
                            'していればいいものを',
                            'していればいいとはいえ'],
                        correct:3
                    },
                    {
                        number: 35,
                        line: null,
                        q:
                            <>
                                昨日の授業はチーム発表だったのに、発表者の
                                {rubyBox('山田', 'やまだ')}
                                君に急に休まれてしまった。結局
                                {rubyBox('佐藤', 'さとう')}
                                さんが頑張ってくれ
                                たのだが、
                                {rubyBox('山田', 'やまだ')}
                                君のかわりに危うく発表{blank}。
                            </>,
                        qReading: null,
                        options: ['させるべきだった',
                            'させるものだった',
                            'させられるはずだった',
                            'させられるところだった'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q:
                            <>
                                うちの犬はいたずらが大好きで、腹が立つことも多いのだが、いたずらして{blankStarBox()}
                                ので、つい許してしまう。
                            </>,
                        qReading: null,
                        options: ['といったらない',
                            '困ったような',
                            '表情のかわいさ',
                            '怒られた時にする'],
                        correct:3
                    },
                    {
                        number: 37,
                        line: null,
                        q:
                            <>
                                高校生の時はいつも部活の練習があって、家族と海外{blankStarBox()}行くことができな
                                かったが、両親が部活を応援してくれたから頑張ることができた。
                            </>,
                        qReading: null,
                        options: ['にさえ',
                            'はおろか',
                            '旅行',
                            '食事'],
                        correct:4
                    },
                    {
                        number: 38,
                        line: null,
                        q:
                            <>
                                アドバイスを求められてもいないのに、ついおせっかいなことを言ってしまうことがある。いくら相手のためと
                                思っても{blankStarBox(1)}のかもしれない
                            </>,
                        qReading: null,
                        options: ['くらいなら',
                            'ほうがいい',
                            '嫌われる',
                            '何も言わない'],
                        correct:3
                    },
                    {
                        number: 39,
                        line: null,
                        q:
                            <>
                                この企画の実施にさまざまな問題があることは私も理解していたが、これ程とは予想できなかった。しかし、反
                                対する上司に{blankStarBox()}わけにはいかない。
                            </>,
                        qReading: null,
                        options: ['途中で投げ出す',
                            '無理を言って',
                            '進めさせてもらった',
                            '手前'],
                        correct:4
                    },
                    {
                        number: 40,
                        line: null,
                        q:
                            <>
                                免疫力を維持するための方法は様々あるが、たんぱく質とビタミンやミネラルなどの微量栄養素がとれていれ
                                ば、ある程度は感染症にかかりにくい体を作る{blankStarBox()}。
                            </>,
                        qReading: null,
                        options: ['いる',
                            'ことが',
                            'とされて',
                            '可能だ'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7
                        次の文章を読んで、文章全体の趣旨を踏まえて、 {numberSquareBox(41)}から{numberSquareBox(45)}の中に入る最もよいもの
                        を、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    {titleBox('時間管理')}
                                    時間が足りないと多くの人が感じています。したいこととしなければいけないことのバランスが取れずに、これで
                                    は足りないと思うのです。人は誰しも1日24時間を与えられていて、増やすことも後で使うために{numberSquareBox(41)}。
                                    世の中には時間管理の方法があふれていますが、どの方法でも最初にすべきは実態を把握することです。自分が
                                    何にどれくらいの時間を使っているのか、行動の記録を取ってみましょう。子どもの時、夏休みの過ごし方などの予
                                    定表を作ったことがあると思いますが、予定通りに過ごせたことなどないはずです。まして大人になると、ありふれ
                                    た日常の細々とした行動が多くなります。それを1週間でいいので、全て記録するのです。
                                    自分の行動を記録することは、{numberSquareBox(42)}という理想の自分とのギャップを認識することに繋がります。そして、人は
                                    自分の行動を可視化すると、控えたほうがいい行動を減らそうと考えるものです。{numberSquareBox(43)}、自分の行動を記録するこ
                                    と自体が行動を改善する効果を持っていると言えます。
                                    その後は、自分の中で優先順位が高いことに時間を割り当てましょう。これには行動記録が役に立ちます。
                                    記録した内容を、完全に自由に使える時間と就業時間のように他のことができない時間に分けてください。そうす
                                    ると、行動は制限されるけれど自由になれる時間というものが見えるはずです。例えば、通勤のために移動している
                                    時間がそれに当たります。この隙間のような時間にできることを割り当てれば使える時間が増えるのは、{numberSquareBox(44)}で
                                    しょう。
                                    ぼんやりと
                                    {rubyBox('無為', 'むい')}{subBox('(注)')}
                                    に過ごす1時間も、家族や友人と過ごす充実した1時間も、過ごす量としての時間に変わりはあ
                                    りません。しかし、時間の質を変えるという視点を持つことで、人生を変えることが{numberSquareBox(45)}。
                                    {noteBox([
                                        <>
                                            (注) {rubyBox('無為', 'むい')}
                                            に過ごす：何もしないでぶらぶらしていること
                                        </>
                                    ])}

                                </div>
                            </>,
                        options: ['取っておきかねません',
                            '取っておくことはできかねます',
                            '取っておくこともできません',
                            '取っておけないと考えます'],
                        correct:3
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['こうありたい',
                            'そうありたい',
                            'そうしたい',
                            'ああしよう'],
                        correct:1
                    },
                    {
                        number: 43,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['おまけに',
                            'すなわち',
                            'とはいえ',
                            'しかしながら'],
                        correct:2
                    },
                    {
                        number: 44,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['想像にとどまらない',
                            '想像にかたくない',
                            '想像するに堪えない',
                            '想像させられてならない'],
                        correct:2
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['できるものと思います',
                            'できるとは驚きです',
                            'できると言わんばかりです',
                            'できるといったところです'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の(1)から(4)の文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・
                        4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: 'この文章で筆者が述べていることは何か。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    金魚は家庭で飼育できる魚の一つである。様々な模様や色の美しさから人気があるが、体の色は一生一定というわけ
                                    ではない。遺伝{subBox('(注)')}的な要因もあるが、金魚の場合は環境による影響が少なくない。一般に、日光が当たらない環境下で
                                    長時間飼育されると体の色が薄くなる。人間が太陽光に当たれば日焼けをするように、金魚の体の色も変化するという
                                    わけである。また、周囲の色に合わせて体の色を変えることも実証されている。色が薄くなると取引価格が下がる。この
                                    ため、金魚を高価格で販売したい場合は屋外で飼育するか、周りの環境を濃い色に整えるなどする必要がある。
                                    {noteBox(['(注) 遺伝：生物の形質が親から子、孫に伝わること。'])}

                                </div>
                            </>,
                        options: ['金魚の体の色が変化すると、金魚の価値が下がることがある。',
                            '金魚の体の色や模様は、一生変化し続けていく。',
                            '遺伝による原因で金魚の色が一生変わらない。',
                            '金魚を飼育する際は、日が当たらないようにするほうがいい。'],
                        correct:1
                    },
                    {
                        number: 47,
                        line: 4,
                        q: 'このメールを送った目的は何か。',
                        qReading:
                            <>
                                (2)
                                以下は、ある企業から病院に送られたメールである。
                                <div className={'question_q_reading'}>
                                    医療法人社団 {rubyBox('大野', 'おおの')}病院
                                    総務部
                                    {rubyBox('田中', 'たなか')}
                                    {rubyBox('明', 'あきら')}
                                    様
                                    いつも大変お世話になっております。
                                    {rubyBox('健美', 'たけみ')}
                                    製薬の
                                    {rubyBox('鈴木', 'すずき')}
                                    でございます。
                                    昨日御注文いただきました「消毒用エタノールP」ですが、現在生産計画をはるかに上回る需要となり、
                                    不本意ながら、安定した供給の見込みがいまだ立っておりません。
                                    つきましては、代替品として「消毒用エタノールX」のご購入を御検討いただきますよう、何卒お願い申
                                    し上げます。
                                    XはPより安価ながらもおおむね同等の効用が厚生省より認められており、Xであれば即日発送が可能で
                                    ございます。
                                    以上、取り急ぎお詫びかたがたご案内申し上げます。
                                    {attachBox(
                                        <>
                                            {rubyBox('健美', 'たけみ')}
                                            製薬株式会社
                                            営業課長 {rubyBox('鈴木', 'すずき')}
                                            {rubyBox('博', 'ひろし')}
                                        </>
                                    )}
                                </div>
                            </>,
                        options: ['「消毒用エタノールX」の発送ができるようになったこと',
                            '「消毒用エタノールP」の生産が止まっている状況を説明すること',
                            '「消毒用エタノールX」の発送が遅れていると伝えること',
                            '「消毒用エタノールP」の代わりの品の検討をお願いすること'],
                        correct:4
                    },
                    {
                        number: 48,
                        line: 4,
                        q: '筆者によると、最近の農家にみられる特徴は何か。',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    従来の経験や重労働が求められる農業のイメージとは異なる農家が増えている。都市部からの移住者には、それま
                                    での企業勤めで得た情報処理の知識を活用し、農業の作業効率を大きく上げた例が少なくない。このような傾向は若
                                    手の農業従事者に著しく、他にも天候と市場動向を分析し、供給が少ないタイミングを見計らって売り出すことで収益を
                                    上げているケースや、市場動向から確実に購入してくれる客層に積極的に宣伝をするなど、データを活用したスタイル
                                    が特徴的である。
                                </div>
                            </>,
                        options: ['都市部からの移住者が、情報を活用して農業を成功させていること',
                            '会社で働いた経験のある人が、市場の動向をチェックしていること',
                            '若い世代が、市場の情報をもとに農業経営を行っていること',
                            '情報を利用した機械化で効率を高め、利益を上げていること'],
                        correct:3
                    },
                    {
                        number: 49,
                        line: 4,
                        q: '筆者の考えに合うのはどれか。',
                        qReading:
                            <>
                                <Image src={r_2022_2_49} alt={'r_2022_2_49'}/>
                            </>,
                        options: ['男性の家事負担が少ないので、女性の睡眠時間が短くなっている。',
                            '外で働く女性が増えたので、女性の睡眠時間が短くなっている。',
                            '家事だけを行う女性を増やすことが、女性の睡眠時間の増加につながる。',
                            '家事を負担する男性を減らすことが、女性の睡眠時間の増加につながる。'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の(1)から(3)の文章を読んで、後の問いに対する答えとして最もよいものを、1・2・3・
                        4から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q:
                            <>

                            </>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    {rubyBox('長谷川等伯', 'はせがわとうはく')}
                                    {subBox('(注1)')}
                                    の「
                                    {rubyBox('松林図', 'しょうりんず')}
                                    」という絵は日本美術を代表する傑作の一つとして名高い。しかし有名な絵画でも実際に見
                                    るとそれほど感動しない場合もあるからと{uBox('軽い気持ち')}で見に行った。ところが、この絵画を初めて見た時、自分の安易
                                    な想像をはるかに上回る感動に襲われ、しばらく絵の前から動けなかった。
                                    {rubyBox('墨', 'すみ')}{subBox('(注2)')}
                                    の
                                    {rubyBox('濃淡', 'のうたん')}{subBox('(注3)')}
                                    だけで描かれた白黒の風景はとて
                                    も簡素だ。霧のような湿った大気が辺り一帯を覆う中、けむって見える数本の松と遠くに見える山。ただそれだけなの
                                    だが、厳か、神聖、静寂、どの言葉でも表現しきれない世界が目の前に広がる。湿気を含んだ朝の冷たく清らかな空気
                                    を肌に感じ、何も描かれていないはずの余白にその空気が見えるのだ。そして自ずと涙が出てくるような悲しみが漂っ
                                    ていた。
                                    「見えないものを見えると思わせるのが優れた作品であり、音楽なら色、絵画なら空気、シナリオなら愛である」と、
                                    かつてシナリオ教室の先生がおっしゃったことを思い出す。愛と限定せずとも感情は目に見えない。芸術はその見えな
                                    いものを表現し、鑑賞者である我々に共感とも追体験ともいえる感動をもたらしてくれる。
                                    後に知ったのだが、
                                    {rubyBox('等伯', 'とうはく')}
                                    は最愛の息子を亡くして間もない頃、誰の依頼でもなく「
                                    {rubyBox('松林図', 'しょうりんず')}
                                    」を自らのために描いたと
                                    いう説があり、私は心からその説に納得した。深い悲しみがあふれ出し、天才の筆は必然的に空気と内面を見事に描い
                                    たのだと思う。
                                    {noteBox([
                                        <>
                                            (注1) {rubyBox('長谷川等伯', 'はせがわとうはく')}
                                            ：16世紀の日本の画家
                                        </>,
                                        <>
                                            (注2) {rubyBox('墨', 'すみ')}
                                            ：字や絵をかくために使う材料
                                        </>,
                                        <>
                                            (注3) {rubyBox('濃淡', 'のうたん')}
                                            ：色の濃いことと薄いこと
                                        </>
                                    ])}
                                </div>
                            </>,
                        options: ['有名な絵画ではあるが、この絵はたいしたことはないはずだという気持ち',
                            '日本美術の傑作だが、直接見ることにはあまり意味がないという気持ち',
                            '感動しないこともあるから、この絵にも期待しないでいようという気持ち',
                            '見ても感動はしないが、想像を超えた素晴らしさがあるだろうという気持ち'],
                        correct:3
                    },
                    {
                        number: 51,
                        line: 4,
                        q: '筆者によると、優れた芸術とはどのようなものか。',
                        qReading: null,
                        options: ['作品の空気を見せるもの',
                            '見えない感情を示すもの',
                            '同じ体験を与えてくれるもの',
                            '作者への共感を感じさせるもの'],
                        correct:2
                    },
                    {
                        number: 52,
                        line: 4,
                        q:
                            <>
                                「{rubyBox('松林図', 'しょうりんず')}
                                」について、筆者はどのように考えているか。
                            </>,
                        qReading: null,
                        options: ['子供を亡くしたときの悲しい気持ちが込められている傑作である。',
                            '子供を亡くしてしまったので、自分だけのために描いた傑作である。',
                            '子供を亡くした絶望と子供への愛情が感じられる傑作である。',
                            '子供を亡くして悲しさがあふれ出たように、才能があふれている傑作である。'],
                        correct:1
                    },
                    {
                        number: 53,
                        line: 4,
                        q: <>
                            ①{uBox('残りの言語')}とあるが、どういう言語を言っているのか。
                        </>,
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    世界には国の数より言語の数の方が多いというのは既に周知のことであろう。では、実際に地球上には幾つの言語が
                                    存在するのだろうか。正確には数え切れないが、8,000前後という{rubyBox('膨大', 'ぼうだい')}
                                    な数が唱えられることもある。さらに驚くことに、
                                    世界には70億人もの人口がいながら、半分以上の人々は8,000のうちのわずか23の言語で生活しているという。①{uBox('残りの言語')}
                                    の大半は少数言語である。そして現在、約2,500の言語が消滅の危機にある。言語の消滅とは、その言語の
                                    {rubyBox('話者', 'わしゃ')}
                                    がいなくなることを意味する。現在、言語の消滅の理由として一番多いのは、②{uBox('経済的理由による母語からの離反')}である。少数言語を身に付けてもその言語を使って仕事に就くことは難しいため、より多
                                    数派の言語の習得を優先させるからだ。また、差別による迫害や虐殺などから逃れるために母語を手離さざるをえない
                                    場合も存在する。そして、これまでのように親から子へと受け継がれていくことがなくなり、{rubyBox('話者', 'わしゃ')}
                                    が減っていくのだ。
                                    しかし、言語は文化と結びついている。自分と社会を認識するには、その土地独自の風土や文化を表す言語が必要
                                    で、言語の維持は土地に根差した文化の保護に他ならない。つまり、多様な文化が存在する豊かな社会を形成するた
                                    めには、少数言語の保護が必要なのだ。日本においても、アイヌ語{subBox('注')}の{rubyBox('話者', 'わしゃ')}
                                    は現在、わずか数人しか残っておらず、存続
                                    が極めて深刻な状態である。少数言語の消滅は決して遠い場所の話ではない。
                                    {noteBox(['(注) アイヌ語：日本列島関東以北に居住するアイヌ民族の言語'])}
                                </div>
                            </>,
                        options: ['世界の人口のうち、半分以上の人々が話す言語',
                            '世界の人口のうち、半分以上の人々が話す23の言語以外の言語',
                            '世界で話されている言語のおよそ半数の言語',
                            '世界で話されなくなりつつある約2,500の言語\n'],
                        correct:2
                    },
                    {
                        number: 54,
                        line: 4,
                        q:
                            <>
                                ②{uBox('経済的理由による母語からの離反')}が起こるのはなぜか。
                            </>,
                        qReading: null,
                        options: ['多数派の言語を使って生活をしたほうが、仕事を得やすいから',
                            '少数言語を話すと差別を受け、生活をするのが難しくなるから',
                            '自分の国を離れて、他の国で働くために母語を使わなくなるから',
                            '母語を使って生活をしたほうが、高い収入を得られるから'],
                        correct:1
                    },
                    {
                        number: 55,
                        line: 4,
                        q: 'この文章で、筆者が最も言いたいことは何か。',
                        qReading: null,
                        options: ['少数言語とその文化を保護するために、世界の言語使用状況を見直すべきだ。',
                            '少数言語とその文化の消滅を身近に感じて、差別のない社会を作るべきだ。',
                            'どこでも多様な言語で生活できる社会を作るために、少数言語を保護すべきだ。',
                            '失われつつあるその土地固有の文化を守るために、少数言語を保護すべきだ。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q:
                            <>
                                {uBox('自身を正当化する')}とあるが、なぜ人はそのような行動をするのか。
                            </>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    甘いケーキを食べたいけれど太りたくない、など矛盾する考えを同時に持つ時、我々は不快感を覚え心理的緊張を
                                    強いられる。これを社会心理学で「認知的不協和」という。我々にはそれぞれ物事に対する態度、意見、信念などがあ
                                    り、これらが自分の中でできるだけ調和のとれたものとなるように調整しようとする傾向がある。そのため矛盾により不
                                    快感が生じると、それを解消するための新しい認知が必要となる。これは簡単に言えば{uBox('自身を正当化する')}ことであるが、
                                    矛盾する一方を変化させる、重要性を変える、新たな要素を加える、などの方法が知られている。
                                    童話「{rubyBox('酸', 'す')}っぱいブドウ」が有名な例である。森できつねがおいしそうなブドウを発見するが高い場所にあって手が届
                                    かないため、「あれは{rubyBox('酸', 'す')}っぱいブドウだ」と考えて立ち去るという話だ。「おいしそう」を「{rubyBox('酸', 'す')}
                                    っぱいに違いない」と変えることで「届かない」との不協和を解消したわけだ。
                                    このように不快な情報を自分に都合よく解釈する心理は、思い当たる人が多いだろう。心の動きは多くの人の間で同
                                    じように現れるものだと、心理学は教えてくれる。
                                    また、心理学を利用することにより、人の行動を予測したり、促したりすることができるようにもなった。例えば心理学
                                    はマーケティングにもよく適用されるという。認知的不協和の状態を利用し、それを解消するために必要な商品があると
                                    提示し、購買へと誘導すればいいのだ。心理学のいうことが全ての人に当てはまるとは限らないと心得つつも、大いに
                                    納得してしまう。少し知るだけでも心理学は興味深いものだ。
                                </div>
                            </>,
                        options: ['考えが矛盾している状態をなくすため',
                            '自分の気持ちを落ち着かせるため',
                            '新しい考えを作り出すため',
                            '嫌な考えから逃れるため'],
                        correct:1
                    },
                    {
                        number: 57,
                        line: 4,
                        q:
                            <>
                                筆者によると、「「{rubyBox('酸', 'す')}っぱいブドウ」の例は何を表しているか。
                            </>,
                        qReading: null,
                        options: ['手に入りにくいものを手に入れようとする工夫',
                            'すぐそばにあるが手に入らないものを諦める手順',
                            '手に入らないものを発見したときの不快な気持ち',
                            'ほしいけれど手に入らないという状況での心の動き'],
                        correct:4
                    },
                    {
                        number: 58,
                        line: 4,
                        q: '心理学について、筆者はどのように述べているか。',
                        qReading: null,
                        options: ['心理学は大多数の人に共通する心の動きを説明でき、様々なところで活用されている。',
                            '心理学は全ての人の心の動きが均一ではないと納得させられる、おもしろいものだ。',
                            '心理学は人の心の動きについての研究だけでなく、商品開発にも使われつつある。',
                            '心理学の発展により、ほとんどの人は同じような心の動きを見せることが証明された。'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ
                        選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q:
                            <>
                                ①{uBox('それまでの日本')}とは、どういう意味か。
                            </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    {rubyBox('法隆寺', 'ほうりゅうじ')}
                                    は現存する世界最古の木造建造物であり、今なお{rubyBox('建立', 'こんりゅう')}
                                    した時代の姿を残していると言われている。6世紀半ば
                                    朝鮮から日本に仏教が伝来するとともに、寺を{rubyBox('建立', 'こんりゅう')}
                                    する大工らも日本に渡り、仏教建築様式を伝えた。当時、朝鮮から
                                    持ち込まれた建築技術は、①{uBox('それまでの日本')}の建築物にはない美しく壮大かつ異国的なものであった。{rubyBox('法隆寺', 'ほうりゅうじ')}
                                    は607年に{rubyBox('建立', 'こんりゅう')}されたが、670年には火災により大部分を焼失した。その後間もなく再建が進められ、遅くとも30年後には創建
                                    当初の姿に再興されたそうだ。現存する寺はその時のものだとされている。
                                    その{rubyBox('法隆寺', 'ほうりゅうじ')}の大修理が1934年から1985年の間に行われた。建物のすべての木材をいったんばらばらに解体し、
                                    傷んだものを差し替え、再度組み立て直すという大作業だ。当初、修理を行う{rubyBox('宮大工', 'みやだいく')}{subBox('注1')}
                                    は、寺の中心部分の木材がかなり傷んでいるように見えたため、それらのほとんどを新しいものに変えなければならないと予想した。
                                    高温多湿の日本では、木造建造物は雨風などにより劣化するからだ。しかし、解体時に古びた柱にカンナをかける{subBox('注2')}と、
                                    その木材の内部は木の香りが漂うほどの良い状態であったそうだ。よって、実際に修理が必要になったのは、柱の根元部分や屋根などの
                                    雨風に直接さらされる部分がほとんどだったという。これにより②{uBox('新しい材料への取り替えは最小限にとどまった')}そうだ。
                                    こういった部分的な修理を可能にしたのは、柱や{rubyBox('梁', 'はり')}{subBox('注3')}
                                    が複数本の木材で構成されていることによる。各木材は、部材同
                                    士を直角や斜めに組み合わせるなどの特殊な技法でつなぎ合わされており、解体して腐った部分のみ取り替えることを
                                    可能にした。その結果、法隆寺の建物の骨格部分と内部には、再興時に使用された木材を残すことができたのだ。そし
                                    て、傷んだ部分のみ、同じ種類の木材を使って部分的に取り替えることで、柱の形状を変えずに昔のままの姿を保つこ
                                    とができている。つまり、{rubyBox('法隆寺', 'ほうりゅうじ')}は、複数回の解体修理や部分的な木材の取り替えを想定した上で設計されたのだ。
                                    創建以来、法隆寺の西側には宮大工が代々住み続け、巧みな技術を受け継ぎながら修理や点検を行ってきた。近代
                                    以前では、13世紀、17世紀初頭、17世紀末に大規模な修理があり、それ以外にも屋根の取り替えなどが行われた。木
                                    造建造物は劣化しやすい建築物ではあるが、適切な管理と修理を行えば、姿を大きく変えることなく長期にわたって使
                                    用することができるということを、{rubyBox('法隆寺', 'ほうりゅうじ')}は物語っている。
                                    {noteBox([
                                        <>
                                            (注1) {rubyBox('宮大工', 'みやだいく')}：寺や神社の建築や修理を専門とする技術者
                                        </>,
                                        '(注2) カンナをかける：木材を削る道具で木材の表面を平らにすること',
                                        <>
                                            (注3) {rubyBox('梁', 'はり')}：建物の内部に付ける、屋根や柱を支える木材
                                        </>
                                    ])}
                                </div>
                            </>,
                        options: ['仏教が広まる以前の日本',
                            '仏教の建築様式が伝わる以前の日本',
                            '独自の建築様式が発達した日本',
                            '仏教の建築様式が大きく発展した日本'],
                        correct:2
                    },
                    {
                        number: 60,
                        line: 4,
                        q:
                            <>
                                ②{uBox('新しい材料への取り替えは最小限にとどまった')}とあるが、なぜか。
                            </>,
                        qReading: null,
                        options: ['雨風に直接さらされる部分全体を取り替えたから',
                            '木材の状態が非常に良く、建物を解体しなかったから',
                            '建物の中心部分の劣化が少なかったから',
                            '建物の中心部分が傷んでいて、全て解体したから'],
                        correct:3
                    },
                    {
                        number: 61,
                        line: 4,
                        q:
                            <>
                                昔のままの形を保つために、{rubyBox('法隆寺', 'ほうりゅうじ')}にはどのような工夫がなされているか。
                            </>,
                        qReading: null,
                        options: ['傷みやすい部分に特殊な加工を施し、修理を不要にしている。',
                            '柱の中心部分に丈夫で長持ちする木材を多く使うようにしている。',
                            <>解体修理に対応できるような{rubyBox('宮大工', 'みやだいく')}を常にたくさん準備している。
                            </>,
                            '後の時代に木材の部分的な取り替えが可能な作り方にしている。'],
                        correct:4
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '筆者の考えに合うのはどれか。',
                        qReading: null,
                        options: ['木造建造物は、高温多湿な日本においては特別な修理が必要だ。',
                            '仏教建築様式が、日本の木造建造物に与えた影響は非常に大きい。',
                            <>{rubyBox('法隆寺', 'ほうりゅうじ')}の姿は、特殊な設計と適切な管理によって保たれている。
                            </>,
                            '木造建造物は、木材の部分的な交換を想定して作るべきだ。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のAとBの文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から
                        一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: '人の才能について、AとBはどのように述べているか。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        人にはもともと何かしらの才能が備わっているということに異論を唱える人はいないだろう。それが後に優れた能
                                        力となるのであるが、どのようなすばらしい才能を持ち合わせていても困難に遭遇することはある。その時に諦める
                                        ことなく、ひたすら努力することができる粘り強さがある人が、「能力がある人」になるのだ。
                                        困難な時にも諦めず、努力を続けられる力を身に付けるには、幼いころからの周りの大人達の適切な対応が欠か
                                        せない。まず、小さな事でも子供を褒め、自信を持って物事に取り組めるよう自己肯定感を持たせることだ。また、
                                        子供が壁にぶつかったときには、それを乗り越えられるよう見守ることも大切だ。このような教育が子供の潜在能力
                                        を引き出し、強い心を育て、のびのびと能力を発揮させるのだ。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        自分の青春時代を顧みると、根拠の無い自信があり至って楽観的だった。絵を描くことが得意だったので漫画を
                                        描いていたら、周囲が{rubyBox('殊', 'こと')}の{rubyBox('外', 'ほか')}{subBox('注1')}
                                        喜んでくれたのが嬉しくて、夢中で描くようになり、これこそが自分の才能だと感じて
                                        いた。だが突如として絵の天才が出現し、{rubyBox('呆気', 'あっけ')}
                                        なくその道を断念せざるを得なかった。そこで、自分の力とは何か
                                        と慎重に自問自答し{subBox('注2')}、別の道で生きていこうと腹をくくった{subBox('注3')}ところ、人との交わりから思いもしない絵以外の自分の
                                        才能に気づかされた。
                                        人生には幾度もつまずきが訪れる。そんな時は気持ちを切り替えられる力が最も大切だ。この力があったからこ
                                        そ、自分の才能も開花した。さまざまな才能も、生かしてこそ自らの能力となる。一つのことに固執せず、自分の能
                                        力を発揮することによって、誰もが社会に貢献できる人になれるはずだ。
                                    </div>
                                </div>
                                {noteBox([
                                    <>
                                        (注1){rubyBox('殊', 'こと')}の{rubyBox('外', 'ほか')}
                                        ：予想していたのとかなり違って、とても
                                    </>,
                                    '(注2)自問自答する：自分の心に問いかけ自分で答えを出すこと',
                                    '(注3)腹をくくる：決心する'
                                ])}
                            </>,
                        options: ['AもBも人の才能を見つけるのは容易ではないと述べている。',
                            'AもBも人には必ず才能を伸ばせる場所があると述べている。',
                            'Aはどんな子供にも才能があると述べ、Bは大人が才能を発揮するのは難しいと述べている。',
                            'Aは皆、何らかの才能を持っていると述べ、Bは一人では気づかない才能があると述べている。'],
                        correct:4
                    },
                    {
                        number: 64,
                        line: 4,
                        q: '人の能力を伸ばすために大切なことについて、AとBはどのように述べているか。',
                        qReading: null,
                        options: ['Aは強い心を育てる教育が大切だと述べ、Ｂは困難な時でも気持ちを切り替えることができる力が大切だと述べている。',
                            '2　Aは大人が子供を認めることが大切だと述べ、Bは周囲の人に認められる経験が大切だと述べている。',
                            'Aは小さなことでも大人が子供を褒めることが大切だと述べ、Bはいろいろ経験して自信をつけることが大切だと述べている',
                            'Aは困難な状況の時でも努力し続けることが大切だと述べ、Bはくじけても自分を信じることが大切だと述べている。'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ
                        選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 65,
                        line: 4,
                        q: '筆者は、「カイゼン」とはどのようなものだと述べているか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    日本のある自動車メーカーは、車の製造のみならず、「カイゼン」を生み出したことでも有名だ。「カイゼン」は日本
                                    語の「改善」に由来する言葉だが、今や世界中の多くの生産現場で使われている問題解決の手法である。この手法は
                                    トラブルの真の原因を探り、根本的な改良を目指すときに非常に有効なものの一つとされている。
                                    やり方はこうだ。一つの問題点について、「A」という理由があるとする。それに対し、「なぜAなのか」と考える。
                                    このように導き出した原因に、「なぜか」と問うことを5回繰り返す。5回繰り返すことが重要で、これを1回か2回で止め
                                    てしまうと、原因分析が不十分なため根本的な改良に結びつかず、表面的な対策で止まってしまう。これでは問題はお
                                    そらく遠からず再発するだろう。
                                    「人は理由を探したがる動物だ」と言ったのは古代ギリシャの哲学者アリストテレスだが、確かに私達は、「たまたま
                                    そうなった」と言われても納得できず、何か理由があるはずだと考えるものだ。
                                    誰もが日常的に行っている理由探しという行動だが、「カイゼン」の難しさは別のところにある。人は理由がわかった
                                    ら満足し、そこで思考を止めるものだ。しかし前述した{subBox('注1')}通り、本当の原因を探るには問いを繰り返さねばならない。これ
                                    は満足した気持ちに逆らうことで、なかなか苦しいものだ。
                                    もう一つの難しさは、問いで導いた事項が犯人捜しレベルでとどまってしまいがちな点だ。例えば、誤った資料をコピ
                                    ーしてしまったという失敗事例について、「机の上にあった」という理由を見つけたとする。なぜ机の上にあったかとい
                                    うと、同僚が置いたからで、なぜ同僚はこの机の上に資料を置いたかというと、自分の机の整理ができていないから。
                                    これでは同僚が悪いという結論になるが、原因の本質は資料管理のルールがないことかもしれない。このように、「カイ
                                    ゼン」には物事をあらゆる面から考え、追及することが必要なのだ。
                                    そして、この手法を用いることの効用{subBox('注2')}は問題の原因を突き止め{subBox('注3')}られることだけでなく、それ以上の利点があることも見
                                    逃せない。
                                    問題解決のために問いを繰り返すと、たびたび自分の管理できる範囲を超えたところに行きつくものだ。これは仕事
                                    上の問題解決はひとつの部署、ひとつの工程だけで解決するようなものではないことを意味し、多くの力を合わせ、取
                                    り組むことで生産性が上がることを示している。それを現場で働く社員一人一人に認識させられるという無形の効果が
                                    得られるという点で、このシンプルな手法は非常に優れたものになっていると評価できるだろう。
                                    {noteBox([
                                        '(注1)前述した：前の文に書いた',
                                        '(注2)効用：いい効果',
                                        '(注3)突き止める：よく調べて明確にする',
                                    ])}


                                </div>
                            </>,
                        options: ['問題となっていることの本当の原因を探し、対策を立てるための手法',
                            'トラブルの原因をなくすために、世界中で使われている手法',
                            '主に生産現場で使われる、生産量を増やすための手法',
                            '仕事の改善をする時に一番有効だとされている手法'],
                        correct:1
                    },
                    {
                        number: 66,
                        line: 4,
                        q: '筆者によると、「カイゼン」の際に問いを繰り返すのはなぜか。',
                        qReading: null,
                        options: ['1、2回の問いでは、解決できない問題が多いから',
                            '本当の原因を探すには、突きつめることが必要だから',
                            '問題が再発しないよう、有効な対策を繰り返す必要があるから',
                            '十分な対策になるには、多くの理由を探すべきだから'],
                        correct:2
                    },
                    {
                        number: 67,
                        line: 4,
                        q: '「カイゼン」手法の難しさについて、筆者はどのように述べているか。',
                        qReading: null,
                        options: ['自分の気持ちとは違う答えを探すことと、なかなか本当の理由を探せないことが難しい。',
                            '人の性質とは違う行動をしなければいけないことと、最後には個人の問題になってしまうことが難しい。',
                            '納得できない答えでも受け入れなければいけないことと、多くの点から問題を見ることが難しい。',
                            '答えが出たと思った後も問いを繰り返すことと、様々な面から物事を考えなければいけないことが難しい。'],
                        correct:4
                    },
                    {
                        number: 68,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading: null,
                        options: ['この問題解決のための手法はとてもシンプルだが難しい点もあるので、行うときは多くの人の協力が必要だ。',
                            '問題の原因を探すのはさほど難しいことではないので、一つの部署で行うことにより生産性を上げるべきだ。',
                            'この手法の素晴らしい点は、問題の解決のためには様々な協力が必要だと社員が思うようになることだ。',
                            '多くの人々で問題解決に取り組めば、いかなる問題でも本当の原因がわかり、改善することができるはずだ。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題13 右のページは、ある銀行の口座開設の案内である。下の問いに対する答えとして最もよいも
                        のを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 69,
                        line: 4,
                        q:
                            <>
                                {rubyBox('吉田', 'よしだ')}
                                さんは仕事に必要なため、銀行口座を窓口で申し込んで作ろうと考えている。しかし転居をしたばかりのた
                                め、まだ運転免許証や保険証などの住所変更手続きを全く行っていない。この場合、吉
                                {rubyBox('吉田', 'よしだ')}
                                さんが印鑑の他に持参し
                                なければいけない書類は何か。
                            </>,
                        qReading:
                            <>
                                <Image src={hackers_13} alt={'hackers_13'}/>
                            </>,
                        options: ['口座開設申込書と指定された本人確認書類2点',
                            '口座開設申込書と指定された本人確認書類1点と公共料金の領収書1点',
                            '指定された本人確認書類2点と公共料金の領収書1点',
                            '指定された本人確認書類1点と公共料金の領収書1点'],
                        correct:4
                    },
                    {
                        number: 70,
                        line: 4,
                        q:
                            <>
                                カルロさんは会社の研修のため、1年日本に住むことになったフィリピン人である。日本での在住は一時的と
                                考え、フィリピンの住所は残したままにしている。ひまわり銀行に口座を作りたい場合、まずどうしたらいいか。
                            </>,
                        qReading: null,
                        options: ['インターネットで必要事項を入力して申し込む。',
                            '銀行窓口に印鑑と本人確認書類を2点持参する。',
                            'コールサービスに電話をし、必要書類をたずねる。',
                            '銀行窓口に電話をし、必要書類を郵送する。'],
                        correct:3
                    },
                ],
            },
        ],
    },
    {
        name: '2016시사일본어',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q:
                            <>
                                商品の在庫の{uBox('有無')}について問い合わせた。
                            </>,
                        qReading: null,
                        options: ['うむ', 'ゆうむ', 'うぶ', 'ゆうぶ'],
                        correct:1
                    },
                    {
                        number: 2,
                        line: 2,
                        q:
                            <>
                                このポスターのデザインは、全体的な{uBox('統一性')}に欠けている。
                            </>,
                        qReading: null,
                        options: ['とういつしょう', 'とういつせい', 'とういちしょう', 'とういちせい'],
                        correct:2
                    },
                    {
                        number: 3,
                        line: 2,
                        q:
                            <>
                                欠陥車が引き起こした事故に対して、自動車メーカーから{uBox('賠償金')}が支払われた。
                            </>,
                        qReading: null,
                        options: ['はいそうきん', 'ばいそうきん', 'はいしょうきん', 'ばいしょうきん'],
                        correct:4
                    },
                    {
                        number: 4,
                        line: null,
                        q:
                            <>
                                日本の歌舞伎は、長い歴史を持つ{uBox('由緒')}ある舞台芸能だ。
                            </>,
                        qReading: null,
                        options: ['ゆうしょ', 'ゆいしょ', 'ゆうちょ', 'ゆいちょ'],
                        correct:2
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                その件に関しては、まだ社長からの{uBox('了承')}は得ていません。
                            </>,
                        qReading: null,
                        options: ['りょしゅう', 'りょしょう', 'りょうしゅう', 'りょうしょう'],
                        correct:4
                    },
                    {
                        number: 6,
                        line: null,
                        q:
                            <>
                                台風で被害を{uBox('被った')}地域に援助物資が送られた。
                            </>,
                        qReading: null,
                        options: ['いつわった', 'こうむった', 'かじった', 'つのった'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                勤務部署が営業から総務に変わって始めは苦労したが、事務の仕事にも慣れて徐々
                                に{blankRound}が付いてきた。
                            </>,
                        qReading: null,
                        options: ['弾み', '軽み', '励み', '丸み'],
                        correct:1
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                ホテルの部屋で火災が発生したが、ホテル側の{blankRound}対応で大事には至らな
                                かった。
                            </>,
                        qReading: null,
                        options: ['鋭利な', '急速な', '優秀な', '機敏な'],
                        correct:4
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                中小企業でも大企業{blankRound}の給料を出す会社もある。
                            </>,
                        qReading: null,
                        options: ['並み', '寄り', '余り', '離れ'],
                        correct:1
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                事務所の中を{blankRound}探したが、紛失した書類は見つからなかった。
                            </>,
                        qReading: null,
                        options: ['一向に', 'くまなく', '大いに', 'たちまち'],
                        correct:2
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                新人賞を受賞したことで、彼のもとには、今、あちこちの出版社から{blankRound}が
                                舞い込んでいる。
                            </>,
                        qReading: null,
                        options: ['スカウト', 'オーダー', 'リクエスト', 'オファー'],
                        correct:4
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                来月はスケジュールが{blankRound}詰まっていて、身動きが取れません。
                            </>,
                        qReading: null,
                        options: ['すっかり', 'びっしり', 'たっぷり', 'どっさり'],
                        correct:2
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                新しい靴が足に{blankRound}までは少し時間がかかるものだ。
                            </>,
                        qReading: null,
                        options: ['にあう', 'なつく', 'なじむ', 'したがう'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                次のサッカーの試合は、うちのチームのほうが{uBox('断然')}有利になるだろう。
                            </>,
                        qReading: null,
                        options: ['圧倒的に', 'いくらか', '相対的に', '少しだけ'],
                        correct:1
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                あの政治家は、表情がとても{uBox('人なつっこい')}。
                            </>,
                        qReading: null,
                        options: ['威厳がある', '端正だ', '親近感が湧く', '面白い'],
                        correct:3
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                {uBox('言いわけ')}ばかりしないで、素直にあやまりなさい。
                            </>,
                        qReading: null,
                        options: ['誤解', '口外', '密告', '弁解'],
                        correct:4
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                仕事ができない新人ほど、自分の{uBox('ポテンシャル')}には自信がある、という調査結果が
                                出た。
                            </>,
                        qReading: null,
                        options: ['決断力', '問題解決能力', '行動力', '潜在能力'],
                        correct:4
                    },
                    {
                        number: 18,
                        line: 2,
                        q:
                            <>
                                時間が経つとともに、話し合いがだいぶ{uBox('煮つまってきた')}。
                            </>,
                        qReading: null,
                        options: ['結論に近づいてきた', '行き詰ってきた', '混乱してきた', '熱中してきた'],
                        correct:1
                    },
                    {
                        number: 19,
                        line: null,
                        q:
                            <>
                                農家で農作物の{uBox('しわけ')}をするアルバイトを募集している。
                            </>,
                        qReading: null,
                        options: ['収穫', '栽培', '選別', '出荷'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: '禁物',
                        qReading: null,
                        options: [<>こちらでのおタバコは{uBox('禁物')}ですので、あちらの喫煙所でお願いします。</>,
                            <>マリファナが{uBox('禁物')}ではなくなった国もあるらしい。</>,
                            <>長距離運転に、寝不足は絶対に{uBox('禁物')}です。</>,
                            <>これは、飛行機の機内に持ち込めない{uBox('禁物')}のリストです。</>],
                    correct:3
                    },
                    {
                        number: 21,
                        line: 4,
                        q: '的確',
                        qReading: null,
                        options: [<>機長の{uBox('的確')}な判断が事故を未然に防いだ。</>,
                            <>{uBox('的確')}な記録が残っていないので、当時のことはよく分からない。</>,
                            <>クリーンなエネルギーに対する需要は、今後も{uBox('的確')}に伸びるものと思われる。</>,
                            <>八人で食べられるように、ケーキを{uBox('的確')}な大きさに切った。</>],
                    correct:1
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'いたって',
                        qReading: null,
                        options: [<>こんな難しい問題を全部解くなんて、彼は{uBox('いたって')}天才だ。</>,
                            <>あの子は、見た目はやせていて体も弱そうだが、{uBox('いたって')}元気で活発な子だ。</>,
                            <>これまでは想像もできなかった宇宙旅行が、これからは{uBox('いたって')}できるようになるだろう。</>,
                            <>{uBox('いたって')}予想が外れて、負けるはずのないチームが負けてしまった。</>],
                    correct:2
                    },
                    {
                        number: 23,
                        line: 4,
                        q: '頼る',
                        qReading: null,
                        options: [<>丁寧に頭を下げて{uBox('頼った')}が、断られてしまった。</>,
                            <>機械化が進んでも、まだまだ人の手に{uBox('頼らなければ')}作れないものも多い。</>,
                            <>あの病院は、ある外国人の寄付に{uBox('頼って')}建てられたそうだ。</>,
                            <>友達の言葉を{uBox('頼って')}お金を貸したが、なかなか返してくれないので困っている。</>],
                    correct:2
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '行き当たりばったり',
                        qReading: null,
                        options: [<>きのうは道で先生と{uBox('行き当たりばったり')}になった。</>,
                            <>彼は近頃ついていて、{uBox('行き当たりばったり')}な幸運が続いている。</>,
                            <>最近この交差点では、{uBox('行き当たりばったり')}の事故が増えている。</>,
                            <>そんな{uBox('行き当たりばったり')}な対策では、問題は解決しません。</>],
                    correct:4
                    },
                    {
                        number: 25,
                        line: 4,
                        q: '苦情',
                        qReading: null,
                        options: [<>母は様々な{uBox('苦情')}をして、私たち兄弟を育ててくれた。</>,
                            <>出演者の発言に対して、番組宛てに視聴者からの{uBox('苦情')}が殺到した。</>,
                            <>地震に備えて、避難所の設置を{uBox('苦情')}してきたが、未だに実現には至っていない。</>,
                            <>私の生涯で一番の{uBox('苦情')}は、最愛の息子を失くしたことである。</>],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q: <>監督は迷い{blankRound}迷って、ついに一人の少年を映画の主役に抜てきした。</>,
                        qReading: null,
                        options: ['に',
                            'も',
                            'と',
                            'で'],
                        correct:1
                    },
                    {
                        number: 27,
                        line: null,
                        q:
                            <>
                                彼女は大へんな鉄道マニアで、全国の鉄道{blankRound}鉄道には、全部一度は
                                乗ってみたと言っている。
                            </>,
                        qReading: null,
                        options: ['なら',
                            'から',
                            'という',
                            'といった'],
                        correct:3
                    },
                    {
                        number: 28,
                        line: null,
                        q: <>その法案は、余程のことがない{blankRound}、今の国会で可決される見通しだ。</>,
                        qReading: null,
                        options: ['として',
                            'ものの',
                            'かぎり',
                            '次第'],
                        correct:3
                    },
                    {
                        number: 29,
                        line: 2,
                        q: <>近頃はインターネットを利用して、家に{blankRound}医師の診察を受けることが
                            できるようになった。</>,
                        qReading: null,
                        options: ['1　いるとしても',
                            '2　いるだけあって',
                            '3　いながらにして',
                            '4　いないにしても'],
                        correct:3
                    },
                    {
                        number: 30,
                        line: null,
                        q: <>今回の爆発事故は、これまでもその危険が指摘されてきたのだから{blankRound}
                            起こったとしか言いようがない。</>,
                        qReading: null,
                        options: ['起こるべしで',
                            '起こるべくして',
                            '起こるべきで',
                            '起こるべく'],
                        correct:2
                    },
                    {
                        number: 31,
                        line: 2,
                        q: <>その事務所の職員の態度は、横柄で不愉快{blankRound}。</>,
                        qReading: null,
                        options: ['極まりなかった',
                            '限りだった',
                            'といったところだった',
                            'よりほかなかった'],
                        correct:1
                    },
                    {
                        number: 32,
                        line: 2,
                        q: <>友達は、私のパソコンを床に落として壊しておいて、{blankRound}こんなところに置
                            いておいたほうが悪い、と開き直っている。</>,
                        qReading: null,
                        options: ['1　あやまったにせよ',
                            '2　あやまったとしても',
                            '3　あやまろうとして',
                            '4　あやまろうともせずに'],
                        correct:4
                    },
                    {
                        number: 33,
                        line: 2,
                        q: <><br/>
                            社長「 先生のお話を伺って、今日は大へん勉強になりました。」<br/>
                            先生「 そうですか。お役に立てば何よりです。」<br/>
                            社長「 こんど会社にお招きしますので、ぜひうちの社員たちにも今日の話を</>,
                        qReading: null,
                        options: ['お話し申し上げてください',
                            'お話しさせてください',
                            '聞かせてもらってください',
                            '聞かせてやってください'],
                        correct:4
                    },
                    {
                        number: 34,
                        line: 2,
                        q: <>その祝賀パーティーには、参席する{blankRound}祝電くらいは打っておいたほうが
                            いいだろう。</>,
                        qReading: null,
                        options: ['ことにしてまで',
                            'までのことはないにしても',
                            'ことになってまで',
                            'までのことはないので'],
                        correct:2
                    },
                    {
                        number: 35,
                        line: 2,
                        q: <>自分ひとりでは、とてもこの翻訳を期日内に仕上げる自信がなかったので、
                            {blankRound}と悩んだあげく、量を半分に減らしてもらうことにした。</>,
                        qReading: null,
                        options: ['どういうことか',
                            'どうしたものか',
                            'どうするつもりか',
                            'どういうわけか'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q: <>テニス大会はもう来週だというのに、彼はまったく練習をしていないようだ。
                            あれで{blankStarBox()}苦労もいらないのだが。</>,
                        qReading: null,
                        options: ['だったら',
                            '誰も',
                            '勝てるよう',
                            '何の'],
                        correct:2
                    },
                    {
                        number: 37,
                        line: null,
                        q: <><br/>
                            学生「外国語を勉強する上で、その国についての知識というのは大事なものでしょ
                            うか。」<br/>
                            先生「まあ、それは、ないよりは{blankStarBox()}でしょうね。」
                        </>,
                        qReading: null,
                        options: ['こした',
                            'に',
                            'ある',
                            'ことはない'],
                        correct:1
                    },
                    {
                        number: 38,
                        line: null,
                        q: <>彼女はファッションデザイナーを目指して、どんなに苦しいことが
                            {blankStarBox()}まいと、毎日がんばって勉強を続けている。</>,
                        qReading: null,
                        options: ['夢を',
                            '終らせ',
                            'あろうと',
                            '夢で'],
                        correct:4
                    },
                    {
                        number: 39,
                        line: 2,
                        q: <>家を出て、一人暮しを始めることにした{blankStarBox()}少し
                            心細くなってきた。</>,
                        qReading: null,
                        options: ['となると',
                            'よかったけれど',
                            'いざ一人で暮す',
                            'までは'],
                        correct:3
                    },
                    {
                        number: 40,
                        line: 2,
                        q: <>私が彼女につらく当たったのは、{blankStarBox()}のように感じ
                            られたことだろう。</>,
                        qReading: null,
                        options: ['なのだったのだが',
                            '私は冷たい人間の代表',
                            '彼女からすれば',
                            '彼女のためを思えばこそ'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、文章全体の趣旨を踏まえて、{numberSquareBox(41)}から{numberSquareBox(45)}の中に入る最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: 2,
                        q: null,
                        qReading:
                            <div className={'question_q_reading'}>
                                私の周りには物を捨てられない人が少なくない。母もそうだ。タンスには何十年も
                                経っている服さえある。三年前の引っ越しの時、そんな古いものは捨てて、新しいも
                                のを買ったらどうかと{numberSquareBox(41)}母を怒らせたこともあった。
                                「物を捨てられないのは、その物に対して執着しているからだ」という話を最近何
                                かで読んだ。他人にとっては、つまらないものに見えるとしても、それが本人には、
                                「二度と手に入らない大切なもの」であったとしたら、そう簡単には捨てられない
                                し、捨てるには相当な勇気が必要となる。そして、その二度と手に入らない大切なも
                                のが、物そのものでなく、それを手にした時の嬉しい気持ちだとしたら、なおさら手
                                放しづらいはずだ。私にとっては、ただの古着でも、母にはそれは、その服を初め
                                て着た時に感じた気持ちであるのかもしれない。{numberSquareBox(42)} 、捨てられないのは物ではな
                                く、その物に染み込んだ母の感情だったのかと思うと、物を捨てられない母の気持ち
                                が{numberSquareBox(43)}。
                                {numberSquareBox(44)} 、物を捨てられない人の原因として、完璧主義という性癖から捨てられない
                                ということもあるようだ。完璧主義者は、完璧にやれることしかやらないので、適当
                                に物を整理することができない。完璧に片付たり捨てることができないのであれば、
                                何もしないというスタンスになってしまうというのだ。
                                物を捨てられない人を見ると、必要ないなら捨てればいいのにと思いがちである。
                                しかし、それは物に付属している懐かしさや感情が理由であることもあれば、完璧に
                                整理整頓ができないからやらないということもあり、またこれ以外にも、自分自身や
                                他の誰かを物に投影して同一視し、孤独や寂しさから、それらの物を手元に置いてお
                                くということもあるようだ。物が捨てられない人は様々で、 {numberSquareBox(45)}。
                            </div>,
                        options: ['余計なことを言ったばかりで',
                            '余計なことを言ったばかりに',
                            '余計なことになったとたん',
                            '余計なことになったところが'],
                        correct:2
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['かえって',
                            'あるいは',
                            'なるほど',
                            'たとえ'],
                        correct:3
                    },
                    {
                        number: 43,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['1　わかったようでわからなかった',
                            '2　かわっただけでもよかった',
                            '3　わかったかもしれない',
                            '4　わかるようになってきた'],
                        correct:4
                    },
                    {
                        number: 44,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['したがって',
                            'もうひとつ',
                            'その上で',
                            'それだけに'],
                        correct:2
                    },
                    {
                        number: 45,
                        line: 4,
                        q: null,
                        qReading: null,
                        options: ['そこにはそれなりの理由があるのだ',
                            'そこにははっきりした理由などないのだ',
                            '理由はほとんどみな同じなのだ',
                            '理由はどれもその人の感情なのだ'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の(1)から(4)の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: 'この文章で筆者が言いたいことは何か。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    教育とは「共育」であり「協育」である。特に、初等・中等教育では、住民の「自分たちの学校」
                                    の意識が大切である。地域は、学校と関わるときに「お客さん」の発想から脱却しなければ
                                    ならない。住民一人ひとりの地元の学校に対する意識が高まれば、学校が活性化し、教育
                                    の効果が増大する。これは、また地域が発展することにもつながる。地域が発展すれば教
                                    育は良くなる。この相乗効果は大きい。子供の学習意欲を高め、礼儀作法を身につけさせ
                                    道徳意識の向上につなぐことも、学校と地域社会との車の両輪のような連携によって、大
                                    きく促進されるものである。
                                </div>
                            </>,
                        options: [<>地域の住民は地元の学校に対して、{rubyBox('他所', 'よ そ')}
                            から来たお客さんのように大事に扱うことを忘れてはならない。</>,
                            '地域の住民が地元の学校に強い関心を持つようになれば、学校も地域も発展することができる。',
                            '学校は地域の住民とともに、子供たちの道徳意識の向上に何よりも力を入れることが必要だ。',
                            '地域の住民は地元の学校の発展のために、地域の開発を優先すべきだ。'],
                        correct:2
                    },
                    {
                        number: 47,
                        line: 4,
                        q: '筆者の考えに合うのはどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    自分の意見を言わず、周りに合わせるのは、控えめ{subBox('注1')}で協調性があるともとれるが、裏を
                                    返せば「自分を出せない」「自分の
                                    {rubyBox('軸', 'じく')}{subBox('注2')}
                                    がない」ということなる。他人に依存して、周りに流さ
                                    れていれば楽だが、いつしか、自分の
                                    {rubyBox('芯', 'しん')}{subBox('注3')}
                                    がなく、誰かに依存しないと生きていけなくなっ
                                    てしまう。対人関係においても存在が薄くなり、さらには、存在を軽んじられてしまう可
                                    能性も
                                    {noteBox([
                                        '(注1)控えめ：言動が遠慮がちなこと',
                                        <>(注2){rubyBox('軸', 'じく')}：活動や運動の中心となるもの</>,
                                        <>(注3){rubyBox('芯', 'しん')}：物体の中心の部分</>
                                    ])}
                                </div>
                            </>,
                        options: ['対人関係において大切なことは、謙虚であることだ。',
                            '他人に依存することは楽だが、必ずしも悪いことだとは言えない。',
                            '意見を言うことは大事だが、相手への配慮も必要だ。',
                            '自分の考えを述べることを、普段から実践することが大切だ。'],
                        correct:4
                    },
                    {
                        number: 48,
                        line: 4,
                        q: 'この文書が最も伝えたいことは何か。',
                        qReading:
                            <>
                                (3)
                                <Image src={r_2016_sisa_48} alt={'r_2016시사일본어_48'}/>
                            </>,
                        options: ['表示価格を変更するため、明日だけ販売を中止する。',
                            '表示価格を訂正するが、本日までの注文に価格変更は適用されない。',
                            '明日からは価格の値上げをするので、本日中に早く購入してほしい。',
                            '表示価格を訂正するが、今後このようなミスは起こらないのでどうか理解してほしい。'],
                        correct:2
                    },
                    {
                        number: 49,
                        line: 4,
                        q: '筆者によると、面接の前にしておくべきことは何か。',
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    長年、面接官を務めてきて思うのは、近頃、マナーというバリアに守られ中身が全く見
                                    えない学生が非常に多いということだ。見た目はいい。挨拶もはきはきと出来る。受け答
                                    えの仕方も申し分ない。バリアの外装は完璧だ。でも、それだけなのである。
                                    この人は一体どんなものに{rubyBox('惹', 'ひ')}
                                    かれ、何に情熱を傾けることが出来るのか。バリアのこち
                                    ら側には、その光も熱も伝わってこないのである。優れた学生は、マナーを備えているだ
                                    けではなく、必ず何か光るものを見せてくれる。君たちの中の宝石は何なのか。面接のガ
                                    イドブックに、君らしさにぴったりの答えはない。面接に{rubyBox('挑', 'いど')}
                                    む前に、ぜひそれを考えてみ
                                    て欲しい。
                                </div>
                            </>,
                        options: ['どのような質問にもはきはきと礼儀正しく答えられるよう、準備しておくべきである。',
                            '何か一つ、熱中できるような趣味を見つけておくべきである。',
                            'マナーも大事だが、自分の個性をしっかり伝えられるようにしておくべきである。',
                            '自分が他の者よりずっと優れて見えるような、話術とマナーを身につけておくべきである。'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の(1)から(3)の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q:
                            <>
                                ①{uBox('感性がどんどん磨かれていく')}とあるが、どんな感性のことか。
                            </>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    ヒット商品をつくり続ける「すごい人」たちには、共通していることがある。自分の感性
                                    を信じ、自分が「面白い」と思うものをとことん{subBox('注1')}追求しているところだ。例えば、ゲームを
                                    開発する場合は、様々なゲームをやり尽くし、気になるアプリを片っ端からダウンロード
                                    して試してみる。だからこそ、モノの良し悪しがわかり、①{uBox('感性がどんどん磨かれていく')}。
                                    顧客の気持ちに思いを馳せ{subBox('注2')}ながら、自分の感性を追求すれば、自然と顧客に喜ばれるもの
                                    に近づいていくのだ。こうして完成した商品が顧客から裏切られることはまずない。間違
                                    いなく売れる。
                                    また、「空気を読まない」のも「すごい人」たちの共通点である。彼らは上司や仲間に臆す
                                    る{subBox('注3')}ことなく自分の意見を述べ、ときには上司の提案の欠点や間違いを指摘したりすること
                                    もある。それは、彼らが職場で批判されることよりも、顧客のニーズからズレる{subBox('注4')}ことを恐
                                    れているからである。顧客が求めているものから、ほんの「１ミリ」ズレただけでも、つく
                                    り上げた商品は相手にしてもらえないというマーケットの厳しさが骨身に沁み{subBox('注5')}ているのだ。
                                    ②職場の空気を読まず、どこまでも顧客のニーズをシンプルに追求する人だけが、素晴ら
                                    しい結果を出せる。
                                    {noteBox([
                                        '(注1)とことん：徹底的に',
                                        '(注2)思いを馳せる：ここでは、焦点を合わせる',
                                        '(注3)臆する：遠慮する',
                                        '(注4)ズレる：外れる',
                                        '(注5)骨身に沁みる：痛感する',
                                    ])}
                                </div>
                            </>,
                        options: ['ヒット商品を作り出すための感性',
                            '何にでも面白いものを見つけ出す感性',
                            '面白いゲームを開発するための感性',
                            '商品の長所も短所も受け入れることができる感性'],
                        correct:1
                    },
                    {
                        number: 51,
                        line: 4,
                        q:
                            <>
                                ②{uBox('職場の空気を読まず')}とあるが、どういうことか。
                            </>,
                        qReading: null,
                        options: ['周りが忙しいのに自分だけ仕事をしないこと。',
                            '職場での人間関係を無視して、好き勝手にすること。',
                            '職場の上下関係などにとらわれないこと。',
                            '周りの雰囲気に気が付かないこと。'],
                        correct:3
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '筆者は「すごい人」たちのどんな点がすごいと言っているか。',
                        qReading: null,
                        options: ['顧客のニーズを考えながら、自分の興味や感性を徹底的に追求する点。',
                            'いろいろな顧客の意見を積極的に取り入れる点。',
                            '自分の感性だけを信じて、商品を開発する点。',
                            'マーケットを徹底的に分析し、顧客のニーズを正確に把握する点。'],
                        correct:1
                    },
                    {
                        number: 53,
                        line: 4,
                        q:
                            <>
                                ①{uBox('現実のほうが疑わしく思えることもある')}とはどういうことか。
                            </>,
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    あなたはリアルな夢をみたことがあるだろうか。あまりにもリアルな夢をみたとき、目
                                    が覚めてもしばらくは夢の印象が強く、覚醒した後の①{uBox('現実のほうが疑わしく思えることもある')}。
                                    もっとも、実際にはそのような不安定感は一時的なもので、すぐに意識は〈現実〉
                                    の世界と同調し、夢は忘れられてしまう。
                                    夢物語という言葉もあるように、夢は非現実的でリアリティがないものの代名詞として
                                    使われている（ちなみに「はかない」という字はにんべんにゆめと書く{subBox('注1')}）。非現実的な空想を
                                    指して白昼夢ということもある。しかし、本当に夢は{rubyBox('虚', 'むな')}
                                    しいものだろうか。夢が本当で日常生活のほうが{rubyBox('嘘', 'うそ')}
                                    かもしれないと考えることは異常だろうか。
                                    夢のほうが真実で現実のほうが虚構かもしれないという感覚の揺らぎについて語ったも
                                    のとしては、『荘子』斉物論篇の「胡蝶の夢」{subBox('注2')}がよく引き合いに出される。
                                    荘周{subBox('注3')}があるとき蝶になった夢をみたが、目覚めた後、
                                    ②{uBox('もしかしたら蝶が荘周の夢を見ているのではないだろうか')}と、疑惑を感じたというものである。
                                    （中略）
                                    ふと、この現実そのものは脳の電気信号がつくりだした虚構の世界ではないか、あるい
                                    は自分という存在も思考も、実は遺伝子という自分を超えたものによって全て決定されて
                                    いるのではないか、などと考え出すと、本当に自分自身が考えているのか、あるいは自分
                                    の脳を使って自分以外の何者かが考えているのかと、ますます混乱する。いったい、何が
                                    本当なのだろうか。
                                    {noteBox([
                                        <>(注1)「はかない」という字はにんべんにゆめと書く：( にんべん＝イ)＋( ゆめ＝夢)＝{rubyBox('儚', 'はかな')}い</>,
                                        '(注2) 『荘子』斉物論篇の「胡蝶の夢」： 中国の思想家、荘子（荘周　紀元前369 ～紀元前 286の　著書『荘子』のなかにある話',
                                        '(注3) 荘周 ：荘子のこと'
                                    ])}
                                </div>
                            </>,
                        options: ['夢が本物よりも本物に感じられ、本物の世界が信じられなくなることもある。',
                            '現実が不安定であるため、リアリティのない夢でさえも本物のように感じられる。',
                            '現実は夢物語であり、非現実な空想でもあるので、夢のほうが本物に思える。',
                            'リアルな夢は、現実に似ているが、実は非現実的でリアリティがないものである。'],
                        correct:1
                    },
                    {
                        number: 54,
                        line: 4,
                        q:
                            <>
                                ②{uBox('もしかしたら蝶が荘周の夢を見ているのではないだろうか')}とあるが、どういう意味か。
                            </>,
                        qReading: null,
                        options: ['蝶は、荘周が夢から覚めたら、〈現実〉の世界と同調し、消え去ってしまう。',
                            '荘周こそが蝶の夢の中にいるのであり、ただの 虚構の存在である。\n',
                            '本当は蝶の夢を見ているのではなく、現実にいる荘周が蝶である。',
                            '現実の荘周は、白昼夢の中で蝶になるという虚しい夢を見ている。'],
                        correct:2
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '筆者がこの文の中で最も言いたいことは何か。',
                        qReading: null,
                        options: ['夢と現実は区別がつかないものであり、本当は自分の脳を使って誰かが考えている。',
                            '夢と現実は区別がつかないものであり、もしかしたら、自分はいないかもしれない。',
                            '蝶になるという夢は、蝶が人になる夢という意味であり、本当のことは分からない。',
                            '現実感が揺らぎ始めると、自分自身の存在も疑うようになり、判断がつかなくなる。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q:
                            <>
                                ①{uBox('日本の柱というのはきわめて珍しい存在なのは間違いない')}とあるが、なぜか。
                            </>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    ｢一本を大事にし、素木にかぎる」、こうした今でも生きている柱へのセンスの源をたど
                                    ってゆくと、江川家を経て弥{subBox('注1')}生の高床式形式の伊勢、出雲へとつながり、さらにその先は
                                    どこまで行くのか、もしかしたら縄文時代に届くのかもしれない。
                                    起源の件は別にしても、世界の建物の歴史の上で①{uBox('日本の柱というのはきわめて珍しい存在なのは間違いない')}。
                                    日本のほかに今でも木造の家に住む伝統がいちおう生きている地域は、イギリス、アル
                                    プス以北、北アメリカ、東アジア、東南アジアなど意外に広いけれど、こと柱の扱いを見
                                    ると日本とはちがう。木造だから柱を立てて{rubyBox('梁', 'はり')}{subBox('注2')}
                                    を架けるのは同じだが、多くの場合、柱は
                                    壁体の一部でしかない。独立柱のある場合でも、たまたまそこに支柱が必要だからあるだ
                                    けで、格別のものとして立てられているわけではない。
                                    外国旅行に出かけたことのある人は思い出してほしいが、印象深い位置に印象深い柱が
                                    一本立っているのに出会ったことがあるだろうか。
                                    家の中心に一本立つ{rubyBox('大黒柱', 'だいこくばしら')}
                                    も、部屋の中心に一本立つ{rubyBox('床柱', 'とこばしら')}
                                    も、ほんとうに珍しい存在なのである。
                                    お父さんのことを大黒柱といい、エライさん{subBox('注3')}が床柱を背に座りたがるのも、②{uBox('理由のないことではない')}。
                                    {noteBox([
                                        '(注1) 弥生の高床式形式の伊勢、出雲 ： 弥生時代(紀元前4 世紀～紀元後3 世紀）の建築形式で建てられた、伊勢神宮や出雲大社のこと',
                                        <>(注2) {rubyBox('梁', 'はり')}：柱の上に水平に渡して屋根</>,
                                        '(注3) エライさん：偉い人の俗称'
                                    ])}
                                </div>
                            </>,
                        options: ['そのセンスをたどっていくと日本の古い時代にたどり着くため',
                            '木造の家に住むという伝統が日本以外の地域に存在しないため',
                            '独立柱が他の地域には全く存在せず、日本独自のものであるため',
                            '日本の柱だけは構造上の必要だけによらずに立てられているため'],
                        correct:4
                    },
                    {
                        number: 57,
                        line: 4,
                        q:
                            <>
                                ②{uBox('理由のないことではない')}とあるが、どういうことか。
                            </>,
                        qReading: null,
                        options: ['他の地域には存在しない印象深い柱は男性の象徴であることを示している。',
                            '印象深い場所に立つ印象深い柱は、父親や偉い人の立場を暗示している。',
                            '深い歴史を持つ柱の印象的な形状は、権力者の身分を明確に表している。',
                            '壁と一体になった最も大きな柱は、家族の中で最も偉い父親を示している。'],
                        correct:2
                    },
                    {
                        number: 58,
                        line: 4,
                        q: '日本の柱について、筆者はどのように述べているか。',
                        qReading: null,
                        options: ['珍しい存在である日本の柱の構造は、木造の家に住むという伝統と関係している。',
                            '日本には日本にしか存在しない柱があるが、それは古代の建築にしか見られない。',
                            '極めて印象的な柱の形が、日本の歴史を解き明かす鍵になるかもしれない。',
                            '他の地域には存在しない日本の柱は、日本独特の伝統習慣と関係がある。'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q:
                            <>
                                ①{uBox('｢一切唯心造｣')}とあるが、どういう意味か。
                            </>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    禅とは{rubyBox('全', 'まった')}{subBox('注1')}
                                    き精神の自由を求める宗教である。その際に、好き嫌いの感情が最も大きな障
                                    害だ
                                    というのである。好きなようにするのが自由だと思うかもしれないが、好きと嫌いという
                                    感情で正確な判断ができないことこそ不自由だと禅は考える。そしてこの好き嫌いの制御が
                                    なかなかに難しいから、世界はそんな心が造っているという認識で標題の言葉が生まれる
                                    のである。①{uBox('「一切唯心造」')}。それは心がどんな風に変化しても変わらない真実だと思える。
                                    好き嫌いのほかに、我々の心を曇らせるのは価値判断と歴史認識という先入観であるが、
                                    （中略）さまざまな先入観も含めた好き嫌いが世界を染め上げ、我々はそうした心で染め上
                                    げた世界しか見ることも感じることもできない。それが「一切唯心造」というシビアーな言
                                    葉なのである。（中略）
                                    よく「ありのまま」なんて言葉を聞くけれど、転換前の我々の心はまったく勝手なもので、
                                    興味がなければ姿さえ目にとまらないこともある。逆に興味
                                    {rubyBox('津々', 'しんしん')}
                                    だとその部分だけ明瞭に
                                    見えたり感じたりする。モンシロチョウの雄と雌は人間には同じように見えるが、お互い
                                    どうしではまったく違った色に見えると聞いたことがある。またナムは雌犬に出逢うと血
                                    相を変えたものだが、そんなときの彼の世界に、②{uBox('いったい綱を引く私は存在していたのだろうか')}。
                                    もうちょっとまともな例にしよう。たとえば理知的で物静かな女性が前方から歩いてき
                                    たとしよう。「理知的で物静か」という判断はいかにも客観的な感じがするかもしれないが、
                                    そうした左脳の分析と同時に、我々の脳はもっと奥のほうである種の感情を作る。人によ
                                    っては「ああ素敵だなあ、今日は{rubyBox('佳', 'よ')}
                                    い日だ」と感じるだけかもしれないが、別な人は「素敵
                                    だからなんとかおつきあいしたい」と思うかもしれない。その場合、
                                    {rubyBox('大袈裟', 'おおげさ')}
                                    にいえばその後の世界の在り方は二人にはまったく違ってくるはずである。一人は
                                    {rubyBox('佳', 'よ')}い気分で擦れ違うのに、もう一人はアトをつけたりする。
                                    最初の意識とほぼ同時に芽生えるこの感情が必然的に招く世界を、人は③{uBox('「運命」と呼んだりするのである')}。
                                    {noteBox([
                                        <>(注1) {rubyBox('全', 'まった')}き：完全な</>,
                                        '(注2) ナム：作者の飼っている犬'
                                    ])}
                                </div>
                            </>,
                        options: ['好き嫌いという感情を制御することは難しいが、感情も心が造っているものである。',
                            '好き嫌いという感情を制御することは難しく、世界は感情によってのみ造られている。',
                            '世界はすべて、先入観を含む好き嫌いのような感情によって造られるものである。',
                            '自分の世界は、好き嫌いの感情の制御をすることによってのみ造られるものである。'],
                        correct:3
                    },
                    {
                        number: 60,
                        line: 4,
                        q:
                            <>
                                ②{uBox('いったい綱を引く私は存在していたのだろうか')}とあるが、どういう意味か。
                            </>,
                        qReading: null,
                        options: ['ナムにとって興味の対象は雌犬のみであり、それ以外のものは存在していない。',
                            'ナムにとって雌犬はまったく違った色に見えていて、私にはその色が見えない。',
                            '世界には、実際にナムと雌犬しか存在しておらず、私はただの感情にすぎない。',
                            '私がナムを引っ張っているのか、ナムが私を引いているのか明瞭に判断できない。'],
                        correct:1
                    },
                    {
                        number: 61,
                        line: 4,
                        q:
                            <>
                                ③{uBox('｢運命｣と呼んだりするのである')}とあるが、どういうことか。
                            </>,
                        qReading: null,
                        options: ['素敵な人を見たときに分析し、その相手を自分の運命だとみなすこと',
                            '世界は感情によって変化するため、その感情を運命だとみなすこと',
                            '世界は感情によって変化し、それによって生じた出来事を運命だとみなすこと',
                            '素敵な人に対する客観的な分析によって起こる世界の変化を運命だとみなすこと'],
                        correct:3
                    },
                    {
                        number: 62,
                        line: 4,
                        q:
                            <>
                                筆者の述べている文章を以下のようにまとめる場合、( ）に入るものとして適切
                                なのはどれか。〔心は世界であり、{blankRound}〕
                            </>,
                        qReading: null,
                        options: ['その世界は、好き嫌いという感情があるからこそ自由である。',
                            '心は感情によって左右されるため、人によって世界は異なる。',
                            '世界の在り方は、いつも勝手なもので、「ありのまま」である。',
                            'その世界は、常に必然的な「運命」によって定められている。'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のＡとＢの文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'ＡとＢどちらの文章にも書かれていることは何か。',
                        qReading:
                            <>
                                A
                                <div className={'question_q_reading'}>
                                    <div className={'question_q_reading_wrap'}>
                                        田舎には限りない自然が広がっていて、四季を一身に感じることができる。豊か
                                        な自然以外にも、都会から地方に移住した人たちが必ず田舎暮らしの魅力としてあ
                                        げるのが、物価の安さと地域の{rubyBox('繋', 'つな')}
                                        がりだ。都会の物価の高さは言うまでもない。田
                                        舎では庭付き一軒家というのも決して夢物語ではない。隣に誰が住んでいるのかも
                                        わからないほど、近所付き合いがない都会からの移住者にとって、田舎での地域や
                                        人々との密な関係は、この上ない魅力である。子育てにしても、地域一丸で支援に
                                        取り組む傾向にある。都会に疲れた現代人を{rubyBox('癒', 'いや')}
                                        してくれる、この暮らしは大変魅力
                                        的なのである。
                                    </div>
                                </div>
                                B
                                <div className={'question_q_reading'}>
                                    <div className={'question_q_reading_wrap'}>
                                        豊かな自然と人々の密な関係。田舎暮らしに憧れて地方に移住してくる人々が増
                                        加傾向にある。たしかに四季折々の自然を味わうことができたり、地域や人との関
                                        係の深さは、田舎暮らしの魅力である。しかし、一方で、こんなはずじゃなかった
                                        と都会に戻る人も多い。田舎での自然は豊かだが、時に厳しくもある。雪の多い地
                                        域であれば、地域総出で除雪をしなければならない。豊かで美しい自然だが、その
                                        厳しさとも向き合いながら生活をしていかなければならない。また、密な人間関係
                                        は、人との距離が近すぎることでもある。どんなことでも係わろうとするので、プ
                                        ライベートな時間などは期待できない。魅力が多い田舎暮らしではあるが、実際の
                                        移住は慎重に考える必要がある。
                                    </div>
                                </div>
                            </>,
                        options: ['田舎での地域や人々との密接な関係',
                            '都会から田舎へ移住してくる人たちへの忠告',
                            '田舎から都会に戻る人たちが増加する理由',
                            '田舎での子育てに関する問題'],
                        correct:1
                    },
                    {
                        number: 64,
                        line: 4,
                        q: 'ＡとＢは田舎暮らしについてどのような考えをもっているか。',
                        qReading:
                            <>
                                A
                                <div className={'question_q_reading'}>
                                    <div className={'question_q_reading_wrap'}>
                                        田舎には限りない自然が広がっていて、四季を一身に感じることができる。豊か
                                        な自然以外にも、都会から地方に移住した人たちが必ず田舎暮らしの魅力としてあ
                                        げるのが、物価の安さと地域の{rubyBox('繋', 'つな')}
                                        がりだ。都会の物価の高さは言うまでもない。田
                                        舎では庭付き一軒家というのも決して夢物語ではない。隣に誰が住んでいるのかも
                                        わからないほど、近所付き合いがない都会からの移住者にとって、田舎での地域や
                                        人々との密な関係は、この上ない魅力である。子育てにしても、地域一丸で支援に
                                        取り組む傾向にある。都会に疲れた現代人を{rubyBox('癒', 'いや')}
                                        してくれる、この暮らしは大変魅力
                                        的なのである。
                                    </div>
                                </div>
                                B
                                <div className={'question_q_reading'}>
                                    <div className={'question_q_reading_wrap'}>
                                        豊かな自然と人々の密な関係。田舎暮らしに憧れて地方に移住してくる人々が増
                                        加傾向にある。たしかに四季折々の自然を味わうことができたり、地域や人との関
                                        係の深さは、田舎暮らしの魅力である。しかし、一方で、こんなはずじゃなかった
                                        と都会に戻る人も多い。田舎での自然は豊かだが、時に厳しくもある。雪の多い地
                                        域であれば、地域総出で除雪をしなければならない。豊かで美しい自然だが、その
                                        厳しさとも向き合いながら生活をしていかなければならない。また、密な人間関係
                                        は、人との距離が近すぎることでもある。どんなことでも係わろうとするので、プ
                                        ライベートな時間などは期待できない。魅力が多い田舎暮らしではあるが、実際の
                                        移住は慎重に考える必要がある。
                                    </div>
                                </div>
                            </>,
                        options: ['ＡもＢも、都会の生活に疲れた人が田舎に移住することによって、心身ともに健康になると考えている。',
                            'ＡもＢも、田舎暮らしの魅力は認めるものの、具合いが悪くなる部分もきちんと考慮すべきだと考えている。',
                            'Ａは、密な人間関係が田舎の唯一最大の魅力だと考え、Ｂは、プライベートを重視する都会人は田舎の人間関係のために苦労することもあると考えている。',
                            'Ａは、自然の豊かさや物価の安さなど、色々な面で田舎暮らしは魅力的だと考え、Ｂは、魅力は認めながらも自然の厳しさや人付き合いのわずらわしさを考慮すべきだと考えている。'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 65,
                        line: 4,
                        q: '筆者は、かつて教師の質が良かったのはなぜだと言っているか。',
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    教師の質の低下は、米国でも大きな問題になってきた。その原因として、経済学者たちが
                                    指摘してきたのは、1960年代から始まった労働市場における男女平等の進展である。どう
                                    して女性の雇用機会均等が教員の質を低下させるのだろうか。
                                    かつては米国の労働市場でも男女差別が根強く存在し、一般のビジネスの世界では、女性
                                    は活躍できなかった。このため、学業にすぐれた大卒女性は、教職についた。つまり、学校
                                    は男女差別のおかげで、優秀な女性を安い賃金で雇用できたのである。
                                    だが、男女差別が解消されてくると、優秀な女性は教師よりも給与が高い仕事、より魅力
                                    的な職種を選べるようになり、昔に比べて教師になる人は少なくなった。「男性教師もいる
                                    ではないか」という反論もあるだろうが、教師の採用数が一定だとすれば、優秀な女性が集
                                    中して教師を希望していた時代よりも、①{uBox('優秀でない男性が教師になれるチャンスが広がる')}
                                    結果となり、レベルの低下は否めない。
                                    教師になる人は、子供を教えたいという情熱を持った人ばかりなので、経済的動機で志望
                                    を変えるはずはないと思う人もいるだろう。②{uBox('現実はどうか')}、データによる検証がある。
                                    米ニューヨーク大学のコーコラン助教授と、メリーランド大学のエヴェンズ、シュワブ両
                                    教授の3人の経済学者は、1957 ～ 92年に高校を卒業した女性がその後教師になった確率を、
                                    高校時代の成績の相対順位別に調べている。50年代〜 60年代前半に高校を卒業した女性で
                                    成績が上位10％の者は約15％が教師になっていたが、80年代以降卒業の成績上位10％の
                                    女性では6 〜 8％程度にすぎない。
                                    この数字を逆からみてみよう。 64〜71年に新規採用された女性教師の20 〜 25％は、高
                                    校時代に成績上位10％に入っていた。しかし、2000年になると、成績上位者の割合は13％
                                    以下に低下した。この間、増えたのは、高校時代の成績が真ん中より下の層の教師である。
                                    つまり、教育が好きだから、他に選択肢があっても教師になる女性が相当数存在すること
                                    は事実だが、他の職業に就くチャンスが広がれば、そちらを選ぶ女性も多い。教師といえど
                                    も、収入や待遇などのインセンティブに基づき選ばれる職業の一つとなっている。（中略）
                                    労働市場における男女差別の改善が教員採用に予期せぬ影響を及ぼし、多くの優秀な女性
                                    が教師になってくれた時代は過ぎ去った。時代の流れは逆回転させられないが、公立校教師
                                    を労働市場のなかでより魅力的な職業にしていく努力は可能である。
                                </div>
                            </>,
                        options: ['職業による男女差別が存在し、女性のつける仕事が限られていたため',
                            '教師という仕事が、労働市場において男女どちらにも人気があったため',
                            '子供を教えたいという情熱を持つ人が増え、教師が人気の仕事であったため',
                            '高校時代の成績が良い人が増え、その人にチャンスが出来たため'],
                        correct:1
                    },
                    {
                        number: 66,
                        line: 4,
                        q: <>①{uBox('優秀でない男性が教師になれるチャンスが広がる')}とあるが、なぜか。</>,
                        qReading: null,
                        options: ['1　教師の採用数が一定であり、優秀な男性が他の職業を選ぶため',
                            '2　教師の採用数が一定であり、男性は経済的動機では志望を変えないため',
                            '3　優秀な女性が他の職業を選ぶことで、採用枠に余りが出るため',
                            '4　優秀な男性が他の職業を選ぶことで、経済的動機が生じるため'],
                        correct:3
                    },
                    {
                        number: 67,
                        line: 4,
                        q: <>②{uBox('現実はどうか')}とあるが、実際はどうなっているか。</>,
                        qReading: null,
                        options: ['子供を教えたいという情熱を持った人は少なく、経済的動機で志望を変える人が多い。',
                            '子供を教えたいという情熱を持った人は多いが、経済的動機で志望を変える人も多い。',
                            '教師も経済的動機によって左右される職業であり、教育が好きな人はあまり教師を選ばない。',
                            '職業選択の自由が広がることで、むしろ経済的動機で教師を選ぶ人が増えてきている。'],
                        correct:2
                    },
                    {
                        number: 68,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことはどれか。',
                        qReading: null,
                        options: ['男女差別の是正は、想像のつかない事態を引き起こすことがあるのでやめたほうがいい。',
                            '労働市場においては、男女差別の改善が予期していないことを引き起こすことがよくある。',
                            '女性の選択肢が広がった以上、教師の仕事もインセンティブに基づいて選ばれるべきである。',
                            '今さら時代を戻すわけにはいかないが、教師の質を改善することができないわけではない。'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題13 右のページは、社内パソコン講座の案内である。この案内を見て、下の問いに対する
                        答えとして最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 69,
                        line: 4,
                        q:
                            <>
                                以下は、鈴木さんのスケジュールである。鈴木さんがこの講座の受講申請をするこ
                                とは可能か。鈴木さんの受講申請は、今回が初めてである。
                                <Image src={r_2016_sisa_69} alt={'2016_sisa_69'} className={'q_img'}/>
                            </>,
                        qReading:
                            <>
                                <Image src={r_2016_sisa_13} alt={'2016_sisa_13'}/>
                            </>,
                        options: ['１日だけ欠席の連絡をすれば、受講申請が可能である。',
                            '２日だけ欠席の連絡をすれば、受講申請が可能である。',
                            '受講できない日が３日以上あるので、受講申請は不可能である。',
                            '第７回の講座が出席できないので、受講申請は不可能である。'],
                        correct:2
                    },
                    {
                        number: 70,
                        line: 4,
                        q:
                            <>
                                鈴木さんの同僚の山本さんは、以前この講座を受講したことがあるが、｢プレゼン資
                                料の作成(実践１)(実践２)」は出席できなかった。山本さんのスケジュールは鈴木
                                さんと同じであるが、５月30日からの出張へは行かず、５月30日から６月2日まで
                                は、社内での会議などのスケジュールもない。山本さんは、今回、再受講して全課
                                程を修了することは可能か。
                            </>,
                        qReading: null,
                        options: ['会議のスケジュールさえ調整して、５月16日の講座に出席すれば、全課程を修了することができる。',
                            '筆記用具と自分が作りたい資料を持参して、最終日の講座に出席さえすれば可能である。',
                            '前に一度、受講したことがあるので、受講する資格がない。',
                            '担当者の田中さんの承諾を得れば、第７回と第８回に出席して、全課程を修了することができる。'],
                        correct:4
                    },
                ],
            },
        ],
    },
    {
        name: '파고다3회',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、１•２•３•４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q:
                            <>
                                女ばかりでなく、夫婦が協力して{uBox('育児')}することが望ましい。
                            </>,
                        qReading: null,
                        options: ['りゅくじ', 'いくじ', 'りゅくに', 'いくに'],
                        correct:2
                    },
                    {
                        number: 2,
                        line: null,
                        q:
                            <>
                                山の{uBox('斜面')}をスキーで滑り降りた。
                            </>,
                        qReading: null,
                        options: ['しめん', 'ちゃめん', 'さめん', 'しゃめん'],
                        correct:4
                    },
                    {
                        number: 3,
                        line: null,
                        q:
                            <>
                                根強く残っている{uBox('迷信')}を退けた。
                            </>,
                        qReading: null,
                        options: ['まいじん', 'めいじん', 'まいしん', 'めいしん'],
                        correct:4
                    },
                    {
                        number: 4,
                        line: null,
                        q:
                            <>
                                現在は金利が低いので、すずめの涙ほどの{uBox('利息')}しかつかない。
                            </>,
                        qReading: null,
                        options: ['りちょく', 'りしき', 'りせき', 'りそく'],
                        correct:4
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                面接の前に服装を{uBox('整えた')}。
                            </>,
                        qReading: null,
                        options: ['ととのえた', 'さしつかえた', 'あたえた', 'たてかえた'],
                        correct:1
                    },
                    {
                        number: 6,
                        line: null,
                        q:
                            <>
                                子どもの時から柔道を{uBox('修めた')}。
                            </>,
                        qReading: null,
                        options: ['しずめた', 'いためた', 'かためた', 'おさめた'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                私人の{blankRound}で発言します。
                            </>,
                        qReading: null,
                        options: ['格差', '使命', '刺激', '資格'],
                        correct:4
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                簡単な{blankRound}で動かせます。
                            </>,
                        qReading: null,
                        options: ['捜索', '操作', '捜査', '製作'],
                        correct:2
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                辞書を{blankRound}するには長い歳月がかかる。
                            </>,
                        qReading: null,
                        options: ['創刊', '創造', '刊行', '参考'],
                        correct:3
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                今回は{blankRound}したい作品がなかった。
                            </>,
                        qReading: null,
                        options: ['修繕', '抽選', '推薦', '再選'],
                        correct:3
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                試合の前半が終わったらコートを{blankRound}する。
                            </>,
                        qReading: null,
                        options: ['カテゴリー', 'エレガント', 'チェンジ', 'ナプキン'],
                        correct:3
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                一郎は１０才にしては{blankRound}な子供だ。
                            </>,
                        qReading: null,
                        options: ['どわすれ', 'したこころ', 'みずけ', 'おおがら'],
                        correct:4
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                この飛行機は大気{blankRound}まで飛ぶそうです。
                            </>,
                        qReading: null,
                        options: ['圏', '内', '権', '柄'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                財産を相続する権利を{uBox('放棄した')}。
                            </>,
                        qReading: null,
                        options: ['あきらめた', 'さけた', 'うったえた', 'ひかえた'],
                        correct:1
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                時間がいくらあっても足りないくらい彼の話は{subBox('尽きる')}ことがなかった。
                            </>,
                        qReading: null,
                        options: ['あきる', 'かなう', 'あかす', 'おわる'],
                        correct:4
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                過度の運動は健康の{uBox('さまたげとなる')}。
                            </>,
                        qReading: null,
                        options: ['さしつかえる', 'もたらす', 'おびえる', 'かたむける'],
                        correct:1
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                過去の実積をもとにデータを{uBox('図表')}にしてみました。
                            </>,
                        qReading: null,
                        options: ['ガレージ', 'レントゲン', 'ゲレンデ', 'ダイヤ'],
                        correct:4
                    },
                    {
                        number: 18,
                        line: null,
                        q:
                            <>
                                教授の論文は科学の常識を{uBox('根本から変える')}学説だった。
                            </>,
                        qReading: null,
                        options: ['くりかえす', 'もよおす', 'くつがえす', 'のばす'],
                        correct:3
                    },
                    {
                        number: 19,
                        line: null,
                        q:
                            <>
                                地域団体は平和国家建設の意義を{uBox('主張した')}。
                            </>,
                        qReading: null,
                        options: ['かまえた', 'となえた', 'そなえた', 'さかえた'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: 4,
                        q: 'のぞましい',
                        qReading: null,
                        options: [<>この香りは私が{uBox('のぞましい')}ものです。</>,
                            <>社会人として{uBox('のぞましい')}態度です。</>,
                            <>親が亡くなって{uBox('のぞましい')}日々を送っている。</>,
                            <>戦争でみんな敵と{uBox('のぞましく')}たたかった。</>],
                    correct:2
                    },
                    {
                        number: 21,
                        line: 4,
                        q: '誇張',
                        qReading: null,
                        options: [<>毎年いくつかの町が市に{uBox('誇張')}していく。</>,
                            <>事業を海外に{uBox('誇張')}した。</>,
                            <>彼は天性のスポーツマンだと言っても{uBox('誇張')}ではない。</>,
                            <>当時その国は領土を{uBox('誇張')}していた。</>],
                        correct:3
                    },
                    {
                        number: 22,
                        line: 4,
                        q: 'おのおの',
                        qReading: null,
                        options: [<>人は{uBox('おのおの')}考えが異なる。</>,
                            <>夏休みが始まって、子供たちは{uBox('おのおの')}している。</>,
                            <>山腹の小石が{uBox('おのおの')}落ちてきた。</>,
                            <>針で紙に{uBox('おのおの')}穴をあけた。</>],
                        correct:1
                    },
                    {
                        number: 23,
                        line: 4,
                        q: 'けむたい',
                        qReading: null,
                        options: [<>このカレーライスは{uBox('けむた')}すぎる。</>,
                            <>長年住み慣れた家を売るのは{uBox('けむたい')}ことだった。</>,
                            <>私にとって彼は{uBox('けむたい')}存在だ。</>,
                            <>先生の説明はどうも{uBox('けむたかった')}。</>],
                        correct:3
                    },
                    {
                        number: 24,
                        line: 4,
                        q: '詳細',
                        qReading: null,
                        options: [<>私の長年の夢が{uBox('詳細')}した。</>,
                            <>その患者は{uBox('詳細')}検査を受けた。</>,
                            <>誰かが書類に{uBox('詳細')}をしたにちがいない。</>,
                            <>事故を{uBox('詳細')}に報告した。</>],
                        correct:4
                    },
                    {
                        number: 25,
                        line: 4,
                        q: 'いまにも',
                        qReading: null,
                        options: [<>{uBox('いまにも')}死にそうに胃の痛みを訴えた。</>,
                            <>{uBox('いまにも')}初恋の彼女が忘れられない。</>,
                            <>{uBox('いまにも')}好きな時にいらっしゃい。</>,
                            <>{uBox('いまにも')}のところすべて順調である。</>],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、１・２・３・４から一つ
                        選びなさい。

                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: 2,
                        q: <>部長のお宅の周辺は、かなり（ ）んですね。</>,
                        qReading: null,
                        options: ['ご発展している',
                            '発展している',
                            'ご発展になられている',
                            '発展されている '],
                        correct:2
                    },
                    {
                        number: 27,
                        line: null,
                        q: <>やはり常務（ ）、さすがに貫禄がありますね。</>,
                        qReading: null,
                        options: ['ともすれば', 'ともあれ', 'ともくると', 'ともなると'],
                        correct:4
                    },
                    {
                        number: 28,
                        line: null,
                        q: <>（山田さんが、会いたくない杉本さんと道で顔を合わせそうになって）
                            山田さんは道で杉本さんを（ ）、あわてて視線をそらせた。</>,
                        qReading: null,
                        options: ['見かけると', '見かければ', '見かけたなら', '見かけるなら'],
                        correct:1
                    },
                    {
                        number: 29,
                        line: 2,
                        q: <>卒業前に転校した田中君を同窓会に（ ）、みんなを喜ばせるでしょう。</>,
                        qReading: null,
                        options: ['連れてこれれば', '連れてこれば', '連れてこられれば', '連れてくれば '],
                        correct:3
                    },
                    {
                        number: 30,
                        line: 2,
                        q: <>貴社のご意向は（ ）おります。 </>,
                        qReading: null,
                        options: ['承知して差し上げて', '承知させていただいて ', '承知申し上げなさって', '承知いたして '],
                        correct:4
                    },
                    {
                        number: 31,
                        line: 2,
                        q: <>なぜ君（ ）、誰もそれについて詳しい人がいないからだよ。</>,
                        qReading: null,
                        options: ['でなくてはならないかというと',
                            'でなくてもいいからといって ',
                            'でなくてはならないからといって',
                            'でなくてもならないかというと'],
                        correct:1
                    },
                    {
                        number: 32,
                        line: null,
                        q: <>こんな不道徳な企業は十年後までには（ ）運命にあると思うんだ。</>,
                        qReading: null,
                        options: ['消えてくる', '消えてある', '消えていく', '消えてする'],
                        correct:3
                    },
                    {
                        number: 33,
                        line: 2,
                        q: <>アイスクリームを冷蔵庫に入れておかないと（ ）。</>,
                        qReading: null,
                        options: ['溶けてしまいましたよ',
                            '溶けてしまいますよ',
                            '溶いてしまいましたよ',
                            '溶いてしまいますよ'],
                        correct:2
                    },
                    {
                        number: 34,
                        line: 2,
                        q: <>昨日事故にあったが、もう少しで（ ）。</>,
                        qReading: null,
                        options: ['死んだところだった',
                            '死のうとしている',
                            '死ぬところだった',
                            '死ぬかもしれない'],
                        correct:3
                    },
                    {
                        number: 35,
                        line: 2,
                        q: <>環境汚染のせいなのか、近ごろあちこちの川で魚が（ ）。</>,
                        qReading: null,
                        options: ['死んでいっていく',
                            '死んできていく',
                            '死んでしまっていく',
                            '死んでいっている'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q: <>警察に{blankStarBox()}宝石を盗んだことを自白した。</>,
                        qReading: null,
                        options: ['受けて', '繰り返し', '自分が', '尋問を'],
                        correct:1
                    },
                    {
                        number: 37,
                        line: null,
                        q: <>それはもともと{blankStarBox()}人気である。</>,
                        qReading: null,
                        options: ['大人にも', 'ものだったが', 'ねらった', '子供を'],
                        correct:2
                    },
                    {
                        number: 38,
                        line: null,
                        q: <>私はたくさんの{blankStarBox()}真の友人はほとんどいない。</>,
                        qReading: null,
                        options: ['知り合いが', 'できる', 'たよりに', 'いるが'],
                        correct:3
                    },
                    {
                        number: 39,
                        line: null,
                        q: <>彼女は飛行機が{blankStarBox(2)}</>,
                        qReading: null,
                        options: ['離陸して', '上空の', '消えていく', '雲の中に'],
                        correct:2
                    },
                    {
                        number: 40,
                        line: null,
                        q: <>サッカーシーズンの終わり{blankStarBox()}賞が与えられる。</>,
                        qReading: null,
                        options: ['チームに対して', '選手に', '貢献をした', 'ごとに'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、{numberSquareBox(41)}から{numberSquareBox(45)}の中に入る最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: null,
                        q: null,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    ５年前、十日間の予定で、家族でヨーロッパを旅行したとき、こんな経験を
                                    した。観光バスに乗ってあちらこちら見て回った時のことである。私は三歳の孫
                                    を抱いていた。バスに乗り合わせた３０人ぐらいの観光客はみなアメリカやヨー
                                    ロッパの外国人だった。子供を{numberSquareBox(41)}人たちだと見えて、私のそばを通る時に、孫
                                    の顔を見てにっこり笑ったり、手を振ったり、孫の手を握ったり、あるいは英語
                                    や自分の国の言葉で声をかけたりしてくれた。
                                    {numberSquareBox(42)}、５０歳ぐらいの一人の婦人がいきなり、孫の方に顔を寄せて、日本語
                                    で「こんにちは」と言ったのだ。 {numberSquareBox(43)}私はびっくりしてしまった。いかにも人
                                    の良さそうな笑顔だった。たぶんその方は日本に来たことがあるのか、日本に関
                                    する仕事をしているだろう。その婦人は日本語を覚えていて、しかも、私たちが
                                    日本人であることを知って、わざわざ日本語であいさつをしてくれたのだろう。
                                    私はこういう人たちにたいへん親しみを感じた。
                                    こんな時、{numberSquareBox(44)}どうだろうか。知らない人同士がバスに乗り合わせたら、互い
                                    に軽いあいさつぐらいはするけど、上の人のような行動はしないだろう。ことに
                                    私たちみたいな子供連れの外国人がいたら、その人たちに対してどんな態度をと
                                    るだろうか。たぶん積極的に声をかける人は少ないだろう。知らない人と話すの
                                    は恥ずかしい、めんどうだなどとほとんどの人が{numberSquareBox(45)}のではないか。
                                </div>
                            </>,
                        options: ['いやがる', 'うんだ', 'かわいがる', 'そだてる'],
                        correct:3
                    },
                    {
                        number: 42,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['このように', 'これから', 'それなら', 'そのうちに'],
                        correct:4
                    },
                    {
                        number: 43,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['意外なことに', 'いつものように', 'すると', 'まもなく'],
                        correct:1
                    },
                    {
                        number: 44,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['日本人にすれば', '日本人だったら', '日本人だといえば', '日本人だから'],
                        correct:2
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['思ってしまうか', '思ってしまったか', '思ってしまう', '思ってしまった'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: <>筆者は{uBox('自分を指すのに「僕」という言葉を使う')}ことをどう思っているのか。</>,
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    仕事中、{uBox('自分を指すのに「僕」という言葉を使う')}若者が増えてきている。そもそ
                                    も、自分のことを「僕」と言うのは、人に自分の父親や母親のことを「お父さん」
                                    「お母さん」と言うのと同じようなものだ。
                                    「仕事」という枠内で、自分は個人というより会社の一員として見なされてしま
                                    う。だから「僕」ではなく、「わたくし」と言うのが正しいマナーであろう。それに
                                    仕事のやり取りでは先方とある程度の距離感を保つことも必要だ。その時、「わたく
                                    し」は大変役立つ言葉なのである。だから、普段使わないにしても、せめてビジネス
                                    上だけでも先方に確信や信頼を与えるためにも、「わたくし」というのがよいのでは
                                    ないだろうか。
                                </div>
                            </>,
                        options: ['他人に「お父さん」のことを「父」と呼ぶのと似たようなものだ。',
                            '普段あまり使わない言葉を使っているから変だ。',
                            'ビジネスをする上で相手に信用を得ることが難しくなる。',
                            'ビジネスをする上で先方との距離感ができてしまう。'],
                        correct:3
                    },
                    {
                        number: 47,
                        line: 4,
                        q: '筆者の考えとして正しいものはどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    ツイッターと呼ばれ、携帯電話やネット上でほぼリアルタイムで情報やメッセージ
                                    をやり取りできるツールの誕生で、今やいつでも他人と繋がることのできる時代に
                                    なった。
                                    そのため、ネット上での相手の反応がよけい気になったりして、ストレスもまた
                                    溜まっていくらしい。コミュニケーションの場が減りつつあることで悩まされている
                                    現代社会において、簡単に他人との疎通ができると思っていたネットの世界でも、結局
                                    人との交流で疲れてしまうのは同じみたいだ。
                                </div>
                            </>,
                        options: ['他人とのコミュニケーションの疎通のチャンスがだんだん増えていく。',
                            'ネット上の人々の付き合いも簡単にはできないようだ。',
                            'リアルタイムでメッセージが見られるので人に会う必要がなくなった。',
                            '一日中ツイッターをしなければならないのは疲れることだ。'],
                        correct:2
                    },
                    {
                        number: 48,
                        line: 4,
                        q: 'この文書は何の招待状か。',
                        qReading:
                            <>
                                (3)
                                <Image src={pagoda_3_48} alt={'pagoda_3_48'}/>
                            </>,
                        options: ['結婚式', '結婚披露宴', '結婚式の二次会', '공백'],
                        correct:3
                    },
                    {
                        number: 49,
                        line: 4,
                        q: <>{uBox('内向き志向')}とはどんなものか。</>,
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    近年若者の{uBox('内向き志向')}が強まっている。わざわざ苦労してまで海外での留学や勤
                                    務をしたくないという気持ちがわからないことはないが、居心地のいい母国での生活
                                    を思いきって放り出し、新しいことに挑戦してこそ人間としての成長もあるというこ
                                    とをわかってほしい。
                                    彼らのこういった傾向で一番悩まされているのは、日本市場から海外市場に展開
                                    しようとしている日本企業だという。企業のほしがる積極的で自己開発意欲の高い人
                                    材が少なく、企業間で取り合いにまでなっているのに、残りは就職すら困難なはめに
                                    いたっているそうだ。
                                </div>
                            </>,
                        options: ['慣れないことにも挑むこと',
                            '海外留学から帰ってきても、成長のないこと',
                            '日本で安定した生活をしたがること',
                            '就職せずに家の中にいること'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q: 'カクヤス婚とは、どのようなものか。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    結婚式の呼び名はその時代を反映しています。８０年代は、ハデ婚。９０年代は
                                    ジミ婚。２０００年代はアットホーム婚。そして、２０１０年代はというと、カクヤス
                                    婚ではないでしょうか。半額ほどの金額で行われ、利用者が増えているからです。
                                    カクヤス婚を提供している会社が契約したホテルの結婚式の会場では、見た目は
                                    一般の結婚式と同じように行われています。料理もコースで６品。ケーキカットは
                                    もちろん、衣装直しも行われ、新郎新婦はもちろん、招待客の人たちからの評判もい
                                    いそうです。
                                    少子化の影響で結婚する人は年々減少し、結婚式や披露宴の会場には空きができ
                                    るようになりました。そのため、この会社では、会場を持たないで、空き会場を安く
                                    借りることでカクヤス婚を提供しているのです。それまでは、結婚式業界の{uBox('古い体質')}
                                    で、式場で使用する衣装などを専属業者と式場が契約していて、客が会場を通して
                                    申し込みをすると売り上げに応じて業者が会場にバックマージンを払っていました。
                                    そのため、実際の値段より、４０～５５％が消費者が払う価格に上乗せされていまし
                                    た。
                                    この会社では、バックマージンを止め、複数の業者と提携し、価格競争をさせ、
                                    その分値段を下げています。質を保ちながら値段を下げるという消費者の目が厳しい
                                    今の時代にマッチしたサービスの誕生といえるのではないでしょうか。
                                </div>
                            </>,
                        options: ['通常の半分程度の予算でできる結婚式',
                            '自分たちで準備する分、格安にできる結婚式',
                            '家族や親戚だけの少人数で安く行う結婚式',
                            '通常より質を落とした分低額でできる結婚式'],
                        correct:1
                    },
                    {
                        number: 51,
                        line: 4,
                        q: <>{uBox('古い体質')}とはどのような意味か。</>,
                        qReading: null,
                        options: ['式場での衣装などは、全て式場で準備しなければならないこと',
                            '式場での衣装などは、他の業者からレンタルしていること',
                            '衣装業者が式場と衣装の契約をしていること',
                            '結婚式の売り上げを式場と衣装業者などで分けること'],
                        correct:3
                    },
                    {
                        number: 52,
                        line: 4,
                        q: '筆者はカクヤス婚についてどう考えているか。',
                        qReading: null,
                        options: ['値段によって結婚式の質が選べるようになったのはいいことだ。',
                            'カクヤス婚の値段はそのままで、質をどう上げていくかが課題だ。',
                            '今の消費者の価値観にあったサービスがカクヤス婚といえる。',
                            '低価格でも、質が保てるかどうかを消費者がこれから見ていかなければならない。'],
                        correct:3
                    },
                    {
                        number: 53,
                        line: 4,
                        q: 'この花の説明で正しいものはどれか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    世界一大きい花といわれるスマトラ島原産の「ショクダイオオコンニャク」。
                                    小石川植物園で、実に１９年ぶりに開花しました。
                                    この花は、小さな花の集まりで大きなひとつの花のような姿を形成しています。
                                    その直径は１～１.５メートル。３～４年に一度しか咲かないことでも知られていま
                                    す。
                                    また、この花は、臭いでも有名です。植物園でこの臭いを嗅いだ人たちによる
                                    と、「腐った生ゴミの臭い」だとか、「大根が腐ったような臭い」など表現は様々で
                                    すが、異臭{subBox('(注1)')}と言う部分では同じです。この花のある国インドネシアでは、「死体
                                    の花」と呼ばれています。つまり、この花が動物の肉が腐乱{subBox('(注2)')}した状態の臭いと同
                                    じ臭いを放つことから命名されており、日本でも「死臭花」とも呼ばれています。
                                    私はこれを見に、わざわざ電車で１時間３０分かけて行って来ました。ところが、
                                    入場券を買うまでに並び、さらに見るまでに並ぶ大混雑。着いてから２時間、ようや
                                    く出会えた「ショクダイオオコンニャク」。半開きで臭いもそんなに強烈ではありま
                                    せんでした。私の記憶には強烈な臭いは残せませんでしたが、おそらく、次の日あた
                                    りには臭いも強くなるのでしょう。
                                    {noteBox([
                                        <>
                                            (注1) {rubyBox('異臭', 'いしゅう')} : 変なにおい
                                        </>,
                                        <>
                                            (注2) {rubyBox('腐乱', 'ふらん')} : 腐って、形がくずれること
                                        </>
                                    ])}
                                </div>
                            </>,
                        options: ['強烈な臭いを出すが、大きくて花びらも美しい。',
                            '十数年に一度しか咲かない代わりに、小さな花がたくさん咲く。',
                            '死体の臭いと同じなので、インドネシアでは「死臭花」と呼ばれている。',
                            'なかなか咲かないが、咲いた時は独特の臭いで「死体の花」と呼ばれている。'],
                        correct:4
                    },
                    {
                        number: 54,
                        line: 4,
                        q: 'この花を見るために筆者はどのようなことをしたか。',
                        qReading: null,
                        options: ['入場券を買うために２時間も待った。',
                            '入場券を買ってから見るまでに３時間半もかかった。',
                            '家を出てから花を見るまでに３時間半もかかった。',
                            '開園２時間前から並んで待っていた。'],
                        correct:3
                    },
                    {
                        number: 55,
                        line: 4,
                        q: 'この花を見た筆者の印象はどうか。',
                        qReading: null,
                        options: ['花の大きさも臭いも想像以上だった。',
                            '思った通り、臭いも強烈で、花も大きかった。',
                            '想像以上に大きかったが、臭いはあまりしなかった。',
                            '思ったより臭いもなく、花も完全には咲いていなかった。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q: <>{uBox('見られます')}とあるが、それはどうしてか。</>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    近年、定価販売が基本だった清涼飲料水の自販機にも『安売り』の波が押し寄せて
                                    います。複数の飲料メーカーの缶が並んでいる自販機や、一律１００円、８０円、プラ
                                    イスダウンなどと書かれた格安自販機などもちらほら{uBox('見られます')}。どうしてこのよう
                                    な値段で販売できるのでしょうか。
                                    自販機業界は、今まで飲料メーカー、自販機製造メーカー、自販機を管理・運営
                                    する会社、設置場所を貸与するロケーションオーナーの大きく４業種に分類されてい
                                    ました。
                                    その中で、自販機管理会社などは、自販機が飲料メーカーから無償で貸与される
                                    ため、メーカーの希望小売価格、つまり定価で販売するのが通例でした。
                                    しかし、ロケーションオーナーや、管理会社が自販機を買い取ったり、独自に
                                    商品を仕入れたりして安売りを始めました。コンビニの在庫整理品や、デザインが
                                    古くなった商品、製造から日数が経った商品を安値で仕入れ、缶やペットボトルで
                                    『１００円』を実現。プライベートブランド商品も開発し、１缶『８０円』などの商品
                                    も登場したというわけです。
                                    そのほかにも、自作の自販機で販売している格安自販機オーナーや、中古の自販
                                    機を使って格安販売しているオーナーもいるようです。
                                    すべては、価格に厳しい消費者が多いことが理由でしょう。そして、この低価格
                                    志向は全国的な傾向としてまだまだ増えていきそうだということです。
                                </div>
                            </>,
                        options: ['自販機の数か増えて、どこにでもあるから',
                            '自販機に安売りを目立たせる値段などが書いてあるから',
                            '安売りに取り組む自販機のオーナーが増えたから',
                            '飲料メーカーが競争に勝つために安売りを始めたから'],
                        correct:3
                    },
                    {
                        number: 57,
                        line: 4,
                        q: '今までの自販機業界の売り方とはどんなものか。',
                        qReading: null,
                        options: ['自販機は飲料メーカーのものだったため、自由に値段が決められなかった。',
                            '飲料メーカーが定価販売の契約を条件に自販機を無料で貸し出してくれた。',
                            '自販機のオーナーは、メーカーから自販機も買い取るため、定価で売っていた。',
                            '自販機オーナーや管理会社は高額で自販機を借りていたため、定価で販売するしかなかった。'],
                        correct:2
                    },
                    {
                        number: 58,
                        line: 4,
                        q: '筆者は安売り自販機についてどのように考えているか。',
                        qReading: null,
                        options: ['今までの通常料金が高すぎたため、今の料金で当然だ。',
                            '今は一部の地域だけだが、これからも変わらないだろう。',
                            '生産者の立場に立った自販機がもっと増えてほしい。',
                            '消費者は価格に厳しいので、今後もっと安い自販機が普及してくるだろう。'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q: <>ここでいう①{uBox('必然')}とは、どんな意味か。</>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    お墓参りに新しい形態のものが現われた。お墓や故人の遺影、戒名、生前の思い
                                    出の写真などがパソコンや携帯電話の画面で見られる「ネット墓地」だ。お寺に行
                                    かなくてもお参りすることができるので、高齢者や遠方に住んでいてお墓参りに行き
                                    にくい人や、子どもがいないためお墓の管理が難しいという人には便利なシステム。
                                    まだ利用者は少ないが画期的な試みとして注目を集めている。
                                    ネット墓地は、運営している寺によっても様々なサービスがある。墓前の画面に
                                    戒名や故人の写真を映しだしてお参りすることがでたり、実際にあるお墓をネット上
                                    に映し出したりもできる。そのページには、故人の生前の思い出やメッセージ、訪問
                                    者の追悼メッセージなども表示できる。葬儀や法事にパソコンを通じて参加できる
                                    サービスなどもある。利用者も、故人の学生時代や結婚式、家族写真を編集したもの
                                    から、故人が趣味を生かしたものなど様々。
                                    ネット社会が進んで、ここまで仮想世界で行うものかとも思うが、このネット墓
                                    地に対するネットユーザーの反応は好意的なものが多い。「実際のお墓にはなかな
                                    か行けないし、いつでもお参りできるのでいいかもしれない」「場所を取らなくてい
                                    い」などのコメントがブログでも目立つ。もちろん、「サーバーが飛んだらどうす
                                    る」「バックアップはどうなっているのか」「やはりお墓は実際に行くもの」などや
                                    「情緒に欠け、故人を大事にしている気がしない」といった書き込みもないわけでは
                                    ない。
                                    海外では、米国や東南アジアで９０年代後半以降、墓地不足や墓参に伴う交通渋滞
                                    の解消などを理由に日本より早く広がっている。
                                    ネット墓地が注目を集めるには、ただもの珍しいからだけではない。実際、遠方
                                    からだとお墓参り自体が難しい。高齢者にはなおのことだ。また、東京都近辺には土
                                    地がなく新規にお墓をたてることも難しい。さらに、核家族・少子化・無宗教化でお
                                    墓の管理も困難な世の中になっている。そんな中「ネット墓地」が生まれたのも、
                                    ①{uBox('必然')}といえば必然だ。
                                    費用面での負担もネット墓地を後押しするのではと言われている。お墓の管理に
                                    は、多大な費用を要する。普通、寺などでお墓を持つだけで平均２００万以上する。
                                    これに管理費なども別途かかる。事前に準備できればいいだろうが、縁起のいいもの
                                    でもないので、②{uBox('そうもいかない')}家庭も多いだろう。これが、ネット墓地を利用すれ
                                    ば、共同墓地への納骨から管理料まで含めて全部で約５０万円前後。これなら、遺族
                                    にも負担をかけなくてもいいし、いつでもお参りしてもらえると考えたら現実的なの
                                    かもしれない。
                                    お墓にも千差万別。自分が去った後のことだが、様々な選択肢があるので家族で
                                    一度考えてみてはどうだろうか。
                                </div>
                            </>,
                        options: ['ネット墓地が珍しいため注目を集めていること',
                            '家族体系や社会環境の変化がネットでも墓参りを可能にしたこと',
                            'お墓の管理費用や墓参りが高齢者には負担になってきていること',
                            '家族体系や社会環境の変化でお墓の管理が難しくなっていること'],
                        correct:2
                    },
                    {
                        number: 60,
                        line: 4,
                        q: <>②{uBox('そうもいかない')}と同じ意味を表すものはどれか。</>,
                        qReading: null,
                        options: ['ネット墓地を利用したいが、家族の同意が得られない。',
                            'お墓を利用したいが、費用面でネット墓地を利用するしかない。',
                            '遺族に負担をかけてまでお墓を持とうと思わない。',
                            '自分が死ぬ前にお墓などを準備する気はない。'],
                        correct:4
                    },
                    {
                        number: 61,
                        line: 4,
                        q: 'ネット墓地に対して肯定的なネットユーザーの意見にはどのようなものがあるか。',
                        qReading: null,
                        options: ['お墓参りが好きなときにできるのはいい。',
                            'ネット墓地はお墓不足を補う画期的なものだ。',
                            '故人が自分で生前に作れるので便利だ。',
                            '海外でも普及しているのだから日本でも普及するだろう。'],
                        correct:1
                    },
                    {
                        number: 62,
                        line: 4,
                        q: 'この文章は全体としてどんな内容か。',
                        qReading: null,
                        options: ['ネット墓地のサービス内容と注目を集める理由',
                            '寺でのお墓の管理から最新のサービスまでの紹介',
                            'お墓の本来のあるべき姿と、ネット墓地の将来性についての筆者の意見',
                            'ネット墓地の紹介と、多くのネットユーザーから広く利用されている理由の説明'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のＡとＢはそれぞれ別の人のブログの内容である。ＡとＢの両方を読んで、
                        後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'ＡとＢの文で共通している話題は何か。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        最近、カタカナ語や新語、若者言葉が氾濫し、私のような年寄りには何のこと
                                        やら聞いても全く理解できない日本語が増えたように思います。
                                        表現力が低下しているとでもいうか、情緒がなくなったとでもいうか、この
                                        ままでは日本語の美しさや奥深さが失われてしまうのではないかと心配になりま
                                        す。
                                        若者言葉や新語は、意味を知っている人同士だけで通じる言葉で、たとえ一般
                                        的な言葉になっても、表現に重みがあるとはいえないと思います。そして、どん
                                        なに外見を着飾っていようとも、使う言葉が乱れていれば、その人の価値も上が
                                        らず、薄っぺらい人間になってしまいます。言葉の大切さに気づいて、普段から
                                        の言葉遣いには注意してほしいものです。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        言葉は生きているとよく言われる。毎年流行語や新語がどんどん作られ、逆に
                                        死語となる言葉もある。最近の傾向としては、カタカナ語が目立つように思う。
                                        時代の変化が早くなり、グローバル化で全てのものが国境の枠を超えて結びつ
                                        いている。発音や表現方法は違っても言葉も同様に影響し合う。使われない言葉
                                        は自然淘汰され、反対に便利だと思った言葉や今までなかった言葉が使われるよ
                                        うになる。それは防ぎようがない。学校で古文として勉強している日本語もかつ
                                        ては{uBox('現代語だった')}ように。言葉の乱れを指摘する人達も多いが、100年後にはど
                                        んな言葉が使われていようと、それはその時代を反映した日本語であって、ほか
                                        のどの国の言葉でもない。
                                    </div>
                                </div>
                            </>,
                        options: ['新語や流行語を使う若者が増えた',
                            '新語や流行語の存在',
                            '使う言葉によって受ける印象',
                            '正しい日本語の話し方'],
                        correct:2
                    },
                    {
                        number: 64,
                        line: 4,
                        q: <>{uBox('現代語だった')}とあるが、ここで言う現代語は何か。</>,
                        qReading: null,
                        options: ['死語になった日本語',
                            'グローバル化で使われなくなった日本語',
                            '古文で習った日本語',
                            '１００年後に使われている日本語'],
                        correct:3
                    },
                    {
                        number: 65,
                        line: 4,
                        q: <>
                            ＡとＢの二つの文章を以下のようにまとめる場合、①と②に入るものの組み合わ
                            せとして適切なのはどれか。<br/>
                            「Ａの筆者は（ ① ）と考えているが、Ｂの筆者は（ ② ）と考えている。」
                        </>,
                        qReading: null,
                        options:[
                            <>① 年寄りには新語やカタカナ語は難しすぎる<br/>
                                ② グローバル化でカタカナ語の重要性が増した</>,
                            <>① 一般的でないカタカナ語は使うべきではない<br/>
                                ② １００年後にも正しい日本語を使っていけるように守るべきだ </>,
                            <>① 若者は外見ばかり気にして言葉遣いがよくない<br/>
                                ② グローバル化で日本語が日本語でなくなる </>,
                            <>
                                ① 使う言葉によって人の価値も決まる<br/>
                                ② 新語もいずれは古い言葉になってしまう
                            </>
                        ],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・
                        ３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 66,
                        line: 4,
                        q: <>①{uBox('医薬品の２０１０年問題')}の説明として合っているものはどれか。</>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    医療品産業の将来を左右すると言われている「①{uBox('医薬品の２０１０年問題')}」。これま
                                    で、大手製薬会社の主力製品だった医薬品の多くがここ数年で特許切れを迎え、比較
                                    的安価な「後発医薬品（ジェネリック医薬品）」が続々と登場していることに絡む問
                                    題だ。
                                    医薬品は特許で保護されている。製薬会社が独自に開発したものの場合２０年は他
                                    社が勝手に製造・販売することができない。しかし、その期間を過ぎたら別の会社で
                                    も「ジェネリック」として製造・販売できる。また、開発のための多額のコストを負
                                    担しなくてもいいため安くつくれる。
                                    ②{uBox('製薬業界の特色')}として、他業種に比べ少ない商品数で巨大な売り上げ・利益を得
                                    ている会社が多い。そのため一つでも大型商品の売り上げが失われれば、巨大メー
                                    カーでも大打撃を受けることになる。その上、特許切れによる利益減少を埋め合わせ
                                    るために新薬を開発しようとしても、臨床試験の厳格化している現状では、新薬がな
                                    かなか承認されないという問題もある。
                                    政府は、年々増加する社会保障費の増加を少しでも食い止めようと、ジェネリック
                                    のシェアを１２年度には３０％にしようとする目標を掲げている。そして、このため
                                    全国各地の病院では、ジェネリックへのシフトが相次ぎ、大手メーカーの経営を圧迫
                                    している。
                                    新薬の開発には膨大なコストと時間がかかる。そこで大手製薬会社は合併や買収
                                    を模索すると共に、既存の二つの医薬品を合わせ一つの合剤にし、「新薬」として認
                                    可を受け、当分はジェネリックができないようにしている。これには、「今まで二つ
                                    必要だった薬が一つで済む」、「薬代も減った」などと歓迎する声もある。
                                    しかし、反対に複数の薬で細かな病状に対応してきた医師の立場から言えば、必
                                    ずしも喜ばしいことだけばかりではない。ジェネリックに対抗するために、既存薬を
                                    使った合剤が「新薬」として次々と作られるようになれば、医療現場では混乱を招く
                                    し、個々の患者にきめ細かく対応すべき症状でも合剤で対応されるようになるかもし
                                    れない。そうなれば、結局必要のない副作用でまた薬を飲むことにもつながる。それ
                                    は結局薬を増やすことと同じだ。③{uBox('このこと')}は、医療の安全と信頼性を保つ上でも見
                                    過ごすわけにはいかない。
                                    一企業の経営維持のための「合剤」を全面的に批判することはできないが、安易
                                    な「新薬」づくりは避けてほしい。また、それを認可する国にも慎重に審査してほしい。
                                </div>
                            </>,
                        options: ['大手製薬会社が２０１０年に安いジェネリック薬品を大量に製造し始めた問題',
                            '政府がジェネリックのシェアを拡大し、大手製薬会社を圧迫している問題',
                            '大手製薬会社の主力商品の特許が切れ、薬品を安価に製造・販売できるようになる問題',
                            '２０１０年ごろから大手製薬会社の主力商品がジェネリック薬品になり始めたこと'],
                        correct:3
                    },
                    {
                        number: 67,
                        line: 4,
                        q: <>②{uBox('製薬業界の特色')}とは、どういったものか。</>,
                        qReading: null,
                        options:[
                            '一定期間を過ぎたら別の会社でも「ジェネリック」として安価に薬品を製' +
                            '造・販売できるため、各社共に開発に多額のコストを負担するようなことは' +
                            'ない。 ',
                            ' 新薬開発にかけるコストより、大手製薬会社は合併や買収を繰り返すことで' +
                            '他社の新薬を自分たちのものにしてきた。',
                            '臨床試験が厳格化している現状では、新薬がなかなか承認されないため、開' +
                            '発費を負担しようとする会社が少なくなってきた。 ',
                            '大手薬品会社でも、商品の種類が少ないところもあるため、商品の特許が切' +
                            'れれば、売り上げに多大な影響を与える場合がある。 ',
                        ],
                        correct:4
                    },
                    {
                        number: 68,
                        line: 4,
                        q: <>③{uBox('このこと')}の指す意味として、正しいものはどれか。</>,
                        qReading: null,
                        options:[
                            '社会保障費の増加が政府にとって負担になるため、ジェネリックのシェアを' +
                            '上げようとしている目標',
                            '患者の症状に合わせた薬ではなく、合剤で対応されるようになれば、結局は' +
                            '副作用を抑えるために薬を飲むことになること',
                            '新薬の開発にはコストと時間がかかるため、経費を抑えようと大手製薬会社' +
                            'が合併や買収を繰り返していること ',
                            'ジェネリックや既存薬との合剤が大量に製造され、医療現場では混乱を招い' +
                            'ていること ',
                        ],
                        correct:2
                    },
                    {
                        number: 69,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading: null,
                        options:[
                            '企業の経営維持のためにつくった合剤は、特許切れの薬の利益をまかなうた' +
                            'めだけのものなので、もっと新薬開発に力を注ぐべきだ。 ',
                            '合剤は、今までより薬も薬代も少なくて済むので、政府はジェネリックばか' +
                            'りを広めようとしなくてもいい。',
                            '政府のジェネリックのシェアを上げようとする目標のせいで、全国各地の病' +
                            '院で、医師の混乱を招き、大手メーカーの経営を圧迫している。 ',
                            '合剤が普及したら、医師は患者それぞれの症状にきめ細かく対応できなくな' +
                            'るかもしれないので、企業も国も慎重に対応するべきだ。',
                        ],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題13 右のページは、東京美術館のモニター募集の案内である。下の問いに対する
                        答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 70,
                        line: 4,
                        q: 'モニターができるかどうかを知るにはどうしたらいいか。',
                        qReading:
                            <>
                                <Image src={pagoda_3_title13} alt={'pagoda_3_title13'}/>
                            </>,
                        options: ['美術館の企画課の高橋さんに電話で聞く。',
                            '３月中旬頃にホームページでの発表を見る。',
                            '２月４日、美術館からの連絡を待つ。',
                            '３月中旬頃に選考結果の知らせを待つ。'],
                        correct:4
                    },
                    {
                        number: 71,
                        line: 4,
                        q: 'モニターに選ばれた人の特典は何か。',
                        qReading: null,
                        options: ['２０１１年度に行われる展覧会は無料で見られること',
                            '２０１１年度の指定された展覧会に無料招待とモニター料支給',
                            '指定された展覧会と式典無料参加と展覧会の案内パンフレット進呈',
                            '展覧会の入場料無料と作品写真集進呈'],
                        correct:3
                    },
                ],
            },
        ],
    },
    {
        name: '파고다4회',
        n1: [
            {
                title: (
                    <>
                        問題1 {blank}の言葉の読み方として最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 1,
                        line: null,
                        q:
                            <>
                                強盗に大金を{uBox('略奪')}された。
                            </>,
                        qReading: null,
                        options: ['りょくだつ', 'りゃくだつ', 'りょくたつ', 'りゃくたつ'],
                        correct:2
                    },
                    {
                        number: 2,
                        line: null,
                        q:
                            <>
                                課長に、それを決裁する{uBox('権限')}はない。
                            </>,
                        qReading: null,
                        options: ['けんげん', 'けんかん', 'かんげん', 'かんけん'],
                        correct:1
                    },
                    {
                        number: 3,
                        line: null,
                        q:
                            <>
                                政治家がインフレを{uBox('抑制')}するため、いろんな工夫をしぼっている。
                            </>,
                        qReading: null,
                        options: ['こくせい', 'やくせい', 'よくせい', 'おくせい'],
                        correct:3
                    },
                    {
                        number: 4,
                        line: null,
                        q:
                            <>
                                世界{uBox('昆虫')}展示会が今日から開かれる。
                            </>,
                        qReading: null,
                        options: ['ごんしゅう', 'こんちゅう', 'こんしゅ', 'ごんちゅう'],
                        correct:2
                    },
                    {
                        number: 5,
                        line: null,
                        q:
                            <>
                                称讃に{uBox('値する')}果敢な行動だった。
                            </>,
                        qReading: null,
                        options: ['かする', 'ちする', 'ねする', 'あたいする'],
                        correct:4
                    },
                    {
                        number: 6,
                        line: null,
                        q:
                            <>
                                給料が化粧品に{uBox('化けた')}。
                            </>,
                        qReading: null,
                        options: ['まけた', 'さけた', 'ばけた', 'うけた'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題2 {blankRound}に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 7,
                        line: null,
                        q:
                            <>
                                高校時代からロックグループを{blankRound}して演奏活動をしてきた。
                            </>,
                        qReading: null,
                        options: ['結晶', '結成', '結合', '結実'],
                        correct:2
                    },
                    {
                        number: 8,
                        line: null,
                        q:
                            <>
                                生物は進化と{blankRound}を繰り返しながら今の形になった。
                            </>,
                        qReading: null,
                        options: ['退出', '後退', '退席', '退化'],
                        correct:4
                    },
                    {
                        number: 9,
                        line: null,
                        q:
                            <>
                                {blankRound}の厳しい指摘でみんなぞっとして、一生懸命、自分の短所を直した。
                            </>,
                        qReading: null,
                        options: ['監視', '視察', '監督', '観察'],
                        correct:3
                    },
                    {
                        number: 10,
                        line: null,
                        q:
                            <>
                                政府の仲介で労働組合との{blankRound}が解決した。
                            </>,
                        qReading: null,
                        options: ['争議', '競争', '戦闘', '戦略'],
                        correct:1
                    },
                    {
                        number: 11,
                        line: null,
                        q:
                            <>
                                彼は大学時代、サッカー選手だったので{blankRound}した体をしている。
                            </>,
                        qReading: null,
                        options: ['げっそり', 'うんざり', 'ぎっしり', 'がっしり'],
                        correct:4
                    },
                    {
                        number: 12,
                        line: null,
                        q:
                            <>
                                もう{blankRound}話はやめてくださいよ。
                            </>,
                        qReading: null,
                        options: ['たくましい', 'いやしい', 'いさぎよい', 'にぶい'],
                        correct:2
                    },
                    {
                        number: 13,
                        line: null,
                        q:
                            <>
                                外国語の勉強で一番大変なのは{blankRound}の差を知ることだ。
                            </>,
                        qReading: null,
                        options: ['ニュアンス', 'ポジション', 'メディア', 'ツール'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題3 {blank}の言葉に意味が最も近いものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 14,
                        line: null,
                        q:
                            <>
                                {uBox('インテリな')}女性ほど結婚しない人が多いという。
                            </>,
                        qReading: null,
                        options: ['知的な', 'こまかい', 'だらしない', '地味な'],
                        correct:1
                    },
                    {
                        number: 15,
                        line: null,
                        q:
                            <>
                                妹は痛みで顔が{uBox('ゆがんで')}いた。
                            </>,
                        qReading: null,
                        options: ['もれて', 'めくって', 'はずんで', 'ひずんで'],
                        correct:4
                    },
                    {
                        number: 16,
                        line: null,
                        q:
                            <>
                                伝染病のため、支援物資の受け入れを{uBox('打ち切った')}。
                            </>,
                        qReading: null,
                        options: ['納得した', '要請した', '中止した', '念願した'],
                        correct:3
                    },
                    {
                        number: 17,
                        line: null,
                        q:
                            <>
                                ハトのふんで汚れたベンチを住民が交替で{uBox('清掃')}している。
                            </>,
                        qReading: null,
                        options: ['きれいに', '塗装', '装飾', 'とりかえ'],
                        correct:1
                    },
                    {
                        number: 18,
                        line: null,
                        q:
                            <>
                                社内の人間関係が{uBox('ややこしい')}のは一番疲れるよね。
                            </>,
                        qReading: null,
                        options: ['幅広い', 'うまくいく', '複雑な', '粗末な'],
                        correct:3
                    },
                    {
                        number: 19,
                        line: null,
                        q:
                            <>
                                あいつは{uBox('うぬぼれ')}が強い。
                            </>,
                        qReading: null,
                        options: ['気質', '自慢', '忍耐力', '慢心'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題4 次の言葉の使い方として最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 20,
                        line: null,
                        q: '従来',
                        qReading: null,
                        options: [<>お花見の時期が{uBox('従来')}しました。</>,
                            <>{uBox('従来')}のやり方では効率が悪すぎる。</>,
                            <>接客業に{uBox('従来')}している方に相談があります。</>,
                            <>この言葉の{uBox('従来')}を知っている学者はいなかった。</>],
                        correct:2
                    },
                    {
                        number: 21,
                        line: null,
                        q: 'ものものしい',
                        qReading: null,
                        options: [<>車の通行量が減って{uBox('ものものしい')}空気だった。</>,
                            <>空港はテロ警戒で{uBox('ものものしい')}警備だった。</>,
                            <>私がいくら{uBox('ものものしくても')}借金は君に頼めない。</>,
                            <>ここは道路に面しているから、ちょっと{uBox('ものものしい')}。</>],
                        correct:2
                    },
                    {
                        number: 22,
                        line: null,
                        q: '範囲',
                        qReading: null,
                        options: [<>昨日のテストの{uBox('範囲')}解答は彼が持っている。</>,
                            <>若者の{uBox('範囲')}意識が低下したと言われている。</>,
                            <>今日の議論は{uBox('範囲')}を決定しないで進めましょう。</>,
                            <>原子力発電所の{uBox('範囲')}の住民たちに避難指示が出された。</>],
                        correct:3
                    },
                    {
                        number: 23,
                        line: null,
                        q: 'ゆさぶる',
                        qReading: null,
                        options: [<>お相撲さんは巨体を{uBox('ゆさぶって')}歩いた。</>,
                            <>{uBox('ゆさぶって')}いる電車の中でまっすぐ立つのはなかなか難しい。</>,
                            <>ビルに欠陥があるのか、同じフロアを人が走っただけで{uBox('ゆさぶります')}。</>,
                            <>東北関東大震災以降に、地震でもないのに{uBox('ゆさぶって')}いる感じがする。</>],
                        correct:1
                    },
                    {
                        number: 24,
                        line: null,
                        q: 'あえて',
                        qReading: null,
                        options: [<>誰が何と言っても私は{uBox('あえて')}平凡な人です。</>,
                            <>明日やってもいいから、{uBox('あえて')}残業しなくてもいい。</>,
                            <>{uBox('あえて')}なかったことだったのでみんなびっくりした。</>,
                            <>地震が起きたら、{uBox('あえて')}動かないようにしてください。</>],
                        correct:2
                    },
                    {
                        number: 25,
                        line: null,
                        q: '激励',
                        qReading: null,
                        options: [<>会長は社員みんなを{uBox('激励')}した。</>,
                            <>先生は子供たちに読書を{uBox('激励')}した。</>,
                            <>政府は寒さに強い品種を{uBox('激励')}した。</>,
                            <>缶コーヒーを１本１０円で販売している{uBox('激励')}自動販売機があった。</>],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題5 次の文の{blankRound}に入れるのに最もよいものを、１・２・３・４から一つ
                        選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 26,
                        line: null,
                        q:
                            <>
                                一部の人達の娯楽のために、ゴルフ場がたくさん造られ、貴重な自然が
                                {blankRound}いる。
                            </>,
                        qReading: null,
                        options: ['破壊して', '破壊されつつ', '破壊しつつ', '破壊されて'],
                        correct:4
                    },
                    {
                        number: 27,
                        line: null,
                        q:
                            <>
                                国土交通省が山の標高を調べ直した結果、高くなった山{blankRound}、低く
                                なった山もあったようです。
                            </>,
                        qReading: null,
                        options: ['があれば', 'もあれば', 'があるなら', 'もあるなら'],
                        correct:2
                    },
                    {
                        number: 28,
                        line: null,
                        q:
                            <>
                                この頃の不景気で、同業者の中{blankRound}お中元やお歳暮を廃止したところも
                                多いようです。
                            </>,
                        qReading: null,
                        options: ['には', 'においては', 'にとっては', 'のうちに'],
                        correct:1
                    },
                    {
                        number: 29,
                        line: 2,
                        q:
                            <>
                                ご遠慮{blankRound}、お好きな物をおっしゃってください。
                            </>,
                        qReading: null,
                        options: ['なさらないで', 'いたさないで', 'いらっしゃらないで', 'もうしあげないで'],
                        correct:1
                    },
                    {
                        number: 30,
                        line: null,
                        q:
                            <>
                                今回が幹事として初めての仕事で緊張している私{blankRound}、先輩たちは
                                美人のバスガイドさんに夢中です。
                            </>,
                        qReading: null,
                        options: ['をとわず', 'をかぎりに', 'はもとより', 'をよそに'],
                        correct:4
                    },
                    {
                        number: 31,
                        line: 2,
                        q:
                            <>
                                贈り物が一つの文化{blankRound}意見があるようですが、私にはとても文化だ
                                とは思えません。
                            </>,
                        qReading: null,
                        options: ['にもあるという', 'にあったという', 'であるという', 'でかかわったという'],
                        correct:3
                    },
                    {
                        number: 32,
                        line: 2,
                        q:
                            <>
                                経験がないからと言って、無礼なことを{blankRound}。
                            </>,
                        qReading: null,
                        options: ['していいこともあるだろう', 'していいわけではない', 'していいにすぎない', 'してはいけそうもない'],
                        correct:2
                    },
                    {
                        number: 33,
                        line: 2,
                        q:
                            <>
                                こんな難しい条件を、私としてはとてものむ{blankRound}。
                            </>,
                        qReading: null,
                        options: ['ようにするのは悪いんだろう', 'ことはあるに違いない', 'ようにします', 'ことはできない'],
                        correct:4
                    },
                    {
                        number: 34,
                        line: 2,
                        q:
                            <>
                                私が提案したのは、彼の意見に対して問題点を指摘{blankRound}、特別な意味は
                                ありません。
                            </>,
                        qReading: null,
                        options: ['しそうになったにすぎず', 'しそうになったほどで', 'しようとしたにすぎず', 'しようとしたほどで'],
                        correct:3
                    },
                    {
                        number: 35,
                        line: 2,
                        q:
                            <>
                                この困難な任務を果たせるのは、彼をおいて{blankRound}。
                            </>,
                        qReading: null,
                        options: ['ほかにもいるはずだ', 'ほかにはいない', 'ほかにもいるはずか', 'ほかにはいないか'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題6 次の文の{blankStar}に入る最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 36,
                        line: null,
                        q:
                            <>
                                なんとA鉄道会社では{blankStarBox()}給料をカットするそうだ。
                            </>,
                        qReading: null,
                        options: ['少しでも', '遅れると', '運転士の', '到着時間が'],
                        correct:2
                    },
                    {
                        number: 37,
                        line: null,
                        q:
                            <>
                                日本人は物事をはっきり言わないので{blankStarBox()}流されて
                                しまいます。
                            </>,
                        qReading: null,
                        options: ['強いと', '相手の押しが', '勢いに', 'そっちの'],
                        correct:4
                    },
                    {
                        number: 38,
                        line: null,
                        q:
                            <>
                                シンガポールなどの{blankStarBox()}状態です。
                            </>,
                        qReading: null,
                        options: ['共存している', '異文化と', 'ような', '多民族国家は'],
                        correct:1
                    },
                    {
                        number: 39,
                        line: 2,
                        q:
                            <>
                                言葉は長い歴史を{blankStarBox()}話されて生まれたものです。
                            </>,
                        qReading: null,
                        options: ['かけて', '人々に', '同じ文化を', '有する'],
                        correct:4
                    },
                    {
                        number: 40,
                        line: null,
                        q:
                            <>
                                つまらないサービスをされた{blankStarBox()}おぼえておきま
                                しょう。
                            </>,
                        qReading: null,
                        options: ['必要がない', 'チップをする', '場合は', 'ことを'],
                        correct:1
                    },
                ],
            },
            {
                title: (
                    <>
                        問題7 次の文章を読んで、 {numberSquareBox(41)}から{numberSquareBox(45)}の中に入る最もよいものを、１・２・３・４
                        から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 41,
                        line: null,
                        q: null,
                        qReading:
                            <div className={'question_q_reading'}>
                                県内での歩道橋撤去は、これまで地域の再開発事業で撤去されたものがいく
                                つかあるそうだが、安易に撤去を認めると、次々に取り壊される恐れがあり、
                                {numberSquareBox(41)}の安全が脅かされるのではないかと警察では心配している。
                                警察は今のところ横断歩道での事故がないので、問題は起きていないが、事故
                                は{numberSquareBox(42)}ので、なるべく歩道橋を利用して欲しいと訴えている。もし歩道橋がな
                                ければ事故が急増するかもしれないという心配があるからである。
                                人と車が平面で{numberSquareBox(43)}という優れた利点を歩道橋は持っている。一方で歩道橋
                                は階段を上らなければならないし、雨の日などは滑りやすく危険だという意見も
                                ある。老人や体の不自由な人にとって、階段はきつい。また、道路とは人が歩く
                                ためにあるもので、{numberSquareBox(44)}歩行者のものだ。それが車が増えたことによって、歩
                                行者が歩道や歩道橋に締め出されたのである。本来ならば、車が歩道橋を走るべ
                                きなのだ。もちろん車が歩道橋を走ることはないだろう。
                                「赤信号、みんなで渡れば怖くない」というようなジョークが流行する反面
                                で、歩行者の犠牲が急増している。こういうことを考えてみると、歩道橋の新し
                                いあり方を真剣に考える必要が{numberSquareBox(45)}。
                            </div>,
                        options: ['横断歩道', '歩道橋', '車', '歩行者'],
                        correct:4
                    },
                    {
                        number: 42,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['いつでも起こらない', 'もう起きてしまった', 'いつ起こるかわからない', 'もう起きることはない'],
                        correct:3
                    },
                    {
                        number: 43,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['交差する', '交差しない', 'ぶつける', 'ぶつけない'],
                        correct:2
                    },
                    {
                        number: 44,
                        line: null,
                        q: null,
                        qReading: null,
                        options: ['もともと', 'やっぱり', 'とはいえ', 'それとも'],
                        correct:1
                    },
                    {
                        number: 45,
                        line: 2,
                        q: null,
                        qReading: null,
                        options: ['あるだろうか', 'ないだろう', 'あるようだ', 'あるようではない'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題8 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 46,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    恋愛の始まり方にもいろいろありますが、時代が変わったとはいえ、まだまだ
                                    男性から言い寄る方が多いのではないでしょうか。欧米でもそれは一緒で、女性から
                                    言い寄ってはいけないというルールがあるわけでもないのに、なぜか女性から言い寄
                                    ることは圧倒的に少ないのが現状のようです。
                                    海外サイトで、「実は男性も女性の方から言い寄られることは大好きだから、
                                    もっとそれに女性も気づいてほしい」という男性から女性に向けた投稿があり、大歓
                                    迎をうけました。
                                </div>
                            </>,
                        options: ['男性も女性ももっと積極的に相手を求めるべきである。',
                            '好きな女性ができたら積極的になるのが男というものである。',
                            '女性も気に入った男性がいれば積極的に近づいてほしい。',
                            '女性でも積極的な人がいるが、男性はそのような女性があまり好きではない。'],
                        correct:3
                    },
                    {
                        number: 47,
                        line: 4,
                        q: 'この文章で筆者が最も言いたいことは何か。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    日本人の三人に一人の死亡原因となっている「癌」。手術、放射線、そして抗癌
                                    剤の三大治療の他に、患者の頼りは、健康食品などの「代替療法」だ。
                                    しかし、インターネット上などで情報が氾濫する中、どの情報を信頼していいか
                                    わからない。国が「代替療法」の効果を検証したり有効性を研究したりしていないた
                                    め、患者は自力で情報収集しなければいけない状況だ。正しい情報を見極められる仕
                                    組みを作り、癌患者の拠り所の「代替療法」をどう付き合うべきか考えなければなら
                                    ない。
                                </div>
                            </>,
                        options: ['代替療法に関する情報はインターネット上で確認してから使用するべきだ。',
                            '国は癌患者のために代替療法をどのように利用するべきかを検証するべきだ。',
                            '日本人は三人に一人が「癌」で死亡しているので、日頃から健康食品を摂取' +
                            'するべきだ。',
                            '代替療法は信憑性に欠けるものが多いので、それだけで癌が治ると思っては' +
                            'いけない。 '],
                        correct:2
                    },
                    {
                        number: 48,
                        line: 4,
                        q: <>筆者が{uBox('気分最悪なんだけど…')}と思うのはなぜか。</>,
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    長いこと仕事をしていると、誰だって一度や二度は二日酔いのまま仕事をしたこ
                                    とがあると思います。軽く飲んだときはいいんですが、しこたま飲んでしまったとき
                                    など、丸一日経って『まだ気持ちが悪い』けど働かなきゃいけない。最初のうちは何
                                    とか頑張っているんですが、朝方になると眠いし、気持ち悪くてへとへとになってし
                                    まいます。そんな時、お店にあるスピーカーから聞きなれた音楽と共にあのキャッチ
                                    フレーズ。
                                    「セブンイレブンいい気分」
                                    いや、ちょっとまって…。{uBox('気分最悪なんだけど…')}。
                                </div>
                            </>,
                        options: ['今の気分と全然合わない音楽が流れてきたから',
                            '流れてくる音楽が店の雰囲気と合わないから',
                            '店の売上がよくないのに明るい音楽が流れてきたから',
                            '店は静かであるべきなのに騒々しい音楽が流れてきたから'],
                        correct:1
                    },
                    {
                        number: 49,
                        line: 4,
                        q: <>ここで言う{uBox('温度差')}とは何か。</>,
                        qReading:
                            <>
                                (4)
                                <div className={'question_q_reading'}>
                                    小学３年の娘の担任が、何もしていない娘に急に怒り出したり、うっぷん晴らしに
                                    叩いてくる男の子のことを注意してほしいと娘がお願いしても無視する、と娘が訴え
                                    ています。以前勉強の事で先生に相談したとき、親の私には親切に対応してください
                                    ましたが、娘にたずねると以前と変わりがないとのことでした。親に対しての説明と
                                    子どもたちに対しての対応に、少し{uBox('温度差')}を感じます。親がもっと先生に話していく
                                    ほうがよいのかもしれませんが、先生の反感を買ってしまうのも子どもにとってよく
                                    ないのかなと思ってしまい、対応に困っています。
                                </div>
                            </>,
                        options: ['娘の話と先生の話がかけ離れていること',
                            '先生の授業のやり方に多くの問題があること',
                            '先生の人に対しての対応に差別があること',
                            '先生の筆者に対しての言動がおかしいこと'],
                        correct:3
                    },
                ],
            },
            {
                title: (
                    <>
                        問題9 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 50,
                        line: 4,
                        q: 'クリッターカムの特徴は何か。',
                        qReading:
                            <>
                                (1)
                                <div className={'question_q_reading'}>
                                    クリッターカムとは、動物の生活様式についての情報を集めるための科学者に
                                    よって使用されている。新しい研究用器材に付けられた名前である。音、映像、その
                                    他の情報を記録する極小のビデオカメラの一種であるクリッターカムのユニークな特
                                    徴は、それが研究対象の動物に取り付けられるということである。動物のじゃまをし
                                    たり、行動様式を変えさせたりしないので、科学者は動物の自然な行動について理解
                                    を深めることができる。
                                    クリッターカムは、海洋生物学者であり映画制作者であるグレッグ・マーシャル
                                    によって考案された。マーシャルはある日、コバンザメがサメにぴったりとくっつい
                                    ているのを目撃したとき、その器材についてのアイデアを思いついた。サメは、腹部
                                    にその生き物がくっついているということに気づいていないようであった。サメが
                                    コバンザメの存在に煩わされないのであれば、小型カメラの存在にも煩わされること
                                    はないだろうと、マーシャルは考え付いたのである。
                                    クリッターカムは動物の研究にとって重要である。なぜなら、それは科学者が以
                                    前には得ることができなかった動物についての情報を得ることを可能にするからであ
                                    る。それを使うことで、人間の存在が動物の行動に影響したかどうかを心配する必要
                                    もなく自然な環境での動物の映像記録を得ることができる。このようにして得られた
                                    事実は、動物を理解するためだけでなく、環境保護の目的においても重要である。人
                                    間が気を配るべき自然の領域を科学者が特定し、そうするための最もよい方法を判断
                                    することをクリッターカムはより容易にするのである。
                                </div>
                            </>,
                        options: ['人間と動物の詳細な行動を観察するときに使うものである。',
                            '動物に付けられるものだが、動物の行動に変化を与えることはない。',
                            'ビデオカメラの一種で、カメラマンが動物を観察するときに使うものである。',
                            '動物の体長と同じ長さのカメラで、動物はそれが付いていることに気づかない。'],
                        correct:2
                    },
                    {
                        number: 51,
                        line: 4,
                        q: 'グレッグ・マーシャルが考え付いたのは何か。',
                        qReading: null,
                        options: ['サメのお腹の中にカメラをつけてもその存在に気づかないこと',
                            'コバンザメをサメにつけてもその存在に気づかないこと',
                            'サメについているコバンザメにカメラをつけても気づかないこと',
                            'サメに小型カメラを付けてもサメはその存在に気づかないこと'],
                        correct:4
                    },
                    {
                        number: 52,
                        line: 4,
                        q: 'クリッターカムの役割を何と言っているか。',
                        qReading: null,
                        options: ['動物の生態をよりわかりやすく教えてくれる。',
                            '人間が守るべき自然の領域をよりよく教えてくれる。',
                            '動物が人間にどんな影響を与えたかを教えてくれる。',
                            '人間が動物とどういうつながりを持っているかを教えてくれる。'],
                        correct:2
                    },
                    {
                        number: 53,
                        line: 4,
                        q: 'なぜ顧客は苦情を言ったのか。',
                        qReading:
                            <>
                                (2)
                                <div className={'question_q_reading'}>
                                    発信人 : 山本 けいすけ〈keisuke@yamato.com.au〉<br/>
                                    宛先 : 全職員<br/>
                                    日付 : 2012年2月5日<br/>
                                    件名 : 電話システム<br/>
                                    全職員の皆さん<br/>
                                    現在、会社の番号に電話をしても直接職員と話すことができないという、お客様
                                    からの苦情を私は数多く受けています。わが社の電話の記録をチェックしたところ、
                                    電話システムが2月2日の午前10時から午前11時の間に一時的に運転休止したほか
                                    は、いかなる技術的なトラブルも発見されませんでした。むしろ、電話に十分と言え
                                    るほど素早く出られていないし、昼間にかかってくる電話の多くが留守番電話に自動
                                    的につながっているようです。
                                    ご存じのとおり、すべての電話は職員によって応答されなければならないと、会
                                    社方針にはっきり述べられています。留守番電話はお客様が営業時間外、もしくは祭
                                    日に電話をかけてきた際に、メッセージを残すことができるようにするためだけのも
                                    のなのです。このサービスは主に、わが社の国際的なクライアントと、通常の営業時
                                    間に電話することができないほかのお客様のためにあるのです。
                                    10分間以上自分の机を離れる際は、自分宛の電話はすべて受付係へ転送されるよ
                                    うに、電話機をセットするのを忘れないでください。受付係の人はその際、メッセージ
                                    をメモしたり、電話を別の適当な職員に電送したりしてください。こうすることで、
                                    電話が最も良い方法で確実に処理されます。よろしくお願いします。
                                    {attachBox(<>
                                        山本 けいすけ<br/>
                                        代表取締役
                                    </>)}
                                </div>
                            </>,
                        options: ['留守番電話にメッセージを残すことができないから',
                            '自分たちの電話が会社の電話記録に録音されていないから',
                            '会社の電話回線に技術的なトラブルが続いているから',
                            '自分たちの電話が職員によって応答されていないから'],
                        correct:4
                    },
                    {
                        number: 54,
                        line: 4,
                        q: 'この会社の方針は何か。',
                        qReading: null,
                        options: ['通常の営業時間の後でも電話に出なければならない。',
                            '職員は国際電話の際に会社の電話を使用を避けるべきである。',
                            '営業時間内のすべての電話は、人により応答されなければならない。',
                            '残されたメッセージは職員によってチェックされなければならない。'],
                        correct:3
                    },
                    {
                        number: 55,
                        line: 4,
                        q: '10分間以上自分の机を離れる際、職員が忘れずにするべきことは何か。',
                        qReading: null,
                        options: ['自分がどこに行くのか受付係に知らせることである。',
                            '電話を処理するために、自分の電話機を携行することである。',
                            '自分のためにメッセージをメモしてくれるよう、適当な人に頼むことである。',
                            'すべての電話が受付係に転送されるよう、自分の電話機をセットすることである。'],
                        correct:4
                    },
                    {
                        number: 56,
                        line: 4,
                        q: 'イギリスのある学生が問題になったのは何か。',
                        qReading:
                            <>
                                (3)
                                <div className={'question_q_reading'}>
                                    著作権とは、いろんな分野で著作物をその著作者が独占的に支配して利益を受け
                                    る権利です。有効期間はものによって違います。それでは、著作権はどこまで認めら
                                    れるべきかについての具体的な事件を紹介しましょう。
                                    イギリスのある学生がウェブサイトを作って、そのウェブサイトに違法動画への
                                    リンクを貼ったことから、警察に著作権の侵害だとして逮捕され、さらにアメリカか
                                    ら身柄の引き渡し要求を受けています。このことが著作権の行き過ぎではないかと、
                                    大きな議論を呼んでいるようです。
                                    事件の概要を簡単に説明すると、イギリスのある学生が、「テレビシャック」と
                                    いうウェブサイトを作りました。作った当時からかなり人気があって、そのサイト
                                    からテレビ番組がどこで見られるかを動画ですぐに調べることができました。ところ
                                    が、アメリカ当局がこのウェブサイトのドメイン名を強引に停止してサービスを終了
                                    させましたが、その学生はすぐにまったく同じ機能を持っている「TVShack.cc」
                                    という別名で再びサービスを立ち上げました。
                                    すると11月にアメリカの入国管理局がドメイン名を差し押さえてしまい、イギリス
                                    で逮捕され、9月の裁判まで保釈中の身となりました。アメリカ当局はそれだけでは
                                    飽きたらず、アメリカの法の下で裁かれるようにと身柄の引き渡しを要求しています。
                                    著作権を侵害する動画へのリンクを貼ったことで、アメリカのテレビ番組に損害を
                                    与えたとの理由ですが、国をまたいでまでのこの処罰が行き過ぎではないかと、大き
                                    な議論を呼んでいるようです。
                                </div>
                            </>,
                        options: ['アメリカ当局のサイトを無断に侵害して破壊したこと',
                            'あるウェブサイトに入れないようにリンクを貼ったこと',
                            'ウェブサイトに自分の著作権の権利を主張したこと',
                            '自分が作ったサイトに、違法な動画へのリンクを貼ったこと'],
                        correct:4
                    },
                    {
                        number: 57,
                        line: 4,
                        q: '「TVShack.cc」について正しいのはどれか。 ',
                        qReading: null,
                        options: ['アメリカ当局がイギリスの学生から奪った新しいウェブサイトである。',
                            'アメリカの入国管理局が世界の人々のために作ったウェブサイトである。',
                            'イギリスのある学生が作ったウェブサイトと同じ機能を持つウェブサイトである。',
                            'イギリスの学生が作ったサイトより、もっといろんな情報があるウェブサイトである。 '],
                        correct:3
                    },
                    {
                        number: 58,
                        line: 4,
                        q: 'この事件についての反応はどうか。',
                        qReading: null,
                        options: ['著作権の侵害はどんな理由であれ、許されないという世論がある。',
                            'アメリカ政府の度を過ぎた対処と処罰に、世論はあまりよくないらしい。',
                            'いくら学生であっても他人の著作権の侵害をするだけは許せないようである。',
                            '著作権についての法律を従来よりもっと強化すべきだという世論がある。'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題10 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 59,
                        line: 4,
                        q: <>①{uBox('骨粗しょう症')}について正しいのはどれか。 </>,
                        qReading:
                            <div className={'question_q_reading'}>
                                健康な骨を作るためにはカルシウムが豊富な食品を食べなければならないという
                                ことは、ほとんどの人が知っている。しかし、多くの人々は、運動が食事と同じくら
                                いに不可欠であるということをわかっていない。たとえば、若いころに十分な運動を
                                しなければ、晩年に、骨が非常に簡単に折れるようになる病気である①{uBox('骨粗しょう症')}
                                を患うかもしれないのである。
                                運動は強い骨を作るために非常に大切であるが、どんな種類の運動でも役立つと
                                いうわけではない。骨と筋肉が重力に反発して動くことが大切である。ダンス、ラン
                                ニング、エアロビクスがそのような運動の例である。一方、水泳は水が体重を支える
                                のでそれほど効果的ではない。骨を強化するためには正しい種類の運動を定期的に行
                                わなければならない。
                                ダンスやランニングのような体重のかかる運動は、いくつかの理由で骨の健康を
                                増進する。その一つは、子供たちや若者たちの骨をより太く、より強くするのに役立つ
                                ことである。もう一つは、そうした運動が骨の周囲の筋肉を強化するということである。
                                そして、これらの筋肉は張力を骨にかけ、骨の強さを保つのである。運動はまた、別
                                の方法で私たちの骨を保護するのにも役立つ。定期的な運動は強さ、バランス、身体
                                のコントロールを向上させるので、骨に損傷を与えかねない事故を避けることがより
                                容易になるのである。
                                体重のかかる運動は、人生のどの段階においても骨の健康にとって有益である。
                                しかし、その利点は年齢によって異なる。生まれてから30歳ごろまでに、骨は作り
                                上げられる。したがって、幼児期により強い骨を作ることが、老年期の骨粗しょう症
                                を防ぐ最高の方法である。子供たちは、毎日30～60分間肉体的な活動を行うように
                                するべきである。ランニングとジャンプが含まれるスポーツ、たとえば②{uBox('バスケットボールやサッカー')}
                                などが理想的である。健康な骨を作るためのカギは、若いころから
                                手入れを始めることと、栄養とライフスタイルの両方に注意を払うことなのである。
                            </div>,
                        options: ['運動のしすぎで、骨が簡単には折れない病気',
                            '若いときカルシウムをたくさん摂ることによって生じる病気',
                            '運動不足によって、年をとると骨が簡単に折れてしまう病気',
                            'カルシウムの過多摂取によって、年をとると誰でも患いやすい病気'],
                        correct:3
                    },
                    {
                        number: 60,
                        line: 4,
                        q: '体重のかかる運動がいい理由として正しいのはどれか。',
                        qReading: null,
                        options: ['事故によって、骨に損傷があってもその回復がとても速くなるから',
                            '骨だけでなく骨の周りの筋肉も強くなるので、骨を保護するのに役立つから',
                            '体のバランスや栄養の供給がよくできて、骨がだんだん太くなるから',
                            '健康な骨のおかげで、体内の臓器も活発になって健康が保てるから'],
                        correct:2
                    },
                    {
                        number: 61,
                        line: 4,
                        q: <>②{uBox('バスケットボールやサッカー')}のいいところは何か。 </>,
                        qReading: null,
                        options: ['骨と筋肉が重力に反発して動くことで、骨が健康になる。',
                            'とても激しい運動でありながらも安全なので、骨が健康になる。',
                            '子供が好きなスポーツを楽しんでいるうちに、骨が健康になる。',
                            '科学者たちの研究により骨にいい運動だと明らかになったので、骨が健康になる。 '],
                        correct:1
                    },
                    {
                        number: 62,
                        line: 4,
                        q: '健康な骨を保つためにすべきことは何か。',
                        qReading: null,
                        options: ['青年期から体にいい栄養分を採ったり運動したりしたほうがいい。',
                            '子供の時から定期的に少しずつ体を動かす運動をしたほうがいい。',
                            '幼児期に運動するのは危ないから３歳以降から運動を始めたほうがいい。',
                            '子供の時はランニング、老年期はジャンプが含まれた運動をしたほうがいい。'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題11 次のＡとＢはそれぞれ別の人のコラムの内容である。ＡとＢの両方を読んで、
                        後の問いに対する答えとして最もよいものを、１・２・３・４から一つ選び
                        なさい。
                    </>
                ),
                question: [
                    {
                        number: 63,
                        line: 4,
                        q: 'ＡとＢのどちらのコラムにも触れられている内容はどれか。',
                        qReading:
                            <>
                                <div className={'question_q_reading_wrap'}>
                                    A
                                    <div className={'question_q_reading'}>
                                        ３０過ぎても結婚しない女性はどんな理由があるのでしょうか。キャリアウー
                                        マンであるため、「仕事が優先になりがち…」というものでしょうか。「まだ旅
                                        行や趣味をしたい」からでしょうか。ただ単純に「すぐにでも結婚したいけど、
                                        いい人が見つからない」からでしょうか。
                                        人によって違うと思いますが、たぶん彼女たちは結婚に魅力を感じていないん
                                        じゃないでしょうか。私は結婚の在り方に疑問を持っています。結婚というの
                                        は、実は子どもに父親と母親をはっきり認識させるために存在するのではないか
                                        と思っています。そうすると、子どものない夫婦って、何のために結婚するんで
                                        しょうね。デキ婚は、世間一般ではイメージ悪いようですが、実は、デキ婚こ
                                        そ、結婚の本来あるべき姿じゃないかと思ってます。
                                    </div>
                                </div>
                                <div className={'question_q_reading_wrap'}>
                                    B
                                    <div className={'question_q_reading'}>
                                        「３０才独身女性＝行き遅れ」っていうのは、本当に間違ったと思います。
                                        だいたい結婚するのにふさわしい年齢って誰が決めたか分かりません。女性でも
                                        男性でも自分の仕事ややりたいことがたくさんあったらやっぱり結婚が遅れるこ
                                        ともあるでしょうし、しないこともあるでしょう。
                                        そもそも結婚とは何なのでしょうか。私は結婚は「他人同士が新しく家族にな
                                        る」ことだと思っています。そこに年齢が関係してるとはまったく思いません。
                                        他人同士がお互いを尊重しつつ家族になるには、教育、常識、社会性等、自分を
                                        磨いていく必要があると思います。１０代でそれができる人もいるでしょう。３０
                                        代でぴかぴかに磨かれた独身女性は世の中にたくさんいます。４０代だって５０代
                                        だって同じです。１００才になってもできない人もいます。年齢なんて結婚とは何
                                        の関係もありません。
                                    </div>
                                </div>
                            </>,
                        options: ['結婚をしたがらない男性と女性の割合',
                            '３０代の女性が結婚しない理由',
                            '結婚を早くしなくてもいい理由',
                            '結婚が自分の人生に及ぼすこと'],
                        correct:2
                    },
                    {
                        number: 64,
                        line: 4,
                        q: '「結婚」について、Ａの筆者とＢの筆者はどのような意見を述べているか。',
                        qReading: null,
                        options: ['ＡもＢも「結婚」について主観的な立場から述べている。',
                            'ＡもＢも「結婚」について客観的な立場から述べている。',
                            'Ａは「結婚」のいいところを、Ｂは「結婚」の悪いところを述べている。',
                            'Ａは「結婚」の在り方を、Ｂは年齢による「結婚」のやり方を述べている。'],
                        correct:1
                    },
                    {
                        number: 65,
                        line: 4,
                        q: 'AとBのどちらのコラムにも共通した認識はどれか。',
                        qReading: null,
                        options: ['結婚するのにふさわしい年齢がある。',
                            '結婚は年齢と関係がない。',
                            '結婚すると子育ての大変さが分かる。',
                            '結婚とは新しい家族を作ることである。'],
                        correct:4
                    },
                ],
            },
            {
                title: (
                    <>
                        問題12 次の文章を読んで、後の問いに対する答えとして最もよいものを、１・２・
                        ３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 66,
                        line: 4,
                        q: <>①{uBox('「要支援」から「要介護１」……「要介護５」')}とあるが、これは何を意味して
                            いるのか。 </>,
                        qReading:
                            <>
                                <div className={'question_q_reading'}>
                                    介護保険制度が始まって２年余り。お年寄り相手のボランティア活動に長く取り
                                    組んできた私には、たいへん思い入れがあります。介護を家族だけで抱え込んできた
                                    人たちからすれば、これで肩の荷が下りた、というのが実感でしょう。その一方で、
                                    いまの制度の問題点も明らかになってきました。
                                    一番の問題は、お年寄りが介護保険のサービスを受けられるかどうかを、市町村
                                    が認定する「要介護認定」という仕組みにあります。この認定によって、
                                    ①{uBox('「要支援」から「要介護１」……「要介護５」')}の６段階に振り分けられ、それぞれ受けられる
                                    サービスの上限額が決まります。しかし、この金額の枠がネックになって、受けたい
                                    サービスを受けられないお年寄りが実は多いのです。
                                    {rubyBox('痴呆', 'ちほう')}
                                    のお年寄りの場合、必要な
                                    介護のランクが低く判定される傾向があり、不公平だ、とも指摘されています。
                                    「要介護認定」は大幅に簡素化する必要があります。少なくとも段階制はやめる
                                    べきですし、いっそ認定そのものをやめてしまったらどうでしょうか。
                                    厚生労働省は「②{uBox('そんなことをしたら')}介護サービスの利用者が激増し、介護保険の
                                    財政が{rubyBox('破綻', 'はたん')}
                                    してしまう」と反対するでしょう。でも、使ったサービスの料金の１割
                                    は自己負担なので、要らないサービスを受けたがる、いわゆる「③{uBox('モラルハザード')}」
                                    は、そんなに心配することはないと思います。
                                    それに「要介護認定」は訪問調査、コンピューターを使った一次判定、それらを
                                    もとに専門家からなる認定審査会がそれらを合わせて審査する最終判定――と、もの
                                    すごく手間と費用がかかります。
                                    新潟のような雪国では、訪問調査ひとつとってもたいへんです。認定制度それ自
                                    体のコストが、④{uBox('介護保険財政を圧迫している')}面もあるのです。
                                    来春には市町村ごとに、介護保険料の見直しが行われます。保険料を大幅に引き
                                    上げずに済せるためにも、このタイミングをとらえて、「要介護認定」をやめる決断
                                    をすべきです。
                                </div>
                            </>,
                        options: ['病気の軽重による保険額の差',
                            '病気の軽重によるボランティアの等級',
                            '病気の軽重によるお年寄りの精神状態',
                            '病気の軽重による手当ての段階'],
                        correct:1
                    },
                    {
                        number: 67,
                        line: 4,
                        q: <>②{uBox('そんなことをしたら')}とは、どんなことを言っているか。 </>,
                        qReading: null,
                        options: ['痴呆の保険上限額をあげること',
                            '一般の人がボランティア活動をやめること',
                            '要介護認定を大幅に簡素化すること',
                            '要介護認定の段階制に振り分けることをやめること'],
                        correct:4
                    },
                    {
                        number: 68,
                        line: 4,
                        q: <>③{uBox('モラルハザード')}とあるが、ここで言うモラルハザードは何か。</>,
                        qReading: null,
                        options: ['むやみに保険を利用すること',
                            '１割以上の保険料を要求すること',
                            '病院が保険料をだますこと',
                            '家族が病気を隠して保険料をもらうこと'],
                        correct:1
                    },
                    {
                        number: 69,
                        line: 4,
                        q: <>④{uBox('介護保険財政を圧迫している')}とあるが、それはなぜか。 </>,
                        qReading: null,
                        options: ['市町村の制度の運用が悪いから',
                            '要介護認定そのものに費用がかかるから',
                            'モラルハザードが起きるかもしれないから',
                            '要介護認定制度を改定するのに費用がかかるから'],
                        correct:2
                    },
                ],
            },
            {
                title: (
                    <>
                        問題13 右のページは、長崎県佐世保市にあるホテルの紹介である。下の問いに対する
                        答えとして、最もよいものを１・２・３・４から一つ選びなさい。
                    </>
                ),
                question: [
                    {
                        number: 70,
                        line: 4,
                        q: '山田さんは今度の休みに長崎県に行ってゆっくり温泉に入りたいと思っている。' +
                            '電車を利用して行くつもりだが、なるべく駅から近い方がいい。いちばん安い' +
                            'ホテルはどこか。',
                        qReading:
                            <>
                                <Image src={pagoda_4_title13} alt={'pagoda_4_title13'}/>
                            </>,
                        options: ['チサングランド佐世保',
                            'ホテルサンルート佐世保',
                            'グランドファーストイン佐世保',
                            'サンホテル飯田'],
                        correct:3
                    },
                    {
                        number: 71,
                        line: 4,
                        q: '会社の社員旅行で佐世保に行くことが決まった。総勢９０人で、夜は宴会もする' +
                            '予定である。ホテルには午前中に着くので、なるべく早くチェックインしたい。' +
                            'どのホテルがいいか。 ',
                        qReading: null,
                        options: ['サンホテル飯田',
                            'セントラルホテル',
                            'グランドファーストイン佐世保',
                            'レオプラザホテル佐世保'],
                        correct:2
                    },
                ],
            },
        ],
    },
]
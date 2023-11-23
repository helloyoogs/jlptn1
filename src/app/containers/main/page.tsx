import './main.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Main() {
    return (
        // 반응형
        <div className={'main_container'}>
            <div className={'page_inner'}>
                <Header/>
                    <div className={'test_box_wrap'}>
                        <div className={'test_item_box'}>
                            <a href={'/containers/test'}>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                        </div>
                        <div className={'test_item_box'}>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                            <a>2021年3月模擬試験</a>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}
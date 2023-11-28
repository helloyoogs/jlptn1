'use client';
import './main.css'
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {useRouter} from "next/navigation";

export default function Main() {
    const router = useRouter();
    const goTest  = () =>  {
        router.replace("/containers/test/0");
    }
    return (
        <div className={'main_container'}>
            <div className={'page_inner'}>
                <Header/>
                    <div className={'test_box_wrap'}>
                        <div className={'test_item_box'}>
                            <div onClick={goTest}>2021年3月模擬試験</div>
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
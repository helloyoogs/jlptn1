import '../header/header.css'
export default function Header() {
    return (
        <header>
            <div className={'header_nav'}>
                <a className={'home_img'} href={'/containers/main'}></a>
                <a href={'/containers/main'}>ホーム</a>
                <a>マイパージ</a>
                <a>ログイン</a>
            </div>
        </header>
    )
}
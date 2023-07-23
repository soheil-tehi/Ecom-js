import './MainPage.scss';
import Header from '../../Components/MainPage/Header';
import ShowRule from '../../Components/MainPage/ShowRule';

function MainPage() {
    return (
        <div className="mainPage-container">
            <Header />
            <ShowRule />
        </div>
    )
}

export default MainPage
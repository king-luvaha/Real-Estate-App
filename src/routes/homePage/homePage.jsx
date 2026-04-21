import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Discover a wide range of properties tailored to your lifestyle and budget. Whether you're looking to buy, rent, or invest, we make the process simple by connecting you with the best listings in prime locations. Start your journey today and find a place you can truly call home.
                    </p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className='box'>
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>

                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Propery Ready</h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src='/bg.png' alt=''/>
            </div>
        </div>
    )
}

export default HomePage
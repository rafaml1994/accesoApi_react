import logo from '../assets/logo.png';

function containerImg(){

    return(
        <>
            <div>
                <img src={logo} id="img-carrousel"/>
                <p className="legend">SpaceX</p>
            </div>
        </>
    );
}

export default containerImg;
import React, {useState, useCallback, useRef} from 'react';
import Login from './Login';
import Register from './Register';

//import './style.scss';
// Tried a lot to install node-sass npm package to use scss with react. But it failed
import './style.css';

// Have to fix transitions (rightSide Issue) styling issues

const RightSide = ({containerRef, onClick, current}) => {

    const containerVal = useRef(containerRef);
    return (
        <div className='right-side' ref={containerVal} onClick={onClick}>
            <div className='inner-container'>
                <div className='text'>
                    <h4>{current}</h4>
                </div>
            </div>
        </div>
    )
}

const Index = () => {

    const [isLogginActive, setIsLogginActive] = useState(true);

    const current = isLogginActive ? 'Register' : 'Login';

    const currentActive = isLogginActive ? 'login' : 'register';

    const changeState = useCallback(() => {
            if(isLogginActive){
            //     currentActive.classList.remove('right');
            //    currentActive.classList.add('left');
               setIsLogginActive(false);
            }else{
                // this.rightSide.classList.remove('left');
                // this.rightSide.classList.add('right');
            //     currentActive.classList.remove('right');
            //    currentActive.classList.add('left');
                setIsLogginActive(true);
            }
        },[isLogginActive, setIsLogginActive]);

    return (
        <div className='Login-App'>
            <div className='login'>
                <div className='login-container'>
                    {isLogginActive && <Login containerRef={current}/>}
                    {!isLogginActive && <Register containerRef={current}/>}
                </div>
                <RightSide current={current} containerRef={currentActive} onClick={changeState}/>
            </div>
        </div>
    )
}

export default Index

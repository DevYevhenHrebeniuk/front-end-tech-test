import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="w-full flex justify-between xl:justify-between items-center absolute px-[15px] xl:px-[50px] py-[30px] z-50 font-Monument">
            <Logo />
            <Nav />
            
        </header>
    )
}

export default Header;
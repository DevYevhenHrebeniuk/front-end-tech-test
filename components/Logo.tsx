import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/Logo.svg';

const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image src={LogoImage} alt="Ceron logo" />
            </Link>
        </>
    )
}

export default Logo;
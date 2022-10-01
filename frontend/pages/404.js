import Link from "next/link";
import NotFound from "../public/assets/img/404.png"
import Image from "next/image";

export default function Custom404() {
    return (
        <div className="container">
            <div className="auth-wrapper">
                <div className="text-center m-auto">
                   <Image src={NotFound} priority={true} width={300} height={220} alt="Not Found" />
                    <h4 className="mb-3 mt-2">{'The page you are looking for doesn\'t exist.'}</h4>
                    <Link href="/">
                        <a className="btn btn-primary">Home Page</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

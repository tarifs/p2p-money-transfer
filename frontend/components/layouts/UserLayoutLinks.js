import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AppStorage from "../../service/AppStorage";

const UserLayoutLinks = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(AppStorage.getUser());
  }, []);
  return (
    <div className="d-navigation">
      <ul>
        <li className={router.asPath === `/user/dashboard` && `active`}>
          <Link href={`/user/dashboard`}>
            <a>
              <i className="fas fa-home" />
              Dashboard
            </a>
          </Link>
        </li>
        <li className={router.asPath === `/user/send-money` && `active`}>
          <Link href={`/user/send-money`}>
            <a>
              <i className="fas fa-money-bill-wave" />
              Send Money
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserLayoutLinks;

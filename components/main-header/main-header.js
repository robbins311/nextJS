import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainhHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
// 얘는 커스텀 컴포넌트(next components 아님)
export default function MainHeader() {
  return (
    <>
      <MainhHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* priority 설정하면 젤 먼저 생성 */}
          <Image src={logoImg} alt="food" width={300} height={300} priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

'use client'


import Link from "next/link";
import Logo from "./Logo";
import { GiFrogFoot } from "react-icons/gi";
import { useRouter } from 'next/navigation'
 

export default function Header() {

  const router = useRouter();

  return (
    <header style={styles.container}>
      <Logo></Logo>
      <nav>
        <ul style={styles.nav}>
          <li style={styles.logo} onClick={() => router.push('/')} >
            <GiFrogFoot  />
            Home
            </li>
          <li style={styles.logo} onClick={() => router.push('/dinossaurs')}>
            <GiFrogFoot />
            Dinossaurs
          </li>
          <li style={styles.logo} onClick={() => router.push('/signup')}>
            <GiFrogFoot />
              Signup
            </li>
          <li style={styles.logo}>
                
            <GiFrogFoot /><Link href="/profiles">
              Profiles</Link>
           
            </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    backgroundColor: "rgb(43, 12, 0)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  nav: {
    display: "flex",
    listStyleType: "none",
    gap: 20,
      cursor: "pointer"
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
};

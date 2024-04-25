import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <Link href="/form">Add Record</Link>
          </ul>
        </nav>
      </header>
      <Card
        playerName="Sachin Tendulkar"
        innings={452}
        runs={18426}
        highscore={200}
        average={44.83}
        century={49}
        halfCentury={96}
        overs={1342.2}
        wickets={154}
        bowlingAverage={44.48}
        bowlingEconomy={5.1}
        bowlingStrikeRate={52.3}
        catches={140}
      />
    </main>
  );
}

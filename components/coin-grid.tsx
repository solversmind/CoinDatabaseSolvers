import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const coins = [
  {
    id: "65875",
    name: "cn coin 65875",
    period: "Hellenistic Period",
    date: "2nd century BC",
    mint: "Istros",
    material: "Bronze",
    diameter: 17,
    weight: 2.4,
    obverseImage: "/images/cn-20coin-2065875-201.jpeg",
    reverseImage: "/images/cn-20coin-2065875-202.jpeg",
    obverseDescription: "Head of Athena, right, wearing Corinthian helmet",
    reverseLegend: "Sea-eagle on dolphin standing left",
  },
  {
    id: "65868",
    name: "cn coin 65868",
    period: "Roman Imperial Period",
    date: "250-251 AD",
    mint: "Viminacium",
    material: "Bronze",
    diameter: 28,
    weight: 11.34,
    obverseImage: "/images/cn-20coin-2065868-201.jpeg",
    reverseImage: "/images/cn-20coin-2065868-202.jpeg",
    obverseDescription: "Laureate bust of Decius, right",
    reverseLegend: "Moesia standing with bull and lion",
  },
  {
    id: "65853",
    name: "cn coin 65853",
    period: "Roman Imperial Period",
    date: "249-251 AD",
    mint: "Pergamon",
    material: "Bronze",
    diameter: 20,
    weight: 4.75,
    obverseImage: "/images/cn-20coin-2065853-201.jpeg",
    reverseImage: "/images/cn-20coin-2065853-202.jpeg",
    obverseDescription: "Laureate bust of Decius",
    reverseLegend: "Asclepius with serpent staff",
  },
  {
    id: "65921",
    name: "cn coin 65921",
    period: "Roman Imperial Period",
    date: "193-217 AD",
    mint: "Istros",
    material: "Bronze",
    diameter: 19,
    weight: 4.96,
    obverseImage: "/images/cn-20coin-2065921-201.jpeg",
    reverseImage: "/images/cn-20coin-2065921-202.jpeg",
    obverseDescription: "Draped bust of Julia Domna",
    reverseLegend: "Hermes standing with purse",
  },
  {
    id: "65835",
    name: "cn coin 65835",
    period: "Roman Imperial Period",
    date: "218-235 AD",
    mint: "Parion",
    material: "Bronze",
    diameter: 21,
    weight: 5.63,
    obverseImage: "/images/cn-20coin-2065835-201.jpeg",
    reverseImage: "/images/cn-20coin-2065835-202.jpeg",
    obverseDescription: "Severus Alexander with gorgoneion",
    reverseLegend: "Capricorn with globe and cornucopiae",
  },
  {
    id: "66472",
    name: "cn coin 66472",
    period: "Classical Period",
    date: "350-330 BC",
    mint: "Chersonesus Thracica",
    material: "Bronze",
    diameter: 13,
    weight: 1.64,
    obverseImage: "/images/cn-coin-66472-1.jpeg",
    reverseImage: "/images/cn-coin-66472-4.jpeg",
    obverseDescription: "Head of Athena with helmet",
    reverseLegend: "Barley-grain",
  },
  {
    id: "66719",
    name: "cn coin 66719",
    period: "Roman Imperial Period",
    date: "138-192 AD",
    mint: "Adramyttion",
    material: "Bronze",
    diameter: 16.5,
    weight: 2.48,
    obverseImage: "/images/cn-coin-66719-1.jpeg",
    reverseImage: "/images/cn-coin-66719-2.jpeg",
    obverseDescription: "Laureate head of Zeus, left",
    reverseLegend: "Horseman galloping right",
  },
  {
    id: "66237",
    name: "cn coin 66237",
    period: "Classical Period",
    date: "475-430 BC",
    mint: "Kyzikos",
    material: "Electrum",
    diameter: 23,
    weight: 15.84,
    obverseImage: "/images/cn-coin-66237-1.jpeg",
    reverseImage: "/images/cn-coin-66237-2.jpeg",
    obverseDescription: "Hoplitodromos runner with tunny",
    reverseLegend: "Incuse square mill-sail pattern",
  },
  {
    id: "66996",
    name: "cn coin 66996",
    period: "Hellenistic Period",
    date: "315-310 BC",
    mint: "Olbia",
    material: "Gold",
    weight: 2.11,
    obverseImage: "/images/cn-coin-66996-1.jpeg",
    reverseImage: "/images/cn-coin-66996-2.jpeg",
    obverseDescription: "Head of Demeter, left",
    reverseLegend: "Dolphin swimming left",
  },
  {
    id: "66997",
    name: "cn coin 66997",
    period: "Hellenistic Period",
    date: "315-310 BC",
    mint: "Olbia",
    material: "Gold",
    diameter: 11,
    weight: 2.11,
    obverseImage: "/images/cn-coin-66997-1.jpeg",
    reverseImage: "/images/cn-coin-66997-2.jpeg",
    obverseDescription: "Head of Demeter, left",
    reverseLegend: "Dolphin swimming left",
  },
  {
    id: "67003",
    name: "cn coin 67003",
    period: "Hellenistic Period",
    date: "320-315 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 11,
    weight: 0.85,
    obverseImage: "/images/cn-coin-67003-1.jpeg",
    reverseImage: "/images/cn-coin-67003-2.jpeg",
    obverseDescription: "Head of Demeter, left",
    reverseLegend: "Sea-eagle on dolphin right",
  },
  {
    id: "67004",
    name: "cn coin 67004",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.99,
    obverseImage: "/images/cn-coin-67004-1.jpeg",
    reverseImage: "/images/cn-coin-67004-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
  {
    id: "67005",
    name: "cn coin 67005",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 10.68,
    obverseImage: "/images/cn-coin-67005-1.jpeg",
    reverseImage: "/images/cn-coin-67005-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
  {
    id: "67006",
    name: "cn coin 67006",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 19,
    weight: 4.46,
    obverseImage: "/images/cn-coin-67006-1.jpeg",
    reverseImage: "/images/cn-coin-67006-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
  {
    id: "67007",
    name: "cn coin 67007",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 20,
    weight: 4.84,
    obverseImage: "/images/cn-coin-67007-1.jpeg",
    reverseImage: "/images/cn-coin-67007-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
  {
    id: "67008",
    name: "cn coin 67008",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.19,
    obverseImage: "/images/cn-coin-67008-1.jpeg",
    reverseImage: "/images/cn-coin-67008-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
  {
    id: "67009",
    name: "cn coin 67009",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.64,
    obverseImage: "/images/cn-coin-67009-1.jpeg",
    reverseImage: "/images/cn-coin-67009-2.jpeg",
    obverseDescription: "River god Borysthenes, left",
    reverseLegend: "Axe-scepter and gorytos",
  },
]

export function CoinGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coins.map((coin) => (
        <Link key={coin.id} href={`/coins/${coin.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="aspect-square bg-muted relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                <div className="relative bg-card rounded-sm overflow-hidden">
                  <Image
                    src={coin.obverseImage || "/placeholder.svg"}
                    alt={`${coin.name} obverse`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative bg-card rounded-sm overflow-hidden">
                  <Image
                    src={coin.reverseImage || "/placeholder.svg"}
                    alt={`${coin.name} reverse`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-foreground leading-tight">{coin.name}</h3>
                <Badge variant="secondary" className="shrink-0 text-xs">
                  {coin.material}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  {coin.mint} • {coin.date}
                </p>
                <p className="text-xs">{coin.period}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

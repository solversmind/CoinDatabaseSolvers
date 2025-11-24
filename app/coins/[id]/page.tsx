import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"

// This would normally come from a database
const coinData: Record<string, any> = {
  "67009": {
    id: "67009",
    name: "Olbia Bronze",
    typeId: "23489",
    period: "Hellenistic Period",
    date: "310-280 BCE",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.64,
    axis: 12,
    obverseImage: "/ancient-greek-coin-obverse-bearded-god-detailed.jpg",
    reverseImage: "/ancient-greek-coin-reverse-axe-symbol-detailed.jpg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos",
    reverseLegend: "ΟΛΒΙΟ ΘΕ",
    persons: [{ name: "The( )", role: "Magistrate" }],
    owner: "Solvers Database",
    inventoryNo: "18318436",
    provenance: "Imhoof-Blumer 1900",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 329",
        date: "c. 310-280 BC",
      },
      {
        title: "Anochin, Monety antičnych gorodov Severo-Zapadnogo Pričernomor'ja, Kiev 1989",
        reference: "nr. 160",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 485",
      },
    ],
  },
  "67010": {
    id: "67010",
    name: "Athens Tetradrachm",
    typeId: "23490",
    period: "Classical Period",
    date: "449-413 BCE",
    mint: "Athens",
    material: "Silver",
    diameter: 24,
    weight: 17.2,
    axis: 3,
    obverseImage: "/ancient-athens-silver-coin-athena-helmet-detailed-.jpg",
    reverseImage: "/placeholder.svg?height=600&width=600",
    obverseDescription:
      "Head of Athena right, wearing crested Attic helmet decorated with olive leaves and spiral palmette.",
    reverseDescription: "Owl standing right, head facing; olive spray and crescent to left",
    reverseLegend: "ΑΘΕ",
    owner: "British Museum, London, UK",
    inventoryNo: "BM.1919.0820.1",
    literature: [
      {
        title: "Starr, Athenian Coinage 480-449 B.C., 1970",
        reference: "Group V",
      },
    ],
  },
  "67011": {
    id: "67011",
    name: "Corinth Stater",
    typeId: "23491",
    period: "Archaic Period",
    date: "550-500 BCE",
    mint: "Corinth",
    material: "Silver",
    diameter: 21,
    weight: 8.6,
    axis: 12,
    obverseImage: "/placeholder.svg?height=600&width=600",
    reverseImage: "/placeholder.svg?height=600&width=600",
    obverseDescription: "Pegasus flying left; koppa below.",
    reverseDescription: "Head of Athena left, wearing Corinthian helmet; all within incuse square.",
    reverseLegend: "Ϙ",
    owner: "American Numismatic Society, New York, USA",
    inventoryNo: "1944.100.10296",
    literature: [
      {
        title: 'Ravel, Les "poulains" de Corinthe, 1936',
        reference: "nr. 185",
      },
    ],
  },
  "65875": {
    id: "65875",
    name: "cn coin 65875",
    typeId: "23179",
    period: "Hellenistic Period",
    date: "2nd century BC",
    mint: "Istros",
    region: "Moesia inferior",
    material: "Bronze",
    diameter: 17,
    weight: 2.4,
    axis: 12,
    obverseImage: "/images/cn-20coin-2065875-201.jpeg",
    reverseImage: "/images/cn-20coin-2065875-202.jpeg",
    obverseDescription: "Head of Athena, right, wearing Corinthian helmet.",
    reverseDescription: "Sea-eagle on dolphin standing left.",
    reverseLegend: "ΙΣΤΡΙ ΗΡΟΔΩ",
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18316899",
    provenance: "1902/957A (Mladejovsky)",
    literature: [
      {
        title:
          "Talmaţchi, Monetăriile oraşelor vest-pontice Histria, Callatis şi Tomis în epocă autonomă, Cluj-Napoca 2012",
        reference: "p. 329, nr. Tab. 178, pl. 29, pic. 2",
        date: "2nd half of the 2nd cent. BC",
      },
    ],
  },
  "65868": {
    id: "65868",
    name: "cn coin 65868",
    typeId: "16555",
    period: "Roman Imperial Period",
    date: "250-251 AD",
    mint: "Viminacium",
    material: "Bronze",
    diameter: 28,
    weight: 11.34,
    axis: 7,
    obverseImage: "/images/cn-20coin-2065868-201.jpeg",
    reverseImage: "/images/cn-20coin-2065868-202.jpeg",
    obverseDescription: "Laureate bust of Decius, right, wearing cuirass.",
    obverseLegend: "IMP TRAIANVS DECIVS AVG",
    reverseDescription:
      "Moesia standing left, wearing long garment; holding a branch in her right hand and an Globus in her left hand; at her feet, bull and lion.",
    reverseLegend: "P M S COL VIM // AN XII",
    persons: [{ name: "Decius", role: "Sitter" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18319273",
    literature: [
      {
        title:
          "Amandry et al., RPC IX: Roman provincial coinage. Vol. IX: From Trajan Decius to Uranius Antonius (Ad 249-254), London : Paris 2016",
        reference: "p. 60, nr. 17",
      },
      {
        title:
          "Pick, Die antiken Münzen Nord-Griechenlands. 1. Die antiken Münzen von Dacien und Moesien. 1. Halbbd. I 1, Berlin 1898",
        reference: "nr. 132",
      },
    ],
  },
  "65853": {
    id: "65853",
    name: "cn coin 65853",
    typeId: "18552",
    period: "Roman Imperial Period",
    date: "249-251 AD",
    mint: "Pergamon",
    region: "Mysia",
    material: "Bronze",
    diameter: 20,
    weight: 4.75,
    axis: 6,
    obverseImage: "/images/cn-20coin-2065853-201.jpeg",
    reverseImage: "/images/cn-20coin-2065853-202.jpeg",
    obverseDescription: "Laureate bust of Decius, right, wearing cuirass and paludamentum.",
    obverseLegend: "ΤΡΑΙΑ ΔЄΚΙΟϹ",
    reverseDescription: "Asclepius standing left, holding serpent staff in right hand.",
    reverseLegend: "ΠЄΡΓΑΜΗΝΩΝ",
    persons: [{ name: "Decius", role: "Sitter" }],
    owner: "Staatliche Münzsammlung München, München, DE",
    inventoryNo: "233",
    literature: [
      {
        title:
          "Amandry et al., RPC IX: Roman provincial coinage. Vol. IX: From Trajan Decius to Uranius Antonius (Ad 249-254), London : Paris 2016",
        reference: "nr. 538.2",
      },
      {
        title: "Weisser, Die kaiserzeitliche Münzprägung von Pergamon, München 1995",
        reference: "nr. 18.2 T 2415",
      },
    ],
  },
  "65921": {
    id: "65921",
    name: "cn coin 65921",
    typeId: "23185",
    period: "Roman Imperial Period",
    date: "c. 193-217 AD",
    mint: "Istros",
    region: "Moesia inferior",
    material: "Bronze",
    diameter: 19,
    weight: 4.96,
    axis: 1,
    obverseImage: "/images/cn-20coin-2065921-201.jpeg",
    reverseImage: "/images/cn-20coin-2065921-202.jpeg",
    obverseDescription: "Draped bust of Julia Domna, right.",
    obverseLegend: "ΙΟVΛΙΑ ΔΟΜΝΑ Ϲ",
    reverseDescription: "Hermes standing left, holding purse in right hand and caduceus and garment over left arm.",
    reverseLegend: "ΙϹΤΡΙΗΝΩΝ",
    persons: [{ name: "Iulia Domna", role: "Sitter" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18317055",
    provenance: "1902/935 (Osman Nouri Bey)",
    literature: [],
  },
  "65835": {
    id: "65835",
    name: "cn coin 65835",
    typeId: "18091",
    period: "Roman Imperial Period",
    date: "218-235 AD",
    mint: "Parion",
    region: "Mysia",
    material: "Bronze",
    diameter: 21,
    weight: 5.63,
    axis: 7,
    obverseImage: "/images/cn-20coin-2065835-201.jpeg",
    reverseImage: "/images/cn-20coin-2065835-202.jpeg",
    obverseDescription:
      "Laureate bust of Severus Alexander, right, seen from front, wearing cuirass; with gorgoneion on breastplate.",
    obverseLegend: "IMP CAES L SEP SEV ALEXANDER",
    reverseDescription: "Capricorn left holding globe between forelegs; behind cornucopiae.",
    reverseLegend: "{C G I H P}",
    persons: [{ name: "Severus Alexander", role: "Sitter" }],
    owner: "Commerce / im Handel",
    provenance: "Gorny & Mosch EA 286 (29 Mar. 2022) 4376",
    literature: [],
  },
  "66472": {
    id: "66472",
    name: "cn coin 66472",
    typeId: "23357",
    period: "Classical Period",
    date: "c. 350-330 BC",
    mint: "Chersonesus Thracica",
    region: "Thrace",
    material: "Bronze",
    diameter: 13,
    weight: 1.64,
    obverseImage: "/images/cn-coin-66472-1.jpeg",
    reverseImage: "/images/cn-coin-66472-4.jpeg",
    obverseDescription: "Head of Athena, right, wearing helmet.",
    reverseDescription: "Barley-grain.",
    reverseLegend: "ΧΕΡ",
    symbols: [{ symbol: "grain of barley", position: "below" }],
    owner: "Commerce / im Handel",
    provenance: "Davissons 50 (30.10.2024) 38; Bertolami 236 (24.09.2022) 269; Bertolami 109 (09.01.2022) 384",
    literature: [],
  },
  "66719": {
    id: "66719",
    name: "cn coin 66719",
    typeId: "23431",
    period: "Roman Imperial Period",
    date: "c. 138-192 AD",
    mint: "Adramyttion",
    region: "Mysia",
    material: "Bronze",
    diameter: 16.5,
    weight: 2.48,
    axis: 1,
    obverseImage: "/images/cn-coin-66719-1.jpeg",
    reverseImage: "/images/cn-coin-66719-2.jpeg",
    obverseDescription: "Laureate head of Zeus, left.",
    obverseLegend: "Ϲ-ΤΡ [...]ΩΝΟϹ",
    reverseDescription: "Horseman galloping right, wearing fluttering cloak, raising right arm.",
    reverseLegend: "ΑΔΡΑΜVΤΗΝW[Ν]",
    owner: "Coll. H.I., DE",
    literature: [],
  },
  "66237": {
    id: "66237",
    name: "cn coin 66237",
    typeId: "11304",
    period: "Classical Period",
    date: "c. 475-430 BC",
    mint: "Kyzikos",
    region: "Mysia",
    material: "Electrum",
    denomination: "Stater",
    diameter: 23,
    weight: 15.84,
    obverseImage: "/images/cn-coin-66237-1.jpeg",
    reverseImage: "/images/cn-coin-66237-2.jpeg",
    obverseDescription:
      "Helmeted Hoplitodromos runner right, his right arm outstretched. In right field, a downwards tunny.",
    reverseDescription: "Incuse square of mill-sail pattern.",
    owner: "Solvers of Infinity",
    literature: [
      {
        title: "Fritze, Die Elektronprägung von Kyzikos. Eine chronologische Studie, 1912",
        reference: "p. 9, nr. 119, pl. 4, pic. 5",
        date: "Group IIb/c",
      },
      {
        title:
          "Jenkins and Hipólito, A catalogue of the Calouste Gulbenkian Collection of Greek Coins, 2. Greece to East, Lisboa 1989",
        reference: "p. 65, nr. 620, pl. 61",
      },
    ],
  },
  "66996": {
    id: "66996",
    name: "cn coin 66996",
    typeId: "23547",
    period: "Hellenistic Period",
    date: "c. 315-310 BC",
    mint: "Olbia",
    material: "Gold",
    denomination: "Tetarte (1/4 stater)",
    weight: 2.11,
    obverseImage: "/images/cn-coin-66996-1.jpeg",
    reverseImage: "/images/cn-coin-66996-2.jpeg",
    obverseDescription: "Head of Demeter, left.",
    reverseDescription: "Dolphin swimming left.",
    reverseLegend: "ΟΛ",
    owner: "British Museum, Department of Coins and Medals, London, GB",
    inventoryNo: "1907,0502.1",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 291",
        date: "c. 315-310 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 550",
        date: "late 4th - 3rd cent. BC",
      },
    ],
  },
  "66997": {
    id: "66997",
    name: "cn coin 66997",
    typeId: "23547",
    period: "Hellenistic Period",
    date: "c. 315-310 BC",
    mint: "Olbia",
    material: "Gold",
    denomination: "Tetarte (1/4 stater)",
    diameter: 11,
    weight: 2.11,
    axis: 12,
    obverseImage: "/images/cn-coin-66997-1.jpeg",
    reverseImage: "/images/cn-coin-66997-2.jpeg",
    obverseDescription: "Head of Demeter, left.",
    reverseDescription: "Dolphin swimming left.",
    reverseLegend: "ΟΛ",
    owner: "American Numismatic Society, New York, US",
    inventoryNo: "1944.100.14457",
    provenance: "Newell 1944",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 291",
        date: "c. 315-310 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 550",
        date: "late 4th - 3rd cent. BC",
      },
    ],
  },
  "67003": {
    id: "67003",
    name: "cn coin 67003",
    typeId: "23546",
    period: "Hellenistic Period",
    date: "c. 320-315 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 11,
    weight: 0.85,
    axis: 8,
    obverseImage: "/images/cn-coin-67003-1.jpeg",
    reverseImage: "/images/cn-coin-67003-2.jpeg",
    obverseDescription: "Head of Demeter, left.",
    reverseDescription: "Sea-eagle on dolphin standing right.",
    reverseLegend: "ΟΛΒΙΟ",
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18317710",
    provenance: "1906/30 (Mavrogordato)",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 289",
        date: "c. 320-315 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 428",
      },
    ],
  },
  "67004": {
    id: "67004",
    name: "cn coin 67004",
    typeId: "23493",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.99,
    axis: 12,
    obverseImage: "/images/cn-coin-67004-1.jpeg",
    reverseImage: "/images/cn-coin-67004-2.jpeg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos.",
    reverseLegend: "ΟΛΒΙΟ",
    monogram: [{ symbol: "Monogram reverse", position: "on the left" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18318411",
    provenance: "1906/30 (Mavrogordato)",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 333",
        date: "c. 310-280 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 491",
      },
    ],
  },
  "67005": {
    id: "67005",
    name: "cn coin 67005",
    typeId: "23488",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 10.68,
    axis: 12,
    obverseImage: "/images/cn-coin-67005-1.jpeg",
    reverseImage: "/images/cn-coin-67005-2.jpeg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos.",
    reverseLegend: "ΟΛΒΙΟ ΑΡΙ",
    persons: [{ name: "Ari( )", role: "Magistrate" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18318414",
    provenance: "Old collection (before 1839)",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 328",
        date: "c. 310-280 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 484",
      },
    ],
  },
  "67006": {
    id: "67006",
    name: "cn coin 67006",
    typeId: "23541",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 19,
    weight: 4.46,
    axis: 12,
    obverseImage: "/images/cn-coin-67006-1.jpeg",
    reverseImage: "/images/cn-coin-67006-2.jpeg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos.",
    reverseLegend: "ΟΛΒΙΟ ΑΡ",
    persons: [{ name: "Ar( )", role: "Magistrate" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18318417",
    provenance: "Löbbecke 1906",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 386",
        date: "c. 310-280 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 531-532",
      },
    ],
  },
  "67007": {
    id: "67007",
    name: "cn coin 67007",
    typeId: "23540",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 20,
    weight: 4.84,
    axis: 7,
    obverseImage: "/images/cn-coin-67007-1.jpeg",
    reverseImage: "/images/cn-coin-67007-2.jpeg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos.",
    reverseLegend: "ΟΛΒΙΟ ΕΠΙ",
    persons: [{ name: "Epi( )", role: "Magistrate" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18318429",
    provenance: "1980/65 (ex Mavrogordato Coll.)",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 385",
        date: "c. 310-280 BC",
      },
    ],
  },
  "67008": {
    id: "67008",
    name: "cn coin 67008",
    typeId: "23493",
    period: "Hellenistic Period",
    date: "310-280 BC",
    mint: "Olbia",
    material: "Bronze",
    diameter: 22,
    weight: 8.19,
    axis: 12,
    obverseImage: "/images/cn-coin-67008-1.jpeg",
    reverseImage: "/images/cn-coin-67008-2.jpeg",
    obverseDescription: "Horned and bearded head of a river god (Borysthenes), left.",
    reverseDescription: "Axe-scepter and gorytos.",
    reverseLegend: "ΟΛΒΙΟ",
    monogram: [{ symbol: "Monogram reverse", position: "on the left" }],
    owner: "Münzkabinett Berlin, Berlin, DE",
    inventoryNo: "18318408",
    provenance: "1906/30 (Mavrogordato)",
    literature: [
      {
        title: "Anochin, Antičnye monety Severnogo Pričernomor'ja, Kiev 2011",
        reference: "nr. 333",
        date: "c. 310-280 BC",
      },
      {
        title: "Price, Sylloge nummorum Graecorum 9 The British Museum 1. The Black Sea, 1993",
        reference: "nr. 491",
      },
    ],
  },
}

export default async function CoinDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const coin = coinData[id]

  if (!coin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Coin Not Found</h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>CN Coin {coin.id}</span>
            {coin.typeId && (
              <>
                <span>•</span>
                <span>Type {coin.typeId}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 text-balance">{coin.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{coin.period}</Badge>
            <Badge variant="outline">{coin.material}</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Images */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Obverse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={coin.obverseImage || "/placeholder.svg"}
                    alt={`${coin.name} obverse`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{coin.obverseDescription}</p>
                {coin.obverseLegend && (
                  <p className="text-sm text-foreground leading-relaxed">Legend: {coin.obverseLegend}</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reverse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={coin.reverseImage || "/placeholder.svg"}
                    alt={`${coin.name} reverse`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  {coin.reverseLegend && (
                    <div>
                      <span className="text-sm font-medium text-foreground mb-1">Legend: </span>
                      <span className="text-sm text-muted-foreground">{coin.reverseLegend}</span>
                    </div>
                  )}
                  <p className="text-sm text-foreground leading-relaxed">{coin.reverseDescription}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mint Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Mint</dt>
                    <dd className="text-foreground">{coin.mint}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Date</dt>
                    <dd className="text-foreground">{coin.date}</dd>
                  </div>
                  {coin.region && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground mb-1">Region</dt>
                      <dd className="text-foreground">{coin.region}</dd>
                    </div>
                  )}
                </div>
                <Separator />
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Period</dt>
                  <dd className="text-foreground">{coin.period}</dd>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Metrology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Material</dt>
                    <dd className="text-foreground">{coin.material}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Diameter</dt>
                    <dd className="text-foreground">{coin.diameter} mm</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Weight</dt>
                    <dd className="text-foreground">{coin.weight} g</dd>
                  </div>
                  {coin.axis && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground mb-1">Die Axis</dt>
                      <dd className="text-foreground">{coin.axis}h</dd>
                    </div>
                  )}
                  {coin.denomination && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground mb-1">Denomination</dt>
                      <dd className="text-foreground">{coin.denomination}</dd>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {coin.persons && coin.persons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Persons</CardTitle>
                </CardHeader>
                <CardContent>
                  {coin.persons.map((person: any, index: number) => (
                    <div key={index}>
                      <dt className="text-sm font-medium text-muted-foreground mb-1">{person.role}</dt>
                      <dd className="text-foreground">{person.name}</dd>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Provenance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">Owner</dt>
                  <dd className="text-foreground text-sm">{coin.owner}</dd>
                </div>
                {coin.inventoryNo && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Inventory No.</dt>
                    <dd className="text-foreground font-mono text-sm">{coin.inventoryNo}</dd>
                  </div>
                )}
                {coin.provenance && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground mb-1">Provenance</dt>
                    <dd className="text-foreground text-sm">{coin.provenance}</dd>
                  </div>
                )}
              </CardContent>
            </Card>

            {coin.literature && coin.literature.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Literature</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {coin.literature.map((lit: any, index: number) => (
                      <li key={index} className="text-sm">
                        <p className="text-foreground leading-relaxed">{lit.title}</p>
                        <p className="text-muted-foreground">
                          {lit.reference}
                          {lit.date && ` (${lit.date})`}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {coin.symbols && coin.symbols.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Symbols</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {coin.symbols.map((symbol: any, index: number) => (
                      <li key={index} className="text-sm">
                        <p className="text-foreground leading-relaxed">{symbol.symbol}</p>
                        <p className="text-muted-foreground">Position: {symbol.position}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {coin.monogram && coin.monogram.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monogram</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {coin.monogram.map((monogram: any, index: number) => (
                      <li key={index} className="text-sm">
                        <p className="text-foreground leading-relaxed">{monogram.symbol}</p>
                        <p className="text-muted-foreground">Position: {monogram.position}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Citation */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Cite this record:</p>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                cn coin {coin.id}, in: Corpus Nummorum, https://www.corpus-nummorum.eu/CN_{coin.id} [Last downloaded:{" "}
                {new Date().toLocaleDateString("en-CA")}]
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

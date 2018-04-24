const defaultState = {
  repos: [
    {
      id: "walters",
      title: "Walters"
    },
    {
      id: "hopkins",
      title: "Hopkins"
    },
    {
      id: "upenn",
      title: "University of Pennsylvania"
    },
    {
      id: "freelibrary",
      title: "Free Library of Philadelphia"
    },
    {
      id: "yale",
      title: "Yale"
    },
    {
      id: "harvard",
      title: "Harvard"
    },
    {
      id: "newberry",
      title: "Newberry"
    },
    {
      id: "marymount",
      title: "Loyola Marymount University"
    },
    {
      id: "columbia",
      title: "Columbia University"
    },
    {
      id: "oberlin",
      title: "Oberlin University"
    },
    {
      id: "usc",
      title: "University of Southern California"
    },
    {
      id: "lilly",
      title: "Lilly Library, Indiana University"
    },
    {
      id: "wellesley",
      title: "Wellesely University"
    },

  ],
  mss: [
    {
      id: "harv245",
      title: "Harvard 245",
      repo: "harvard"
    },
    {
      id: "harv265",
      title: "Harvard 265",
      repo: "harvard"
    },
    {
      id: "hopkinsMSB19",
      title: "Hopkins Ms B19",
      repo: "hopkins"
    },
    {
      id: "penn",
      title: "Penn 686",
      repo: "upenn",
      description: "penn 686, rothwell text"
    },
    {
      id: "penn727",
      title: "Penn 727",
      repo: "upenn",
      description: "anonymous augustinian commentary"
    },
    {
      id: "penn1147",
      title: "Penn 1147",
      repo: "upenn",
      description: "book III of lombard"
    },
    {
      id: "pennColl591",
      title: "Penn Coll 591",
      repo: "upenn",
      description: "fragment from Lombard book IV (2 leaves)"
    },
    {
      id: "penn78",
      title: "Penn 78",
      repo: "upenn",
      description: "Registry or list of distinction in lombard with lots of interesting marginalia"
    },
    {
      id: "walt349",
      title: "Walter 349",
      repo: "walters"
    },
    {
      id: "walt809",
      title: "Walter 809",
      repo: "walters"
    },
    {
      id: "walt83",
      title: "Walter 83",
      repo: "walters",
      description: "Commentary by Durandus, see de ricci, I, p. 880n83"
    },
    {
      id: "pfllewisE141",
      title: "Free Library PFL Lewis E141",
      repo: "freelibrary"
    },
    {
      id: "pfllewisE170",
      title: "Free Library PFL Lewis E170",
      repo: "freelibrary"
    },
    {
      id: "beinecke1207",
      title: "beinecke 1207",
      repo: "yale"
    },
    {
      id: "beinecke619",
      title: "beinecke 619",
      repo: "yale"
    },
    {
      id: "beinecke207",
      title: "beinecke 207",
      repo: "yale"
    },
    {
      id: "beinecke20",
      title: "beinecke 20",
      repo: "yale"
    },
    {
      id: "marston175",
      title: "marston 175",
      repo: "yale"
    },
    {
      id: "marston222",
      title: "marston 222",
      repo: "yale"
    },
    {
      id: "marston270",
      title: "marston 270",
      repo: "yale"
    },
    {
      id: "marston893",
      title: "marston893",
      repo: "yale"
    },
    {
      id: "beinecke712.130",
      title: "beinecke712.130",
      repo: "yale"
    },
    {
      id: "beinecke712.131",
      title: "beinecke712.131",
      repo: "yale"
    },
    {
      id: "case121",
      title: "case 121",
      repo: "newberry",
      description: "fragment from book 3, 25 leaves, of Thomas Aquinas' commentary on the Sentences"
    },
    {
      id: "case184",
      title: "case 184",
      repo: "newberry",
      description: "fragment from book 4 of thomas aquinas"
    },
    {
      id: "case20",
      title: "case 20",
      repo: "newberry",
      description: "Lombard Sentences"
    },
    {
      id: "case217",
      title: "case 217",
      repo: "newberry",
      description: "compilation that includes fol. 9v-57r. Collationes super sententias Petri Lombardi."
    },
    {
      id: "case72",
      title: "case 72",
      repo: "newberry",
      description: "Commentary of Francis Mayronis"
    },
    {
      id: "case24.5",
      title: "case 24.5",
      repo: "newberry",
      description: "Commentary on book II by the Franciscan Simon de Lenis"
    },
    {
      id: "marymount25",
      title: "marymount 25",
      repo: "marymount",
      description: "Single leaf containing part of l4d11c1, all of b4d11c2, and part of b4d11c3 "
    },
    {
      id: "plimpton61",
      title: "Plimpton MS.61",
      repo: "columbia",
      description: "ff. 1-178v contain verses to aid memorization of Lombard "
    },
    {
      id: "plimpton68",
      title: "Plimpton MS.68",
      repo: "columbia",
      description: "ff. 73-92v contain verses to aid memorization of Lombard "
    },
    {
      id: "plimpton89",
      title: "Plimpton MS.89",
      repo: "columbia",
      description: "single leaf, f. 1r-1v, Richard of Middelton "
    },
    {
      id: "oberlinS4",
      title: "oberlinS4",
      repo: "oberlin",
      description: "single leaf, f. 1r-1v, of Lombard, Book 4, d. 14 and beginning of 15"
    },
    {
      id: "penn1131",
      title: "Penn 1131",
      repo: "upenn",
      description: "ff. 94r-153r, commentary on Lombard's Sentences"
    },
    {
      id: "usc2",
      title: "USC 2",
      repo: "usc",
      description: "Lombard, Sentences, Four books"
    },
    {
      id: "usc3",
      title: "USC 3",
      repo: "usc",
      description: "Peter Palude, Commentary on the Sentences"
    },
    {
      id: "usc3",
      title: "USC 3",
      repo: "usc",
      description: "Peter Palude, Commentary on the Sentences"
    },
    {
      id: "ricketts185",
      title: "Ricketts 185",
      repo: "lilly",
      description: "Lombard Sentences, with commentary, now at Lilly Library"
    },
    {
      id: "wellesleyP808",
      title: "wellesleyP808",
      repo: "wellesley",
      description: "Richard of Middelton, Commentary on Book II"
    },
  ],
  images: [
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-2",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "hopkins, 1r, historiated initial, prologue"
        },
      "on": "http://scta.info/iiif/hopkinsMSB19/canvas/4v#xywh=913,370,724,583",
      "default_img_url": "https://loris2.scta.info/hopkinsMSB19/Lombard_Manuscript-005.jpg",
      "ms": "hopkinsMSB19"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-1",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "hopkins, 4v, historiated initial"
        },
      "on": "http://scta.info/iiif/hopkinsMSB19/canvas/4v#xywh=935,500,1062,1058",
      "default_img_url": "https://loris2.scta.info/hopkinsMSB19/Lombard_Manuscript-012.jpg",
      "ms": "hopkinsMSB19"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-3",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "hopkins, initial book 2, folio 56v"
        },
      "on": "http://scta.info/iiif/hopkinsMSB19/canvas/56v#xywh=913,353,1255,1238",
      "default_img_url": "https://loris2.scta.info/hopkinsMSB19/Lombard_Manuscript-116.jpg",
      "ms": "hopkinsMSB19"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-4",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "hopkins, initial book 3, folio 97r"
        },
      "on": "http://scta.info/iiif/hopkinsMSB19/canvas/97r#xywh=570,2044,1055,980",
      "default_img_url": "https://loris2.scta.info/hopkinsMSB19/Lombard_Manuscript-197.jpg",
      "ms": "hopkinsMSB19"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-5",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "hopkins book 4 initial, folio 127v"
        },
      "on": "http://scta.info/iiif/hopkinsMSB19/canvas/97r#xywh=1443,1767,749,831",
      "default_img_url": "https://loris2.scta.info/hopkinsMSB19/Lombard_Manuscript-258.jpg",
      "ms": "hopkinsMSB19"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-6",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "Aquinas, l. 3, d. 1, q. 1"
        },
      "on": "https://iiif.lib.harvard.edu/manifests/drs:425873143/canvas/canvas-425873149.json#xywh=342,467,722,663",
      "default_img_url": "https://ids.lib.harvard.edu/ids/iiif/425873149",
      "ms": "harv245"
    },
    {
      "@context": "http://iiif.io/api/presentation/2/context.json",
      "@id": "annotation-7",
      "@type": "oa:Annotation",
      "motivation": ["oa:commenting"],
      "resource": {
        "@type": "dctypes:Text",
        "format": "text/html",
        "chars": "f. 1r, plimpton 61, Lombard, prologue"
        },
      "on": "noCanvasID#xywh=300,100,350,400",
      "default_img_url": "http://vm204.lib.berkeley.edu/iipsrv?IIIF=/ds/columbia/tiles/NNC-RBML.2702A_tile.tif",
      "ms": "plimpton61"
    },

  ]
}

export default defaultState;

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{SbVP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t("zLVn"),i=t("q1tI"),r=t.n(i),o=t("7ljp"),c=t("Bl7J"),l=t("vrFN"),d=t("8i+l"),p=function(e){var n=e.id,t=e.children;return(0,Object(i.useContext)(d.a)[1])({id:n,children:t}),r.a.createElement("h2",{id:""+n,style:{color:"black",textDecoration:"none",padding:"0.1rem 0rem"}},t)},b=["components"],s={},m={_frontmatter:s},h=c.a;function u(e){var n=e.components,t=Object(a.a)(e,b);return Object(o.b)(h,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(l.a,{title:"Type System",keywords:["Morpheus GraphQL","GraphQL","Haskell","Type System"],mdxType:"SEO"}),Object(o.b)("h1",null,"Type System"),Object(o.b)(p,{id:"enums",mdxType:"Section"}," Enums "),Object(o.b)("p",null,"You can use Union Types as Enums, but they're not allowed to have any parameters."),Object(o.b)("deckgo-highlight-code",{language:"haskell",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"data City\n  = Athens\n  | Sparta\n  | Corinth\n  | Delphi\n  | Argos\n  deriving (Generic)\n\ninstance GQLType City where\n  type KIND City = ENUM"),"\n        "),Object(o.b)(p,{id:"Unions",mdxType:"Section"},"Unions"),Object(o.b)("p",null,"To use union type, all you have to do is derive the ",Object(o.b)("inlineCode",{parentName:"p"},"GQLType")," class. Using GraphQL ",Object(o.b)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#fragments"},Object(o.b)("em",{parentName:"a"},"fragments")),", the arguments of each data constructor can be accessed from the GraphQL client."),Object(o.b)("deckgo-highlight-code",{language:"haskell",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"data Character\n  = CharacterDeity Deity -- will be unwrapped, since Character + Deity = CharacterDeity\n  | SomeDeity Deity -- will be wrapped since Character + Deity != SomeDeity\n  | Creature { creatureName :: Text, creatureAge :: Int }\n  | Demigod Text Text\n  | Zeus\n  deriving (Generic, GQLType)"),"\n        "),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"Deity")," is an object."),Object(o.b)("p",null,"As we see, there are different kinds of unions. ",Object(o.b)("inlineCode",{parentName:"p"},"Morpheus")," handles them all."),Object(o.b)("p",null,"This type will be represented as"),Object(o.b)("deckgo-highlight-code",{language:"graphql",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"union Character = Deity | SomeDeity | Creature | SomeMulti | Zeus\n\ntype SomeDeity {\n  _0: Deity!\n}\n\ntype Creature {\n  creatureName: String!\n  creatureAge: Int!\n}\n\ntype Demigod {\n  _0: Int!\n  _1: String!\n}\n\ntype Zeus {\n  _: Unit!\n}"),"\n        "),Object(o.b)("p",null,"By default, union members will be generated with wrapper objects.\nThere is one exception to this: if a constructor of a type is the type name concatenated with the name of the contained type, it will be referenced directly.\nThat is, given:"),Object(o.b)("deckgo-highlight-code",{language:"haskell",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"data Song = { songName :: Text, songDuration :: Float } deriving (Generic, GQLType)\n\ndata Skit = { skitName :: Text, skitDuration :: Float } deriving (Generic, GQLType)\n\ndata WrappedNode\n  = WrappedSong Song\n  | WrappedSkit Skit\n  deriving (Generic, GQLType)\n\ndata NonWrapped\n  = NonWrappedSong Song\n  | NonWrappedSkit Skit\n  deriving (Generic, GQLType)\n"),"\n        "),Object(o.b)("p",null,"You will get the following schema:"),Object(o.b)("deckgo-highlight-code",{language:"graphql",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"# has wrapper types\nunion WrappedNode = WrappedSong | WrappedSkit\n\n# is a direct union\nunion NonWrapped = Song | Skit\n\ntype WrappedSong {\n  _0: Song!\n}\n\ntype WrappedSKit {\n  _0: Skit!\n}\n\ntype Song {\n  songDuration: Float!\n  songName: String!\n}\n\ntype Skit {\n  skitDuration: Float!\n  skitName: String!\n}"),"\n        "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"for all other unions will be generated new object type. for types without record syntax, fields will be automatically indexed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"all empty constructors in union will be summed in type ",Object(o.b)("inlineCode",{parentName:"p"},"<tyConName>Enum")," (e.g ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterEnum"),"), this enum will be wrapped in ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterEnumObject")," and added to union members."))),Object(o.b)(p,{id:"scalars",mdxType:"Section"}," Scalars "),Object(o.b)("p",null,"To use custom scalar types, you need to provide implementations for ",Object(o.b)("inlineCode",{parentName:"p"},"parseValue")," and ",Object(o.b)("inlineCode",{parentName:"p"},"serialize")," respectively."),Object(o.b)("deckgo-highlight-code",{language:"haskell",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},'data Odd = Odd Int  deriving (Generic)\n\ninstance DecodeScalar Euro where\n  decodeScalar (Int x) = pure $ Odd (... )\n  decodeScalar _ = Left "invalid Value!"\n\ninstance EncodeScalar Euro where\n  encodeScalar (Odd value) = Int value\n\ninstance GQLType Odd where\n  type KIND Odd = SCALAR'),"\n        "),Object(o.b)(p,{id:"interfaces",mdxType:"Section"},"Interfaces"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"defining interface with Haskell Types (runtime validation):"),Object(o.b)("deckgo-highlight-code",{parentName:"li",language:"haskell",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"  -- interface is just regular type derived as interface\nnewtype Person m = Person {name ::  m Text}\n  deriving (Generic)\n\ninstance GQLType (Person m) where\n  type KIND (Person m) = INTERFACE\n\n-- with GQLType user can links interfaces to implementing object\ninstance GQLType Deity where\n  implements _ = [interface (Proxy @Person)]"),"\n        ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"defining with ",Object(o.b)("inlineCode",{parentName:"p"},"importGQLDocument")," and ",Object(o.b)("inlineCode",{parentName:"p"},"DSL")," (compile time validation):"),Object(o.b)("deckgo-highlight-code",{parentName:"li",language:"graphql",terminal:"carbon",theme:"one-dark","line-numbers":"true"},"\n          ",Object(o.b)("code",{parentName:"deckgo-highlight-code",slot:"code"},"interface Account {\n  name: String!\n}\n\ntype User implements Account {\n  name: String!\n}"),"\n        "))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-type-system-mdx-ed03a3ceb62116947b95.js.map
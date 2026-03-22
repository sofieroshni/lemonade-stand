import styles from './ui/Home.module.css'


      export default function Home() {
  return (
    <div>
    <div className={styles.container} >
        <video 
        autoPlay 
        loop 
        muted 
        className={styles.video}
      >
        <source src="/images/video/lemon4.mp4" type="video/mp4" />
      
      </video>
      <h1>LemonadeDrop</h1>    
<button className={styles.buttoncta}><a href="/pages/shop" >
        Shop nu 
      </a></button>
      

    </div>
    <section className={styles.section}>
      <div className={styles.div}>
        <h2>Test</h2>
        <p className={styles.p}>
          Vores lemonader er friskbrygget
          fra italien
         For os handler det ikke kun om at lave en drik, men om at skabe en oplevelse. En lemonade, der minder om varme sommerdage, frisk luft og enkel nydelse. Hver flaske er et lille stykke af Italien, bragt til dig med fokus på kvalitet, smag og håndværk.
        </p>
<button className={styles.buton}><a href="/pages/shop" >
        Shop nu 
      </a></button>
      </div>
            <div className={styles.divimages}>
              <img  className={styles.image} src="/images/citrun.png" alt="" />
            </div>

    </section>


    <section className={styles.section}>
      <div className={styles.div}>
        <h2>Om os</h2>
        <p className={styles.p}>
         Her er en længere tekst med en mere “brand/story”-følelse:

Vores lemonader er friskbrygget med omhu og respekt for de råvarer, vi arbejder med. Vi bruger solmodne citroner fra Syditalien, hvor klimaet og jorden skaber de perfekte betingelser for en intens og naturlig smag. Hver citron er nøje udvalgt for sin kvalitet, saftighed og balance mellem sødme og syrlighed.

Når citronerne høstes, bliver de hurtigt forarbejdet for at bevare deres friskhed og aroma. Vi presser dem skånsomt og kombinerer saften med rene, enkle ingredienser – uden unødvendige tilsætningsstoffer. Resultatet er en lemonade, der smager ægte, let og forfriskende.
        </p>
<button ><a href="/pages/shop" >
        Shop nu 
      </a></button>
      </div>
            <div className={styles.divimages}>
              <img  className={styles.image} src="/images/citronfarm.jpg" alt="" />
            </div>

    </section>

    
    </div>
  );
}


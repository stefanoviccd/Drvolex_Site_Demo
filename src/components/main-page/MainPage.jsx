import React from 'react';

function MainPage() {
    return <div>
        <div className='company_brand zoomIn'>
            <p className='subtitle'>Mi smo preduzeće <b>DRVOLEKS</b></p>

            <button className='btn-o-nama'>O nama</button>
        </div>


        <div className='main-info'>
            <p className='txt'>Bez obzira kakav se prostor oprema, Corpus omogućava jednostavno slaganje gotovih elemenata nameštaja u trodimenzionalni prostor. Jednostavnost i brzina su kod uređivanja enterijera osnovni zahtevi koje Corpus sa lakoćom ispunjava omogućavajući da se pažnja dizajnera i klijenta usmeri na ono najbitnije, funkcionalnost i estetiku. Simulacija se odvija u realnom vremenu, bez renderinga i zahvaljujući tome klijent dobija prirodan pogled na prostor kao i u stvarnom svetu. Celokupan projekat moguće je prikazati i u osnovi gde se kotiranje vrsi automatski. Klijent uz razbušen materijal, dobija i uputstvo za sklapanje kao i sav prateći okov, pa je sklapanje elemenata pojednostavljeno i klijentima koji nemaju iskustva u sklapanju nameštaja. Corpus takodje vrši i automatsku kalkulaciju troškova, tako da klijent u svakom trenutku zna cenu proizvoda.</p>
        </div>
        <div className='company_brand '>
            <p className='subtitle'>Izdvajamo iz ponude</p>
            <div className='gallery'>
<div className='gallery-img'><img className="glr-img" src="../ponuda/kuhinja_crop.jpg"></img>
<div className="middle">
    <div className="text">Kuhinje<hr></hr></div>
  </div></div>
<div className='gallery-img'><img  className="glr-img" src="../ponuda/kupatila_crop.jpg"></img>
<div className="middle">
    <div className="text">Kupatila<hr></hr></div>
  </div></div>
<div className='gallery-img'><img  className="glr-img" src="../ponuda/plakari_crop.jpg"></img>
<div className="middle">
    <div className="text">Plakari<hr></hr></div>
  </div></div>
<div className='gallery-img'><img className="glr-img" src="../ponuda/police_crop.jpg"></img>
<div className="middle">
    <div className="text">Police<hr></hr></div>
  </div></div>
<div className='gallery-img'><img className="glr-img" src="../ponuda/rasveta_crop.jpg"></img>
<div className="middle">
    <div className="text">Led rasveta<hr></hr></div>
  </div></div>


            </div>

            <button className='btn-kompletna_ponuda'>Pogledaj kompletnu ponudu</button>
        </div>
       
    </div>

}

export default MainPage;

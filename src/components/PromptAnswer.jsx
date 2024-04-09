import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

function PromptAnswer() {
  const { themeMode } = useSelector((state) => state.theme);
  const { authUser } = useSelector((state) => state.auth);
  return (
    <div className="promptAnswer">
      <div className="promptQuery">
        <Avatar src={authUser?.photoURL} />
        <p>{"Fetch Data in React"}</p>
      </div>
      <p
        className="promptContent"
        style={{
          backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
        reprehenderit! Ab magnam dolorem obcaecati in, delectus reiciendis
        commodi laboriosam a minus voluptas odit maiores cumque quaerat minima
        voluptates corporis necessitatibus perferendis rem voluptatum earum
        culpa sint. Adipisci rerum voluptatem alias qui velit officia voluptatum
        fuga maiores quos asperiores esse sint rem blanditiis culpa quae
        exercitationem quasi est nulla provident modi quia aperiam quidem,
        accusantium delectus? Odit quasi dolorem accusamus libero repellendus
        ipsa obcaecati corporis similique aperiam. Tempora nemo iure quasi iste
        enim quisquam, ipsam id hic minima officiis vero dignissimos odit nisi
        quas placeat praesentium, voluptatem aperiam dolorem saepe distinctio
        molestias sint necessitatibus. Minus rem aut praesentium, nostrum
        voluptas veritatis soluta fugit reiciendis quaerat cupiditate laboriosam
        dolorum delectus earum officia id non qui recusandae. Consequuntur a
        asperiores, quisquam accusamus, excepturi laboriosam neque culpa impedit
        ipsa veniam sequi numquam doloremque quis dolorum maiores consequatur
        quae. Molestiae ducimus eum itaque mollitia ut! Alias perspiciatis
        laborum et nam, minima quo voluptatum expedita consequatur nulla magnam
        magni qui consectetur! Praesentium totam omnis modi aliquam similique
        sapiente atque, nisi ipsum aliquid ratione voluptates magnam. Ducimus
        quidem quia blanditiis et repellendus! Provident deserunt sequi debitis?
        Recusandae nemo corporis laudantium neque praesentium vel, culpa
        repellat labore consequatur, fuga expedita architecto possimus fugit ab
        adipisci non fugiat dolor dolorum iure sapiente soluta dignissimos
        nulla. Magni, dolores pariatur! Ea, cupiditate veritatis laborum facilis
        in accusantium, harum illo laboriosam commodi, autem asperiores
        reiciendis nulla ducimus eaque totam vitae rem rerum ex et voluptate
        neque fugiat beatae itaque! Quia maiores voluptates amet suscipit illo,
        maxime dolores sapiente nisi provident necessitatibus ad. Consequuntur
        quos minima vero reprehenderit, sunt rem quae perspiciatis aspernatur
        nulla saepe beatae voluptatibus obcaecati consequatur voluptate magni
        rerum impedit animi neque asperiores! Rem enim autem illum possimus
        iusto inventore porro vero eum sunt corporis dolore similique reiciendis
        illo culpa repellat provident eveniet cumque corrupti vitae, commodi
        temporibus error magnam doloremque suscipit. Consectetur, velit deleniti
        eveniet quam atque illo mollitia natus. Distinctio, similique dolorum
        quasi nam suscipit harum perferendis, aspernatur laudantium quae modi
        veritatis ipsa accusantium ipsum provident neque nihil iusto at odit.
        Repellat, adipisci itaque exercitationem provident neque temporibus
        deleniti perspiciatis nam impedit pariatur numquam eveniet dignissimos
        omnis accusamus sapiente esse ipsum eum placeat perferendis quos velit
        facilis nulla? Ullam nobis adipisci, quia voluptate temporibus illum
        mollitia officiis suscipit non harum rem illo? Illo ut est velit sunt
        placeat. Fugiat, praesentium magnam soluta ad fugit tempore beatae
        tenetur error quas optio vero maiores, nulla quibusdam reprehenderit,
        corrupti quisquam amet excepturi. Dolores laboriosam veritatis suscipit
        hic nulla harum ipsum provident cumque, est exercitationem iusto
        repellat repudiandae quam atque culpa, vero, eum nobis magni tenetur.
        Fuga necessitatibus deserunt iure repellat quisquam laborum, vitae
        distinctio. Ut obcaecati impedit, debitis ipsum, officia nemo possimus
        ab corporis sunt soluta quod neque consequuntur eligendi ipsa tenetur.
        Molestiae, aspernatur corporis magnam similique in veritatis omnis
        tempore esse quaerat vitae id quis nemo ex voluptatem iusto rerum
        consectetur incidunt doloribus asperiores autem quas, tenetur iste
        quisquam. Iure doloremque cum debitis optio possimus voluptatibus
        laudantium unde quo nesciunt odit voluptate assumenda dolor ea accusamus
        vero corrupti officiis deserunt accusantium expedita, pariatur
        architecto minima. Temporibus veniam quidem magni ducimus itaque nemo
        maxime asperiores, minima corrupti vero molestias impedit unde? Ab
        ducimus accusamus labore error nam id atque, aspernatur, corrupti
        architecto rem exercitationem quidem voluptates dolor aut incidunt ad
        numquam. Dolorum dolorem consequuntur adipisci. Aut deserunt nostrum
        reprehenderit fugit aspernatur vitae dolore illum voluptatum quidem
        consectetur, cum, esse minus error? Esse nostrum officia maxime
        praesentium, tempora, velit adipisci blanditiis molestias culpa odio,
        quisquam aspernatur. Iure architecto quas autem reprehenderit recusandae
        sunt eos expedita, porro optio corrupti! Doloremque, facilis quam nam
        quos iste ex alias id quo corporis nihil laboriosam fugit rerum
        voluptatem? Eum iste nihil nemo quo quia quas modi exercitationem nobis
        laborum at dolorum consectetur, fugit rerum! Sunt sequi iure atque
        tenetur iusto nihil cupiditate eum dolores excepturi. Autem velit
        consequuntur eaque repudiandae ab, voluptatum ipsa veritatis provident
        quia nihil doloribus eos officiis eum cum pariatur architecto fugiat
        beatae porro sint facilis nulla laudantium, atque magnam. Est non nam
        cum suscipit quaerat nobis sunt assumenda quidem repellendus facilis
        magnam cupiditate excepturi accusantium molestiae, voluptatem a officiis
        esse, vel alias blanditiis, adipisci omnis rem qui culpa? Culpa ab
        obcaecati cupiditate numquam est nulla necessitatibus incidunt.
        Quibusdam alias nostrum adipisci quidem saepe ducimus dicta dolore illo,
        aperiam dolores doloremque porro perferendis possimus sint iure hic
        neque? Velit neque dolorum aliquid aspernatur voluptatum itaque, amet
        debitis incidunt necessitatibus voluptatem ea praesentium minima sunt
        eaque explicabo. Ab reprehenderit fugiat neque, voluptate perspiciatis
        quidem nihil eos id, libero assumenda tenetur aspernatur, aperiam
        repellat eveniet repudiandae dolores adipisci iusto. Dignissimos, autem
        accusantium asperiores veritatis, debitis illum sed blanditiis ad nobis
        natus eveniet optio voluptas labore? Quis quidem, eos illo id, qui neque
        quo dolorem libero cupiditate quisquam praesentium vitae consequuntur
        sed illum repellendus debitis nemo reiciendis nostrum inventore ut
        magnam natus quas blanditiis commodi. Nulla facilis repellendus non
        voluptatem soluta, culpa similique veritatis consequuntur tempore id
        recusandae optio ab hic. Cumque consectetur, ipsum placeat reprehenderit
        sint et similique totam cum sapiente corrupti eligendi eveniet fugiat
        error illum sequi dolorem dignissimos assumenda numquam adipisci
        repudiandae vero. Vitae, enim, minima tempora officiis ex nihil animi
        non similique molestiae nam eum recusandae consequatur omnis nemo libero
        esse nobis? Ratione ab fugit eius ipsam commodi tempore, ipsum atque et
        doloribus nobis? Totam quibusdam delectus ducimus, adipisci ipsam,
        debitis consectetur laborum nostrum obcaecati labore enim! Aspernatur
        saepe obcaecati illum? Ex, aliquam. Unde deserunt iusto, quibusdam ipsa,
        perferendis officiis a porro quidem voluptate aliquid iste pariatur
        necessitatibus fugit? Quibusdam repellendus delectus sit nam accusantium
        voluptate vitae, sed culpa labore voluptatum numquam incidunt vero
        soluta reiciendis excepturi illum commodi distinctio quasi maiores iusto
        eos blanditiis quam nisi velit? Omnis consequuntur, consequatur ipsa
        ipsam maxime nam fugiat architecto, iure, neque nulla quisquam expedita
        amet ut itaque nemo veniam eligendi? Doloribus non cupiditate suscipit
        dicta consequuntur minus ratione perspiciatis necessitatibus possimus
        consectetur assumenda tempora, hic qui asperiores officiis similique
        pariatur ipsam quibusdam aut corporis. Rerum tenetur perferendis animi
        officiis voluptatum aperiam tempore, alias ab!
      </p>
    </div>
  );
}

export default PromptAnswer;

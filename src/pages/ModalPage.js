import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is some text for you to agree on and accept.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis quia
        excepturi neque reiciendis dolores nihil rerum! Blanditiis amet
        distinctio, sunt rem architecto culpa maxime rerum! Animi deleniti
        laborum dignissimos? Aperiam officiis corporis nisi illum consequuntur
        quis, aliquam veniam fugit tenetur minus ducimus, ad nulla accusantium!
        Ab, iusto labore! Fugit distinctio delectus, placeat voluptatibus soluta
        facilis sint veniam tempora velit? Eveniet rem sunt accusamus
        praesentium ratione? Natus illum, perferendis pariatur iusto laborum
        cupiditate exercitationem harum temporibus quo atque maxime quibusdam
        ratione debitis asperiores eos vero laudantium, minima similique,
        assumenda voluptates. Ipsa velit veniam a? Dolorem, reiciendis corporis
        sint vero obcaecati iste ducimus, ea deserunt facilis autem nemo
        cupiditate eligendi! Eum voluptas cupiditate vero, sunt magni ducimus
        necessitatibus fugiat doloribus exercitationem. Facilis iure voluptate
        perferendis neque dolorum deserunt officia error accusantium quos sit
        vero quam assumenda enim incidunt, expedita recusandae commodi a
        voluptates iusto aspernatur esse. Quidem est voluptates blanditiis
        fugiat. Aliquam ea numquam sint, consequatur accusamus nesciunt
        inventore. Culpa tempora error voluptas minus aliquid deserunt cum
        adipisci reiciendis amet corrupti, odio ad dolore, nulla quo quam esse
        nemo similique veniam? Praesentium tempore magnam hic, id unde
        voluptatibus dicta, quos inventore eligendi ut qui porro recusandae,
        corrupti quisquam. Tempora labore atque culpa. Perferendis deserunt,
        veniam placeat tenetur molestias architecto eligendi nam! Cumque
        perferendis voluptate enim quod minima harum facilis! Dicta accusantium
        voluptas aliquid velit odit eaque. Debitis consectetur molestiae
        distinctio ut, ea laboriosam recusandae iure dolor omnis eos facilis qui
        cumque! Fugiat consectetur, nam saepe, a ipsum veritatis ratione aliquam
        deserunt suscipit, iure recusandae! Doloribus, exercitationem debitis,
        necessitatibus blanditiis minus possimus reiciendis placeat voluptate
        unde dolore impedit deserunt repellendus cupiditate nam? Dignissimos
        aliquid asperiores consectetur est quidem praesentium dolores
        perspiciatis nostrum saepe dolore, repellat quo officiis possimus nam
        eos veniam voluptatem debitis quibusdam voluptatibus maxime ipsam
        excepturi. A officiis sapiente repudiandae.
      </p>
    </div>
  );
}

export default ModalPage;

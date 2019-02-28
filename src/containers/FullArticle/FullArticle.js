import React, { Component } from "react";

import "./FullArticle.css";
import react from "../../assets/Article/react.png";

class FullArticle extends Component {
  render() {
    return (
      <div className="container FullArticle">
        <div className="row">
          <p className="h3 articlehead">
            An introduction to React, Build a React App from Scratch. And how to
            setup a dev environment for React.
          </p>
        </div>
        <hr />

        <div>
          <img className=" responsiveImg" src={react} alt="article" />
        </div>
        <p className="articleText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          iste alias similique commodi? Dicta eius aperiam laborum neque vel,
          at, quae, accusamus dolorum natus exercitationem error asperiores nam
          itaque nihil quos ipsa quo! Necessitatibus obcaecati iure ullam
          corporis, illo autem consequuntur officiis ipsum debitis,
          reprehenderit eum animi ratione libero accusamus iste error saepe ut
          dolor quibusdam asperiores id? Veritatis beatae quae dolorum. Illum
          tempora iusto delectus. Voluptatem adipisci vel ipsa maxime maiores
          reiciendis ex dolores odio dicta eius, assumenda enim a eaque commodi
          ipsam quae, dolor eos! Repudiandae aspernatur voluptatum repellat
          commodi? Veritatis recusandae aliquid officia molestiae. Impedit
          architecto facere ea a minima? Atque ratione quis numquam doloremque
          veritatis cupiditate praesentium nostrum nemo magni dolorem animi
          perferendis modi nam a alias quam, esse facilis repudiandae
          consequuntur beatae autem repellat incidunt. Veritatis, reiciendis,
          voluptatum consequatur eos nobis esse sit aspernatur quae incidunt
          itaque fugiat pariatur provident. Iusto, nam commodi. Libero molestiae
          omnis non numquam illum quidem quam temporibus, similique corporis
          quos in harum? Non, minus provident? Exercitationem quas nam
          repellendus aliquid voluptatem incidunt possimus odio ratione labore
          magni nulla cum suscipit, a maxime quibusdam ipsum quo illum voluptate
          veniam sed dicta aperiam? Corporis repudiandae fugit dolor provident
          modi minus odit soluta, blanditiis architecto maxime, tempore, sit
          alias sequi quos expedita illum iusto asperiores quaerat ut cupiditate
          mollitia omnis quo hic. Porro id ratione ea et dignissimos
          praesentium, voluptatem veritatis delectus iste non veniam sapiente
          quasi aliquam nulla nam iusto amet impedit? Voluptatem possimus vero
          eos expedita unde soluta laudantium consequuntur dolorum, distinctio
          praesentium, nulla voluptates deserunt explicabo ipsum quos in
          reprehenderit est perferendis aliquid molestiae error atque
          consectetur vitae? Ducimus quaerat magni, consequuntur eligendi
          deleniti maxime, possimus velit ab eum hic eaque minima expedita vel
          odit accusamus id ut officia animi amet debitis quasi. Velit illum quo
          aliquid, perferendis quam itaque
        </p>
      </div>
    );
  }
}

export default FullArticle;

import React from 'react';

export default () => (
  <style jsx global>{`
    a.card-title {
      color: white;
    }
    div.story-header {
      background-color: #000;
    }
    div.story-header > div {
      max-width:1700px;
      margin: 0 auto;
    }
    div.bg-imgIx {
      height: 80vh;
      background: url() center/cover no-repeat fixed;
    }

    div.bg-imgIx:before {
      backgound: transparent;
      transition: background 0.5s linear;
      margin-bottom: 20vh;
    }

    div.bg-imgIx:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background:rgba(0,0,0,0.45);
      -webkit-transition: background 1.5s ease-out;
      -moz-transition: background 1.5s ease-out;
      -o-transition: background 1.5s ease-out;
      transition: background 1.5s ease-out;
    }

    @media screen and (min-width: 1600px) {
      div.bg-imgIx:before {
        background: -moz-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.25) 300px, rgba(0,0,0,0.25) calc(100% - 300px), rgba(0,0,0,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, rgba(0,0,0,1) 0%,rgba(0,0,0,0.25) 300px,rgba(0,0,0,0.25) calc(100% - 300px),rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,0.25) 300px,rgba(0,0,0,0.25) calc(100% - 300px),rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
        max-width: 1700px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .post-heading h1 {
      color: #fff;
      font-size: 5vmax;
      font-family: 'Ubuntu', sans-serif;
    }
  `}
  </style>
);

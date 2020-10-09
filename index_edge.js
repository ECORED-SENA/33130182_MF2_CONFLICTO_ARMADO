/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'block',
                            type: 'image',
                            rect: ['-834px', '56px', '775px', '157px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            display: 'block',
                            type: 'image',
                            rect: ['-350px', '169px', '304px', '449px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje.svg",'0px','0px']
                        },
                        {
                            id: 'unidades',
                            display: 'none',
                            type: 'image',
                            rect: ['436px', '246px', '444px', '281px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"unidades.svg",'0px','0px','100.7%','100.7%', 'no-repeat'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 25, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'titulo-unidad1',
                            display: 'none',
                            type: 'image',
                            rect: ['1297px', '-6px', '503px', '130px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-unidad1.svg",'0px','0px']
                        },
                        {
                            id: 'bton-volver-unidades',
                            display: 'none',
                            type: 'image',
                            rect: ['982px', '5px', '89px', '153px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bton-volver-unidades.svg",'0px','0px']
                        },
                        {
                            id: 'menu-verde',
                            display: 'none',
                            type: 'image',
                            rect: ['1095px', '173px', '182px', '331px', 'auto', 'auto'],
                            clip: 'rect(0px 182px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"menu-verde.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezas',
                            display: 'none',
                            type: 'image',
                            rect: ['1130px', '178px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezasCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1114px', '224px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezasCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['1114px', '263px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezasCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['1089px', '320px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezasCopy4',
                            display: 'none',
                            type: 'image',
                            rect: ['1093px', '387px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezas2',
                            display: 'none',
                            type: 'image',
                            rect: ['1139px', '236px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezas2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1078px', '309px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezas2Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['1090px', '372px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'marcador--rompecabezasCopy5',
                            display: 'none',
                            type: 'image',
                            rect: ['1061px', '454px', '34px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador--rompecabezas.svg",'0px','0px']
                        },
                        {
                            id: 'botones1y2',
                            display: 'none',
                            type: 'image',
                            rect: ['1058px', '179px', '63px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones1y2.svg",'0px','0px']
                        },
                        {
                            id: '_1activado',
                            display: 'none',
                            type: 'image',
                            rect: ['1058px', '180px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1activado.svg",'0px','0px']
                        },
                        {
                            id: '_2activado',
                            display: 'none',
                            type: 'image',
                            rect: ['1092px', '179px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2activado.svg",'0px','0px']
                        },
                        {
                            id: 'ley1448',
                            display: 'none',
                            type: 'image',
                            rect: ['408px', '193px', '582px', '272px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ley1448.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['77px', '214px', '297px', '259px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​La Ley 1448 de 2011, conocida también como Ley de Víctimas y Restitución de Tierras, tiene como objetivo principal el reconocimiento de las víctimas del conflicto armado colombiano y de sus derechos a la verdad, la justicia y a la reparación, con garantías de no repetición.</p>",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['26px', '493px', '971px', '76px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​Según el Registro Único de Víctimas, en Colombia existen 8.746.541 víctimas registradas a 01 de septiembre de​</p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(3, 3, 3);\">2018.&nbsp;</span><span style=\"color: rgb(62, 148, 2); text-decoration: underline; font-weight: 700;\"><a href=\"https://www.unidadvictimas.gov.co/es/registro-unico-de-victimas-ruv/37394\" target=\"_blank\">https://www.unidadvictimas.gov.co/es/registro-unico-de-victimas-ruv/37394</a></span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(21,21,21,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['277px', '163px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​El proceso de inscripción en el Registro Único de Víctimas es el siguiente:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(21,21,21,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'camino',
                            symbolName: 'camino',
                            display: 'none',
                            type: 'rect',
                            rect: ['53', '206', '937', '371', 'auto', 'auto']
                        },
                        {
                            id: 'principios',
                            symbolName: 'principios',
                            display: 'none',
                            type: 'rect',
                            rect: ['-198', '146', '1193', '418', 'auto', 'auto']
                        },
                        {
                            id: 'derechoss',
                            symbolName: 'derechoss',
                            display: 'none',
                            type: 'rect',
                            rect: ['58', '142', '915', '459', 'auto', 'auto']
                        },
                        {
                            id: 'manito5',
                            display: 'none',
                            type: 'image',
                            rect: ['1101px', '332px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px'],
                            transform: [[],['106']]
                        },
                        {
                            id: 'titulo-medidas',
                            display: 'none',
                            type: 'image',
                            rect: ['658px', '54px', '235px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-medidas.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'menugris',
                            symbolName: 'menugris',
                            display: 'none',
                            type: 'rect',
                            rect: ['19', '163', '993', '415', 'auto', 'auto']
                        },
                        {
                            id: 'titulo-repracion',
                            type: 'image',
                            rect: ['630px', '56px', '247px', '27px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-repracion.svg",'0px','0px']
                        },
                        {
                            id: 'botones1y2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1024px', '388px', '63px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones1y2.svg",'0px','0px']
                        },
                        {
                            id: '_1activadoCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1024px', '389px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1activado.svg",'0px','0px']
                        },
                        {
                            id: '_2activadoCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1059px', '388px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2activado.svg",'0px','0px']
                        },
                        {
                            id: 'reparacion1',
                            symbolName: 'reparacion1',
                            display: 'none',
                            type: 'rect',
                            rect: ['100', '272', '912', '234', 'auto', 'auto'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'reparacion2',
                            symbolName: 'reparacion2',
                            type: 'rect',
                            rect: ['106', '246', '833', '296', 'auto', 'auto']
                        },
                        {
                            id: 'decretos',
                            symbolName: 'decretos',
                            display: 'none',
                            type: 'rect',
                            rect: ['92', '173', '898', '399', 'auto', 'auto']
                        },
                        {
                            id: 'mensaje1',
                            display: 'none',
                            type: 'image',
                            rect: ['764px', '467px', '288px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mensaje1.svg",'0px','0px']
                        },
                        {
                            id: 'tituloreparacion-01',
                            display: 'none',
                            type: 'image',
                            rect: ['686px', '45px', '248px', '53px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tituloreparacion-01.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'titulo-unidad-2',
                            type: 'image',
                            rect: ['37px', '12px', '536px', '139px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-unidad-2.svg",'0px','0px']
                        },
                        {
                            id: 'menu-naranja',
                            display: 'none',
                            type: 'image',
                            rect: ['1287px', '239px', '163px', '179px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu-naranja.svg",'0px','0px']
                        },
                        {
                            id: 'menu_morado',
                            symbolName: 'menu_morado',
                            display: 'none',
                            type: 'rect',
                            rect: ['59', '188', '1528', '355', 'auto', 'auto']
                        },
                        {
                            id: 'titulo-fundamentos-conceptuales',
                            display: 'none',
                            type: 'image',
                            rect: ['418px', '33px', '414px', '395px', 'auto', 'auto'],
                            opacity: '0.017094017094017',
                            fill: ["rgba(0,0,0,0)",im+"titulo-fundamentos-conceptuales.svg",'0px','0px']
                        },
                        {
                            id: 'titulo-componentes',
                            display: 'none',
                            type: 'image',
                            rect: ['617px', '21px', '309px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-componentes.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'marcador-flechas',
                            display: 'none',
                            type: 'image',
                            rect: ['659px', '123px', '29px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-flechas.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'marcador-flechasCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['811px', '123px', '29px', '19px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-flechas.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'figura3',
                            display: 'none',
                            type: 'image',
                            rect: ['50px', '159px', '981px', '401px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"figura3.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'com_1',
                            symbolName: 'com_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['91', '146', '949', '418', 'auto', 'auto']
                        },
                        {
                            id: 'manito',
                            display: 'none',
                            type: 'image',
                            rect: ['540px', '430px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px']
                        },
                        {
                            id: 'manitoCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1094px', '194px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px']
                        },
                        {
                            id: 'manito5Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1038px', '408px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px'],
                            transform: [[],['79']]
                        },
                        {
                            id: 'manito5Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['1091px', '396px', '46px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manito.svg",'0px','0px'],
                            transform: [[],['79']]
                        },
                        {
                            id: 'Rectangle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['491px', '296px', '149px', '173px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['672px', '299px', '149px', '173px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            display: 'none',
                            type: 'rect',
                            rect: ['997px', '16px', '75px', '130px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['1164px', '178px', '112px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            display: 'none',
                            type: 'rect',
                            rect: ['1058px', '180px', '27px', '27px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1092px', '180px', '31px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1024px', '392px', '27px', '27px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1060px', '392px', '27px', '27px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy',
                            type: 'rect',
                            rect: ['1156px', '229px', '124px', '27px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy2',
                            type: 'rect',
                            rect: ['1156px', '270px', '124px', '27px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy3',
                            type: 'rect',
                            rect: ['1130px', '311px', '141px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy4',
                            type: 'rect',
                            rect: ['1130px', '382px', '141px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy5',
                            type: 'rect',
                            rect: ['1095px', '447px', '181px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['1156px', '239px', '112px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1107px', '298px', '163px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1113px', '372px', '163px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            display: 'none',
                            type: 'rect',
                            rect: ['418px', '300px', '329px', '107px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9',
                            display: 'none',
                            type: 'rect',
                            rect: ['617px', '52px', '163px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['780px', '52px', '146px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1052', '532', '207', '49', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'com_2',
                            symbolName: 'com_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1274', '589', 'auto', 'auto']
                        },
                        {
                            id: 'mapa_fundamentos',
                            symbolName: 'mapa_fundamentos',
                            display: 'none',
                            type: 'rect',
                            rect: ['8', '4', '1582', '585', 'auto', 'auto']
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1063', '205', '193', '331', 'auto', 'auto']
                        },
                        {
                            id: 'mapa_politica',
                            symbolName: 'mapa_politica',
                            display: 'none',
                            type: 'rect',
                            rect: ['2', '-60', '1279', '656', 'auto', 'auto']
                        },
                        {
                            id: 'actividad',
                            symbolName: 'actividad',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1281', '601', 'auto', 'auto']
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1281', '601', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1281', '601', 'auto', 'auto']
                        },
                        {
                            id: 'mapa',
                            symbolName: 'mapa',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1282', '602', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1277px', '599px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 33075,
                    autoPlay: true,
                    labels: {
                        "menu": 2000,
                        "uni1": 2352,
                        "ley": 3138,
                        "ley2": 3951,
                        "principios": 5151,
                        "derechos": 6750,
                        "medidas": 7626,
                        "reparacion": 8500,
                        "rep2": 9451,
                        "decretos": 10179,
                        "uni2": 11177,
                        "ini": 12250,
                        "fundamentos": 12977,
                        "componentes": 13839,
                        "com_1": 15000,
                        "com_2": 16197
                    },
                    data: [
                        [
                            "eid820",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            7488,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid844",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mapa_politica}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1222",
                            "display",
                            14406,
                            0,
                            "linear",
                            "${marcador--rompecabezas2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "top",
                            2352,
                            398,
                            "easeOutBack",
                            "${titulo-unidad1}",
                            '-6px',
                            '16px'
                        ],
                        [
                            "eid13",
                            "filter.blur",
                            1614,
                            386,
                            "linear",
                            "${unidades}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid249",
                            "display",
                            7626,
                            0,
                            "linear",
                            "${titulo-medidas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            8333,
                            0,
                            "linear",
                            "${titulo-medidas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid845",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid819",
                            "display",
                            0,
                            0,
                            "linear",
                            "${actividad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid315",
                            "display",
                            10117,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${menu-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            11007,
                            0,
                            "linear",
                            "${menu-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${titulo}",
                            '-834px',
                            '237px'
                        ],
                        [
                            "eid852",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            2352,
                            0,
                            "linear",
                            "${titulo-unidad1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid348",
                            "display",
                            11007,
                            0,
                            "linear",
                            "${titulo-unidad1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid901",
                            "display",
                            1614,
                            0,
                            "linear",
                            "${manito}",
                            'none',
                            'block'
                        ],
                        [
                            "eid902",
                            "display",
                            2352,
                            0,
                            "linear",
                            "${manito}",
                            'block',
                            'none'
                        ],
                        [
                            "eid832",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid834",
                            "display",
                            4889,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mensaje1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_1activadoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            9298,
                            0,
                            "linear",
                            "${_1activadoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid822",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mapa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "display",
                            8874,
                            0,
                            "linear",
                            "${reparacion1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid303",
                            "display",
                            9302,
                            0,
                            "linear",
                            "${reparacion1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid283",
                            "scaleX",
                            8500,
                            374,
                            "linear",
                            "${titulo-repracion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid821",
                            "display",
                            0,
                            0,
                            "linear",
                            "${creditos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid284",
                            "scaleY",
                            8500,
                            374,
                            "linear",
                            "${titulo-repracion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            3138,
                            362,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid823",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid365",
                            "scaleY",
                            10179,
                            321,
                            "easeOutBack",
                            "${tituloreparacion-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "display",
                            2245,
                            0,
                            "linear",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid353",
                            "display",
                            11177,
                            0,
                            "linear",
                            "${titulo-unidad-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            10179,
                            0,
                            "linear",
                            "${decretos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            11007,
                            0,
                            "linear",
                            "${decretos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            3138,
                            362,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid853",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${opciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            3951,
                            426,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid551",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${com_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid570",
                            "display",
                            15982,
                            0,
                            "linear",
                            "${com_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid846",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid847",
                            "display",
                            2352,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "display",
                            7626,
                            0,
                            "linear",
                            "${menugris}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            8333,
                            0,
                            "linear",
                            "${menugris}",
                            'block',
                            'none'
                        ],
                        [
                            "eid837",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${Rectangle6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid838",
                            "display",
                            10139,
                            0,
                            "linear",
                            "${Rectangle6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2750,
                            388,
                            "easeOutBack",
                            "${bton-volver-unidades}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${marcador--rompecabezas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${marcador--rompecabezas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid543",
                            "display",
                            14250,
                            0,
                            "linear",
                            "${figura3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid547",
                            "display",
                            14901,
                            0,
                            "easeInBack",
                            "${figura3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid830",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1216",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${marcador--rompecabezas2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1217",
                            "display",
                            12977,
                            0,
                            "linear",
                            "${marcador--rompecabezas2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "top",
                            1250,
                            364,
                            "linear",
                            "${personaje}",
                            '169px',
                            '184px'
                        ],
                        [
                            "eid305",
                            "display",
                            9451,
                            0,
                            "linear",
                            "${reparacion2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid306",
                            "display",
                            10117,
                            0,
                            "linear",
                            "${reparacion2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${_1activado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${_1activado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "left",
                            1250,
                            364,
                            "linear",
                            "${personaje}",
                            '-350px',
                            '0px'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            7626,
                            374,
                            "linear",
                            "${titulo-medidas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${botones1y2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "display",
                            10117,
                            0,
                            "linear",
                            "${botones1y2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid304",
                            "scaleY",
                            9451,
                            333,
                            "linear",
                            "${reparacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid851",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            3951,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            4843,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            2245,
                            0,
                            "linear",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid848",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mapa_fundamentos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            5151,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            6651,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "display",
                            5166,
                            0,
                            "linear",
                            "${principios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid235",
                            "display",
                            6651,
                            0,
                            "linear",
                            "${principios}",
                            'block',
                            'none'
                        ],
                        [
                            "eid835",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${Rectangle6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid836",
                            "display",
                            10139,
                            0,
                            "linear",
                            "${Rectangle6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "top",
                            750,
                            500,
                            "easeOutBack",
                            "${titulo}",
                            '56px',
                            '62px'
                        ],
                        [
                            "eid540",
                            "scaleX",
                            13839,
                            411,
                            "linear",
                            "${titulo-componentes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid903",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${manitoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid904",
                            "display",
                            3876,
                            0,
                            "linear",
                            "${manitoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1022",
                            "display",
                            7250,
                            0,
                            "easeOutElastic",
                            "${manito5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1023",
                            "display",
                            7626,
                            0,
                            "easeOutElastic",
                            "${manito5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid444",
                            "display",
                            12977,
                            0,
                            "linear",
                            "${titulo-fundamentos-conceptuales}",
                            'none',
                            'block'
                        ],
                        [
                            "eid447",
                            "display",
                            13746,
                            0,
                            "linear",
                            "${titulo-fundamentos-conceptuales}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "scaleX",
                            7626,
                            374,
                            "linear",
                            "${titulo-medidas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            3138,
                            362,
                            "linear",
                            "${ley1448}",
                            '0',
                            '1'
                        ],
                        [
                            "eid818",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${marcador-flechasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            3951,
                            0,
                            "linear",
                            "${_2activado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${_2activado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1218",
                            "display",
                            13019,
                            0,
                            "linear",
                            "${marcador--rompecabezas2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1219",
                            "display",
                            13746,
                            0,
                            "linear",
                            "${marcador--rompecabezas2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid351",
                            "top",
                            11177,
                            398,
                            "easeOutBack",
                            "${titulo-unidad-2}",
                            '-10px',
                            '12px'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            3138,
                            362,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${titulo-repracion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            10117,
                            0,
                            "linear",
                            "${titulo-repracion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid356",
                            "left",
                            12075,
                            425,
                            "easeOutBack",
                            "${menu-naranja}",
                            '1287px',
                            '1114px'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            3138,
                            362,
                            "linear",
                            "${ley1448}",
                            '0',
                            '1'
                        ],
                        [
                            "eid287",
                            "display",
                            9451,
                            0,
                            "linear",
                            "${_2activadoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            10117,
                            0,
                            "linear",
                            "${_2activadoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid828",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid829",
                            "display",
                            2276,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid354",
                            "display",
                            12075,
                            0,
                            "easeOutBack",
                            "${menu-naranja}",
                            'none',
                            'block'
                        ],
                        [
                            "eid359",
                            "display",
                            10179,
                            0,
                            "easeOutBack",
                            "${tituloreparacion-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "display",
                            11045,
                            0,
                            "easeOutBack",
                            "${tituloreparacion-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid831",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid833",
                            "display",
                            4889,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid446",
                            "opacity",
                            12977,
                            523,
                            "linear",
                            "${titulo-fundamentos-conceptuales}",
                            '0.017094017094017',
                            '1'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            3138,
                            362,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid357",
                            "display",
                            11575,
                            0,
                            "easeOutBack",
                            "${menu_morado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid358",
                            "display",
                            12844,
                            0,
                            "easeOutBack",
                            "${menu_morado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid367",
                            "display",
                            10179,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            11007,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "clip",
                            3138,
                            362,
                            "linear",
                            "${menu-verde}",
                            [0,182,0,0],
                            [0,182,331,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid28",
                            "display",
                            2750,
                            0,
                            "easeOutBack",
                            "${bton-volver-unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid352",
                            "left",
                            11177,
                            398,
                            "easeOutBack",
                            "${titulo-unidad-2}",
                            '1293px',
                            '37px'
                        ],
                        [
                            "eid301",
                            "scaleY",
                            8874,
                            333,
                            "linear",
                            "${reparacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${botones1y2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${botones1y2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid849",
                            "display",
                            13519,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid850",
                            "display",
                            13795,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid538",
                            "display",
                            13839,
                            0,
                            "linear",
                            "${titulo-componentes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1042",
                            "display",
                            9000,
                            0,
                            "easeOutElastic",
                            "${manito5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1043",
                            "display",
                            9376,
                            0,
                            "easeOutElastic",
                            "${manito5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "left",
                            2352,
                            398,
                            "easeOutBack",
                            "${titulo-unidad1}",
                            '1297px',
                            '41px'
                        ],
                        [
                            "eid60",
                            "display",
                            4377,
                            0,
                            "easeOutBack",
                            "${camino}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            4843,
                            0,
                            "linear",
                            "${camino}",
                            'block',
                            'none'
                        ],
                        [
                            "eid571",
                            "display",
                            16197,
                            0,
                            "linear",
                            "${com_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid542",
                            "scaleY",
                            13839,
                            411,
                            "linear",
                            "${titulo-componentes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "display",
                            1614,
                            0,
                            "linear",
                            "${unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            2245,
                            0,
                            "linear",
                            "${unidades}",
                            'block',
                            'none'
                        ],
                        [
                            "eid545",
                            "scaleY",
                            14250,
                            390,
                            "easeInBack",
                            "${figura3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${derechoss}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            7488,
                            0,
                            "linear",
                            "${derechoss}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${marcador-flechas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid817",
                            "display",
                            15921,
                            0,
                            "linear",
                            "${marcador-flechas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid827",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${opciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid843",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            7626,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            8333,
                            0,
                            "linear",
                            "${marcador--rompecabezasCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${ley1448}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${ley1448}",
                            'block',
                            'none'
                        ],
                        [
                            "eid363",
                            "scaleX",
                            10179,
                            321,
                            "easeOutBack",
                            "${tituloreparacion-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "display",
                            3138,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${manito5Copy2}",
                            'none',
                            'none'
                        ],
                            [ "eid74", "trigger", 4377, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${camino}', [0] ] ],
                            [ "eid189", "trigger", 5166, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${principios}', [0] ] ],
                            [ "eid248", "trigger", 6750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${derechoss}', [0] ] ],
                            [ "eid281", "trigger", 7626, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${menugris}', [0] ] ],
                            [ "eid346", "trigger", 10179, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${decretos}', [0] ] ],
                            [ "eid371", "trigger", 11575, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${menu_morado}', [0] ] ],
                            [ "eid565", "trigger", 15000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${com_1}', [0] ] ],
                            [ "eid572", "trigger", 16197, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${com_2}', [0] ] ]
                    ]
                }
            },
            "camino1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'titulo1-solicitdud',
                            rect: ['81px', '0px', '167px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titulo1-solicitdud.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '78px', '326px', '237px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​Deberá hacerse mediante declaración de las víctimas en el Ministerio Público. Las víctimas contarán con cuatro años a partir de promulgada la Ley 1448 de 2011 (por hechos anteriores a la Ley) o dos años a partir del hecho victimizante (posterior a la Ley).</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '326px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "camino2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '78px', '326px', '237px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5Copy',
                            text: '<p style=\"margin: 0px;\">​La Unidad para la Atención y Reparación Integral a las Víctimas realizará la verificación de los hechos, consultando en las bases de datos de la Red Nacional de Información para la Atención y Reparación a las Víctimas.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'titulo2-verificacion',
                            rect: ['81px', '0px', '167px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titulo2-verificacion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '326px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "camino3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'titulo3-decicion',
                            rect: ['81px', '0px', '167px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titulo3-decicion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '109px', '326px', '237px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5Copy2',
                            text: '<p style=\"margin: 0px;\">​En un término de 60 días\nhábiles, la Unidad para la Atención y Reparación Integral a las Víctimas tomará una decisión otorgando o negando el registro.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '326px', '346px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "camino4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'titulo4-acceso',
                            rect: ['65px', '0px', '197px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titulo4-acceso.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '108px', '326px', '237px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5Copy3',
                            text: '<p style=\"margin: 0px;\">​Podrá acceder inmediatamente a las medidas de ayuda humanitaria y atención de emergencia en salud, y dependiendo del hecho victimizante y los derechos vulnerados, a las medidas de asistencia y reparación que apliquen.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '326px', '345px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "RECUERDAQUE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'recuerda-que',
                            rect: ['0px', '0px', '402px', '319px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/recuerda-que.svg', '0px', '0px']
                        },
                        {
                            rect: ['211px', '58px', '187px', '246px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Toda la información relacionada con el registro es de carácter privado y confidencial. De igual forma, si la víctima señala los nombres de los presuntos perpetradores del daño, éstos no deben ser registrados en los sistemas de información.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '402px', '319px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "derechoss": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['20px', '554px', '358px', '385px', 'auto', 'auto'],
                            id: 'derechos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/derechos.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['0px', '1px', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​- Derecho a la verdad, justicia y reparación.\n</p><p style=\"margin: 0px;\">- Derecho a acudir a escenarios de diálogo institucional y &nbsp; comunitario.\n</p><p style=\"margin: 0px;\">- Derecho a ser beneficiario de las acciones adelantadas por el Estado en\nfavor de las víctimas.\n</p><p style=\"margin: 0px;\">- Solicitar y recibir atención humanitaria.\n</p><p style=\"margin: 0px;\">- Participar en la formulación, implementación y seguimiento de la política\npública para las víctimas.\n</p><p style=\"margin: 0px;\">- Derecho a que la política pública para las víctimas tenga un enfoque\ndiferencial.\n</p><p style=\"margin: 0px;\">- Derecho a la reunificación familiar.\n</p><p style=\"margin: 0px;\">- Derecho a retornar a su lugar de origen o a reubicarse.\n</p><p style=\"margin: 0px;\">- Derecho a la restitución de tierra.\n</p><p style=\"margin: 0px;\">- Derecho a la información sobre las rutas y medios de acceso a las medidas\nde la Ley 1448 de 2011.\n</p><p style=\"margin: 0px;\">- Derecho a conocer el estado de procesos judiciales y administrativos en los\nque tenga particular interés.\n</p><p style=\"margin: 0px;\">- Derecho de las mujeres a vivir libre de violencia.</p>',
                            rect: ['392px', '0px', '523px', '433px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Text9'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '459px']
                        }
                    }
                },
                timeline: {
                    duration: 876,
                    autoPlay: false,
                    data: [
                        [
                            "eid242",
                            "opacity",
                            500,
                            376,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid240",
                            "left",
                            0,
                            500,
                            "easeOutElastic",
                            "${derechos}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid238",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${derechos}",
                            '554px',
                            '74px'
                        ]
                    ]
                }
            },
            "restitucion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'activado-restitucion',
                            rect: ['0px', '0px', '146px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado-restitucion.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '86px', '915px', '135px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text10',
                            text: '<p style=\"margin: 0px;\">​Hace referencia a restablecer la situación que existía antes del acto de violación a los DDHH o al DIH, buscando no devolver a las personas en las condiciones de vulnerabilidad que permitieron que los hechos de violencia ocurrieran.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '916px', '221px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "indemnizacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'activado-indemnizacion',
                            rect: ['162px', '0px', '176px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado-indemnizacion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '101px', '915px', '135px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text10Copy',
                            text: '<p style=\"margin: 0px;\">​Se refiere a un monto de dinero por los daños sufridos por la violación a los DDHH o al DIH.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '236px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "rehabilitacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'activado-rehabilitacion',
                            rect: ['360px', '0px', '177px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado-rehabilitacion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '101px', '915px', '135px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text10Copy2',
                            text: '<p style=\"margin: 0px;\">​Todas aquellas medidas orientadas a conseguir el restablecimiento de las condiciones físicas, mentales y psicosociales de las víctimas.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '236px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "satisfaccion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'activado-satisfaccion',
                            rect: ['559px', '0px', '160px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado-satisfaccion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '102px', '915px', '135px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text10Copy3',
                            text: '<p style=\"margin: 0px;\">​Medidas de naturaleza simbólica que permita la reparación de la víctima, la comunidad y su entorno. Por ejemplo: actos conmemorativos, monumentos públicos, entre otros.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "norepeticion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'activado-no-repeticion',
                            rect: ['741px', '0px', '176px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado-no-repeticion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '102px', '915px', '135px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text10Copy4',
                            text: '<p style=\"margin: 0px;\">​Medidas que aseguren que las víctimas y la sociedad no serán objeto, nuevamente de las mismas u otras violaciones a los DDHH o al DIH.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '917px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "componente-verdad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'mapa-fondo-naranja',
                            rect: ['0px', '0px', '1219px', '415px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa-fondo-naranja.svg', '0px', '0px']
                        },
                        {
                            rect: ['185px', '32px', '1013px', '391px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text11',
                            text: '<p style=\"margin: 0px;\">​Busca reconocer a las víctimas, sus familiares y la sociedad en general el derecho a conocer la verdad acerca de los hechos, los motivos y las circunstancias en que se cometieron las violaciones de que trata el artículo 3 de la Ley 1448 de 2011.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 900; text-decoration: underline;\">Verdad Histórica:</span> Promueve procesos de construcción, recuperación, difusión y preservación de la memoria histórica, sobre los motivos &nbsp;y circunstancias en que se cometieron las violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario.</p><p style=\"margin: 0px;\">​<span style=\"text-decoration: underline; font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"text-decoration: underline; font-weight: 700;\">Verdad Judicial</span><span style=\"text-decoration: underline;\">:</span> Desarrolla acciones orientadas a garantizar a las víctimas, testigos, defensores y otros sujetos, el acceso, publicidad o derecho a obtener información, en el marco de los procesos judiciales de las violaciones a los derechos humanos y el Derecho Internacional Humanitario.&nbsp;</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"text-decoration: underline; font-weight: 700;\">Verdad Histórica:</span>\n</p><p style=\"margin: 0px;\">+ Construcción de la memoria.\n</p><p style=\"margin: 0px;\">​+ Protección y preservación de la memoria histórica. </p><p style=\"margin: 0px;\">+ Difusión y apropiación colectiva de la verdad y la memoria.</p><p style=\"margin: 0px;\"> </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"text-decoration: underline; font-weight: 700;\">Verdad Judicial</span>: </p><p style=\"margin: 0px;\">+ Acceso a información judicial sobre el esclarecimiento de los hechos.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1219px', '423px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "componente-justicia": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mapa-fondo-rojo',
                            type: 'image',
                            rect: ['0px', '0px', '1219px', '415px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa-fondo-rojo.svg', '0px', '0px']
                        },
                        {
                            rect: ['189px', '42px', '993px', '357px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​Busca el esclarecimiento de las violaciones, la identificación de los responsables y su respectiva sanción.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 900; text-decoration: underline;\">Acceso a la Justicia</span><span style=\"font-weight: 900;\">​:&nbsp;</span>diseña e implanta mecanismos efectivos de acceso a la justicia y protección de los derechos de las víctimas,&nbsp;contra las violaciones a los Derechos Humanos e infracciones al Derecho Internacional Humanitario en Colombia.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​- Esclarecimiento de los hechos.\n</p><p style=\"margin: 0px;\">- Identificación de los responsables.\n</p><p style=\"margin: 0px;\">- Sanción.</p><p style=\"margin: 0px;\">​- Lucha contra la impunidad.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1219px', '415px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "componente-prevencion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'mapa-fondo-azul',
                            rect: ['0px', '0px', '1219px', '415px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa-fondo-azul.svg', '0px', '0px']
                        },
                        {
                            rect: ['195px', '22px', '1011px', '387px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​Integra las acciones y medidas encaminadas a promover y salvaguardar el respeto y la garantía de los derechos humanos de todas las\npersonas, grupos y comunidades sujetos a la jurisdicción del Estado Colombiano y en especial de aquellos en situación de riesgo extraordinario o extremo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">​</span><span style=\"font-weight: 900; text-decoration: underline;\">​La Prevención: </span>corresponde a evitar la ocurrencia de violaciones a los Derechos Humanos e infracciones al Derecho Internacional Humanitario, y neutralizar o superar las causas y circunstancias que generan riesgo en el marco del conflicto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"text-decoration: underline; font-weight: 800;\">La Protección:</span> se orienta a salvaguardar los derechos a la vida e integridad personal, mediante la adopción de medidas especiales para personas, grupos o comunidades en situación de riesgo extraordinario o extremo. Además, se articulan las acciones orientadas a la protección patrimonial, de tierras y territorios, que buscan garantizar a las víctimas el derecho a la propiedad y usufructo de sus tierras o&nbsp;de los territorios colectivos, en riesgo de ser abandonados o despojados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​- Prevención temprana.\n</p><p style=\"margin: 0px;\">- Prevención urgente.\n</p><p style=\"margin: 0px;\">- Garantías de no repetición.</p><p style=\"margin: 0px;\">​- Protección.</p><p style=\"margin: 0px;\">​- Protección de bienes patrimoniales.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1219px', '415px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "componente-atencion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 35.21875, 1.048801369863, 4.7542808219178, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'mapa-fondo-azul2',
                            filter: [0, 35.21875, 1.048801369863, 4.7542808219178, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '1219px', '415px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa-fondo-azul.svg', '0px', '0px']
                        },
                        {
                            rect: ['196px', '17px', '1005px', '390px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​Está dirigida a restablecer los derechos de las víctimas, garantizar las condiciones para llevar una vida digna y garantizar su incorporación a la vida social, económica y política, a través de un conjunto integrado de medidas, programas y recursos de orden político, económico, social, fiscal, entre otros.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700; text-decoration: underline;\">Atención: </span>Están dirigidas a brindar información, orientación y acompañamiento jurídico y psicosocial, con el propósito de facilitar el\nejercicio de los derechos a la verdad, la justicia y la reparación integral de la población víctima.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 900; text-decoration: underline;\">Asistencia:</span> Constituye un conjunto integrado de medidas, programas y recursos de orden político, económico, social, fiscal, dirigidos a restablecer los derechos de las víctimas, garantizar su incorporación a la vida social, económica y política.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['196px', '276px', '365px', '130px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​- Acciones de dar información y orientación.</p><p style=\"margin: 0px;\">- Acompañamiento jurídico y psicosocial.</p><p style=\"margin: 0px;\">- Ayuda o atención humanitaria.</p><p style=\"margin: 0px;\">- Identificación.</p><p style=\"margin: 0px;\">- Asistencia en salud.</p><p style=\"margin: 0px;\">- Asistencia en educación.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['542px', '276px', '365px', '130px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text15Copy',
                            text: '<p style=\"margin: 0px;\">​- Alimentación.</p><p style=\"margin: 0px;\">- Reunificación familiar.</p><p style=\"margin: 0px;\">- Generación de ingresos.</p><p style=\"margin: 0px;\">- Asistencia funeraria.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1219px', '415px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "medidas1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '153px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none solid rgb(21, 21, 21)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text16Copy2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; text-decoration: underline;\">Restitución de tierras</span> que busca el restablecimiento del goce jurídico y &nbsp;material de las tierras y &nbsp;territorios abandonados forzosamente o despojados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 900; text-decoration: underline;\">Restitución de vivienda</span>, tiene como fin atender de manera progresiva a las víctimas cuyas viviendas hayan sido afectadas por despojo, abandono, pérdida o menoscabo, a través del subsidio.</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['472px', '0px', '491px', '153px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none solid rgb(21, 21, 21)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text16Copy3',
                            text: '<p style=\"margin: 0px;\">​Medidas para la <span style=\"font-weight: 700;\">promoción del empleo rural y urbano</span> destinadas</p><p style=\"margin: 0px;\">a brindar las herramientas necesarias para que las víctimas puedan</p><p style=\"margin: 0px;\">entrar a competir en el mercado laboral en igualdad de condiciones.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Estrategias relacionadas con los<span style=\"font-weight: 700;\"> mecanismos para el acceso</span> a</p><p style=\"margin: 0px;\">créditos en condiciones especiales para las víctimas,</p><p style=\"margin: 0px;\">permitiéndoles la recuperación de su capacidad productiva</p><p style=\"margin: 0px;\">haciendo uso de líneas de crédito de redescuento.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['971px', '57px', '57px', '58px', 'auto', 'auto'],
                            id: 'flechapunteda-redCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flechapunteda-red.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '963px', '153px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "medidas2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '894px', '130px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 800;\">Retornos y reubicaciones</span> y las acciones desarrolladas para el</p><p style=\"margin: 0px;\">restablecimiento y la reparación de una persona desplazada por</p><p style=\"margin: 0px;\">causa del conflicto armado interno, dada por la posibilidad de</p><p style=\"margin: 0px;\">retornar al lugar habitual de residencia, o reubicarse en otro distinto</p><p style=\"margin: 0px;\">en condiciones de voluntariedad, seguridad y dignidad.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['946px', '33px', '57px', '58px', 'auto', 'auto'],
                            id: 'flechapunteada-izq',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flechapunteada-izq.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1003px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "numeral2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '150px', '1028px', '69px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text16Copy4',
                            text: '<p style=\"margin: 0px;\">​-&nbsp;<span style=\"font-weight: 900; text-decoration: underline;\"></span>Rehabilitación física y mental.</p><p style=\"margin: 0px;\">- Atención psicosocial.</p><p style=\"margin: 0px;\">- Rehabilitación social y comunitaria.</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '1028px', '69px', 'auto', 'auto'],
                            align: 'left',
                            id: 'rehabi',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900; text-decoration: underline;\">Rehabilitación:</span> Consiste en el conjunto de estrategias, planes, programas y acciones de carácter jurídico, médico, psicológico y social dirigidos al restablecimiento de las condiciones físicas y psicosociales de las víctimas.</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1028px', '219px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reparacion1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​Según lo dispuesto en el artículo 151 de la Ley 1448 de 2011, el <span style=\"font-weight: 800;\">Programa de Reparación Colectiva</span> está dirigido a sujetos de reparación colectiva que hayan sufrido un daño colectivo ocasionado por las violaciones de los derechos colectivos, la violación grave y manifiesta de los derechos individuales de los miembros de los colectivos, o un impacto colectivo por la violación de derechos individuales, ocurridas con ocasión del conflicto armado interno.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['468px', '0px', '444px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text6Copy',
                            text: '<p style=\"margin: 0px;\">Debe entenderse la reparación colectiva como un derecho del que son titulares los grupos, pueblos u organizaciones sociales y políticas que hayan sido afectadas por el daño, por lo que se busca garantizar la reparación justa, adecuada y proporcional a las víctimas colectivas de la violencia como fórmula para el tránsito hacia la paz duradera y la convivencia.​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '912px', '234px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reparacion2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'hombre-y-llave',
                            rect: ['0px', '1px', '187px', '198px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hombre-y-llave.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['198px', '0px', '635px', '296px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Como <span style=\"font-weight: 900;\">medidas de reparación colectiva</span> se encuentran:</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">+ Restitución de territorios, retorno y/o reubicación para sujetos colectivos.\n</p><p style=\"margin: 0px;\">+ Reconocimiento y dignificación de los sujetos de reparación colectiva mediante la\nreconstrucción y preservación de la memoria histórica.\n</p><p style=\"margin: 0px;\">+ Articulación de medidas materiales de reparación colectiva.\n</p><p style=\"margin: 0px;\">+ Cogestión, coordinación y priorización para el goce efectivo de derechos. </p><p style=\"margin: 0px;\">+ Restitución de derechos de grupos sociales y políticos.\n</p><p style=\"margin: 0px;\">+ Rehabilitación comunitaria y reconstrucción del tejido social.\n</p><p style=\"margin: 0px;\">+ Reparación de las afectaciones ocasionadas por el medio ambiente.</p>',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'manito2',
                            rect: ['954px', '221px', '46px', '44px', 'auto', 'auto'],
                            transform: [[], ['82'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '833px', '296px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "decretos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['0px', '0px', '453px', '399px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​De acuerdo con los <span style=\"font-weight: 900;\">Decretos-Ley 4633, 4634 y 4635 de 2011</span>, se concibe la reparación colectiva cuando un pueblo o comunidad como sujeto colectivo, haya sufrido el menoscabo de sus derechos a causa de hechos victimizantes individuales que impacten a la totalidad del colectivo o de hechos que afecten al colectivo en pleno, causando daños a la integridad étnica y cultural, al territorio, a la autonomía y a la libre circulación.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En la formulación y consulta previa de un Plan Integral de Reparación Colectiva según los Decretos-Ley, es necesaria la caracterización de los daños y afectaciones con la participación y el consentimiento de la comunidad afectada y con estos resultados, se procederá a la formulación de medidas necesarias para reparar integral y colectivamente a la comunidad frente a los daños causados. Esta reparación precisa medidas diferenciales en la dimensión material e inmaterial.</p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Los Decretos-Ley que establecen medidas de asistencia, atención, reparación integral y restitución de tierras o derechos territoriales para poblaciones especiales o en condiciones de vulnerabilidad son los siguientes:</p>',
                            rect: ['479px', '1px', '419px', '96px', 'auto', 'auto']
                        },
                        {
                            rect: ['908px', '132px', '360px', '256px', 'auto', 'auto'],
                            id: 'menu-decretos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu-decretos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '1px', '523px', '362px', 'auto', 'auto'],
                            id: 'fondo-decretos',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-decretos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['767px', '204px', '100px', '106px', 'auto', 'auto'],
                            id: 'unidad2-01',
                            fill: ['rgba(0,0,0,0)', 'images/unidad2-01.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'decreto1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 163, 41);\">Decreto-Ley 4633 de 2011. </span>Dicta medidas de asistencia, atención, reparación integral y restitución de derechos territoriales a las víctimas pertenecientes a los <span style=\"font-weight: 900;\">Pueblos y</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">Comunidades Indígenas.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es importante resaltar que se respeta la autonomía indígena por parte del Estado, pues se establece claramente el respeto a todo acto, estrategia o iniciativa autónoma de estos pueblos que busque proteger la vida, la libertad y la integridad cultural y la convivencia armónica en los territorios.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">De igual forma, se reconoce la diversidad lingüística, pues los pueblos indígenas podrán utilizar su propia lengua en todos los procedimientos para hacer efectivos sus derechos a la verdad, la justicia y la reparación. Para ello, el Estado deberá utilizar intérpretes reconocidos.</p>',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            display: 'none',
                            rect: ['48px', '25px', '444px', '315px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'decreto2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(171, 0, 255);\">Decreto-Ley 4634 de 2011.</span> Dicta medidas de asistencia, atención, reparación integral y restitución de tierras a las víctimas pertenecientes al <span style=\"font-weight: 800;\">pueblo Rrom o Gitano, los</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 800;\">Kumpañy</span> y a sus miembros individualmente considerados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En esta norma se tipifica el daño a la identidad étnica y cultura de los pueblos Rrom o gitanos, como aquellos actos que, además de violar los Derechos Humanos o que infrinjan el Derecho Internacional Humanitario, conlleven a pérdida o deterioro de:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">+ La conservación y transmisión intergeneracional de su identidad.</p><p style=\"margin: 0px;\">+ Capacidad laboral e ingresos económicos.</p><p style=\"margin: 0px;\">+ Las actividades de itinerancia, trashumancia o nomadismo.</p><p style=\"margin: 0px;\">+ Sus formas organizativas.</p><p style=\"margin: 0px;\">+ Ámbito intangible y espiritual.</p><p style=\"margin: 0px;\"></p>',
                            rect: ['56px', '27px', '444px', '315px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'decreto3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 84, 209);\">Decreto-Ley 4635 de 2011.</span> Se establecen todas las medidas de asistencia, atención,&nbsp;​​​reparación integral y restitución de tierras a las víctimas pertenecientes a <span style=\"font-weight: 700;\">comunidades</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">negras, afrocolombianas, raizales y palenqueras.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Resalta la definición de justicia transicional con enfoque étnico, colectivo y cultural, como “todos aquellos procesos y mecanismos judiciales o extrajudiciales asociados con los intentos de la sociedad por garantizar que los responsables de las violaciones cometidas en contra de las comunidades y sus miembros, rindan cuentas de sus actos, para satisfacer los derechos a la verdad, la justicia y la reparación integral de las víctimas”.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">De igual forma, se tipifica el daño por racismo y discriminación racial en medio del conflicto armado, presumiendo que este agudiza los actos de racismo y discriminación racial.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​</p>',
                            rect: ['48px', '27px', '444px', '315px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['512px', '128px', '194px', '74px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['512px', '219px', '194px', '74px', 'auto', 'auto'],
                            id: 'Rectangle4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['523px', '305px', '194px', '74px', 'auto', 'auto'],
                            id: 'Rectangle4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '10px', '57px', '39px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['774px', '200px', '98px', '108px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '898px', '399px']
                        }
                    }
                },
                timeline: {
                    duration: 3660,
                    autoPlay: false,
                    labels: {
                        "0": 1500,
                        "1": 1737,
                        "2": 2414,
                        "3": 3091
                    },
                    data: [
                        [
                            "eid331",
                            "scaleX",
                            1737,
                            263,
                            "linear",
                            "${decreto1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid324",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${menu-decretos}",
                            '908px',
                            '512px'
                        ],
                        [
                            "eid1063",
                            "display",
                            3091,
                            0,
                            "linear",
                            "${unidad2-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "scaleY",
                            2414,
                            263,
                            "linear",
                            "${decreto2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "display",
                            2414,
                            0,
                            "linear",
                            "${decreto2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            2983,
                            0,
                            "linear",
                            "${decreto2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            1737,
                            0,
                            "linear",
                            "${decreto1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "display",
                            2306,
                            0,
                            "linear",
                            "${decreto1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid333",
                            "scaleY",
                            1737,
                            263,
                            "linear",
                            "${decreto1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid322",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid335",
                            "scaleX",
                            2414,
                            263,
                            "linear",
                            "${decreto2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1064",
                            "display",
                            3091,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            1737,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            1737,
                            0,
                            "linear",
                            "${fondo-decretos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            3091,
                            0,
                            "linear",
                            "${decreto3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            3660,
                            0,
                            "linear",
                            "${decreto3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid339",
                            "scaleX",
                            3091,
                            263,
                            "linear",
                            "${decreto3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid326",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${menu-decretos}",
                            '132px',
                            '128px'
                        ],
                        [
                            "eid340",
                            "scaleY",
                            3091,
                            263,
                            "linear",
                            "${decreto3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "atencionintegral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '110px', '617px', '72px', 'auto', 'auto'],
                            id: 'ver-video-somos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-video-somos.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'atancion',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Su objetivo es desarrollar indicaciones basadas en evidencia que orienten la atención integral en salud con enfoque psicosocial y diferencial, como medida de asistencia y/o rehabilitación para la población víctima del conflicto armado. Comprende acciones de asistencia en salud, promoción y prevención, rehabilitación física y mental.\n</p>',
                            rect: ['19px', '0px', '572px', '130px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '617px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "amarillo4--1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '833px', '168px', 'auto', 'auto'],
                            align: 'left',
                            id: 'amarillo4-1',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque Diferencial.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​El artículo 13 de la Ley 1448 de 2011 señala: “El estado ofrecerá especiales garantías y medidas de protección a los grupos expuestos a mayor riesgo de las violaciones contempladas en el artículo 3 de la presente Ley tales como mujeres, jóvenes, niños y niñas, adultos mayores, personas en situación de discapacidad, campesinos, líderes sociales, miembros de organizaciones sindicales, defensores de Derechos Humanos y víctimas de desplazamiento forzado”.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['860px', '50px', '57px', '58px', 'auto', 'auto'],
                            id: 'flechapunteda-red2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flechapunteda-red.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '917px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "amarillo4--2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '67px', '532px', '168px', 'auto', 'auto'],
                            align: 'left',
                            id: 'amarillo3Copy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\"></span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​<span style=\"font-weight: 700;\">Interseccionalidad.</span> El análisis interseccional plantea que se debe entender la <span style=\"font-weight: 700;\">combinación de&nbsp;roles y/o identidades</span> como una forma de descubrir diferencias y similitudes significativas para poder <span style=\"font-weight: 700;\">superar las discriminaciones</span> y establecer las condiciones necesarias para el <span style=\"font-weight: 700;\">goce efectivo de los derechos.</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['572px', '0px', '267px', '308px', 'auto', 'auto'],
                            id: 'fig2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fig2.svg', '0px', '0px']
                        },
                        {
                            rect: ['913px', '119px', '57px', '58px', 'auto', 'auto'],
                            id: 'flechapunteada-izq2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flechapunteada-izq.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '970px', '308px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "amarillo6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo5Copy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque de Accion sin Daño y acciones afirmativas</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Propone que en el momento de plantear las acciones y evaluar sus consecuencias se incluya un análisis ético de las acciones desde el punto de vista de los valores y principios que las orientan, considerando además de otros criterios, unos principios mínimos o ética de mínimos como acuerdos y valores deseables de convivencia humana en condiciones de pluralidad y multiculturalidad, fundamentados en las nociones de dignidad, autonomía y libertad.</p><p style=\"margin:0px\">​</p>',
                            rect: ['0px', '0px', '415px', '168px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text15',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Las Acciones Afirmativas implican el desarrollo de acciones distintas por parte del Estado para unos determinados ciudadanos, de modo que por medio de estas se reduzcan escenarios de desigualdad en lo social, cultural o económico. Estas acciones se sustentan en la premisa del “trato distinto a los distintos” en tanto hace referencia a sujetos constitucionalmente definidos como sujetos de derechos individuales y colectivos.</p>',
                            rect: ['431px', '42px', '490px', '168px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '921px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ontologico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Dominio Ontológico.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\"></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\"></p><p style=\"margin:0px\">​La concepción de ser humano se centra en la comprensión de ser un agente social inmerso en una relación dialógica con su medio, es un sujeto en permanente construcción por la capacidad de interacción con su medio y con otros seres humanos, así como por su habilidad para dotar de sentido sus experiencias y de actualizar los niveles de significado</p><p style=\"margin: 0px;\">otorgados a estas. Interactúa con otros y le da sentido a sus vivencias y esto le permite valorar o</p><p style=\"margin: 0px;\">dar vigencia a unas sobre otras.&nbsp;</p><p style=\"margin: 0px;\"></p>',
                            id: 'amarillo3Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '408px', '82px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Desde esta lógica, la experiencia de victimización puede ser transformada por la interacción con otros/as, con base en los recursos de afrontamiento, por eso, la noción de reparación trasciende el otorgamiento de medidas externas e involucra</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">necesariamente un proceso subjetivo que no puede reducirse a lo estrictamente individual.</p>',
                            id: 'amarillo3Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['456px', '41px', '408px', '82px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '864px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "epistemologico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo3Copy5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Dominio Epistemológico.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​​​El fundamento desde la teoría del conocimiento se ubica en los paradigmas interpretativos y críticos, superando así la mirada restringida a una corriente</p><p style=\"margin: 0px;\">disciplinar y proponiéndose el desarrollo de un trabajo interdisciplinario.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">+ Desde el <span style=\"font-weight: 800;\">componente interpretativo o hermenéutico</span>, la atención psicosocial es fundamentalmente un ejercicio que requiere actos de comprensión colectiva de los sucesos y lectura contextualizada de la ​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">realidad,</span></p>',
                            rect: ['0px', '0px', '408px', '82px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo3Copy4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​asignando un lugar central a las diversas concepciones de quienes participan en el proceso, entrando en diálogo con las visiones y opciones de los profesionales que realizan el trabajo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">+&nbsp;</span>Con el&nbsp;<span style=\"font-weight: 700;\">componente crítico</span>, se enfatiza en la necesidad de que toda atención se oriente hacia</p><p style=\"margin: 0px;\">el enfoque transformador de las condiciones estructurales y coyunturales de la exclusión social y</p><p style=\"margin: 0px;\">la inequidad.</p>',
                            rect: ['456px', '41px', '408px', '82px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '864px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "etico-politico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Dominio ético-político.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​Este dominio se fundamenta en una declaración de estar al lado de quienes han sido víctimas en cuanto sujetos con derechos vulnerados. Se reconoce la</p><p style=\"margin: 0px;\">intencionalidad del daño infringido por otro ser humano, lo que marca la diferencia en cuanto al</p><p style=\"margin: 0px;\">sufrimiento emocional, pues este necesariamente estará conectado con los principios de dignidad</p><p style=\"margin: 0px;\">e integridad.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            id: 'amarillo3Copy7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '408px', '82px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Así mismo, se reconoce el deber de reparar que tiene el Estado y en este sentido, son los equipos psicosociales y de atención en salud quienes lo representan, con las implicaciones emocionales que ello conlleva en el proceso de construcción de confianzas.</p><p style=\"margin: 0px;\"></p>',
                            id: 'amarillo3Copy6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['456px', '41px', '408px', '82px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '864px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "metologico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo3Copy9',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Dominio Metodológico.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​Se consideran tres (3) tipos de técnicas durante la atención: narrativas, expresivas y performativas.</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">+ Las&nbsp;<span style=\"font-weight: 800;\">Técnicas Narrativas</span>&nbsp;privilegian el lenguaje verbal y escrito, son aquellas que recurren a</p><p style=\"margin: 0px;\">los códigos simbólicos que se crean habitualmente y que son de uso cotidiano. Se orienta hacia</p><p style=\"margin: 0px;\">la comprensión de situaciones bajo la premisa de que cada experiencia es relatada desde una</p><p style=\"margin: 0px;\">mirada particular y evitan la referencia a una verdad oficial o única.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">+&nbsp;</span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 100; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Las</span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 800; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;Técnicas Expresivas</span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;se ubican en el&nbsp;</span></p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            rect: ['0px', '0px', '408px', '82px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo3Copy8',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">campo s</span>​imbólico artístico y cultural, cuentan con una semiótica particular que se refiere a lo estético, lo escénico y lo arquetípico. Se cuenta con técnicas de creación artística como dibujo, fotografía, plastilina y mandalas, etc.; y, técnicas de realización simbólica como la línea de tiempo, siluetas humanas, rituales, etc.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">+ Las <span style=\"font-weight: 800;\">Técnicas Performativas</span> exploran el mundo relacional y emocional, por medio de ejercicios</p><p style=\"margin: 0px;\">de puesta en escena. Se utiliza el sociodrama, teatro-imagen y teatro-foro. Tienen mucha</p><p style=\"margin: 0px;\">potencia para la exploración de reconocimiento de alternativas.</p><p style=\"margin:0px\">​</p>',
                            rect: ['456px', '41px', '453px', '91px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '909px', '132px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "parte1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '225px', '207px', 'auto', 'auto'],
                            id: 'video-protocolo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/video-protocolo.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Frente a la medida de atención integral en salud, el Ministerio de Salud y Protección Social ha elaborado el <span style=\"font-weight: 700;\">Protocolo de Atención Integral en Salud con enfoque psicosocial para las víctimas del conflicto armado</span> que entenderá la integralidad en la atención según las orientaciones dadas por la Política Integral de Atención en Salud (PAIS) y en su Modelo Integral de Atención en Salud (MIAS), comprendiendo la igualdad en el trato y oportunidades en el acceso (principio de equidad) y el abordaje integral de la salud y de la enfermedad. Para ello, las Entidades Territoriales, las Entidades Administradoras de Planes de Beneficios y las Instituciones Prestadoras de Servicios de Salud, desarrollarán actividades que buscarán satisfacer las necesidades de salud de la población víctima.</p>',
                            rect: ['247px', '0px', '558px', '207px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3Copy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Así mismo, la atención integral en salud a las personas víctimas, da continuidad a la atención en salud iniciada en la medida de asistencia y desarrolla acciones de rehabilitación en la salud física y mental. Contempla los principios del Sistema General de Seguridad Social en Salud (SGSSS), consagrados en el artículo 3 de la Ley 1438 de 2011, y los principios de atención a víctimas señalados en el Papsivi.</p>',
                            rect: ['5px', '226px', '796px', '90px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '805px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "parte3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'parte2Copy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">El Protocolo de Atención Integral en Salud con Enfoque Psicosocial</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span>- Orienta las atenciones en salud como medida de asistencia y/o rehabilitación a las víctimas del conflicto armado y sus familias, incorporando acciones de promoción, prevención, atención y rehabilitación con enfoque psicosocial y diferencial, en el marco del Sistema General de Seguridad Social en Salud -SGSSS.\n</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\">- Está dirigido a profesionales de la salud en medicina, enfermería, psicología, terapia física, especialistas en medicina familiar, psiquiatría, profesionales de las ciencias sociales como trabajadores sociales, agentes comunitarios y personas víctimas del conflicto armado y sus familias. De igual manera está orientado a las Empresas Administradoras de Planes de Beneficios, Instituciones Prestadoras de Servicios de Salud y Entidades Territoriales.\n</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\">- Sus indicaciones y pautas están dirigidas a la modalidad ambulatoria de la atención en salud, a la alta, media y baja complejidad, así como a los equipos de la atención psicosocial del Papsivi.<span style=\"font-weight: 700;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"></p>',
                            rect: ['0px', '0px', '822px', '308px', 'auto', 'auto']
                        },
                        {
                            rect: ['240px', '274px', '233px', '34px', 'auto', 'auto'],
                            id: 'bton-tenga-en-cuenta',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bton-tenga-en-cuenta.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '822px', '308px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "compomente1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">La atención psicosocial</span>, como medida de rehabilitación, que contribuye a la reparación integral de las víctimas del conflicto armado, se entiende como:\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 800;\">El conjunto de procesos articulados de servicios cuyo objetivo es el de favorecer la recuperación o mitigación de los daños psicosociales y el sufrimiento emocional generado a las víctimas, sus familias, comunidades y colectivos étnicos, como consecuencia de las graves violaciones a los Derechos Humanos y las infracciones al Derecho Internacional Humanitario.</span></p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '762px', '168px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'paso1-paso2',
                            rect: ['0px', '170px', '704px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/paso1-paso2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '762px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "menuencerradomora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'menu-encerrado-mora',
                            type: 'image',
                            rect: ['0px', '76px', '805px', '245px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu-encerrado-mora.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '822px', '55px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 800;\">Momentos para el abordaje de las víctimas</span></p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La atención psicosocial en el marco del PAPSIVI tiene definidos unos momentos para el abordaje de las víctimas, sus familias, comunidades y colectivos étnicos que aplican en las diferentes modalidades de atención:</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '823px', '321px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "atencion-en-consejeria": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '36px', '389px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​Comprende las acciones de relación de</p><p style=\"margin: 0px;\">ayuda, en donde se busca la instauración</p><p style=\"margin: 0px;\">de un proceso preventivo frente a los</p><p style=\"margin: 0px;\">riesgos de complicaciones en la salud</p><p style=\"margin: 0px;\">mental de las afectaciones y daños</p><p style=\"margin: 0px;\">provocados por la violación a los DDHH,</p><p style=\"margin: 0px;\">promoviendo el desarrollo del potencial</p><p style=\"margin: 0px;\">humano, favoreciendo las cualidades de</p><p style=\"margin: 0px;\">afrontamiento y resistencia.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['376px', '0px', '357px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 211, 90);\">Individual</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">1. Fortalecimiento de la autoestima, autoconfianza y de los recursos para el afrontamiento.</p><p style=\"margin: 0px;\">2. Habilidades para el fortalecimiento en manejo de emociones.</p><p style=\"margin: 0px;\">3. Solución de problema.</p><p style=\"margin: 0px;\">4. Apoyo en escenarios de restitución de derechos.</p><p style=\"margin: 0px;\">5. Reconstrucción en proyecto de vida.</p><p style=\"margin: 0px;\">6. Fortalecimiento de la identidad de NNA y de su horizonte de vida.</p><p style=\"margin: 0px;\">7. Atención a NNAJ víctimas de reclutamiento Ilícito en el momento de estabilización*.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['776px', '0px', '357px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 211, 90);\">Individual - Grupal</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​8. Fortalecimiento y desarrollo de autoestima en grupo.</p><p style=\"margin: 0px;\">9. Grupos para el fortalecimiento en solución de problemas.</p><p style=\"margin: 0px;\">10. Grupos para el desarrollo de proyectos de vida.</p><p style=\"margin: 0px;\">11. Comprensión grupal del conflicto armado y re-construcción de memoria en NNA.</p><p style=\"margin: 0px;\">12. Atención grupal para la resiliencia con mujeres lideresas.</p><p style=\"margin: 0px;\">13. Atención grupal para el empoderamiento de personas con identidades de género y orientaciones</p><p style=\"margin: 0px;\">sexuales no hegemónicas.</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1133px', '283px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "atencion-terapeutica": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '38px', '389px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy5',
                            text: '<p style=\"margin: 0px;\">​Acciones dirigidas al manejo y</p><p style=\"margin: 0px;\">disminución de respuestas</p><p style=\"margin: 0px;\">significativamente mayores de malestar y</p><p style=\"margin: 0px;\">sufrimiento, esperables frente a eventos</p><p style=\"margin: 0px;\">anormales, provocados por la violación</p><p style=\"margin: 0px;\">de DDHH, que pueden ser de tipo</p><p style=\"margin: 0px;\">traumático, cuyo propósito es ayudar en</p><p style=\"margin: 0px;\">la estabilización y comprensión.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['367px', '0px', '357px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 211, 90);\">Indivi</span><span style=\"color: rgb(255, 211, 90);\">​</span><span style=\"color: rgb(255, 211, 90);\">dual</span></p><p style=\"margin: 0px;\">​1. Atención en crisis o primeros Auxilios</p><p style=\"margin: 0px;\">psicológicos.</p><p style=\"margin: 0px;\">2. Atención en crisis de segundo orden.</p><p style=\"margin: 0px;\">3. Afrontamiento de miedo.</p><p style=\"margin: 0px;\">4. Afrontamiento de la amenaza.</p><p style=\"margin: 0px;\">5. Afrontamiento de culpa y vergüenza.</p><p style=\"margin: 0px;\">6. Atención en duelo y re-</p><p style=\"margin: 0px;\">experimentación de pérdidas.</p><p style=\"margin: 0px;\">7. Atención a víctimas con antecedentes</p><p style=\"margin: 0px;\">de violencia sexual.</p><p style=\"margin: 0px;\">8. Resignificación de la relación con la</p><p style=\"margin: 0px;\">persona desaparecida forzadamente.</p><p style=\"margin: 0px;\">9. Transformaciones de la cotidianidad a</p><p style=\"margin: 0px;\">partir de la desaparición forzada.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['639px', '17px', '249px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 211, 90);\"></span>10. Reconstrucción de sentidos a partir de la experiencia de desaparición.</p><p style=\"margin: 0px;\">11. Afrontamiento del tránsito en la</p><p style=\"margin: 0px;\">identidad de los NNAJ víctimas de</p><p style=\"margin: 0px;\">reclutamiento Ilícito.</p><p style=\"margin: 0px;\">12. Atención a casos de violencia sexual en NNAJ víctimas de reclutamiento Ilícito.</p><p style=\"margin: 0px;\">13. Afrontamiento de la culpa en NNAJ</p><p style=\"margin: 0px;\">víctimas de reclutamiento Ilícito.</p><p style=\"margin: 0px;\">14. Afrontamiento de las emociones en NNA .</p><p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['903px', '17px', '244px', '247px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text13Copy6',
                            text: '<p style=\"margin: 0px;\">​15. Afrontamiento del duelo y la pérdida en NNA.</p><p style=\"margin: 0px;\">16. Atención individual frente a la</p><p style=\"margin: 0px;\">actualización de la experiencia de tortura.</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 211, 90);\">Individual - Grupal</span></p><p style=\"margin: 0px;\">​17. Grupo para el desarrollo de</p><p style=\"margin: 0px;\">estrategias para afrontar el miedo.</p><p style=\"margin: 0px;\">18. Grupos para el enfrentamiento de</p><p style=\"margin: 0px;\">​pérdidas.</p><p style=\"margin: 0px;\">19. Atención grupal para el manejo de</p><p style=\"margin: 0px;\">emociones en NNA</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1147px', '285px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "atencion-en-conseeria2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '287px', '234px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​- Acciones de relación de ayuda.</p><p style=\"margin: 0px;\">- Instalación proceso preventivo frente a complicaciones en la salud mental por las violaciones a los DDHH.</p><p style=\"margin: 0px;\">- Favorece cualidades de afrontamiento y resistencia.</p><p style=\"margin: 0px;\">- incluye acciones de escucha activa, clarificación de sentimientos y validación.</p><p style=\"margin: 0px;\">- Impulsa hacia la búsqueda de solución.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['358px', '0px', '347px', '234px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 215, 63);\">Orientaciones Metodológicas</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 215, 63);\">​</span></p><p style=\"margin: 0px;\">1- Solución de problemas intrafamiliares.</p><p style=\"margin: 0px;\">2- Afrontamiento frente a la Re-estructuración de Roles.</p><p style=\"margin: 0px;\">3- Mejoramiento de la comunicación intrafamiliar.</p><p style=\"margin: 0px;\">4- Habilidades para favorecer la expresión y canalización emocional.</p><p style=\"margin: 0px;\">5- Trabajo en seguridad y autoprotección.</p><p style=\"margin: 0px;\">6- Atención a las violencias de género en la familia.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['734px', '34px', '347px', '200px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14Copy2',
                            text: '<p style=\"margin: 0px;\">​7- Atención a casos de reclutamiento Ilícito en el momento de estabilización.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">8- Construcción de nuevas narrativas en torno al significado de familia en el marco del reclutamiento ilícito.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1081px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "atencion-terapeutica2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '14px', '287px', '234px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14Copy5',
                            text: '<p style=\"margin: 0px;\">​- Acciones dirigidas al manejo de respuestas significativamente mayores por los hechos de violencia en circunstancias de crisis.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Atención en aquellos casos donde la rehabilitación total del daño psicosocial es un imposible pero puede contribuirse en su mitigación y en el fortalecimiento de recursos familiares para ello.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['358px', '0px', '387px', '234px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14Copy4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 215, 63);\">Orientaciones Metodológicas</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 215, 63);\">​</span></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​​​1- Protección y cuidado intrafamiliar.&nbsp;</p><p style=\"margin: 0px;\">2- Afrontamiento del miedo.</p><p style=\"margin: 0px;\">3- Afrontamiento de la culpa.</p><p style=\"margin: 0px;\">4- Atención en procesos de duelo.</p><p style=\"margin: 0px;\">5- Trámite de dificultades en el comportamiento.</p><p style=\"margin: 0px;\">6- Atención a los efectos transgeneracionales del conflicto armado.</p><p style=\"margin: 0px;\">7- Atención a casos de violencia sexual y con ocasión del conflicto armado.</p><p style=\"margin: 0px;\">8- Atención en casos de violencia sexual con ocasión del conflicto armado en Niños, Niñas y Adolescentes.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['777px', '34px', '347px', '200px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text14Copy3',
                            text: '<p style=\"margin: 0px;\">​9- Resignificación de la relación con la persona desaparecida forzadamente.&nbsp;</p><p style=\"margin: 0px;\">10- Transformaciones de la cotidianidad a partir de la desaparición forzada.&nbsp;</p><p style=\"margin: 0px;\">11- Reconstrucción de sentidos a partir de la experiencia dedesaparición forzada. Mod. Familiar.</p><p style=\"margin: 0px;\">12- Manejo del duelo y la pérdida en familias con historias de reclutamiento Ilícito.</p><p style=\"margin: 0px;\">13- Atención familiar frente a la experiencia de tortura en víctimas de este delito.</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1124px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "atencion-situaciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Se relaciona con la posibilidad de aparición de nuevas violaciones a los DDHH e infracciones al DIH o con la reaparición de situaciones que a nivel colectivo no se han resuelto y generan otros eventos críticos.</p>',
                            id: 'Text17',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '287px', '234px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​+ Atención comunitaria de crisis actuales.</p><p style=\"margin: 0px;\">+ Apoyo en procesos de duelo.</p><p style=\"margin: 0px;\">+ Afrontamiento del miedo.</p><p style=\"margin: 0px;\">+ Cuidado colectivo.</p><p style=\"margin: 0px;\">+ Atención a casos de reclutamiento ilícito en el momento de estabilización.</p><p style=\"margin: 0px;\">​</p>',
                            id: 'Text17Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['386px', '10px', '368px', '234px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '754px', '244px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "fortalecimiento-colectivo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Se dirige a enfrentar los daños contra las opciones políticas y las condiciones identitarias de las personas.</p>',
                            id: 'Text17Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '4px', '287px', '234px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​+ Fortalecimiento de las organizaciones.</p><p style=\"margin: 0px;\">+ Transformación de conflictos.</p><p style=\"margin: 0px;\">+ Grupos de apoyo mutuo.</p><p style=\"margin: 0px;\">+ Fortalecimiento de redes.</p><p style=\"margin: 0px;\">+ Resignificación de la relación con la persona desaparecida.</p><p style=\"margin: 0px;\">+ Reconstrucción comunitaria de sentidos a partir de la experiencia de la desaparición forzada.</p><p style=\"margin: 0px;\">+ Fortalecimiento comunitario frente a la experiencia de reclutamiento ilícito.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p>',
                            id: 'Text17Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['386px', '0px', '730px', '234px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1116px', '238px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reconstruccion-memorias": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Se orientan hacia el reconocimiento o la elaboración de procesos que permiten a los colectivos mantener tanto el recuerdo de los hechos violentos como las acciones de afrontamiento que han sido definitivas para poder realizar&nbsp;procesos de reconstrucción del lazo social.</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text17Copy5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '287px', '234px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​+ Apoyo en acciones simbólicas o conmemoraciones.</p><p style=\"margin: 0px;\">+ Procesos de reconstrucción de memoria colectiva.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text17Copy4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['386px', '60px', '730px', '187px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1116px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reconocimiento-social": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Acciones que pretenden establecer un marco amplio de comprensión de la violencia del conflicto armado, se orientan hacia el daño que se manifiesta en la estigmatización de las víctimas y sus organizaciones.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text17Copy7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '0px', '287px', '234px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​+ Comprender la violencia sociopolítica y el conflicto armado.</p><p style=\"margin: 0px;\">+ Reconocer experiencias de afrontamiento del conflicto armado.</p><p style=\"margin: 0px;\">+ Promoción de los derechos de las víctimas.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text17Copy6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['386px', '35px', '730px', '187px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1116px', '234px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "camino": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'menu-camino',
                            rect: ['0px', '0px', '937px', '346px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 346px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/menu-camino.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'camino1',
                            display: 'none',
                            symbolName: 'camino1',
                            rect: ['572px', '24px', '326', '315', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']]
                        },
                        {
                            rect: ['572px', '24px', '326', '315', 'auto', 'auto'],
                            id: 'camino2',
                            symbolName: 'camino2',
                            type: 'rect'
                        },
                        {
                            rect: ['572px', '25px', '326', '346', 'auto', 'auto'],
                            id: 'camino3',
                            symbolName: 'camino3',
                            type: 'rect'
                        },
                        {
                            rect: ['572px', '26px', '326', '345', 'auto', 'auto'],
                            id: 'camino4',
                            symbolName: 'camino4',
                            type: 'rect'
                        },
                        {
                            rect: ['535px', '14px', '402', '319', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            symbolName: 'RECUERDAQUE',
                            id: 'recuerdaque',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6',
                            rect: ['149px', '40px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy',
                            rect: ['381px', '8px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy2',
                            rect: ['126px', '271px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy3',
                            rect: ['475px', '319px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy4',
                            rect: ['801px', '297px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manito6Copy5',
                            rect: ['1057px', '28px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            transform: [[], ['106'], [0, 0, 0], [1, 1, 1]],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['9px', '22px', '163px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['242px', '2px', '163px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['-5px', '251px', '163px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['309px', '291px', '189px', '55px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['635px', '282px', '189px', '55px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '937px', '371px']
                        }
                    }
                },
                timeline: {
                    duration: 3888,
                    autoPlay: false,
                    labels: {
                        "1": 623,
                        "2": 1261,
                        "3": 1899,
                        "4": 2537,
                        "5": 3290
                    },
                    data: [
                        [
                            "eid66",
                            "display",
                            1261,
                            0,
                            "easeOutBack",
                            "${camino2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            1776,
                            0,
                            "easeOutBack",
                            "${camino2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            1899,
                            0,
                            "easeOutBack",
                            "${camino3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            2414,
                            0,
                            "easeOutBack",
                            "${camino3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid927",
                            "display",
                            3626,
                            0,
                            "linear",
                            "${manito6Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid928",
                            "display",
                            3888,
                            0,
                            "linear",
                            "${manito6Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "display",
                            2152,
                            0,
                            "linear",
                            "${manito6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid920",
                            "display",
                            2414,
                            0,
                            "linear",
                            "${manito6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid923",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid924",
                            "display",
                            3052,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid854",
                            "display",
                            323,
                            0,
                            "linear",
                            "${manito6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid857",
                            "display",
                            492,
                            0,
                            "linear",
                            "${manito6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "clip",
                            0,
                            373,
                            "easeOutBack",
                            "${menu-camino}",
                            [0,0,346,0],
                            [0,937,346,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid61",
                            "display",
                            623,
                            0,
                            "easeOutBack",
                            "${camino1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            1138,
                            0,
                            "easeOutBack",
                            "${camino1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid79",
                            "filter.blur",
                            3290,
                            210,
                            "linear",
                            "${recuerdaque}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "display",
                            2537,
                            0,
                            "easeOutBack",
                            "${camino4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            3052,
                            0,
                            "easeOutBack",
                            "${camino4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            2537,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            3090,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            3290,
                            0,
                            "easeOutBack",
                            "${recuerdaque}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            1261,
                            253,
                            "easeOutBack",
                            "${camino2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "scaleY",
                            2537,
                            253,
                            "easeOutBack",
                            "${camino4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            623,
                            253,
                            "easeOutBack",
                            "${camino1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            1899,
                            253,
                            "easeOutBack",
                            "${camino3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid911",
                            "display",
                            876,
                            0,
                            "linear",
                            "${manito6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid912",
                            "display",
                            1138,
                            0,
                            "linear",
                            "${manito6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid915",
                            "display",
                            1514,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid916",
                            "display",
                            1776,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "principios": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['290px', '0px', '903px', '418px', 'auto', 'auto'],
                            id: 'menu-azul-principios',
                            transform: [[], [], [], ['0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu-azul-principios.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['364px', '33px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequeno',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '58px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '82px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '108px', '126px', '69px', 'auto', 'auto'],
                            id: 'marcador-principios-grande',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-grande.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '179px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-mediano',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '227px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '275px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['364px', '325px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['363px', '372px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['493px', '58px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['493px', '107px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['493px', '157px', '126px', '69px', 'auto', 'auto'],
                            id: 'marcador-principios-grandeCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-grande.svg', '0px', '0px']
                        },
                        {
                            rect: ['493px', '229px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['493px', '253px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['492px', '276px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['492px', '300px', '126px', '69px', 'auto', 'auto'],
                            id: 'marcador-principios-grandeCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-grande.svg', '0px', '0px']
                        },
                        {
                            rect: ['492px', '373px', '126px', '21px', 'auto', 'auto'],
                            id: 'marcador-principios-pequenoCopy7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-pequeno.svg', '0px', '0px']
                        },
                        {
                            rect: ['622px', '82px', '126px', '69px', 'auto', 'auto'],
                            id: 'marcador-principios-grandeCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-grande.svg', '0px', '0px']
                        },
                        {
                            rect: ['622px', '156px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['622px', '204px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['622px', '251px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy10',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            rect: ['622px', '300px', '126px', '45px', 'auto', 'auto'],
                            id: 'marcador-principios-medianoCopy11',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-principios-mediano.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Dignidad</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Respeto a la integridad y a la honra de las víctimas. Se deben tratar con respeto, informarla y hacerlas partícipes de la toma de decisiones.</p>',
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            id: 'principio1',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Buena Fe</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Se parte del principio de buena fe de las víctimas.</p><p style=\"margin: 0px;\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio3',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Igualdad</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">No se discriminará por género, raza, orientación sexual, condición social, ni otra, para aplicar lo contemplado en la Ley.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Garantía del debido proceso</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">Se garantizará un proceso justo y eficaz.​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio5',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Justicia Transicional</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Se entiende por justicia transicional los procesos y mecanismos judiciales para que los responsables de las violaciones, rindan cuentas de sus actos. Además, para que se satisfagan los derechos a la justicia, a la verdad y a la reparación integral, y se adopten las medidas para que los hechos no vuelvan a suceder.</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Medidas Transicionales</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Las medidas de atención, asistencia y reparación que adopte el Estado, buscan que las víctimas sobrelleven su sufrimiento, y en la medida de lo posible, se restablezcan los derechos vulnerados. Estas medidas serán de carácter transitorio.</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio7',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Condenas en Subsidiariedad</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Las condenas judiciales que le ordenan al Estado reparar a las víctimas, no deben presumirse como un reconocimiento de la culpabilidad del Estado o de sus agentes.</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio8',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Coherencia Externa</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 800; color: rgb(57, 124, 213);\">​</span></p><p style=\"margin: 0px;\">​La Ley busca articular los esfuerzos para garantizar los derechos a la verdad, la justicia y la reparación de las víctimas.</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio9',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 800; color: rgb(57, 124, 213);\">Enfoque Diferencial</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 800; color: rgb(57, 124, 213);\">​</span></p><p style=\"margin: 0px;\">​Se reconoce que hay poblaciones con características particulares en razón de su género, edad, orientación sexual, entre otras, que las hacen vulnerables a sufrir violaciones a los derechos humanos y al Derecho Internacional Humanitario.</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio10',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Participación Conjunta</span></font></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 800; color: rgb(57, 124, 213);\">​</span></p><p style=\"margin: 0px;\">​La aplicación de la Ley implica que el Estado implemente las medidas de atención, asistencia y reparación, que la sociedad civil sea solidaria y actúe dentro de unos parámetros de respeto y que las víctimas participen activamente.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio11',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Respeto Mutuo</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">Tanto las acciones de los funcionarios como las peticiones de las víctimas, deben basarse en el principio de respeto mutuo.​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio12',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Obligación de sancionar a los responsables</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font><font color=\"#397cd5\"><span style=\"font-weight: 800;\">​</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p><p style=\"margin:0px\">Se debe investigar y sancionar a los responsables.​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio13',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Progresividad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El Estado se compromete a iniciar el camino que permita el goce efectivo de los Derechos Humanos, iniciando por los esenciales e irlos acrecentando.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p><p style=\"margin:0px\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio14',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Gradualidad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El Estado establecerá las estrategias para el escalonamiento progresivo de las medidas de asistencia, atención y reparación.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\"></p><p style=\"margin:0px\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio15',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Sostenibilidad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">El Estado propenderá por la sostenibilidad financiera de la Ley.​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio16',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Prohibición de doble reparación y compensación</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">Nadie podrá obtener doble reparación por el mismo concepto.​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio17',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Complementariedad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">Todas las medidas de reparación individuales y colectivas, ya sean por vía judicial o administrativa, deben ser complementarias para que sean integrales.​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio18',
                            text: '<p style=\"margin: 0px; text-align: center;\"><font color=\"#397cd5\"><span style=\"font-weight: 800;\">Acción de repetición y subrogación</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​El Estado deberá ejercer estas acciones, contra el directamente responsable.​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio19',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Derecho a la Verdad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"></p><p style=\"margin:0px\">Las víctimas y la sociedad, tienen derecho a conocer la verdad.​</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio20',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Derecho a la Justicia</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\"></p><p style=\"margin:0px\"></p><p style=\"margin:0px\">Las víctimas tienen derecho a que se esclarezcan las violaciones a los derechos humanos.​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio21',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Derecho a la Reparación</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​Las víctimas tienen derecho a ser reparadas de una manera adecuada, diferenciada, efectiva y transformadora.</p><p style=\"margin:0px\"></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['818px', '119px', '357px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'principio22',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#397cd5\"><span style=\"font-weight: 800;\">Principio de Publicidad</span></font></p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​​El Estado deberá promover medidas efectivas de publicidad dirigidas a las víctimas, para brindarles información y orientación sobre los procesos que le son de interés.</p><p style=\"margin:0px\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['469px', '62px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['469px', '86px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['469px', '139px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['469px', '200px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['469px', '242px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy4',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['472px', '286px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy5',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['472px', '344px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy6',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['472px', '388px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy7',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '80px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy8',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '124px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy9',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '197px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy10',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '235px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy11',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '255px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy12',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '279px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy13',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '355px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy14',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['598px', '380px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy15',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['729px', '119px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy16',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['729px', '225px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy18',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['729px', '283px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy19',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['729px', '325px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy20',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['95'], [0, 0, 0], [1, 1, 1]],
                            rect: ['1321px', '123px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            id: 'manito3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['720px', '171px', '29px', '28px', 'auto', 'auto'],
                            id: 'manito2Copy17',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '35px', '126px', '18px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '60px', '126px', '18px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '84px', '126px', '18px', 'auto', 'auto'],
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '108px', '126px', '65px', 'auto', 'auto'],
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '178px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '228px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '277px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '325px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['363px', '372px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '56px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '107px', '126px', '45px', 'auto', 'auto'],
                            id: 'Rectangle3Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '156px', '126px', '67px', 'auto', 'auto'],
                            id: 'Rectangle3Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '228px', '126px', '19px', 'auto', 'auto'],
                            id: 'Rectangle3Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '254px', '126px', '19px', 'auto', 'auto'],
                            id: 'Rectangle3Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '278px', '126px', '19px', 'auto', 'auto'],
                            id: 'Rectangle3Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '301px', '126px', '65px', 'auto', 'auto'],
                            id: 'Rectangle3Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['491px', '372px', '126px', '20px', 'auto', 'auto'],
                            id: 'Rectangle3Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['623px', '83px', '126px', '69px', 'auto', 'auto'],
                            id: 'Rectangle3Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '154px', '120px', '47px', 'auto', 'auto'],
                            id: 'Rectangle3Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '203px', '120px', '47px', 'auto', 'auto'],
                            id: 'Rectangle3Copy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '250px', '120px', '47px', 'auto', 'auto'],
                            id: 'Rectangle3Copy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '299px', '120px', '47px', 'auto', 'auto'],
                            id: 'Rectangle3Copy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1193px', '418px']
                        }
                    }
                },
                timeline: {
                    duration: 15677,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 1245,
                        "3": 1937,
                        "4": 2629,
                        "5": 3321,
                        "6": 4013,
                        "7": 4705,
                        "8": 5397,
                        "9": 6089,
                        "10": 6781,
                        "11": 7473,
                        "12": 8165,
                        "13": 8857,
                        "14": 9549,
                        "15": 10241,
                        "16": 10933,
                        "17": 11625,
                        "18": 12317,
                        "19": 13009,
                        "29": 13701,
                        "21": 14393,
                        "22": 15085
                    },
                    data: [
                        [
                            "eid105",
                            "scaleX",
                            1245,
                            361,
                            "linear",
                            "${principio2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid951",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${manito2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid952",
                            "display",
                            4745,
                            0,
                            "linear",
                            "${manito2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            4705,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            5297,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "scaleX",
                            8165,
                            361,
                            "linear",
                            "${principio12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "display",
                            9549,
                            0,
                            "linear",
                            "${principio14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            10141,
                            0,
                            "easeInExpo",
                            "${principio14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "scaleX",
                            14393,
                            361,
                            "linear",
                            "${principio21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            9549,
                            361,
                            "linear",
                            "${principio14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid216",
                            "display",
                            9549,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "display",
                            10141,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid934",
                            "display",
                            750,
                            0,
                            "linear",
                            "${manito2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid935",
                            "display",
                            1245,
                            0,
                            "linear",
                            "${manito2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            15085,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            15677,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            6781,
                            361,
                            "linear",
                            "${principio10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "display",
                            13701,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            14293,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid969",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${manito2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid970",
                            "display",
                            7495,
                            0,
                            "linear",
                            "${manito2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            1953,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid195",
                            "display",
                            2545,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            500,
                            0,
                            "linear",
                            "${principio1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            1092,
                            0,
                            "easeInExpo",
                            "${principio1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid207",
                            "display",
                            6681,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1002",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${manito2Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1003",
                            "display",
                            13745,
                            0,
                            "linear",
                            "${manito2Copy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            6089,
                            361,
                            "linear",
                            "${principio9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "display",
                            4705,
                            0,
                            "linear",
                            "${principio7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            5297,
                            0,
                            "easeInExpo",
                            "${principio7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid987",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${manito2Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid988",
                            "display",
                            10995,
                            0,
                            "linear",
                            "${manito2Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            7473,
                            0,
                            "linear",
                            "${principio11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            8065,
                            0,
                            "easeInExpo",
                            "${principio11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "scaleX",
                            13701,
                            361,
                            "linear",
                            "${principio20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "display",
                            6781,
                            0,
                            "linear",
                            "${principio10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            7373,
                            0,
                            "easeInExpo",
                            "${principio10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid956",
                            "display",
                            4902,
                            0,
                            "linear",
                            "${manito2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid957",
                            "display",
                            5397,
                            0,
                            "linear",
                            "${manito2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            4013,
                            0,
                            "linear",
                            "${principio6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            4605,
                            0,
                            "easeInExpo",
                            "${principio6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            1245,
                            0,
                            "linear",
                            "${principio2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            1837,
                            0,
                            "easeInExpo",
                            "${principio2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid965",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${manito2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid966",
                            "display",
                            6745,
                            0,
                            "linear",
                            "${manito2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid962",
                            "display",
                            5594,
                            0,
                            "linear",
                            "${manito2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid963",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${manito2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "scaleX",
                            3321,
                            361,
                            "linear",
                            "${principio5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "scaleY",
                            15085,
                            361,
                            "linear",
                            "${principio22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "scaleX",
                            11625,
                            361,
                            "linear",
                            "${principio17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1008",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${manito2Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1009",
                            "display",
                            14995,
                            0,
                            "linear",
                            "${manito2Copy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            15085,
                            0,
                            "linear",
                            "${principio22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            15677,
                            0,
                            "easeInExpo",
                            "${principio22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid990",
                            "display",
                            11130,
                            0,
                            "linear",
                            "${manito2Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid991",
                            "display",
                            11625,
                            0,
                            "linear",
                            "${manito2Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            5397,
                            361,
                            "linear",
                            "${principio8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid984",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${manito2Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid985",
                            "display",
                            10245,
                            0,
                            "linear",
                            "${manito2Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            8857,
                            0,
                            "linear",
                            "${principio13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            9449,
                            0,
                            "easeInExpo",
                            "${principio13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            2629,
                            361,
                            "linear",
                            "${principio4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            10933,
                            361,
                            "linear",
                            "${principio16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            500,
                            361,
                            "linear",
                            "${principio1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "display",
                            8857,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid215",
                            "display",
                            9449,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid936",
                            "display",
                            1442,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid937",
                            "display",
                            1937,
                            0,
                            "linear",
                            "${manito2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid981",
                            "display",
                            9054,
                            0,
                            "linear",
                            "${manito2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid982",
                            "display",
                            9549,
                            0,
                            "linear",
                            "${manito2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "scaleY",
                            1937,
                            361,
                            "linear",
                            "${principio3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "scaleY",
                            14393,
                            361,
                            "linear",
                            "${principio21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            4705,
                            361,
                            "linear",
                            "${principio7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            5397,
                            361,
                            "linear",
                            "${principio8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "display",
                            12317,
                            0,
                            "linear",
                            "${principio18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            12909,
                            0,
                            "easeInExpo",
                            "${principio18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            3321,
                            0,
                            "linear",
                            "${marcador-principios-mediano}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            3913,
                            0,
                            "linear",
                            "${marcador-principios-mediano}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            7473,
                            361,
                            "linear",
                            "${principio11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid978",
                            "display",
                            8362,
                            0,
                            "linear",
                            "${manito2Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid979",
                            "display",
                            8857,
                            0,
                            "linear",
                            "${manito2Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            4705,
                            361,
                            "linear",
                            "${principio7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            12317,
                            361,
                            "linear",
                            "${principio18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid212",
                            "display",
                            8165,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid213",
                            "display",
                            8757,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            10933,
                            361,
                            "linear",
                            "${principio16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            2629,
                            361,
                            "linear",
                            "${principio4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "display",
                            13009,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "display",
                            13601,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            11625,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "display",
                            12217,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            4013,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            4605,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "scaleX",
                            13009,
                            361,
                            "linear",
                            "${principio19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "display",
                            13009,
                            0,
                            "linear",
                            "${principio19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            13601,
                            0,
                            "easeInExpo",
                            "${principio19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid972",
                            "display",
                            7670,
                            0,
                            "linear",
                            "${manito2Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid973",
                            "display",
                            8165,
                            0,
                            "linear",
                            "${manito2Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "scaleX",
                            10241,
                            361,
                            "linear",
                            "${principio15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleX",
                            1937,
                            361,
                            "linear",
                            "${principio3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${menu-azul-principios}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            13009,
                            361,
                            "linear",
                            "${principio19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "display",
                            2629,
                            0,
                            "linear",
                            "${marcador-principios-grande}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            3221,
                            0,
                            "linear",
                            "${marcador-principios-grande}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            7473,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            8065,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            14393,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            14985,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            1937,
                            0,
                            "linear",
                            "${principio3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            2529,
                            0,
                            "easeInExpo",
                            "${principio3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            11625,
                            361,
                            "linear",
                            "${principio17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "display",
                            10241,
                            0,
                            "linear",
                            "${principio15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            10833,
                            0,
                            "easeInExpo",
                            "${principio15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            3321,
                            361,
                            "linear",
                            "${principio5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "display",
                            3321,
                            0,
                            "linear",
                            "${principio5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            3913,
                            0,
                            "easeInExpo",
                            "${principio5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            14393,
                            0,
                            "linear",
                            "${principio21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            14985,
                            0,
                            "easeInExpo",
                            "${principio21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid994",
                            "display",
                            11822,
                            0,
                            "linear",
                            "${manito2Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid995",
                            "display",
                            12317,
                            0,
                            "linear",
                            "${manito2Copy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            500,
                            361,
                            "linear",
                            "${principio1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid204",
                            "display",
                            5397,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            5989,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            13701,
                            0,
                            "linear",
                            "${principio20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            14293,
                            0,
                            "easeInExpo",
                            "${principio20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid998",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${manito2Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid999",
                            "display",
                            12995,
                            0,
                            "linear",
                            "${manito2Copy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            6781,
                            361,
                            "linear",
                            "${principio10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            12317,
                            361,
                            "linear",
                            "${principio18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            8857,
                            361,
                            "linear",
                            "${principio13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid941",
                            "display",
                            2134,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid942",
                            "display",
                            2629,
                            0,
                            "linear",
                            "${manito2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            12317,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "display",
                            12909,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1011",
                            "display",
                            15337,
                            0,
                            "linear",
                            "${manito3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            11625,
                            0,
                            "linear",
                            "${principio17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            12217,
                            0,
                            "easeInExpo",
                            "${principio17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            500,
                            0,
                            "linear",
                            "${marcador-principios-pequeno}",
                            'none',
                            'block'
                        ],
                        [
                            "eid191",
                            "display",
                            1092,
                            0,
                            "linear",
                            "${marcador-principios-pequeno}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "scaleX",
                            9549,
                            361,
                            "linear",
                            "${principio14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid949",
                            "top",
                            3767,
                            0,
                            "linear",
                            "${manito2Copy4}",
                            '242px',
                            '242px'
                        ],
                        [
                            "eid947",
                            "display",
                            3596,
                            0,
                            "linear",
                            "${manito2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid948",
                            "display",
                            4091,
                            0,
                            "linear",
                            "${manito2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            7473,
                            361,
                            "linear",
                            "${principio11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${principio9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            6681,
                            0,
                            "easeInExpo",
                            "${principio9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            2629,
                            0,
                            "linear",
                            "${principio4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            3221,
                            0,
                            "easeInExpo",
                            "${principio4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            6089,
                            361,
                            "linear",
                            "${principio9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            1245,
                            361,
                            "linear",
                            "${principio2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "display",
                            8165,
                            0,
                            "linear",
                            "${principio12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            8757,
                            0,
                            "easeInExpo",
                            "${principio12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid944",
                            "display",
                            2826,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid945",
                            "display",
                            3321,
                            0,
                            "linear",
                            "${manito2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            10933,
                            0,
                            "linear",
                            "${principio16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            11525,
                            0,
                            "easeInExpo",
                            "${principio16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            10241,
                            361,
                            "linear",
                            "${principio15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            8165,
                            361,
                            "linear",
                            "${principio12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            4013,
                            361,
                            "linear",
                            "${principio6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid976",
                            "top",
                            7897,
                            0,
                            "linear",
                            "${manito2Copy10}",
                            '197px',
                            '197px'
                        ],
                        [
                            "eid178",
                            "scaleY",
                            13701,
                            361,
                            "linear",
                            "${principio20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "display",
                            5397,
                            0,
                            "linear",
                            "${principio8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            5989,
                            0,
                            "easeInExpo",
                            "${principio8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "scaleX",
                            8857,
                            361,
                            "linear",
                            "${principio13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "display",
                            6781,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            7373,
                            0,
                            "linear",
                            "${marcador-principios-medianoCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid220",
                            "display",
                            10933,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid221",
                            "display",
                            11525,
                            0,
                            "linear",
                            "${marcador-principios-grandeCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            4013,
                            361,
                            "linear",
                            "${principio6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleX",
                            15085,
                            361,
                            "linear",
                            "${principio22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "display",
                            10241,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "display",
                            10833,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            1245,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "display",
                            1837,
                            0,
                            "linear",
                            "${marcador-principios-pequenoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1005",
                            "display",
                            13898,
                            0,
                            "linear",
                            "${manito2Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1006",
                            "display",
                            14393,
                            0,
                            "linear",
                            "${manito2Copy19}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "menugris": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '993px', '415px', 'auto', 'auto'],
                            id: 'menu-gris',
                            type: 'image',
                            clip: 'rect(0px 993px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/menu-gris.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'restitucion',
                            rect: ['47px', '160px', '916', '221', 'auto', 'auto'],
                            id: 'restitucion'
                        },
                        {
                            id: 'indemnizacion',
                            symbolName: 'indemnizacion',
                            rect: ['51px', '161px', '915', '236', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'rehabilitacion',
                            symbolName: 'rehabilitacion',
                            rect: ['51px', '161px', '915', '236', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'satisfaccion',
                            symbolName: 'satisfaccion',
                            rect: ['51px', '160px', '915', '237', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'norepeticion',
                            symbolName: 'norepeticion',
                            rect: ['51px', '160px', '917', '237', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['36px', '152px', '157px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['204px', '152px', '193px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['407px', '152px', '193px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['598px', '152px', '193px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['786px', '152px', '193px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['136px', '6px', '702px', '87px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['306px', '177px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito3.svg', '0px', '0px']
                        },
                        {
                            rect: ['1067px', '234px', '46px', '44px', 'auto', 'auto'],
                            transform: [[], ['113']],
                            id: 'manito7',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '993px', '415px']
                        }
                    }
                },
                timeline: {
                    duration: 5042,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1630,
                        "3": 2510,
                        "4": 3390,
                        "5": 4270
                    },
                    data: [
                        [
                            "eid265",
                            "display",
                            2510,
                            0,
                            "linear",
                            "${rehabilitacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            3282,
                            0,
                            "linear",
                            "${rehabilitacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid270",
                            "opacity",
                            3390,
                            500,
                            "linear",
                            "${satisfaccion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid268",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${satisfaccion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid269",
                            "display",
                            4162,
                            0,
                            "linear",
                            "${satisfaccion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid258",
                            "display",
                            750,
                            0,
                            "linear",
                            "${restitucion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid261",
                            "display",
                            1522,
                            0,
                            "linear",
                            "${restitucion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid273",
                            "opacity",
                            4270,
                            500,
                            "linear",
                            "${norepeticion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid260",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${restitucion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1041",
                            "display",
                            4770,
                            0,
                            "easeOutElastic",
                            "${manito7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "opacity",
                            1630,
                            500,
                            "linear",
                            "${indemnizacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid877",
                            "display",
                            1522,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid267",
                            "opacity",
                            2510,
                            500,
                            "linear",
                            "${rehabilitacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid262",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${indemnizacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            2402,
                            0,
                            "linear",
                            "${indemnizacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid271",
                            "display",
                            4270,
                            0,
                            "linear",
                            "${norepeticion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            5042,
                            0,
                            "linear",
                            "${norepeticion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid257",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${menu-gris}",
                            [0,993,0,0],
                            [0,993,415,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "mapa_politica": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '58px', '1279px', '598px', 'auto', 'auto'],
                            id: 'mapapolitica',
                            transform: [[], [], [], ['0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mapapolitica.svg', '0px', '0px']
                        },
                        {
                            rect: ['57px', '176px', '196px', '46px', 'auto', 'auto'],
                            id: 'senalador-mapa-politica',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/senalador-mapa-politica.svg', '0px', '0px']
                        },
                        {
                            id: 'senalador-mapa-politicaCopy',
                            type: 'image',
                            rect: ['300px', '176px', '196px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/senalador-mapa-politica.svg', '0px', '0px']
                        },
                        {
                            id: 'senalador-mapa-politicaCopy2',
                            type: 'image',
                            rect: ['552px', '176px', '196px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/senalador-mapa-politica.svg', '0px', '0px']
                        },
                        {
                            id: 'senalador-mapa-politicaCopy3',
                            type: 'image',
                            rect: ['791px', '176px', '196px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/senalador-mapa-politica.svg', '0px', '0px']
                        },
                        {
                            id: 'senalador-mapa-politicaCopy4',
                            type: 'image',
                            rect: ['1025px', '176px', '196px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/senalador-mapa-politica.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'componente-verdad',
                            rect: ['29px', '222px', '1219', '423', 'auto', 'auto'],
                            id: 'componente-verdad'
                        },
                        {
                            id: 'componente-justicia',
                            symbolName: 'componente-justicia',
                            rect: ['28px', '222px', '1219', '415', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'componente-prevencion',
                            symbolName: 'componente-prevencion',
                            rect: ['30px', '222px', '1219', '415', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'componente-atencion',
                            symbolName: 'componente-atencion',
                            rect: ['29px', '226px', '1219', '415', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'componente_reparacion',
                            symbolName: 'componente_reparacion',
                            rect: ['30px', '226', '1219', '415', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['24px', '138px', '250px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['268px', '138px', '250px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['514px', '138px', '250px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['759px', '138px', '250px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1009px', '138px', '250px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1206px', '88px', '53px', '36px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1279px', '656px']
                        }
                    }
                },
                timeline: {
                    duration: 8234,
                    autoPlay: false,
                    labels: {
                        "1": 615,
                        "2": 1292,
                        "3": 1969,
                        "4": 2646,
                        "5": 3323
                    },
                    data: [
                        [
                            "eid805",
                            "display",
                            2646,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid804",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid763",
                            "display",
                            2646,
                            0,
                            "easeOutBack",
                            "${componente-atencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            3230,
                            0,
                            "easeOutBack",
                            "${componente-atencion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid769",
                            "left",
                            3323,
                            0,
                            "easeOutBack",
                            "${componente_reparacion}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid760",
                            "display",
                            1969,
                            0,
                            "easeOutBack",
                            "${componente-prevencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid761",
                            "display",
                            2553,
                            0,
                            "easeOutBack",
                            "${componente-prevencion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid759",
                            "opacity",
                            1292,
                            385,
                            "easeOutBack",
                            "${componente-justicia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid766",
                            "display",
                            3323,
                            0,
                            "easeOutBack",
                            "${componente_reparacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid767",
                            "display",
                            3907,
                            0,
                            "easeOutBack",
                            "${componente_reparacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid807",
                            "display",
                            3323,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid806",
                            "display",
                            3877,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid753",
                            "display",
                            615,
                            0,
                            "easeOutBack",
                            "${componente-verdad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid756",
                            "display",
                            1199,
                            0,
                            "easeOutBack",
                            "${componente-verdad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid752",
                            "scaleX",
                            0,
                            615,
                            "easeOutBack",
                            "${mapapolitica}",
                            '0',
                            '1'
                        ],
                        [
                            "eid762",
                            "opacity",
                            1969,
                            385,
                            "easeOutBack",
                            "${componente-prevencion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid768",
                            "opacity",
                            3323,
                            385,
                            "easeOutBack",
                            "${componente_reparacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid757",
                            "display",
                            1292,
                            0,
                            "easeOutBack",
                            "${componente-justicia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid758",
                            "display",
                            1876,
                            0,
                            "easeOutBack",
                            "${componente-justicia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid765",
                            "opacity",
                            2646,
                            385,
                            "easeOutBack",
                            "${componente-atencion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "opacity",
                            615,
                            385,
                            "easeOutBack",
                            "${componente-verdad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid798",
                            "display",
                            615,
                            0,
                            "linear",
                            "${senalador-mapa-politica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid799",
                            "display",
                            1169,
                            0,
                            "linear",
                            "${senalador-mapa-politica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid803",
                            "display",
                            1969,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid802",
                            "display",
                            2523,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid801",
                            "display",
                            1292,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid800",
                            "display",
                            1846,
                            0,
                            "linear",
                            "${senalador-mapa-politicaCopy}",
                            'block',
                            'none'
                        ],
                            [ "eid808", "trigger", 3323, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${componente_reparacion}', [0] ] ]
                    ]
                }
            },
            "menu_morado": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['64px', '0px', '855px', '82px', 'auto', 'auto'],
                            id: 'menu-morado',
                            transform: [[], [], [], ['1', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu-morado.svg', '0px', '0px']
                        },
                        {
                            rect: ['92px', '59px', '80px', '15px', 'auto', 'auto'],
                            id: 'marcado-menumorado',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            id: 'marcado-menumoradoCopy',
                            type: 'image',
                            rect: ['238px', '59px', '80px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            id: 'marcado-menumoradoCopy2',
                            type: 'image',
                            rect: ['380px', '59px', '80px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            id: 'marcado-menumoradoCopy3',
                            type: 'image',
                            rect: ['523px', '59px', '80px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            id: 'marcado-menumoradoCopy4',
                            type: 'image',
                            rect: ['666px', '59px', '80px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            id: 'marcado-menumoradoCopy5',
                            type: 'image',
                            rect: ['810px', '59px', '80px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcado-menu.morado.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['65px', '142px', '855px', '101px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'morado1',
                            text: '<p style=\"margin: 0px;\">​Se implementa de conformidad con los lineamientos expedidos por el &nbsp;Ministerio de Salud y Protección Social de acuerdo a las disposiciones que regulan el Sistema General de Seguridad Social en Salud (SGSSS).</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['65px', '142px', '855px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'morado2',
                            text: '<p style=\"margin: 0px;\">​Su formulación se ha basado en el <span style=\"font-weight: 800;\">daño a la salud física, mental y psicosocial</span> que el conflicto armado en Colombia ha generado en las víctimas, sus familias, comunidades y colectivos étnicos. Para ello, ha retomado la sentencia que al respecto ha sido formulada por el Consejo de Estado al considerar el daño a la salud como una categoría autónoma que permite determinar “la afectación corporal o psicofísica... relativa a los aspectos o componentes funcionales, biológicos y psíquicos del ser humano”. Consejo de Estado (2014) Documento final aprobado mediante Acta del 28 de agosto de 2014 referentes para la reparación de perjuicios inmateriales. Pág. 12.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['65px', '142px', '855px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'morado3',
                            text: '<p style=\"margin: 0px;\">​Brinda atención integral en salud y atención psicosocial a las víctimas que se encuentran incluidas en el <span style=\"font-weight: 900;\">Registro Único de Víctimas (RUV)</span>, y a las víctimas reconocidas o protegidas en <span style=\"font-weight: 800;\">decisiones administrativas o en medidas cautelares, sentencias</span> u cualquier otra decisión judicial de carácter nacional e internacional.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['65px', '142px', '855px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'morado4',
                            text: '<p style=\"margin: 0px;\">​Sus disposiciones son de <span style=\"font-weight: 800;\">obligatorio cumplimiento</span> y deberán ser aplicadas por parte de las Entidades Territoriales, las Entidades Administradoras de Planes de Beneficios de Salud – EAPB y por las Instituciones Prestadoras de Servicios de Salud – IPS.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['73px', '113px', '855px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'morado5',
                            text: '<p style=\"margin: 0px;\">​Se implementa con absoluto respeto por los derechos fundamentales de las víctimas y sus familiares de conformidad con la Constitución Política, los tratados internacionales en materia de Derechos Humanos y por los principios de nidos en la Ley 1448 de 2011 y los Decretos con fuerza de Ley 4634 y 4635 de 2011, en particular los que se relacionan a continuación, en los siguientes términos:</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-1px', '205px', '242px', '25px', 'auto', 'auto'],
                            id: 'marcador-submenu-verde',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenu-verde.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-submenu-verdeCopy',
                            type: 'image',
                            rect: ['248px', '205px', '242px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenu-verde.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-submenu-verdeCopy2',
                            type: 'image',
                            rect: ['504px', '205px', '242px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenu-verde.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-submenu-verdeCopy3',
                            type: 'image',
                            rect: ['763px', '205px', '242px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenu-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '206px', '997px', '23px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.01']],
                            id: 'submenu-verde',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/submenu-verde.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['66px', '254px', '845px', '101px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(52,98,1,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'subverde1',
                            text: '<p style=\"margin: 0px;\">​La atención brindada en el marco del PAPSIVI por las autoridades y las entidades relacionadas, deberá estar enmarcada en el respeto de la dignidad humana de las víctimas, garantizando en todo caso su autonomía individual para el ejercicio pleno de sus derechos y deberes.</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['66px', '254px', '845px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(52,98,1,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'subverde2',
                            text: '<p style=\"margin: 0px;\">​El Ministerio de Salud y Protección Social podrá apoyarse en las entidades que hacen parte del Sistema Nacional de Atención y Reparación Integral a Víctimas (SNARIV) y otras autoridades estatales del nivel nacional cuando así lo requiera. Estas deberán brindar el apoyo, colaboración e información solicitados de manera oportuna e idónea. De igual modo, el apoyo de las autoridades territoriales se realizará en el marco de los propósitos de la Ley 1448 de 2011, de conformidad con sus competencias y en el marco de autonomía territorial.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['66px', '254px', '845px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(52,98,1,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'subverde3',
                            text: '<p style=\"margin: 0px;\">​La ejecución del PAPSIVI se desarrollará en el territorio nacional de manera paulatina, creciente, contínua y sostenible atendiendo, en todo caso, la disponibilidad de los recursos presupuestales.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['66px', '254px', '845px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(52,98,1,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'subverde4',
                            text: '<p style=\"margin: 0px;\">​La ejecución del PAPSIVI &nbsp;deberá realizarse de tal manera que se asegure la sostenibilidad social con el fin de darle, en conjunto, continuidad y progresividad, a efectos de garantizar su efectivo cumplimiento.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['392px', '113px', '536px', '101px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'morado5Copy',
                            text: '<p style=\"margin: 0px;\">​Consta de dos grandes <span style=\"font-weight: 800;\">componentes:</span></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['66px', '171px', '190px', '136px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']],
                            id: 'menu-punteado',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/menu-punteado.svg', '0px', '0px']
                        },
                        {
                            rect: ['272px', '179px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['-90'], [], ['1.22', '1.22']],
                            id: 'senalador-flecha-arriba',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/senalador-flecha-arriba.svg', '0px', '0px']
                        },
                        {
                            rect: ['272px', '257px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['-90'], [], ['1.22', '1.22']],
                            id: 'senalador-flecha-arribaCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/senalador-flecha-arriba.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['330px', '172px', '572px', '130px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'atancionpsico',
                            text: '<p style=\"margin: 0px;\">​Cuyo objetivo consiste en favorecer la recuperación o mitigación de los daños psicosociales y el sufrimiento emocional generado a las víctimas, sus familias y comunidades, como consecuencia de las graves violaciones a los Derechos Humanos y las infracciones al Derecho Internacional Humanitario. Comprende las modalidades individual, familiar, comunitaria y colectiva étnica.</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            id: 'atencionintegral',
                            symbolName: 'atencionintegral',
                            rect: ['311px', '172px', '617', '182', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['296px', '66px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['447px', '60px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['594px', '66px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy7',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['731px', '66px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy8',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['881px', '60px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy9',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['465px', '208px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['721px', '214px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['964px', '214px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['227px', '270px', '46px', '44px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['1022px', '126px', '46px', '44px', 'auto', 'auto'],
                            transform: [[], ['113']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito4.svg', '0px', '0px']
                        },
                        {
                            rect: ['65px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['203px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['350px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['490px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['630px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['777px', '52px', '139px', '27px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['0px', '205px', '242px', '27px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['249px', '205px', '242px', '27px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['502px', '205px', '242px', '27px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle8Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['760px', '205px', '242px', '27px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle8Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['72px', '172px', '184px', '43px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['69px', '239px', '184px', '63px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle9Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['311px', '283px', '617px', '63px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1528px', '355px']
                        }
                    }
                },
                timeline: {
                    duration: 6143,
                    autoPlay: false,
                    labels: {
                        "1": 384,
                        "2": 907,
                        "3": 1430,
                        "4": 1953,
                        "5": 2476,
                        "50": 2750,
                        "51": 3290,
                        "52": 3815,
                        "53": 4340,
                        "6": 4888,
                        "61": 5250,
                        "62": 5750
                    },
                    data: [
                        [
                            "eid394",
                            "display",
                            4340,
                            0,
                            "linear",
                            "${subverde4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid395",
                            "display",
                            4727,
                            0,
                            "linear",
                            "${subverde4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid407",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${senalador-flecha-arriba}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            5581,
                            0,
                            "linear",
                            "${senalador-flecha-arriba}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1137",
                            "display",
                            5766,
                            0,
                            "linear",
                            "${manito6Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1138",
                            "display",
                            6104,
                            0,
                            "linear",
                            "${manito6Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid386",
                            "scaleX",
                            2476,
                            274,
                            "linear",
                            "${submenu-verde}",
                            '0',
                            '1.01'
                        ],
                        [
                            "eid379",
                            "display",
                            1430,
                            0,
                            "linear",
                            "${morado3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid378",
                            "display",
                            1861,
                            0,
                            "linear",
                            "${morado3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid384",
                            "display",
                            2476,
                            0,
                            "linear",
                            "${submenu-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid397",
                            "display",
                            4782,
                            0,
                            "linear",
                            "${submenu-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1121",
                            "display",
                            2814,
                            0,
                            "linear",
                            "${manito6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1122",
                            "display",
                            3152,
                            0,
                            "linear",
                            "${manito6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid443",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid392",
                            "display",
                            3815,
                            0,
                            "linear",
                            "${subverde3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "display",
                            4202,
                            0,
                            "linear",
                            "${subverde3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid413",
                            "display",
                            3290,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            3630,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid388",
                            "display",
                            2765,
                            0,
                            "linear",
                            "${subverde1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid389",
                            "display",
                            3152,
                            0,
                            "linear",
                            "${subverde1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid415",
                            "display",
                            3815,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            4155,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid402",
                            "scaleY",
                            4888,
                            362,
                            "linear",
                            "${menu-punteado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid442",
                            "display",
                            6104,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1125",
                            "display",
                            3290,
                            0,
                            "linear",
                            "${manito6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1126",
                            "display",
                            3628,
                            0,
                            "linear",
                            "${manito6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid399",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${morado5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid425",
                            "display",
                            1953,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid426",
                            "display",
                            2384,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid417",
                            "display",
                            4340,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            4680,
                            0,
                            "linear",
                            "${marcador-submenu-verdeCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${marcador-submenu-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            3090,
                            0,
                            "linear",
                            "${marcador-submenu-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid374",
                            "display",
                            384,
                            0,
                            "linear",
                            "${morado1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            815,
                            0,
                            "linear",
                            "${morado1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            1953,
                            0,
                            "linear",
                            "${morado4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            2384,
                            0,
                            "linear",
                            "${morado4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1156",
                            "display",
                            4340,
                            0,
                            "linear",
                            "${manito6Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1157",
                            "display",
                            4678,
                            0,
                            "linear",
                            "${manito6Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid881",
                            "display",
                            523,
                            0,
                            "linear",
                            "${manito6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid884",
                            "display",
                            861,
                            0,
                            "linear",
                            "${manito6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid432",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid436",
                            "display",
                            4689,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid423",
                            "display",
                            1430,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid424",
                            "display",
                            1861,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid400",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${menu-punteado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1129",
                            "display",
                            3815,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1130",
                            "display",
                            4153,
                            0,
                            "linear",
                            "${manito6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid427",
                            "display",
                            2476,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid428",
                            "display",
                            4680,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid431",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid435",
                            "display",
                            4689,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${senalador-flecha-arribaCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid373",
                            "scaleY",
                            0,
                            384,
                            "linear",
                            "${menu-morado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid405",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${atencionintegral}",
                            'none',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            6143,
                            0,
                            "linear",
                            "${atencionintegral}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            907,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            1338,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid429",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid430",
                            "display",
                            6143,
                            0,
                            "linear",
                            "${marcado-menumoradoCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1153",
                            "display",
                            2046,
                            0,
                            "linear",
                            "${manito6Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1154",
                            "display",
                            2384,
                            0,
                            "linear",
                            "${manito6Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            2476,
                            0,
                            "linear",
                            "${morado5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "display",
                            4782,
                            0,
                            "linear",
                            "${morado5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1149",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${manito6Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1150",
                            "display",
                            1838,
                            0,
                            "linear",
                            "${manito6Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid439",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid441",
                            "display",
                            6104,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid377",
                            "display",
                            907,
                            0,
                            "linear",
                            "${morado2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            1338,
                            0,
                            "linear",
                            "${morado2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid403",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${atancionpsico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            5643,
                            0,
                            "linear",
                            "${atancionpsico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid438",
                            "display",
                            4689,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "display",
                            384,
                            0,
                            "linear",
                            "${marcado-menumorado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            815,
                            0,
                            "linear",
                            "${marcado-menumorado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "display",
                            3290,
                            0,
                            "linear",
                            "${subverde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid391",
                            "display",
                            3677,
                            0,
                            "linear",
                            "${subverde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1132",
                            "display",
                            5388,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1133",
                            "display",
                            5726,
                            0,
                            "linear",
                            "${manito6Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid433",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid437",
                            "display",
                            4689,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1145",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${manito6Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1146",
                            "display",
                            1338,
                            0,
                            "linear",
                            "${manito6Copy6}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "mapa_fundamentos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0']],
                            id: 'fondo-fig1',
                            type: 'image',
                            rect: ['1px', '0px', '1267px', '585px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondo-fig1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['139px', '381px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            rect: ['309px', '380px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            rect: ['479px', '380px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            rect: ['650px', '381px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            rect: ['820px', '382px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            rect: ['986px', '381px', '124px', '42px', 'auto', 'auto'],
                            id: 'marcador-fig1Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-fig1.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: ['106px', '455px', '193px', '40px', 'auto', 'auto'],
                            id: 'marcador-fi1-2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(241,255,85,0.56)']
                        },
                        {
                            rect: ['388px', '454px', '193px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'marcador-fi1-2Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(241,255,85,0.56)']
                        },
                        {
                            rect: ['671px', '454px', '193px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'marcador-fi1-2Copy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(241,255,85,0.56)']
                        },
                        {
                            rect: ['957px', '455px', '193px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'marcador-fi1-2Copy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(241,255,85,0.56)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['120px', '110px', '1068px', '430px', 'auto', 'auto'],
                            id: 'texto1-fig12',
                            fill: ['rgba(0,0,0,0)', 'images/texto1-fig1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['139px', '250px', '358px', '91px', 'auto', 'auto'],
                            display: 'none',
                            id: 'texto-2-fig1',
                            clip: 'rect(0px 358px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/texto-2-fig1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['751px', '268px', '358px', '64px', 'auto', 'auto'],
                            display: 'none',
                            id: 'tex-3-fig1',
                            clip: 'rect(0px 358px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/tex-3-fig1.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'fondo-amarilla-fig1',
                            display: 'none',
                            rect: ['112px', '17px', '1033px', '350px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondo-amarilla-fig1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'amarillo1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque de Derechos Humanos.</span> </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Significa la comprensión de las víctimas como sujetos de derechos tanto individuales como colectivos, que requieren la superación de los hechos de victimización al tener acceso a la verdad, la justicia y la reparación integral.</p>',
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            display: 'none',
                            rect: ['192px', '110px', '833px', '168px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque Curso de Vida.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Es el conjunto de trayectorias que tiene un individuo y su familia de acuerdo a los roles que desarrolla a lo largo de la vida, las cuales están marcadas por transiciones y significativos. Lo anterior, está influenciado por las condiciones biológicas, psicológicas, sociales en los entornos que se desenvuelve el individuo a lo largo de la vida, por las expectativas sociales referentes a la edad, por condiciones históricas y culturales específicas,así como por acontecimientos individuales únicos.</p><p style=\"margin:0px\">​</p>',
                            rect: ['192px', '110px', '833px', '168px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque Psicosocial.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Privilegia siempre las acciones tendientes a contribuir en la reparación de la dignidad humana, generar condiciones para el ejercicio autónomo de las personas y las comunidades en la exigencia de los derechos, y devolver a estas la independencia y el control sobre sus vidas y sus historias, entre otras cosas porque reconoce y valida las potencialidades y capacidades con las que cuentan las personas y las comunidades para recuperarse y materializar sus proyectos de vida.</p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​</p>',
                            rect: ['192px', '110px', '833px', '168px', 'auto', 'auto']
                        },
                        {
                            rect: ['192px', '110px', '917', '168', 'auto', 'auto'],
                            id: 'amarillo4--1',
                            symbolName: 'amarillo4--1',
                            type: 'rect'
                        },
                        {
                            rect: ['139px', '41px', '970', '308', 'auto', 'auto'],
                            id: 'amarillo4--2',
                            symbolName: 'amarillo4--2',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'amarillo5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 900; color: rgb(80, 6, 142);\">Enfoque Transformador.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Comprende que, en los procesos de reparación, los daños y afectaciones sufridas por las víctimas, debe ser restituida de forma particular, no solo como mecanismo que les permita enfrentar las secuelas de lo vivido, sino como estrategia transformadora de las relaciones de poder y desigualdad.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>',
                            rect: ['192px', '110px', '833px', '168px', 'auto', 'auto']
                        },
                        {
                            rect: ['192px', '90px', '921', '210', 'auto', 'auto'],
                            id: 'amarillo6',
                            symbolName: 'amarillo6',
                            type: 'rect'
                        },
                        {
                            rect: ['186px', '85px', '864', '123', 'auto', 'auto'],
                            id: 'ontologico',
                            symbolName: 'ontologico',
                            type: 'rect'
                        },
                        {
                            rect: ['186px', '85px', '864', '123', 'auto', 'auto'],
                            id: 'epistemologico',
                            symbolName: 'epistemologico',
                            type: 'rect'
                        },
                        {
                            rect: ['186px', '85px', '864', '123', 'auto', 'auto'],
                            id: 'etico-politico',
                            symbolName: 'etico-politico',
                            type: 'rect'
                        },
                        {
                            rect: ['186px', '44px', '909', '132', 'auto', 'auto'],
                            id: 'metologico',
                            symbolName: 'metologico',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            rect: ['588px', '27px', '94px', '59px', 'auto', 'auto'],
                            id: 'Rectangle11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['183px', '161px', '282px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['791px', '160px', '282px', '59px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['139px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['302px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['478px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['646px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['815px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['985px', '380px', '131px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['106px', '449px', '196px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['390px', '449px', '196px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['672px', '449px', '196px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['953px', '452px', '196px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle11Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.05)']
                        },
                        {
                            type: 'rect',
                            rect: ['1051px', '153px', '57px', '77px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['1051px', '153px', '57px', '77px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle12Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['1228px', '9px', '39px', '45px', 'auto', 'auto'],
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1104px', '23px', '31px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1582px', '585px']
                        }
                    }
                },
                timeline: {
                    duration: 10364,
                    autoPlay: false,
                    labels: {
                        "1": 984,
                        "2": 1907,
                        "3": 2660,
                        "0": 3075,
                        "4": 3229,
                        "5": 4351,
                        "6": 4829,
                        "7": 5428,
                        "8": 6089,
                        "9": 6719,
                        "10": 7380,
                        "11": 8011,
                        "12": 8610,
                        "13": 9271,
                        "14": 9886
                    },
                    data: [
                        [
                            "eid455",
                            "clip",
                            1907,
                            476,
                            "linear",
                            "${texto-2-fig1}",
                            [0,358,0,0],
                            [0,358,91,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid449",
                            "scaleX",
                            0,
                            750,
                            "easeOutBack",
                            "${fondo-fig1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid453",
                            "display",
                            1907,
                            0,
                            "linear",
                            "${texto-2-fig1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1083",
                            "top",
                            8810,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy}",
                            '454px',
                            '454px'
                        ],
                        [
                            "eid1085",
                            "top",
                            10208,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy3}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid502",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${marcador-fig1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "display",
                            4197,
                            0,
                            "linear",
                            "${marcador-fig1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid468",
                            "scaleX",
                            4351,
                            250,
                            "linear",
                            "${amarillo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid527",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid489",
                            "scaleX",
                            8011,
                            250,
                            "linear",
                            "${ontologico}",
                            '0',
                            '1'
                        ],
                        [
                            "eid524",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "display",
                            6567,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid492",
                            "scaleX",
                            8610,
                            250,
                            "linear",
                            "${epistemologico}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid461",
                            "scaleX",
                            3229,
                            521,
                            "linear",
                            "${fondo-amarilla-fig1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1108",
                            "display",
                            984,
                            0,
                            "linear",
                            "${texto1-fig12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid493",
                            "display",
                            8610,
                            0,
                            "linear",
                            "${epistemologico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid494",
                            "display",
                            9088,
                            0,
                            "linear",
                            "${epistemologico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid537",
                            "display",
                            984,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid514",
                            "display",
                            8011,
                            0,
                            "linear",
                            "${marcador-fi1-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            8441,
                            0,
                            "linear",
                            "${marcador-fi1-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid495",
                            "scaleX",
                            9271,
                            250,
                            "linear",
                            "${etico-politico}",
                            '0',
                            '1'
                        ],
                        [
                            "eid532",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "scaleX",
                            4829,
                            250,
                            "linear",
                            "${amarillo3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "display",
                            6719,
                            0,
                            "linear",
                            "${amarillo5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid485",
                            "display",
                            7197,
                            0,
                            "linear",
                            "${amarillo5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid522",
                            "display",
                            5428,
                            0,
                            "linear",
                            "${Rectangle12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            5904,
                            0,
                            "linear",
                            "${Rectangle12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid464",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${amarillo1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid467",
                            "display",
                            4228,
                            0,
                            "linear",
                            "${amarillo1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${tex-3-fig1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid530",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid490",
                            "display",
                            8011,
                            0,
                            "linear",
                            "${ontologico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid491",
                            "display",
                            8489,
                            0,
                            "linear",
                            "${ontologico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid516",
                            "display",
                            8610,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            9040,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1071",
                            "top",
                            4670,
                            0,
                            "linear",
                            "${marcador-fig1Copy}",
                            '380px',
                            '380px'
                        ],
                        [
                            "eid458",
                            "clip",
                            2660,
                            340,
                            "linear",
                            "${tex-3-fig1}",
                            [0,358,0,0],
                            [0,358,64,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid526",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1082",
                            "top",
                            8335,
                            0,
                            "linear",
                            "${marcador-fi1-2}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid498",
                            "scaleX",
                            9886,
                            250,
                            "linear",
                            "${metologico}",
                            '0',
                            '1'
                        ],
                        [
                            "eid486",
                            "scaleX",
                            7380,
                            250,
                            "linear",
                            "${amarillo6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid510",
                            "display",
                            6719,
                            0,
                            "linear",
                            "${marcador-fig1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            7166,
                            0,
                            "linear",
                            "${marcador-fig1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid480",
                            "scaleX",
                            6089,
                            250,
                            "linear",
                            "${amarillo4--2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid508",
                            "display",
                            5428,
                            0,
                            "linear",
                            "${marcador-fig1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            6567,
                            0,
                            "linear",
                            "${marcador-fig1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid506",
                            "display",
                            4829,
                            0,
                            "linear",
                            "${marcador-fig1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid507",
                            "display",
                            5276,
                            0,
                            "linear",
                            "${marcador-fig1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid481",
                            "display",
                            6089,
                            0,
                            "linear",
                            "${amarillo4--2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid482",
                            "display",
                            6567,
                            0,
                            "linear",
                            "${amarillo4--2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            7380,
                            0,
                            "linear",
                            "${amarillo6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "display",
                            7858,
                            0,
                            "linear",
                            "${amarillo6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1120",
                            "top",
                            3016,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid504",
                            "display",
                            4351,
                            0,
                            "linear",
                            "${marcador-fig1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid505",
                            "display",
                            4798,
                            0,
                            "linear",
                            "${marcador-fig1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid472",
                            "display",
                            4829,
                            0,
                            "linear",
                            "${amarillo3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid473",
                            "display",
                            5307,
                            0,
                            "linear",
                            "${amarillo3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid520",
                            "display",
                            9886,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid521",
                            "display",
                            10316,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid535",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1119",
                            "top",
                            3016,
                            0,
                            "linear",
                            "${Rectangle11Copy2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid1100",
                            "left",
                            1654,
                            0,
                            "linear",
                            "${fondo-fig1}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid466",
                            "scaleX",
                            3750,
                            250,
                            "linear",
                            "${amarillo1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "display",
                            9886,
                            0,
                            "linear",
                            "${metologico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid500",
                            "display",
                            10364,
                            0,
                            "linear",
                            "${metologico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid477",
                            "scaleX",
                            5428,
                            250,
                            "linear",
                            "${amarillo4--1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid459",
                            "display",
                            3229,
                            0,
                            "linear",
                            "${fondo-amarilla-fig1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid512",
                            "display",
                            7380,
                            0,
                            "linear",
                            "${marcador-fig1Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            7827,
                            0,
                            "linear",
                            "${marcador-fig1Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1084",
                            "top",
                            9527,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy2}",
                            '454px',
                            '454px'
                        ],
                        [
                            "eid469",
                            "display",
                            4351,
                            0,
                            "linear",
                            "${amarillo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid470",
                            "display",
                            4829,
                            0,
                            "linear",
                            "${amarillo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid478",
                            "display",
                            5428,
                            0,
                            "linear",
                            "${amarillo4--1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid479",
                            "display",
                            5906,
                            0,
                            "linear",
                            "${amarillo4--1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid885",
                            "display",
                            3859,
                            0,
                            "linear",
                            "${Rectangle13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid496",
                            "display",
                            9271,
                            0,
                            "linear",
                            "${etico-politico}",
                            'none',
                            'block'
                        ],
                        [
                            "eid497",
                            "display",
                            9749,
                            0,
                            "linear",
                            "${etico-politico}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1074",
                            "top",
                            5096,
                            0,
                            "linear",
                            "${marcador-fig1Copy2}",
                            '380px',
                            '380px'
                        ],
                        [
                            "eid518",
                            "display",
                            9271,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            9701,
                            0,
                            "linear",
                            "${marcador-fi1-2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid483",
                            "scaleX",
                            6719,
                            250,
                            "linear",
                            "${amarillo5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "scaleY",
                            3229,
                            521,
                            "linear",
                            "${fondo-amarilla-fig1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid536",
                            "display",
                            1907,
                            0,
                            "linear",
                            "${Rectangle11Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            2660,
                            0,
                            "linear",
                            "${Rectangle11Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1070",
                            "top",
                            4111,
                            0,
                            "linear",
                            "${marcador-fig1}",
                            '381px',
                            '381px'
                        ]
                    ]
                }
            },
            "com_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '36px', '842px', '281px', 'auto', 'auto'],
                            type: 'image',
                            id: 'titulo-componente-atencion',
                            display: 'none',
                            clip: 'rect(0px 842px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/titulo-componente-atencion.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'parte1',
                            rect: ['61px', '96px', '805', '322', 'auto', 'auto'],
                            id: 'parte1'
                        },
                        {
                            rect: ['76px', '100px', '822px', '308px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(19,19,19,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'parte2',
                            text: '<p style=\"margin: 0px;\">​En la implementación de las acciones de atención integral en salud a las personas víctimas del conflicto armado concurrirán diferentes actores (Direcciones Territoriales de Salud -DTS, Entidades Administradoras del Plan de Beneficios –EAPB, Instituciones Prestadoras de Servicios de Salud –IPS, entre otros), quienes en forma coordinada brindarán la atención teniendo en cuenta el daño causado por el conflicto armado en las víctimas, de manera preferente y diferenciada, haciendo énfasis en el efecto reparador que deben tener todas las atenciones en salud como se especifica en el Papsivi.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La atención integral en salud de las víctimas del conflicto armado comprende:\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 800;\">i) La asistencia en salud y,\n</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 800;\">​ii) La rehabilitación en salud mental y física.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Con el objetivo de implementar un proceso de atención en salud integral desde un enfoque psicosocial y que garantice el desarrollo de mecanismos para mitigar los daños ocasionados por la violación de sus derechos y transforme sus condiciones de salud, se desarrolló el Protocolo de Atención Integral en Salud con enfoque psicosocial a las víctimas del conflicto armado, de acuerdo a lo establecido en el Artículo 88 del Decreto 4800 de 2011.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'parte3',
                            symbolName: 'parte3',
                            rect: ['76px', '100px', '822', '308', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'tenga',
                            rect: ['61', '0', '888', '405', 'auto', 'auto'],
                            id: 'tenga'
                        },
                        {
                            rect: ['530px', '379px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['2px', '124px', '38px', '47px', 'auto', 'auto'],
                            id: 'activado1-verde',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/activado1-verde.svg', '0px', '0px']
                        },
                        {
                            id: 'activado2-verde',
                            type: 'image',
                            rect: ['2px', '183px', '38px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado2-verde.svg', '0px', '0px']
                        },
                        {
                            id: 'activado3-verde',
                            type: 'image',
                            rect: ['1px', '238px', '38px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado3-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '130px', '37px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['0px', '180px', '37px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle14Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['0px', '240px', '37px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle14Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['320px', '379px', '224px', '29px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            display: 'none',
                            rect: ['61px', '96px', '228px', '207px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '949px', '418px']
                        }
                    }
                },
                timeline: {
                    duration: 2227,
                    autoPlay: false,
                    labels: {
                        "1": 378,
                        "2": 1030,
                        "3": 1682
                    },
                    data: [
                        [
                            "eid548",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo-componente-atencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid564",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${tenga}",
                            'none',
                            'none'
                        ],
                        [
                            "eid558",
                            "opacity",
                            1030,
                            372,
                            "linear",
                            "${parte2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid566",
                            "display",
                            1885,
                            0,
                            "easeOutElastic",
                            "${Rectangle15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid561",
                            "opacity",
                            1682,
                            372,
                            "linear",
                            "${parte3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid810",
                            "display",
                            500,
                            0,
                            "linear",
                            "${activado1-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid811",
                            "display",
                            923,
                            0,
                            "linear",
                            "${activado1-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "opacity",
                            378,
                            372,
                            "linear",
                            "${parte1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid813",
                            "display",
                            1152,
                            0,
                            "linear",
                            "${activado2-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid812",
                            "display",
                            1575,
                            0,
                            "linear",
                            "${activado2-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid815",
                            "display",
                            1673,
                            0,
                            "linear",
                            "${activado3-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid814",
                            "display",
                            2227,
                            0,
                            "linear",
                            "${activado3-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1173",
                            "display",
                            1812,
                            0,
                            "linear",
                            "${manito3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid556",
                            "display",
                            1030,
                            0,
                            "linear",
                            "${parte2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid557",
                            "display",
                            1575,
                            0,
                            "linear",
                            "${parte2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid552",
                            "display",
                            378,
                            0,
                            "linear",
                            "${parte1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid555",
                            "display",
                            923,
                            0,
                            "linear",
                            "${parte1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "clip",
                            0,
                            378,
                            "linear",
                            "${titulo-componente-atencion}",
                            [0,842,0,0],
                            [0,842,281,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid559",
                            "display",
                            1682,
                            0,
                            "linear",
                            "${parte3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid560",
                            "display",
                            2227,
                            0,
                            "linear",
                            "${parte3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1171",
                            "display",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1172",
                            "display",
                            1030,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "tenga": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0']],
                            id: 'tenga-en-cuenta',
                            type: 'image',
                            rect: ['0px', '0px', '888px', '405px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tenga-en-cuenta.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['828px', '5px', '60px', '49px', 'auto', 'auto'],
                            id: 'Rectangle13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '888px', '405px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid563",
                            "scaleY",
                            0,
                            500,
                            "easeOutElastic",
                            "${tenga-en-cuenta}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "com_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['90px', '176px', '863px', '368px', 'auto', 'auto'],
                            id: 'titulo-componente-victimas',
                            type: 'image',
                            clip: 'rect(0px 863px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/titulo-componente-victimas.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            symbolName: 'compomente1',
                            rect: ['226px', '268px', '762', '265', 'auto', 'auto'],
                            id: 'compomente1'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['200px', '265px', '773px', '315px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'componente2',
                            text: '<p style=\"margin: 0px;\">​Para el Ministerio de Salud y Protección Social el daño psicosocial es: </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">“todo perjuicio o menoscabo permanente o transitorio, que genera la pérdida o transformación negativa de valores significativos y creencias; del mundo emocional, el equilibrio anímico y la integridad psicológica, así como del vínculo familiar, comunitario y colectivo. Manifestados en la afectación al sentido propio de la existencia; capacidad de proyección futura sea ésta individual o colectiva; los sentidos de pertenencia y filiación social o étnica; los sentimientos de identidad, seguridad, dignidad, honorabilidad, libertad, autonomía y la capacidad de empoderamiento; ocasionando profundos estados de sufrimiento emocional, desesperación, miedo e irritación y deteriorando los soportes sociales y legados espirituales propios del bienestar individual y colectivo.” Ministerio de Salud y Protección Social. (2017) PAPSIVI. Pág. 36.</span></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'com_3',
                            rect: ['204', '286', '806', '187', 'auto', 'auto'],
                            id: 'com_3'
                        },
                        {
                            rect: ['198px', '258px', '784px', '265px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'componente4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">¿Quiénes realizan la atención psicosocial?</span>\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es realizada por equipos conformados por profesionales en ciencias humanas, ciencias sociales, ciencias de la salud y promotores psicosociales, quienes son víctimas del conflicto armado reconocidas por su experiencia de trabajo en comunidades vulnerables.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Los equipos cuentan con entrenamiento y experiencia específica en atención psicosocial a víctimas del conflicto armado. Su labor está orientada por las líneas técnicas y metodológicas de la Estrategia de Atención Psicosocial del PAPSIVI, con el fin de que los procesos se adecúen a las necesidades de las personas, familias, comunidades y colectivos étnicos que han sido víctimas del conflicto armado en Colombia.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['90px', '268px', '37px', '47px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['95px', '327px', '37px', '47px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle24Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['90px', '376px', '37px', '47px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle24Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['90px', '440px', '37px', '47px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle24Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['90px', '492px', '37px', '47px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle24Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['597px', '463px', '334px', '61px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['238px', '461px', '334px', '61px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle25Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        },
                        {
                            rect: ['89px', '265px', '38px', '49px', 'auto', 'auto'],
                            id: 'activado1mora',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/activado1mora.svg', '0px', '0px']
                        },
                        {
                            id: 'activado2mora',
                            type: 'image',
                            rect: ['89px', '321px', '38px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado2mora.svg', '0px', '0px']
                        },
                        {
                            id: 'activado3mora',
                            type: 'image',
                            rect: ['89px', '377px', '38px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado3mora.svg', '0px', '0px']
                        },
                        {
                            id: 'activado4mora',
                            type: 'image',
                            rect: ['89px', '433px', '38px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/activado4mora.svg', '0px', '0px']
                        },
                        {
                            rect: ['89px', '490px', '38px', '49px', 'auto', 'auto'],
                            id: 'activado5mora',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/activado5mora.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'com_5',
                            rect: ['6', '4', '1267', '585', 'auto', 'auto'],
                            id: 'com_5'
                        },
                        {
                            rect: ['692px', '452px', '288px', '142px', 'auto', 'auto'],
                            id: 'mensaje2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'preguntas',
                            rect: ['0', '0', '1274', '585', 'auto', 'auto'],
                            id: 'preguntas'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1274px', '589px']
                        }
                    }
                },
                timeline: {
                    duration: 16878,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 1507,
                        "3": 2500,
                        "4": 3644,
                        "5": 4628
                    },
                    data: [
                        [
                            "eid610",
                            "scaleY",
                            1507,
                            500,
                            "easeOutBack",
                            "${componente2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid609",
                            "scaleX",
                            1507,
                            500,
                            "easeOutBack",
                            "${componente2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid578",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${compomente1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid641",
                            "scaleX",
                            3644,
                            500,
                            "easeOutBack",
                            "${componente4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid574",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${titulo-componente-victimas}",
                            [0,863,0,0],
                            [0,863,368,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid886",
                            "display",
                            500,
                            0,
                            "linear",
                            "${activado1mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid887",
                            "display",
                            1276,
                            0,
                            "linear",
                            "${activado1mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1208",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mensaje2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid576",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${compomente1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid645",
                            "display",
                            4628,
                            0,
                            "easeOutBack",
                            "${com_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid642",
                            "scaleY",
                            3644,
                            500,
                            "easeOutBack",
                            "${componente4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid643",
                            "display",
                            3644,
                            0,
                            "easeOutBack",
                            "${componente4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid644",
                            "display",
                            4482,
                            0,
                            "easeOutBack",
                            "${componente4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid617",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${com_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid640",
                            "display",
                            3459,
                            0,
                            "linear",
                            "${com_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid581",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${preguntas}",
                            'none',
                            'none'
                        ],
                        [
                            "eid897",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${Rectangle25Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid898",
                            "display",
                            1430,
                            0,
                            "easeOutBack",
                            "${Rectangle25Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid890",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${activado3mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid891",
                            "display",
                            3276,
                            0,
                            "linear",
                            "${activado3mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid896",
                            "display",
                            4628,
                            0,
                            "linear",
                            "${activado5mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid749",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${Rectangle25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            1430,
                            0,
                            "easeOutBack",
                            "${Rectangle25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid888",
                            "display",
                            1507,
                            0,
                            "linear",
                            "${activado2mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid889",
                            "display",
                            2283,
                            0,
                            "linear",
                            "${activado2mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid579",
                            "display",
                            500,
                            0,
                            "easeOutBack",
                            "${compomente1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid580",
                            "display",
                            1338,
                            0,
                            "easeOutBack",
                            "${compomente1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid611",
                            "display",
                            1507,
                            0,
                            "easeOutBack",
                            "${componente2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid612",
                            "display",
                            2345,
                            0,
                            "easeOutBack",
                            "${componente2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid892",
                            "display",
                            3644,
                            0,
                            "linear",
                            "${activado4mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid893",
                            "display",
                            4420,
                            0,
                            "linear",
                            "${activado4mora}",
                            'block',
                            'none'
                        ],
                            [ "eid639", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${com_3}', [0] ] ],
                            [ "eid748", "trigger", 4628, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${com_5}', [0] ] ]
                    ]
                }
            },
            "preguntas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fondo-actividad-interna',
                            rect: ['0px', '0px', '1274px', '585px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 585px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-actividad-interna.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">Las colchas de memorias e imágenes</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span><span style=\"font-weight: 100;\">“Las colchas reconstruyen memorias mediante la construcción de imágenes de la misma manera que las molas (…), colchas de retazos, las arpilleras y otras tradiciones textiles son utilizadas por sus creadoras en contextos culturales diversos para contar historias, es decir, como un medio de comunicación sociocultural y de tradición oral. En los talleres de memoria este trabajo se hace utilizando papeles de diversas texturas, colores y tamaños y colores-marcadores. Cada individuo trabaja sobre un cuadrado de papel en el que evoca un evento significativo de su vida en referencia con el tema específico del taller o una escena-vivencia personal que quieran documentar-narrar”. Centro Nacional de Memoria Histórica y University of British Columbia (2013). Recordar y narrar el conflicto.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 100;\">Herramientas para reconstruir memoria histórica.</span></p>',
                            rect: ['464px', '186px', '668px', '308px', 'auto', 'auto'],
                            id: 'pregunta1',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(1,49,103,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['801px', '496px', '287px', '40px', 'auto', 'auto'],
                            id: 'rta1',
                            fill: ['rgba(0,0,0,0)', 'images/rta1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(1,49,103,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'pregunta2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 800;\">“Representando el conflicto: Noche de Estrellas.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span>En el transcurso de dos años se realizaron talleres de formación actoral con los</p><p style=\"margin: 0px;\">habitantes del corregimiento de Puerto Venus. La dedicación, ganas y convicción por representar lo que la guerra había hecho con ellos, los llevó a convertirse en los protagonistas de este corto audiovisual que retrata una historia sobre lo que la guerra provocó en el municipio de Nariño. Y es que según el Registro Único de Víctimas, entre 1997 y 2005 fueron asesinadas 907 personas en Nariño, Antioquia”. Publicado 16 Ago 2018 en: </p><p style=\"margin: 0px;\">http://www.centrodememoriahistorica.gov.co/noticias/noticias-cmh/representando-el-conflicto-noche-de-estrellas</p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 100;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['464px', '216px', '668px', '308px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['788px', '493px', '349px', '40px', 'auto', 'auto'],
                            id: 'rta2',
                            fill: ['rgba(0,0,0,0)', 'images/rta2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(1,49,103,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'pregunta2Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">Las historias de vida o biografías sociales</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">“Dos tipos posibles de reconstrucción de historias de vida o biografías sociales son: (a) historias de vida de personas que fueron víctimas de la violencia letal y cuya</p><p style=\"margin: 0px;\">reconstrucción de historia se hace a partir de entrevistas y charlas con quiénes les</p><p style=\"margin: 0px;\">conocieron y mediante la recolección de materiales (fotos, archivos, documentos,</p><p style=\"margin: 0px;\">recordatorios y objetos) sobre esta persona, y (b) la historia de vida de personas que se encuentran vivas y cuya historia se reconstruye, a partir de su relato y la recolección de materiales y objetos que dan cuenta de su vida”. Centro Nacional de Memoria Histórica y University of British Columbia (2013). Recordar y narrar el conflicto. Herramientas parareconstruir memoria histórica.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 100;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['464px', '216px', '668px', '308px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['802px', '495px', '286px', '40px', 'auto', 'auto'],
                            id: 'rta3',
                            fill: ['rgba(0,0,0,0)', 'images/rta3.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['513px', '499px', '250px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['513px', '499px', '250px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['513px', '499px', '250px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle17Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['824px', '129px', '39px', '47px', 'auto', 'auto'],
                            id: 'Rectangle18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['886px', '129px', '39px', '47px', 'auto', 'auto'],
                            id: 'Rectangle18Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['954px', '129px', '39px', '47px', 'auto', 'auto'],
                            id: 'Rectangle18Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            type: 'rect',
                            rect: ['1222px', '10px', '52px', '40px', 'auto', 'auto'],
                            id: 'Rectangle16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1274px', '585px']
                        }
                    }
                },
                timeline: {
                    duration: 2669,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 1276,
                        "3": 2052
                    },
                    data: [
                        [
                            "eid589",
                            "display",
                            500,
                            0,
                            "linear",
                            "${pregunta1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid590",
                            "display",
                            1076,
                            0,
                            "linear",
                            "${pregunta1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid583",
                            "clip",
                            0,
                            500,
                            "easeOutBack",
                            "${fondo-actividad-interna}",
                            [0,0,585,0],
                            [0,1274,585,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid602",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid603",
                            "display",
                            1169,
                            0,
                            "linear",
                            "${Rectangle17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid591",
                            "scaleX",
                            1276,
                            376,
                            "linear",
                            "${pregunta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid597",
                            "display",
                            2052,
                            0,
                            "linear",
                            "${pregunta2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid598",
                            "display",
                            2628,
                            0,
                            "linear",
                            "${pregunta2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid585",
                            "scaleX",
                            500,
                            376,
                            "linear",
                            "${pregunta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid587",
                            "scaleY",
                            500,
                            376,
                            "linear",
                            "${pregunta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid596",
                            "scaleY",
                            2052,
                            376,
                            "linear",
                            "${pregunta2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid604",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Rectangle17Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid605",
                            "display",
                            1919,
                            0,
                            "linear",
                            "${Rectangle17Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid593",
                            "display",
                            1276,
                            0,
                            "linear",
                            "${pregunta2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            1852,
                            0,
                            "linear",
                            "${pregunta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid600",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rta2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid592",
                            "scaleY",
                            1276,
                            376,
                            "linear",
                            "${pregunta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid606",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Rectangle17Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid607",
                            "display",
                            2669,
                            0,
                            "linear",
                            "${Rectangle17Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid601",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rta3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid599",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rta1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid595",
                            "scaleX",
                            2052,
                            376,
                            "linear",
                            "${pregunta2Copy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "com_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'componente3',
                            symbolName: 'menuencerradomora',
                            rect: ['0px', '-76px', '823', '321', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['89px', '96px', '617px', '91px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'mora1',
                            text: '<p style=\"margin: 0px;\">​Alistamiento y análisis de contexto. Da cuenta de las particularidades del territorio incluida la comprensión de las características y manifestaciones del conflicto armado.</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['89px', '96px', '617px', '91px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'mora2',
                            text: '<p style=\"margin: 0px;\">​Focalización y priorización de la población víctima incluida en el Registro Único de Víctimas y en decisiones administrativas, medidas cautelares, sentencias y decisiones judiciales de carácter nacional e internacional.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['89px', '96px', '617px', '91px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'mora3',
                            text: '<p style=\"margin: 0px;\">​Momento de abordaje de la víctima, su familia, comunidad o colectivo étnico, en el que se comprende la forma en la que se han visto afectados por el conflicto armado y la manera como lo han afrontado.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['89px', '96px', '617px', '91px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'mora4',
                            text: '<p style=\"margin: 0px;\">​Inicio de planes de trabajo concertados. Comprende el desarrollo de sesiones de atención en las modalidades individual, familiar y comunitaria acorde a las orientaciones metodológicas y periodicidad definida.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['89px', '96px', '617px', '91px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,7,16,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'mora5',
                            text: '<p style=\"margin: 0px;\">​Valoración continuidad o cierre / seguimiento del proceso de atención acorde a los objetivos inicialmente planteados.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'act-1-menu-mora2',
                            type: 'image',
                            rect: ['0px', '0px', '158px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/act-1-menu-mora.svg', '0px', '0px']
                        },
                        {
                            id: 'act-2-menu-mora',
                            type: 'image',
                            rect: ['162px', '0px', '158px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/act-2-menu-mora.svg', '0px', '0px']
                        },
                        {
                            id: 'act-3-menu-mora',
                            type: 'image',
                            rect: ['324px', '0px', '158px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/act-3-menu-mora.svg', '0px', '0px']
                        },
                        {
                            id: 'act-4-menu-mora',
                            type: 'image',
                            rect: ['486px', '0px', '158px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/act-4-menu-mora.svg', '0px', '0px']
                        },
                        {
                            id: 'act-5-menu-mora',
                            type: 'image',
                            rect: ['648px', '0px', '158px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/act-5-menu-mora.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '158px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['162px', '0px', '158px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['322px', '0px', '158px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['485px', '0px', '158px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        },
                        {
                            rect: ['643px', '0px', '158px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(241,255,85,0.0471)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '806px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 2673,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 953,
                        "3": 1406,
                        "4": 1859,
                        "5": 2312
                    },
                    data: [
                        [
                            "eid622",
                            "display",
                            1406,
                            0,
                            "linear",
                            "${mora3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid623",
                            "display",
                            1767,
                            0,
                            "linear",
                            "${mora3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            1859,
                            0,
                            "linear",
                            "${act-4-menu-mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid635",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${act-4-menu-mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "display",
                            2312,
                            0,
                            "linear",
                            "${mora5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid627",
                            "display",
                            2673,
                            0,
                            "linear",
                            "${mora5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid618",
                            "display",
                            500,
                            0,
                            "linear",
                            "${mora1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid619",
                            "display",
                            861,
                            0,
                            "linear",
                            "${mora1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid637",
                            "display",
                            2312,
                            0,
                            "linear",
                            "${act-5-menu-mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            2673,
                            0,
                            "linear",
                            "${act-5-menu-mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid613",
                            "scaleX",
                            0,
                            500,
                            "easeOutBack",
                            "${componente3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid632",
                            "display",
                            1406,
                            0,
                            "linear",
                            "${act-3-menu-mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            1767,
                            0,
                            "linear",
                            "${act-3-menu-mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid628",
                            "display",
                            500,
                            0,
                            "linear",
                            "${act-1-menu-mora2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid629",
                            "display",
                            861,
                            0,
                            "linear",
                            "${act-1-menu-mora2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid620",
                            "display",
                            953,
                            0,
                            "linear",
                            "${mora2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid621",
                            "display",
                            1314,
                            0,
                            "linear",
                            "${mora2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid624",
                            "display",
                            1859,
                            0,
                            "linear",
                            "${mora4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid625",
                            "display",
                            2220,
                            0,
                            "linear",
                            "${mora4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid615",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${componente3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid630",
                            "display",
                            953,
                            0,
                            "linear",
                            "${act-2-menu-mora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid631",
                            "display",
                            1314,
                            0,
                            "linear",
                            "${act-2-menu-mora}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${componente3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "com_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1267px', '585px', 'auto', 'auto'],
                            id: 'fondo-modalidades',
                            type: 'image',
                            clip: 'rect(0px 1267px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-modalidades.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '98px', '286px', '44px', 'auto', 'auto'],
                            id: 'marcador-menu-azul-oscuro',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-azul-oscuro.svg', '0px', '0px']
                        },
                        {
                            rect: ['338px', '98px', '286px', '44px', 'auto', 'auto'],
                            id: 'marcador-menu-azul-oscuroCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-azul-oscuro.svg', '0px', '0px']
                        },
                        {
                            rect: ['628px', '98px', '286px', '44px', 'auto', 'auto'],
                            id: 'marcador-menu-azul-oscuroCopy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-azul-oscuro.svg', '0px', '0px']
                        },
                        {
                            rect: ['924px', '98px', '286px', '44px', 'auto', 'auto'],
                            id: 'marcador-menu-azul-oscuroCopy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-azul-oscuro.svg', '0px', '0px']
                        },
                        {
                            rect: ['24px', '226px', '1209px', '25px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            id: 'menu-mora-atencion',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/menu-mora-atencion.svg', '0px', '0px']
                        },
                        {
                            rect: ['20px', '225px', '603px', '27px', 'auto', 'auto'],
                            id: 'marcador-menu-mora-atencion',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-atencion.svg', '0px', '0px']
                        },
                        {
                            rect: ['634px', '225px', '603px', '27px', 'auto', 'auto'],
                            id: 'marcador-menu-mora-atencionCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-atencion.svg', '0px', '0px']
                        },
                        {
                            rect: ['20px', '225px', '603px', '27px', 'auto', 'auto'],
                            id: 'marcador-menu-mora-atencionCopy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-atencion.svg', '0px', '0px']
                        },
                        {
                            rect: ['634px', '225px', '603px', '27px', 'auto', 'auto'],
                            id: 'marcador-menu-mora-atencionCopy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-atencion.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'atencion-psicosocial',
                            opacity: '0.034188034188034',
                            rect: ['31px', '156px', '1199px', '55px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(230,220,97,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Comprende los procesos dirigidos a favorecer la recuperación o mitigación de los daños psicosociales, el sufrimiento emocional y los impactos que los hechos de violencia han generado en las víctimas. Esta modalidad de atención plantea la posibilidad de realizarse de manera individual propiamente dicha o en grupos cerrados sobre una temática específica.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​La estrategia cuenta con dos formas de atención para esta modalidad, de acuerdo a la severidad y complejidad del daño y el sufrimiento emocional:</p>'
                        },
                        {
                            type: 'rect',
                            opacity: '0.008130081300813',
                            display: 'none',
                            symbolName: 'atencion-en-consejeria',
                            rect: ['78px', '273px', '1133', '283', 'auto', 'auto'],
                            id: 'atencion-en-consejeria'
                        },
                        {
                            rect: ['400px', '260px', '35px', '262px', 'auto', 'auto'],
                            type: 'image',
                            id: 'barra-orientacionesespecificas',
                            opacity: '0.008130081300813',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/barra-orientaciones.especificas.svg', '0px', '0px']
                        },
                        {
                            id: 'atencion-terapeutica',
                            symbolName: 'atencion-terapeutica',
                            rect: ['78px', '271px', '1147', '285', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            textStyle: ['', '', '13px', '', 'none'],
                            rect: ['31px', '156px', '1199px', '55px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(230,220,97,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'atencion-psicosocialCopy',
                            text: '<p style=\"margin: 0px;\">​En esta modalidad de atención, es central comprender la familia desde una concepción plural amplia, diversa, no asociada únicamente al vínculo matrimonial ya que puede tomar diversas formas según los grupos culturalmente diferenciados en donde se releva el derecho de las personas a que libremente configuren sus opciones para establecer una familia.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Siguiendo la estructura de la modalidad de atención individual, la estrategia cuenta con dos formas de atención en lo familiar, de acuerdo a la severidad y complejidad del daño y el sufrimiento emocional:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['351px', '261px', '35px', '259px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(66,45,103,1.00)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'atencion-en-conseeria2',
                            rect: ['50px', '285px', '1081', '237', 'auto', 'auto'],
                            id: 'atencion-en-conseeria2'
                        },
                        {
                            id: 'atencion-terapeutica2',
                            symbolName: 'atencion-terapeutica2',
                            rect: ['55px', '274px', '1124', '248', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['31px', '156px', '1199px', '55px', 'auto', 'auto'],
                            textStyle: ['', '', '13px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(230,220,97,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'atencion-psicosocialCopy2',
                            text: '<p style=\"margin: 0px;\">​Para la atención psicosocial en la modalidad comunitaria, la estrategia propone cuatro formas de acompañamiento:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['24px', '183px', '1208px', '64px', 'auto', 'auto'],
                            id: 'menu-mora-segundo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/menu-mora-segundo.svg', '0px', '0px']
                        },
                        {
                            rect: ['21px', '181px', '300px', '66px', 'auto', 'auto'],
                            id: 'marcador-menu-mora-segundo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-segundo.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-menu-mora-segundoCopy',
                            type: 'image',
                            rect: ['324px', '182px', '300px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-segundo.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-menu-mora-segundoCopy2',
                            type: 'image',
                            rect: ['628px', '178px', '300px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-segundo.svg', '0px', '0px']
                        },
                        {
                            id: 'marcador-menu-mora-segundoCopy3',
                            type: 'image',
                            rect: ['932px', '182px', '300px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-mora-segundo.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90']],
                            rect: ['263px', '369px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(230,220,97,1)', '900', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​Orientaciones Metodológicas</p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'atencion-situaciones',
                            symbolName: 'atencion-situaciones',
                            rect: ['42px', '325px', '754', '244', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'fortalecimiento-colectivo',
                            symbolName: 'fortalecimiento-colectivo',
                            rect: ['42px', '321px', '1116', '238', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'reconstruccion-memorias',
                            symbolName: 'reconstruccion-memorias',
                            rect: ['42px', '308px', '1116', '247', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'reconocimiento-social',
                            symbolName: 'reconocimiento-social',
                            rect: ['42px', '314px', '1116', '234', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['1113px', '228px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['606px', '120px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['1131px', '228px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['853px', '120px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['555px', '216px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['891px', '216px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['1173px', '222px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            rect: ['1162px', '112px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito4Copy7',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['50px', '289px', '1158px', '210px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text18',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(253, 252, 124);\">La atención psicosocial en la </span><span style=\"color: rgb(253, 252, 124); font-weight: 700;\">modalidad colectiva étnica</span><span style=\"color: rgb(253, 252, 124);\"> para el pueblo gitano y las comunidades negras, afrocolombianas, raizales y palenqueras se encuentra establecida en los módulos étnicos del Papsivi,que tienen como objetivo contribuir a la reconstrucción de los vínculos, tejido social y cohesión sociocultural, y al fortalecimiento de los recursos y estrategias de afrontamiento que afiancen la autonomía y participación de las víctimas pertenecientes a los grupos étnicos como sujetos colectivos de derechos.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(253, 252, 124);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(253, 252, 124);\">En la modalidad colectiva étnica se trabaja atención en situaciones críticas, reproducción cultural y de su identidad, formas organizativas, tejido social y cultural, prácticas identitarias y tradicionales.</span></p><p style=\"margin: 0px;\">​</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['46px', '98px', '295px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.01)']
                        },
                        {
                            rect: ['337px', '98px', '295px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle20Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.01)']
                        },
                        {
                            rect: ['629px', '98px', '295px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle20Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.01)']
                        },
                        {
                            rect: ['924px', '101px', '295px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle20Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.01)']
                        },
                        {
                            rect: ['20px', '225px', '603px', '25px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0078)']
                        },
                        {
                            rect: ['634px', '227px', '603px', '25px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle21Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0078)']
                        },
                        {
                            rect: ['20px', '225px', '603px', '25px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle21Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0078)']
                        },
                        {
                            rect: ['634px', '227px', '603px', '25px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle21Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0078)']
                        },
                        {
                            rect: ['24px', '181px', '295px', '64px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0039)']
                        },
                        {
                            rect: ['333px', '179px', '295px', '64px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle22Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0039)']
                        },
                        {
                            rect: ['628px', '183px', '295px', '64px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle22Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0039)']
                        },
                        {
                            rect: ['935px', '184px', '295px', '64px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            id: 'Rectangle22Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0.0039)']
                        },
                        {
                            rect: ['1208px', '0px', '72px', '44px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(66,45,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1267px', '585px']
                        }
                    }
                },
                timeline: {
                    duration: 12250,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "11": 1750,
                        "12": 2691,
                        "2": 3798,
                        "21": 4298,
                        "22": 5274,
                        "3": 6504,
                        "31": 7504,
                        "32": 8472,
                        "33": 9425,
                        "34": 10332,
                        "4": 11500
                    },
                    data: [
                        [
                            "eid683",
                            "display",
                            7004,
                            0,
                            "linear",
                            "${menu-mora-segundo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid707",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${menu-mora-segundo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "display",
                            4298,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid679",
                            "display",
                            6258,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid651",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${atencion-psicosocial}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid709",
                            "display",
                            753,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid710",
                            "display",
                            3552,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1177",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${manito4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1178",
                            "display",
                            2676,
                            0,
                            "linear",
                            "${manito4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid671",
                            "display",
                            4298,
                            0,
                            "linear",
                            "${atencion-en-conseeria2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid674",
                            "display",
                            5135,
                            0,
                            "linear",
                            "${atencion-en-conseeria2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid659",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${atencion-en-consejeria}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid657",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${barra-orientacionesespecificas}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid732",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Rectangle21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid734",
                            "display",
                            3513,
                            0,
                            "linear",
                            "${Rectangle21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1183",
                            "display",
                            4798,
                            0,
                            "linear",
                            "${manito4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1184",
                            "display",
                            5224,
                            0,
                            "linear",
                            "${manito4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid697",
                            "display",
                            10332,
                            0,
                            "linear",
                            "${reconocimiento-social}",
                            'none',
                            'block'
                        ],
                        [
                            "eid698",
                            "display",
                            11115,
                            0,
                            "linear",
                            "${reconocimiento-social}",
                            'block',
                            'none'
                        ],
                        [
                            "eid663",
                            "opacity",
                            2691,
                            500,
                            "linear",
                            "${atencion-terapeutica}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid693",
                            "opacity",
                            8472,
                            500,
                            "linear",
                            "${fortalecimiento-colectivo}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid687",
                            "opacity",
                            7504,
                            500,
                            "linear",
                            "${Text15}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid743",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${Rectangle22Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            11109,
                            0,
                            "linear",
                            "${Rectangle22Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid688",
                            "opacity",
                            7504,
                            500,
                            "linear",
                            "${atencion-situaciones}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid740",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${Rectangle22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid744",
                            "display",
                            11109,
                            0,
                            "linear",
                            "${Rectangle22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid655",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${barra-orientacionesespecificas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid669",
                            "display",
                            3447,
                            0,
                            "linear",
                            "${barra-orientacionesespecificas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid677",
                            "opacity",
                            5274,
                            500,
                            "linear",
                            "${atencion-terapeutica2}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid652",
                            "display",
                            750,
                            0,
                            "linear",
                            "${atencion-psicosocial}",
                            'none',
                            'block'
                        ],
                        [
                            "eid666",
                            "display",
                            3613,
                            0,
                            "linear",
                            "${atencion-psicosocial}",
                            'block',
                            'none'
                        ],
                        [
                            "eid733",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Rectangle21Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid735",
                            "display",
                            3513,
                            0,
                            "linear",
                            "${Rectangle21Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid713",
                            "display",
                            6504,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuroCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid714",
                            "display",
                            11186,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuroCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid731",
                            "display",
                            10332,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid730",
                            "display",
                            11046,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid668",
                            "opacity",
                            3798,
                            500,
                            "linear",
                            "${atencion-psicosocialCopy}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid724",
                            "display",
                            7504,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid725",
                            "display",
                            8218,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid654",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${atencion-en-consejeria}",
                            'none',
                            'block'
                        ],
                        [
                            "eid660",
                            "display",
                            2506,
                            0,
                            "linear",
                            "${atencion-en-consejeria}",
                            'block',
                            'none'
                        ],
                        [
                            "eid649",
                            "scaleX",
                            1250,
                            500,
                            "linear",
                            "${menu-mora-atencion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid682",
                            "opacity",
                            6504,
                            500,
                            "linear",
                            "${atencion-psicosocialCopy2}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid742",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${Rectangle22Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid746",
                            "display",
                            11109,
                            0,
                            "linear",
                            "${Rectangle22Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid716",
                            "display",
                            1761,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid717",
                            "display",
                            2560,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            4298,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid723",
                            "display",
                            5097,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid720",
                            "display",
                            5228,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid721",
                            "display",
                            6143,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid685",
                            "display",
                            7504,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid700",
                            "display",
                            11219,
                            0,
                            "linear",
                            "${Text15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid736",
                            "display",
                            4298,
                            0,
                            "linear",
                            "${Rectangle21Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid737",
                            "display",
                            6061,
                            0,
                            "linear",
                            "${Rectangle21Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid696",
                            "opacity",
                            9425,
                            500,
                            "linear",
                            "${reconstruccion-memorias}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid673",
                            "opacity",
                            4298,
                            500,
                            "linear",
                            "${atencion-en-conseeria2}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid684",
                            "scaleX",
                            7004,
                            500,
                            "linear",
                            "${menu-mora-segundo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid738",
                            "display",
                            4298,
                            0,
                            "linear",
                            "${Rectangle21Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid739",
                            "display",
                            6061,
                            0,
                            "linear",
                            "${Rectangle21Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid681",
                            "display",
                            6504,
                            0,
                            "linear",
                            "${atencion-psicosocialCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid708",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${atencion-psicosocialCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid715",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuroCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid661",
                            "display",
                            2691,
                            0,
                            "linear",
                            "${atencion-terapeutica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid662",
                            "display",
                            3447,
                            0,
                            "linear",
                            "${atencion-terapeutica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1204",
                            "display",
                            10832,
                            0,
                            "linear",
                            "${manito4Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1205",
                            "display",
                            11258,
                            0,
                            "linear",
                            "${manito4Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid667",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${atencion-psicosocialCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid680",
                            "display",
                            6258,
                            0,
                            "linear",
                            "${atencion-psicosocialCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid704",
                            "opacity",
                            11500,
                            500,
                            "linear",
                            "${Text18}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid718",
                            "display",
                            2691,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            3606,
                            0,
                            "linear",
                            "${marcador-menu-mora-atencionCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1191",
                            "display",
                            8004,
                            0,
                            "linear",
                            "${manito4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1192",
                            "display",
                            8430,
                            0,
                            "linear",
                            "${manito4Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1195",
                            "display",
                            8972,
                            0,
                            "linear",
                            "${manito4Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1196",
                            "display",
                            9398,
                            0,
                            "linear",
                            "${manito4Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1179",
                            "display",
                            3191,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1180",
                            "display",
                            3617,
                            0,
                            "linear",
                            "${manito4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid672",
                            "opacity",
                            4298,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid675",
                            "display",
                            5274,
                            0,
                            "linear",
                            "${atencion-terapeutica2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid676",
                            "display",
                            6111,
                            0,
                            "linear",
                            "${atencion-terapeutica2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid694",
                            "display",
                            9425,
                            0,
                            "linear",
                            "${reconstruccion-memorias}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            10208,
                            0,
                            "linear",
                            "${reconstruccion-memorias}",
                            'block',
                            'none'
                        ],
                        [
                            "eid727",
                            "display",
                            8472,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid726",
                            "display",
                            9186,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid711",
                            "display",
                            3798,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuroCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid712",
                            "display",
                            6381,
                            0,
                            "linear",
                            "${marcador-menu-azul-oscuroCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1200",
                            "display",
                            9925,
                            0,
                            "linear",
                            "${manito4Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1201",
                            "display",
                            10351,
                            0,
                            "linear",
                            "${manito4Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid701",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${Text18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid699",
                            "opacity",
                            10332,
                            500,
                            "linear",
                            "${reconocimiento-social}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid691",
                            "display",
                            8472,
                            0,
                            "linear",
                            "${fortalecimiento-colectivo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            9255,
                            0,
                            "linear",
                            "${fortalecimiento-colectivo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid686",
                            "display",
                            7504,
                            0,
                            "linear",
                            "${atencion-situaciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid690",
                            "display",
                            8287,
                            0,
                            "linear",
                            "${atencion-situaciones}",
                            'block',
                            'none'
                        ],
                        [
                            "eid647",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${fondo-modalidades}",
                            [0,1267,0,0],
                            [0,1267,585,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid741",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${Rectangle22Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid745",
                            "display",
                            11109,
                            0,
                            "linear",
                            "${Rectangle22Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid653",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${menu-mora-atencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid678",
                            "display",
                            6258,
                            0,
                            "linear",
                            "${menu-mora-atencion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid729",
                            "display",
                            9425,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid728",
                            "display",
                            10139,
                            0,
                            "linear",
                            "${marcador-menu-mora-segundoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1187",
                            "display",
                            5774,
                            0,
                            "linear",
                            "${manito4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1188",
                            "display",
                            6200,
                            0,
                            "linear",
                            "${manito4Copy3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "componente_reparacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1219px', '415px', 'auto', 'auto'],
                            id: 'mapa-fondo-morado',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mapa-fondo-morado.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'descrip',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['183px', '17px', '1028px', '69px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Tiene como objetivo reparar de manera integral, adecuada, diferenciada, transformadora y efectiva a las víctimas, por el daño sufrido\ncomo consecuencia de las violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario en Colombia. </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Contempla las medidas de <span style=\"font-weight: 700;\">restitución, indemnización, rehabilitación, satisfacción y garantías de no repetición.</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'restitu',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'block',
                            rect: ['183px', '149px', '1028px', '69px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 900; text-decoration: underline;\">Restitución:</span> Corresponde al restablecimiento de la situación existente de las víctimas, antes de las violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario en Colombia.</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\"></span></p>',
                            align: 'left'
                        },
                        {
                            rect: ['183', '260px', '1003', '154', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'medidas',
                            id: 'medidas',
                            type: 'rect'
                        },
                        {
                            rect: ['183px', '149px', '1028', '219', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'numeral2',
                            id: 'numeral2',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'numeral3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 800; text-decoration: underline;\">Indemnización: </span>Consiste en una compensación económica entregada a las víctimas por los perjuicios causados con ocasión de las violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario en Colombia, lo anterior, teniendo en cuenta la naturaleza e impacto del hecho victimizante, el daño causado y el estado de vulnerabilidad actual de la víctima, desde un enfoque diferencial y con observancia de los principios de progresividad y gradualidad.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​- Entrega a la indemnización administrativa.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Acompañamiento para la inversión adecuada de los recursos, con el propósito de que las víctimas puedan reconstruir su proyecto de</p><p style=\"margin: 0px;\">vida en diferentes componentes (formación técnica o profesional&nbsp;para las víctimas o sus hijos, creación o fortalecimiento de empresas productivas o activos productivos, adquisición o mejoramiento de vivienda nueva o usada o adquisición de inmuebles rurales).</p>',
                            rect: ['183px', '120px', '985px', '272px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'numeral4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 900; text-decoration: underline;\">Satisfacción:</span> Restablecimiento de la dignidad de las víctimas y difundir la verdad sobre lo sucedido, con el fin de proporcionar bienestar y contribuir a mitigar su dolor.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​- Aceptaciones públicas de hechos y solicitudes de perdón público.</p><p style=\"margin: 0px;\">​- Acciones en materia de memoria histórica.</p><p style=\"margin: 0px;\">- Conmemoraciones (día nacional de la memoria).</p><p style=\"margin: 0px;\">- Museo nacional de la memoria.</p><p style=\"margin: 0px;\">- Exención de la prestación del servicio militar.</p><p style=\"margin: 0px;\"></p>',
                            rect: ['183px', '120px', '985px', '272px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(21,21,21,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'numeral5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 900; text-decoration: underline;\">Garantías de no Repetición</span>, medidas que aseguren que las víctimas y la sociedad no serán objeto, nuevamente de las mismas u otras violaciones a los DDHH o al DIH.</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin:0px\">​- La desmovilización y el desmantelamiento de los grupos armados al&nbsp;​margen de la Ley.</p><p style=\"margin: 0px;\">- La verificación de los hechos y la difusión pública y completa de la verdad.</p><p style=\"margin: 0px;\">- La aplicación de sanciones a los responsables de las violaciones.</p><p style=\"margin: 0px;\">- La prevención de violaciones.</p><p style=\"margin: 0px;\">- La creación de una pedagogía social que promueva los valores constitucionales que fundan la reconciliación.</p><p style=\"margin: 0px;\">- Diseño de una estrategia única de capacitación y pedagogía en materia de respeto de los Derechos Humanos y del Derecho Internacional Humanitario.</p>',
                            rect: ['183px', '132px', '985px', '272px', 'auto', 'auto']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy',
                            rect: ['42px', '242px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito2.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy6',
                            rect: ['77px', '242px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito2.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy7',
                            rect: ['105px', '242px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito2.svg', '0px', '0px']
                        },
                        {
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'manito6Copy8',
                            rect: ['144px', '241px', '46px', '44px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manito2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['8px', '225px', '30px', '39px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['42px', '225px', '30px', '39px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['75px', '225px', '30px', '39px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['105px', '225px', '30px', '39px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['137px', '225px', '30px', '39px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['10px', '226px', '28px', '34px', 'auto', 'auto'],
                            id: 'activado1-verde2',
                            fill: ['rgba(0,0,0,0)', 'images/activado1-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['45px', '226px', '28px', '34px', 'auto', 'auto'],
                            id: 'activado2-verde2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/activado2-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['77px', '225px', '28px', '34px', 'auto', 'auto'],
                            id: 'activado3-verde2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/activado3-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['108px', '225px', '28px', '34px', 'auto', 'auto'],
                            id: 'activado4-verde',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/activado4-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['140px', '226px', '28px', '34px', 'auto', 'auto'],
                            id: 'activado5-verde',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/activado5-verde.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1219px', '415px']
                        }
                    }
                },
                timeline: {
                    duration: 4911,
                    autoPlay: false,
                    labels: {
                        "1": 500,
                        "2": 1737,
                        "3": 2559,
                        "4": 3381,
                        "5": 4203
                    },
                    data: [
                        [
                            "eid1040",
                            "top",
                            1366,
                            0,
                            "easeOutElastic",
                            "${medidas}",
                            '260px',
                            '260px'
                        ],
                        [
                            "eid772",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${restitu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid786",
                            "opacity",
                            1737,
                            500,
                            "linear",
                            "${numeral2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid787",
                            "display",
                            1737,
                            0,
                            "easeOutBack",
                            "${numeral2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid788",
                            "display",
                            2445,
                            0,
                            "easeOutBack",
                            "${numeral2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid792",
                            "display",
                            3381,
                            0,
                            "easeOutBack",
                            "${numeral4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid793",
                            "display",
                            4089,
                            0,
                            "easeOutBack",
                            "${numeral4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid866",
                            "display",
                            2860,
                            0,
                            "easeOutBack",
                            "${activado3-verde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid867",
                            "display",
                            3178,
                            0,
                            "easeOutBack",
                            "${activado3-verde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid862",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${activado1-verde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid863",
                            "display",
                            1568,
                            0,
                            "easeOutBack",
                            "${activado1-verde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid784",
                            "display",
                            1630,
                            0,
                            "easeOutBack",
                            "${restitu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid797",
                            "opacity",
                            4203,
                            500,
                            "linear",
                            "${numeral5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid870",
                            "display",
                            4385,
                            0,
                            "easeOutBack",
                            "${activado5-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid871",
                            "display",
                            4911,
                            0,
                            "easeOutBack",
                            "${activado5-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1034",
                            "display",
                            3613,
                            0,
                            "easeOutBack",
                            "${manito6Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1035",
                            "display",
                            4245,
                            0,
                            "easeOutBack",
                            "${manito6Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid858",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${manito6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid861",
                            "display",
                            1614,
                            0,
                            "easeOutBack",
                            "${manito6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1030",
                            "display",
                            2860,
                            0,
                            "easeOutBack",
                            "${manito6Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1031",
                            "display",
                            3381,
                            0,
                            "easeOutBack",
                            "${manito6Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid794",
                            "opacity",
                            3381,
                            500,
                            "linear",
                            "${numeral4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid789",
                            "display",
                            2559,
                            0,
                            "easeOutBack",
                            "${numeral3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid790",
                            "display",
                            3267,
                            0,
                            "easeOutBack",
                            "${numeral3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1027",
                            "display",
                            2237,
                            0,
                            "easeOutBack",
                            "${manito6Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1028",
                            "display",
                            2601,
                            0,
                            "easeOutBack",
                            "${manito6Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid868",
                            "display",
                            3613,
                            0,
                            "easeOutBack",
                            "${activado4-verde}",
                            'none',
                            'block'
                        ],
                        [
                            "eid869",
                            "display",
                            4089,
                            0,
                            "easeOutBack",
                            "${activado4-verde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid771",
                            "opacity",
                            0,
                            500,
                            "easeOutBack",
                            "${descrip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid785",
                            "display",
                            1630,
                            0,
                            "easeOutBack",
                            "${medidas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid864",
                            "display",
                            2076,
                            0,
                            "easeOutBack",
                            "${activado2-verde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            2394,
                            0,
                            "easeOutBack",
                            "${activado2-verde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid791",
                            "opacity",
                            2559,
                            500,
                            "linear",
                            "${numeral3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid795",
                            "display",
                            4203,
                            0,
                            "easeOutBack",
                            "${numeral5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid796",
                            "display",
                            4911,
                            0,
                            "easeOutBack",
                            "${numeral5}",
                            'block',
                            'none'
                        ],
                            [ "eid809", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${medidas}', [0] ] ]
                    ]
                }
            },
            "medidas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'medidas1',
                            display: 'block',
                            symbolName: 'medidas1',
                            rect: ['0px', '0px', '963', '153', 'auto', 'auto'],
                            opacity: '0.024390243902439'
                        },
                        {
                            type: 'rect',
                            id: 'medidas2',
                            symbolName: 'medidas2',
                            display: 'none',
                            rect: ['0px', '24px', '1003', '130', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['988px', '78px', '46px', '44px', 'auto', 'auto'],
                            id: 'manito6',
                            fill: ['rgba(0,0,0,0)', 'images/manito.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['963px', '45px', '71px', '81px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['945px', '49px', '71px', '81px', 'auto', 'auto'],
                            display: 'none',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1003px', '154px']
                        }
                    }
                },
                timeline: {
                    duration: 1715,
                    autoPlay: false,
                    labels: {
                        "1": 0,
                        "2": 892
                    },
                    data: [
                        [
                            "eid778",
                            "display",
                            415,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid779",
                            "display",
                            738,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1038",
                            "display",
                            500,
                            0,
                            "easeOutElastic",
                            "${manito6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1039",
                            "display",
                            892,
                            0,
                            "easeOutElastic",
                            "${manito6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid776",
                            "opacity",
                            892,
                            500,
                            "linear",
                            "${medidas2}",
                            '0.024390243902439',
                            '1'
                        ],
                        [
                            "eid775",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${medidas1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${medidas1}",
                            '0.024390243902439',
                            '1'
                        ],
                        [
                            "eid777",
                            "display",
                            892,
                            0,
                            "easeOutBack",
                            "${medidas2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid780",
                            "display",
                            1392,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid781",
                            "display",
                            1715,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "actividad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1281px', '601px', 'auto', 'auto'],
                            id: 'actividad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/actividad.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['966px', '19px', '77px', '81px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['579px', '364px', '126px', '110px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1281px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "cc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1281px', '601px', 'auto', 'auto'],
                            id: 'cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cc.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['966px', '19px', '77px', '81px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1281px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1281px', '601px', 'auto', 'auto'],
                            id: 'creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/creditos.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['966px', '19px', '77px', '81px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1281px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1282px', '602px', 'auto', 'auto'],
                            id: 'mapa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mapa.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['963px', '19px', '77px', '81px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1282px', '602px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "menu_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '193px', '331px', 'auto', 'auto'],
                            id: 'cintilla',
                            fill: ['rgba(0,0,0,0)', 'images/cintilla2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['153px', '0px', '28px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_ocultar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(215,20,20,0.00)']
                        },
                        {
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            id: 'btn_cc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['17px', '190px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            id: 'btn_actividad',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['29px', '283px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-4'], ['28'], ['0.94047']],
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['33px', '240px', '161px', '39px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-1'], [], ['0.6585']],
                            id: 'btn_mapa',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-31px', '50px', '254px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['-2px', '0px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['26px', '96px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargar_glosario',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['12px', '143px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargar_bibliografia',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid668",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cintilla}",
                            'block',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargarpdf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_creditos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_actividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid671",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_bibliografia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ocultar}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '207px', '49px', 'auto', 'auto'],
                            id: 'btn_opciones',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_opciones.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '54px', '50px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_home',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['49px', '0px', '155px', '49px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_desplegar_cintilla',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-883607");

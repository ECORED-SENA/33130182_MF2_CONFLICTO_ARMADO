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
                            rect: ['-1px', '0', '1281px', '601px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 601px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'menu',
                            type: 'image',
                            rect: ['1290px', '5px', '940px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu.svg",'0px','0px']
                        },
                        {
                            id: 'rosa1',
                            display: 'block',
                            type: 'image',
                            rect: ['18px', '115px', '1146px', '486px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rosa1.svg",'0px','0px']
                        },
                        {
                            id: 'rosa2',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '113px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rosa2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'personaje1',
                            display: 'none',
                            type: 'image',
                            rect: ['90px', '612px', '251px', '492px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje1.svg",'0px','0px']
                        },
                        {
                            id: 'marcador',
                            type: 'image',
                            rect: ['1292px', '191px', '88px', '409px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'naranja-1',
                            display: 'none',
                            type: 'image',
                            rect: ['18px', '115px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"naranja-1.svg",'0px','0px']
                        },
                        {
                            id: 'naranja2',
                            type: 'image',
                            rect: ['16px', '113px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"naranja2.svg",'0px','0px']
                        },
                        {
                            id: 'personaje2',
                            display: 'none',
                            type: 'image',
                            rect: ['54px', '143px', '322px', '451px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje2.svg",'0px','0px']
                        },
                        {
                            id: 'verde1',
                            type: 'image',
                            rect: ['18px', '113px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"verde1.svg",'0px','0px']
                        },
                        {
                            id: 'verde2',
                            type: 'image',
                            rect: ['18px', '113px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"verde2.svg",'0px','0px']
                        },
                        {
                            id: 'personaje3',
                            type: 'image',
                            rect: ['102px', '93px', '186px', '501px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje3.svg",'0px','0px']
                        },
                        {
                            id: 'morado-01',
                            type: 'image',
                            rect: ['12px', '115px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"morado-01.svg",'0px','0px']
                        },
                        {
                            id: 'morado-02',
                            type: 'image',
                            rect: ['18px', '114px', '1146px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"morado-02.svg",'0px','0px']
                        },
                        {
                            id: 'personaje4',
                            type: 'image',
                            rect: ['94px', '124px', '206px', '467px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje4.svg",'0px','0px']
                        },
                        {
                            id: 'bien-gande',
                            type: 'image',
                            rect: ['666px', '141px', '110px', '88px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien-gande.svg",'0px','0px']
                        },
                        {
                            id: 'bien1',
                            display: 'none',
                            type: 'image',
                            rect: ['1179px', '204px', '42px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien.svg",'0px','0px']
                        },
                        {
                            id: 'mal1',
                            display: 'none',
                            type: 'image',
                            rect: ['1186px', '204px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mal.svg",'0px','0px']
                        },
                        {
                            id: 'bien2',
                            display: 'none',
                            type: 'image',
                            rect: ['1179px', '256px', '42px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien.svg",'0px','0px']
                        },
                        {
                            id: 'mal2',
                            display: 'none',
                            type: 'image',
                            rect: ['1186px', '256px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mal.svg",'0px','0px']
                        },
                        {
                            id: 'bien3',
                            display: 'none',
                            type: 'image',
                            rect: ['1180px', '306px', '42px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien.svg",'0px','0px']
                        },
                        {
                            id: 'mal3',
                            display: 'none',
                            type: 'image',
                            rect: ['1187px', '306px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mal.svg",'0px','0px']
                        },
                        {
                            id: 'bien4',
                            display: 'none',
                            type: 'image',
                            rect: ['1181px', '356px', '42px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien.svg",'0px','0px']
                        },
                        {
                            id: 'mal4',
                            display: 'none',
                            type: 'image',
                            rect: ['1188px', '356px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mal.svg",'0px','0px']
                        },
                        {
                            id: 'btna_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '365px', '520px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_1"
                        },
                        {
                            id: 'btnb_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '420px', '498px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_1"
                        },
                        {
                            id: 'btnc_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '486px', '409px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_1"
                        },
                        {
                            id: 'btnd_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '540px', '566px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_1"
                        },
                        {
                            id: 'btna_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '365px', '520px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_2"
                        },
                        {
                            id: 'btnb_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '420px', '498px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_2"
                        },
                        {
                            id: 'btnc_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '486px', '409px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_2"
                        },
                        {
                            id: 'btnd_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '540px', '566px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_2"
                        },
                        {
                            id: 'btna_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '365px', '520px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_3"
                        },
                        {
                            id: 'btnb_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '420px', '498px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_3"
                        },
                        {
                            id: 'btnc_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '486px', '409px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_3"
                        },
                        {
                            id: 'btnd_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '540px', '566px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_3"
                        },
                        {
                            id: 'btna_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '365px', '520px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_4"
                        },
                        {
                            id: 'btnb_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['386px', '420px', '498px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_4"
                        },
                        {
                            id: 'btnc_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '486px', '409px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_4"
                        },
                        {
                            id: 'btnd_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['392px', '540px', '566px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "pre_4"
                        },
                        {
                            id: 'btn_pre2',
                            display: 'none',
                            type: 'rect',
                            rect: ['547px', '15px', '116px', '89px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_pre2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['683px', '13px', '116px', '89px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_pre2Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['831px', '13px', '116px', '89px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'bien',
                            display: 'none',
                            volume: '0.8',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"bien.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'mal22',
                            display: 'none',
                            volume: '0.58571428571429',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"mal2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'victoria',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"victoria.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'instrucciones',
                            symbolName: 'instrucciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['615', '356', '604', '237', 'auto', 'auto']
                        },
                        {
                            id: 'btn_instrucciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1222px', '399px', '58px', '202px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'fondo_ai',
                            display: 'none',
                            volume: '0.62857142857143',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [aud+"fondo_ai.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'logrado',
                            symbolName: 'logrado',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1', '0', '1280', '601', 'auto', 'auto']
                        },
                        {
                            id: 'no_logrado',
                            symbolName: 'no_logrado',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '601', 'auto', 'auto']
                        },
                        {
                            id: 'flechapunteda-red',
                            display: 'none',
                            type: 'image',
                            rect: ['1010px', '490px', '57px', '58px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flechapunteda-red.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 59222.327,
                    autoPlay: true,
                    labels: {
                        "pre2": 2953,
                        "pre3": 4438,
                        "pre4": 5923,
                        "res1": 7750,
                        "res2": 8763,
                        "res3": 9776,
                        "res4": 10789,
                        "fin": 11902
                    },
                    data: [
                        [
                            "eid200",
                            "display",
                            11242,
                            0,
                            "easeOutBack",
                            "${flechapunteda-red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            11569,
                            0,
                            "easeOutBack",
                            "${flechapunteda-red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${bien-gande}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            8583,
                            0,
                            "linear",
                            "${bien-gande}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            8763,
                            0,
                            "linear",
                            "${bien-gande}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            9596,
                            0,
                            "linear",
                            "${bien-gande}",
                            'block',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            9776,
                            0,
                            "linear",
                            "${bien-gande}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            10609,
                            0,
                            "linear",
                            "${bien-gande}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            10789,
                            0,
                            "linear",
                            "${bien-gande}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            11622,
                            0,
                            "linear",
                            "${bien-gande}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            5438,
                            0,
                            "linear",
                            "${btnd_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            5832,
                            0,
                            "linear",
                            "${btnd_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btnb_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            2894,
                            0,
                            "linear",
                            "${btnb_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            2725,
                            0,
                            "linear",
                            "${rosa1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${rosa2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            8583,
                            0,
                            "linear",
                            "${rosa2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            1750,
                            500,
                            "linear",
                            "${personaje1}",
                            '90px',
                            '84px'
                        ],
                        [
                            "eid31",
                            "left",
                            4938,
                            500,
                            "easeOutElastic",
                            "${personaje3}",
                            '109px',
                            '102px'
                        ],
                        [
                            "eid187",
                            "display",
                            10000,
                            0,
                            "easeOutBack",
                            "${btn_pre2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            10571,
                            0,
                            "easeOutBack",
                            "${btn_pre2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${no_logrado}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${marcador}",
                            '191px',
                            '185px'
                        ],
                        [
                            "eid180",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${btn_instrucciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            4454,
                            0,
                            "linear",
                            "${verde1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            5727,
                            0,
                            "linear",
                            "${verde1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            8763,
                            500,
                            "linear",
                            "${naranja2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "display",
                            3953,
                            0,
                            "linear",
                            "${btna_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            4347,
                            0,
                            "linear",
                            "${btna_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "clip",
                            0,
                            750,
                            "easeOutBack",
                            "${fondo}",
                            [0,0,601,0],
                            [0,1281,601,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid144",
                            "scaleY",
                            9776,
                            500,
                            "linear",
                            "${verde2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "display",
                            3453,
                            0,
                            "easeOutElastic",
                            "${personaje2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            4226,
                            0,
                            "linear",
                            "${personaje2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            8763,
                            0,
                            "linear",
                            "${personaje2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            9596,
                            0,
                            "easeOutElastic",
                            "${personaje2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            9776,
                            500,
                            "linear",
                            "${verde2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "left",
                            3453,
                            500,
                            "easeOutElastic",
                            "${personaje2}",
                            '60px',
                            '54px'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            5438,
                            0,
                            "linear",
                            "${btnb_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            5832,
                            0,
                            "linear",
                            "${btnb_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            3953,
                            0,
                            "linear",
                            "${btnc_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            4347,
                            0,
                            "linear",
                            "${btnc_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            4938,
                            0,
                            "easeOutElastic",
                            "${personaje3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            5711,
                            0,
                            "linear",
                            "${personaje3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            9776,
                            0,
                            "linear",
                            "${personaje3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            10609,
                            0,
                            "easeOutElastic",
                            "${personaje3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            3953,
                            0,
                            "linear",
                            "${btnb_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            4347,
                            0,
                            "linear",
                            "${btnb_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${instrucciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "scaleX",
                            7750,
                            500,
                            "linear",
                            "${rosa2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2953,
                            500,
                            "linear",
                            "${naranja-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "display",
                            9776,
                            0,
                            "linear",
                            "${verde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            10609,
                            0,
                            "linear",
                            "${verde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "top",
                            4938,
                            500,
                            "easeOutElastic",
                            "${personaje3}",
                            '597px',
                            '93px'
                        ],
                        [
                            "eid95",
                            "display",
                            5923,
                            0,
                            "linear",
                            "${morado-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            7196,
                            0,
                            "linear",
                            "${morado-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            6407,
                            0,
                            "easeOutElastic",
                            "${personaje4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            7180,
                            0,
                            "linear",
                            "${personaje4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            10789,
                            0,
                            "linear",
                            "${personaje4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            11622,
                            0,
                            "easeOutElastic",
                            "${personaje4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            8763,
                            500,
                            "linear",
                            "${naranja2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "top",
                            1750,
                            500,
                            "linear",
                            "${personaje1}",
                            '612px',
                            '108px'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            10789,
                            500,
                            "linear",
                            "${morado-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            7750,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            8763,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            9776,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            10789,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${personaje1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            2725,
                            0,
                            "linear",
                            "${personaje1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${personaje1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            8583,
                            0,
                            "easeOutElastic",
                            "${personaje1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            7881,
                            0,
                            "easeOutBack",
                            "${btn_pre2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            8452,
                            0,
                            "easeOutBack",
                            "${btn_pre2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            3953,
                            0,
                            "linear",
                            "${btnd_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            4347,
                            0,
                            "linear",
                            "${btnd_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${rosa1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            4454,
                            500,
                            "linear",
                            "${verde1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btna_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            2894,
                            0,
                            "linear",
                            "${btna_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "scaleX",
                            10789,
                            500,
                            "linear",
                            "${morado-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "display",
                            5438,
                            0,
                            "linear",
                            "${btnc_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            5832,
                            0,
                            "linear",
                            "${btnc_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${marcador}",
                            '1292px',
                            '1186px'
                        ],
                        [
                            "eid116",
                            "display",
                            6907,
                            0,
                            "linear",
                            "${btnc_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            7301,
                            0,
                            "linear",
                            "${btnc_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "top",
                            3453,
                            500,
                            "easeOutElastic",
                            "${personaje2}",
                            '647px',
                            '143px'
                        ],
                        [
                            "eid118",
                            "display",
                            6907,
                            0,
                            "linear",
                            "${btnb_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            7301,
                            0,
                            "linear",
                            "${btnb_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            9000,
                            0,
                            "easeOutBack",
                            "${btn_pre2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            9571,
                            0,
                            "easeOutBack",
                            "${btn_pre2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            6907,
                            0,
                            "linear",
                            "${btna_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            7301,
                            0,
                            "linear",
                            "${btna_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "scaleX",
                            7750,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "scaleX",
                            8763,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            9776,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "scaleX",
                            10789,
                            500,
                            "linear",
                            "${bien-gande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            5923,
                            500,
                            "linear",
                            "${morado-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${menu}",
                            '1290px',
                            '18px'
                        ],
                        [
                            "eid112",
                            "display",
                            5438,
                            0,
                            "linear",
                            "${btna_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            5832,
                            0,
                            "linear",
                            "${btna_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            8763,
                            0,
                            "linear",
                            "${naranja2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            9596,
                            0,
                            "linear",
                            "${naranja2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            7750,
                            500,
                            "linear",
                            "${rosa2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btnc_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            2894,
                            0,
                            "linear",
                            "${btnc_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "top",
                            750,
                            500,
                            "easeOutBack",
                            "${menu}",
                            '13px',
                            '5px'
                        ],
                        [
                            "eid203",
                            "opacity",
                            11242,
                            152,
                            "easeOutBack",
                            "${flechapunteda-red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "display",
                            6907,
                            0,
                            "linear",
                            "${btnd_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            7301,
                            0,
                            "linear",
                            "${btnd_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            10789,
                            0,
                            "linear",
                            "${morado-02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            11622,
                            0,
                            "linear",
                            "${morado-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "top",
                            6407,
                            500,
                            "easeOutElastic",
                            "${personaje4}",
                            '628px',
                            '124px'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btnd_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            2894,
                            0,
                            "linear",
                            "${btnd_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "left",
                            6407,
                            500,
                            "easeOutElastic",
                            "${personaje4}",
                            '100px',
                            '94px'
                        ],
                        [
                            "eid24",
                            "display",
                            2953,
                            0,
                            "linear",
                            "${naranja-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            4226,
                            0,
                            "linear",
                            "${naranja-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${logrado}",
                            'none',
                            'none'
                        ],
                            [ "eid191", "trigger", 1126, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${fondo_ai}', [0] ] ]
                    ]
                }
            },
            "instrucciones": {
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
                            id: 'intrucciones',
                            type: 'image',
                            rect: ['0px', '0px', '604px', '237px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intrucciones.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['536px', '39px', '68px', '46px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '604px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid178",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${intrucciones}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "logrado": {
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
                            id: 'bienfinal',
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            clip: 'rect(0px 1280px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/bienfinal.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['682px', '404px', '248px', '52px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid195",
                            "clip",
                            0,
                            750,
                            "easeOutBack",
                            "${bienfinal}",
                            [0,1280,0,0],
                            [0,1280,601,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "no_logrado": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            id: 'malfinal',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/malfinal.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['725px', '423px', '188px', '39px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['651px', '500px', '86px', '39px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle4',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid197",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "clip",
                            0,
                            750,
                            "easeOutBack",
                            "${malfinal}",
                            [0,1280,0,0],
                            [0,1280,601,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-647223614");

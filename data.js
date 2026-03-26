var APP_DATA = {
  "scenes": [
    {
      "id": "0-01-sala",
      "name": "01-SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.5108146801586742,
        "pitch": 0.00952534676316752,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.32635634433130534,
          "pitch": 0.11257651440861594,
          "rotation": 0.7853981633974483,
          "target": "1-02-piscina"
        },
        {
          "yaw": 1.983855100935223,
          "pitch": -0.14763963345465747,
          "rotation": 0.7853981633974483,
          "target": "2-03-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02-piscina",
      "name": "02-PISCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014726398366395443,
          "pitch": 0.058838711115605236,
          "rotation": 0,
          "target": "0-01-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03-pasillo",
      "name": "03-PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9436476193550938,
          "pitch": 0.2905756811425313,
          "rotation": 3.9269908169872414,
          "target": "0-01-sala"
        },
        {
          "yaw": 0.5169404258993744,
          "pitch": 0.3103798983949737,
          "rotation": 0.7853981633974483,
          "target": "3-04-bao"
        },
        {
          "yaw": -0.044156276983249754,
          "pitch": 0.06465110117527573,
          "rotation": 0,
          "target": "5-06-habitacin_2"
        },
        {
          "yaw": -0.8369091350560236,
          "pitch": 0.268759797888384,
          "rotation": 5.497787143782138,
          "target": "4-05-habitacin_1"
        },
        {
          "yaw": -2.964558674771773,
          "pitch": 0.009947918471839401,
          "rotation": 0.7853981633974483,
          "target": "6-07-habitacin_prin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04-bao",
      "name": "04-BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.2618201308923602,
        "pitch": 0.37545310575704427,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.0899260663235477,
          "pitch": 0.31071204926620233,
          "rotation": 0,
          "target": "2-03-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05-habitacin_1",
      "name": "05-HABITACIÓN_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8357958617392303,
          "pitch": 0.25153501350391494,
          "rotation": 5.497787143782138,
          "target": "2-03-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06-habitacin_2",
      "name": "06-HABITACIÓN_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1424182488010999,
          "pitch": 0.06032230832566654,
          "rotation": 10.995574287564278,
          "target": "2-03-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-07-habitacin_prin",
      "name": "07-HABITACIÓN_PRIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.4630459997316283,
        "pitch": 0.06007249692112637,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.0248035637679127,
          "pitch": 0.1356471912295376,
          "rotation": 7.853981633974483,
          "target": "2-03-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "APTO_PALMAS_DE_MALLORCA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

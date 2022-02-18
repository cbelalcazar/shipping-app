export const CREATE_SHIPMENT_PAYLOAD = {
    "address_from": {
      "province": "Ciudad de México",
      "city": "Azcapotzalco",
      "name": "Jose Fernando",
      "zip": "02900",
      "country": "MX",
      "address1": "Av. Principal #234",
      "company": "skydropx",
      "address2": "Centro",
      "phone": "5555555555",
      "email": "skydropx@email.com"
    },
    "parcels": [
      {
        "weight": 3,
        "distance_unit": "CM",
        "mass_unit": "KG",
        "height": 10,
        "width": 10,
        "length": 10
      }
    ],
    "address_to": {
      "province": "Jalisco",
      "city": "Guadalajara",
      "name": "Jorge Fernández",
      "zip": "44100",
      "country": "MX",
      "address1": " Av. Lázaro Cárdenas #234",
      "company": "-",
      "address2": "Americana",
      "phone": "5555555555",
      "email": "ejemplo@skydropx.com",
      "reference": "Frente a tienda de abarro",
      "contents": "Fooood"
    },
    "consignment_note_class_code": "53131600",
    "consignment_note_packaging_code": "1H1"
};

export const CREATE_SHIPMENT_ENDPOINT = 'https://api-demo.skydropx.com/v1/shipments';
export const CONFIG = {
    headers: { Authorization: `Bearer Fk09kz3ivwbM4sImxQbgd8AGekxAncWWghk4Otv2fiYt` }
};

export const MOCK_RESULTS_ENDPOINT = {
    "data": {
        "id": "20090",
        "type": "shipments",
        "attributes": {
            "status": "WAITING",
            "created_at": "2022-02-17T23:17:09.548-06:00",
            "updated_at": "2022-02-17T23:17:09.585-06:00"
        },
        "relationships": {
            "parcels": {
                "data": [
                    {
                        "id": "20394",
                        "type": "parcels"
                    }
                ]
            },
            "rates": {
                "data": [
                    {
                        "id": "99969",
                        "type": "rates"
                    },
                    {
                        "id": "99970",
                        "type": "rates"
                    },
                    {
                        "id": "99971",
                        "type": "rates"
                    },
                    {
                        "id": "99968",
                        "type": "rates"
                    },
                    {
                        "id": "99967",
                        "type": "rates"
                    },
                    {
                        "id": "99966",
                        "type": "rates"
                    },
                    {
                        "id": "99965",
                        "type": "rates"
                    }
                ]
            },
            "address_to": {
                "data": {
                    "id": "40670",
                    "type": "addresses"
                }
            },
            "address_from": {
                "data": {
                    "id": "40669",
                    "type": "addresses"
                }
            },
            "labels": {
                "data": []
            },
            "consignment_note_product_class": {
                "data": {
                    "id": 3115,
                    "name": "Baño y cuerpo",
                    "code": "53131600",
                    "subcategory_id": 288,
                    "created_at": "2021-12-03T12:27:34.662-06:00",
                    "updated_at": "2021-12-03T12:27:34.662-06:00"
                }
            }
        }
    },
    "included": [
        {
            "id": "20394",
            "type": "parcels",
            "attributes": {
                "length": "10.0",
                "height": "10.0",
                "width": "10.0",
                "weight": "3.0",
                "mass_unit": "KG",
                "distance_unit": "CM"
            }
        },
        {
            "id": "99969",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:10.088-06:00",
                "updated_at": "2022-02-17T23:17:10.150-06:00",
                "amount_local": "331.0",
                "currency_local": "MXN",
                "provider": "DHL",
                "service_level_name": "DHL Terrestre",
                "service_level_code": "STANDARD",
                "service_level_terms": null,
                "days": 5,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "331.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99970",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:10.093-06:00",
                "updated_at": "2022-02-17T23:17:10.145-06:00",
                "amount_local": "362.0",
                "currency_local": "MXN",
                "provider": "DHL",
                "service_level_name": "DHL Express",
                "service_level_code": "EXPRESS",
                "service_level_terms": null,
                "days": 2,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "362.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99971",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:10.113-06:00",
                "updated_at": "2022-02-17T23:17:10.139-06:00",
                "amount_local": "134.0",
                "currency_local": "MXN",
                "provider": "CARSSA",
                "service_level_name": "Nacional",
                "service_level_code": "NACIONAL",
                "service_level_terms": null,
                "days": 10,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "134.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99968",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:09.846-06:00",
                "updated_at": "2022-02-17T23:17:10.155-06:00",
                "amount_local": "219.0",
                "currency_local": "MXN",
                "provider": "ESTAFETA",
                "service_level_name": "Servicio Express",
                "service_level_code": "ESTAFETA_NEXT_DAY",
                "service_level_terms": null,
                "days": 2,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "219.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99967",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:09.841-06:00",
                "updated_at": "2022-02-17T23:17:10.160-06:00",
                "amount_local": "174.0",
                "currency_local": "MXN",
                "provider": "ESTAFETA",
                "service_level_name": "Terrestre",
                "service_level_code": "ESTAFETA_STANDARD",
                "service_level_terms": null,
                "days": 5,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "174.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99966",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:09.712-06:00",
                "updated_at": "2022-02-17T23:17:10.165-06:00",
                "amount_local": "271.0",
                "currency_local": "MXN",
                "provider": "FEDEX",
                "service_level_name": "Standard Overnight",
                "service_level_code": "STANDARD_OVERNIGHT",
                "service_level_terms": null,
                "days": 2,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "271.0",
                "is_ocurre": false
            }
        },
        {
            "id": "99965",
            "type": "rates",
            "attributes": {
                "created_at": "2022-02-17T23:17:09.706-06:00",
                "updated_at": "2022-02-17T23:17:10.170-06:00",
                "amount_local": "185.0",
                "currency_local": "MXN",
                "provider": "FEDEX",
                "service_level_name": "Fedex Express Saver",
                "service_level_code": "FEDEX_EXPRESS_SAVER",
                "service_level_terms": null,
                "days": 5,
                "duration_terms": null,
                "zone": null,
                "arrives_by": null,
                "out_of_area": false,
                "out_of_area_pricing": "0.0",
                "total_pricing": "185.0",
                "is_ocurre": false
            }
        },
        {
            "id": "40670",
            "type": "addresses",
            "attributes": {
                "name": "Jorge Fernández",
                "company": "-",
                "address1": "Av. Lázaro Cárdenas #234",
                "address2": "Americana",
                "city": "Guadalajara",
                "province": "Jalisco",
                "zip": "44100",
                "country": "MX",
                "phone": "5555555555",
                "email": "ejemplo@skydropx.com",
                "created_at": "2022-02-17T23:17:09.544-06:00",
                "updated_at": "2022-02-17T23:17:09.544-06:00",
                "reference": "Frente a tienda de abarro",
                "province_code": "JA",
                "contents": "Fooood"
            }
        },
        {
            "id": "40669",
            "type": "addresses",
            "attributes": {
                "name": "Jose Fernando",
                "company": "skydropx",
                "address1": "Av. Principal #234",
                "address2": "Centro",
                "city": "Azcapotzalco",
                "province": "Ciudad de México",
                "zip": "02900",
                "country": "MX",
                "phone": "5555555555",
                "email": "skydropx@email.com",
                "created_at": "2022-02-17T23:17:09.538-06:00",
                "updated_at": "2022-02-17T23:17:09.538-06:00",
                "reference": null,
                "province_code": "DF",
                "contents": null
            }
        }
    ]
};
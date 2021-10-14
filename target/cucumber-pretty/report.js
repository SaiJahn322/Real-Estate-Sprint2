$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addnew.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Testing of Realestate website",
  "description": "",
  "id": "automation-testing-of-realestate-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Property fields",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is at Property fields",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on price filed and enter \"\u003cprice\u003e\" in this step",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin enter the Price per sq meter/sq ft \"\u003cPrice per sq meter/sq ft\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "select the anyone of the offer type \"\u003coffertype\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type \"\u003cproptype\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on main details field and enter \"\u003cstatus\u003e\",\"\u003clocation\u003e\" and \"\u003cposession\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on location field and enter address \"\u003caddress\u003e\",Google Maps Address \"\u003cGoogle Maps Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "admin click on Details field and enter storage room details here \"\u003cstorage room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "admin click on video and enter video details here \"\u003cvideo\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-fields;",
  "rows": [
    {
      "cells": [
        "price",
        "Price per sq meter/sq ft",
        "offertype",
        "proptype",
        "status",
        "location",
        "posession",
        "address",
        "Google Maps Address",
        "storage room",
        "video"
      ],
      "line": 28,
      "id": "automation-testing-of-realestate-website;property-fields;;1"
    },
    {
      "cells": [
        "1234",
        "1234",
        "For Rent",
        "Apartments",
        "123jkhjdslha",
        "y13t4ey45",
        "tyt456ujed",
        "123-23Ajkh",
        "hyderabad",
        "storage_rm",
        "vid"
      ],
      "line": 29,
      "id": "automation-testing-of-realestate-website;property-fields;;2"
    },
    {
      "cells": [
        "",
        "",
        "For Lease",
        "Villas",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 30,
      "id": "automation-testing-of-realestate-website;property-fields;;3"
    },
    {
      "cells": [
        "$1,234",
        "1234",
        "For Lease",
        "Villas",
        "123jkhjdslha",
        "y13t4ey45",
        "tyt456ujed",
        "123-23Ajkh",
        "jhgslga",
        "",
        ""
      ],
      "line": 31,
      "id": "automation-testing-of-realestate-website;property-fields;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26495448301,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "signup",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin will enter the username \"amit92luthra\" and password \"admin@987654321\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin will click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "will redirected to the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on Properties and click on Add New",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 3717186201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit92luthra",
      "offset": 31
    },
    {
      "val": "admin@987654321",
      "offset": 59
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3186323601,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 15456746400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5053395900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 14338080600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Property fields",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is at Property fields",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on price filed and enter \"1234\" in this step",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin enter the Price per sq meter/sq ft \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "select the anyone of the offer type \"For Rent\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type \"Apartments\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on main details field and enter \"123jkhjdslha\",\"y13t4ey45\" and \"tyt456ujed\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on location field and enter address \"123-23Ajkh\",Google Maps Address \"hyderabad\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "admin click on Details field and enter storage room details here \"storage_rm\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "admin click on video and enter video details here \"vid\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_at_Property_fields()"
});
formatter.result({
  "duration": 3004122300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 38
    }
  ],
  "location": "Addnewdefinition.admin_click_on_price_filed_and_enter_in_this_step(String)"
});
formatter.result({
  "duration": 3136176900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "Addnewdefinition.admin_enter_the_Price_per_sq_meter_sq_ft(String)"
});
formatter.result({
  "duration": 3148042299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Rent",
      "offset": 37
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_offer_type(String)"
});
formatter.result({
  "duration": 3331092100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apartments",
      "offset": 40
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_property_type(String)"
});
formatter.result({
  "duration": 3230617000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123jkhjdslha",
      "offset": 39
    },
    {
      "val": "y13t4ey45",
      "offset": 54
    },
    {
      "val": "tyt456ujed",
      "offset": 70
    }
  ],
  "location": "Addnewdefinition.click_on_main_details_field_and_enter_and(String,String,String)"
});
formatter.result({
  "duration": 3558473700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-23Ajkh",
      "offset": 43
    },
    {
      "val": "hyderabad",
      "offset": 76
    }
  ],
  "location": "Addnewdefinition.click_on_location_field_and_enter_address_Google_Maps_Address(String,String)"
});
formatter.result({
  "duration": 6445228000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "storage_rm",
      "offset": 66
    }
  ],
  "location": "Addnewdefinition.admin_click_on_Details_field_and_enter_storage_room_details_here(String)"
});
formatter.result({
  "duration": 3311559699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vid",
      "offset": 51
    }
  ],
  "location": "Addnewdefinition.admin_click_on_video_and_enter_video_details_here(String)"
});
formatter.result({
  "duration": 3345510600,
  "status": "passed"
});
formatter.after({
  "duration": 55100,
  "status": "passed"
});
formatter.before({
  "duration": 18359073000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "signup",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin will enter the username \"amit92luthra\" and password \"admin@987654321\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin will click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "will redirected to the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on Properties and click on Add New",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 3094845800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit92luthra",
      "offset": 31
    },
    {
      "val": "admin@987654321",
      "offset": 59
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3213016200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 12522694300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5049187400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 13609524401,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Property fields",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-fields;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is at Property fields",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on price filed and enter \"\" in this step",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin enter the Price per sq meter/sq ft \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "select the anyone of the offer type \"For Lease\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type \"Villas\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on main details field and enter \"\",\"\" and \"\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on location field and enter address \"\",Google Maps Address \"\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "admin click on Details field and enter storage room details here \"\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "admin click on video and enter video details here \"\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_at_Property_fields()"
});
formatter.result({
  "duration": 3012658501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "Addnewdefinition.admin_click_on_price_filed_and_enter_in_this_step(String)"
});
formatter.result({
  "duration": 3117224799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "Addnewdefinition.admin_enter_the_Price_per_sq_meter_sq_ft(String)"
});
formatter.result({
  "duration": 3109665801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Lease",
      "offset": 37
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_offer_type(String)"
});
formatter.result({
  "duration": 3264640901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Villas",
      "offset": 40
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_property_type(String)"
});
formatter.result({
  "duration": 3271319901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 39
    },
    {
      "val": "",
      "offset": 42
    },
    {
      "val": "",
      "offset": 49
    }
  ],
  "location": "Addnewdefinition.click_on_main_details_field_and_enter_and(String,String,String)"
});
formatter.result({
  "duration": 3340802300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "Addnewdefinition.click_on_location_field_and_enter_address_Google_Maps_Address(String,String)"
});
formatter.result({
  "duration": 6299930600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "Addnewdefinition.admin_click_on_Details_field_and_enter_storage_room_details_here(String)"
});
formatter.result({
  "duration": 3217386699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "Addnewdefinition.admin_click_on_video_and_enter_video_details_here(String)"
});
formatter.result({
  "duration": 3239265800,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.before({
  "duration": 19804924600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "signup",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "admin is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin will enter the username \"amit92luthra\" and password \"admin@987654321\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin will click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "will redirected to the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on Properties and click on Add New",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_login_page()"
});
formatter.result({
  "duration": 3100524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit92luthra",
      "offset": 31
    },
    {
      "val": "admin@987654321",
      "offset": 59
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3221419801,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 14907005999,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5058716501,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 17415717700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Property fields",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-fields;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "admin is at Property fields",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "admin click on price filed and enter \"$1,234\" in this step",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "admin enter the Price per sq meter/sq ft \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "select the anyone of the offer type \"For Lease\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type \"Villas\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on main details field and enter \"123jkhjdslha\",\"y13t4ey45\" and \"tyt456ujed\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on location field and enter address \"123-23Ajkh\",Google Maps Address \"jhgslga\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "admin click on Details field and enter storage room details here \"\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "admin click on video and enter video details here \"\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_at_Property_fields()"
});
formatter.result({
  "duration": 3003279200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,234",
      "offset": 38
    }
  ],
  "location": "Addnewdefinition.admin_click_on_price_filed_and_enter_in_this_step(String)"
});
formatter.result({
  "duration": 3128607800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 42
    }
  ],
  "location": "Addnewdefinition.admin_enter_the_Price_per_sq_meter_sq_ft(String)"
});
formatter.result({
  "duration": 3165540699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For Lease",
      "offset": 37
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_offer_type(String)"
});
formatter.result({
  "duration": 3304290100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Villas",
      "offset": 40
    }
  ],
  "location": "Addnewdefinition.select_the_anyone_of_the_property_type(String)"
});
formatter.result({
  "duration": 3292357400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123jkhjdslha",
      "offset": 39
    },
    {
      "val": "y13t4ey45",
      "offset": 54
    },
    {
      "val": "tyt456ujed",
      "offset": 70
    }
  ],
  "location": "Addnewdefinition.click_on_main_details_field_and_enter_and(String,String,String)"
});
formatter.result({
  "duration": 3466004200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123-23Ajkh",
      "offset": 43
    },
    {
      "val": "jhgslga",
      "offset": 76
    }
  ],
  "location": "Addnewdefinition.click_on_location_field_and_enter_address_Google_Maps_Address(String,String)"
});
formatter.result({
  "duration": 6396807000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "Addnewdefinition.admin_click_on_Details_field_and_enter_storage_room_details_here(String)"
});
formatter.result({
  "duration": 3189201800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "Addnewdefinition.admin_click_on_video_and_enter_video_details_here(String)"
});
formatter.result({
  "duration": 3274689500,
  "status": "passed"
});
formatter.after({
  "duration": 58100,
  "status": "passed"
});
});
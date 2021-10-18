$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addnew.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Testing of Realestate website",
  "description": "",
  "id": "automation-testing-of-realestate-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15418005900,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3283228400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3302724000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 15796945900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5051623800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 49181932300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Property Gallery field",
  "description": "",
  "id": "automation-testing-of-realestate-website;property-gallery-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "admin is on the Add New page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "select any one of them from the drop down list",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Add_New_page()"
});
formatter.result({
  "duration": 3006558800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.select_any_one_of_them_from_the_drop_down_list()"
});
formatter.result({
  "duration": 3091457500,
  "status": "passed"
});
formatter.after({
  "duration": 56000,
  "status": "passed"
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
  "duration": 16675903800,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3108915700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3181681000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 15633125600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5055557400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 101730279700,
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
  "duration": 3014058200,
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
  "duration": 3130863200,
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
  "duration": 3136382500,
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
  "duration": 3255476300,
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
  "duration": 3195190100,
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
  "duration": 3521728700,
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
  "duration": 6375711900,
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
  "duration": 3237023100,
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
  "duration": 3252447400,
  "status": "passed"
});
formatter.after({
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 13185864200,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3095051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3220099100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 17505782000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5048686000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 11773787000,
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
  "duration": 3015014800,
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
  "duration": 3110764300,
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
  "duration": 3109812500,
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
  "duration": 3300143600,
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
  "duration": 3379090300,
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
  "duration": 3551587200,
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
  "duration": 6310979200,
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
  "duration": 3173007300,
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
  "duration": 3259596900,
  "status": "passed"
});
formatter.after({
  "duration": 33800,
  "status": "passed"
});
formatter.before({
  "duration": 17808048000,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3106944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3218743400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 16501599900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5048975800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 11441400800,
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
  "duration": 3001063900,
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
  "duration": 3136938500,
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
  "duration": 3172799800,
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
  "duration": 3310676800,
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
  "duration": 3311003400,
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
  "duration": 3544761000,
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
  "duration": 6409598700,
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
  "duration": 3204950700,
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
  "duration": 3221201400,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Findeo Property Options",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "admin is on the add new page and at Findeo Property Options",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "click on the drop down list and select from the drop down list \"\u003csel\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options;",
  "rows": [
    {
      "cells": [
        "sel"
      ],
      "line": 39,
      "id": "automation-testing-of-realestate-website;findeo-property-options;;1"
    },
    {
      "cells": [
        "Header"
      ],
      "line": 40,
      "id": "automation-testing-of-realestate-website;findeo-property-options;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16122438400,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3091838200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3212505000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 14930607200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5053632600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 11381380200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Findeo Property Options",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "admin is on the add new page and at Findeo Property Options",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "click on the drop down list and select from the drop down list \"Header\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_add_new_page_and_at_Findeo_Property_Options()"
});
formatter.result({
  "duration": 5059023800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Header",
      "offset": 64
    }
  ],
  "location": "Addnewdefinition.click_on_the_drop_down_list_and_select_from_the_drop_down_list(String)"
});
formatter.result({
  "duration": 3142924700,
  "status": "passed"
});
formatter.after({
  "duration": 97700,
  "status": "passed"
});
formatter.before({
  "duration": 22321156900,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3096409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3161921200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 16350736900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5050216400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 17005129300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Discussion field and Revolution slider Options field",
  "description": "",
  "id": "automation-testing-of-realestate-website;discussion-field-and-revolution-slider-options-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "admin is on the Discussion field",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "admin click on multiple check boxes",
  "keyword": "When "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Discussion_field()"
});
formatter.result({
  "duration": 3055919800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_multiple_check_boxes()"
});
formatter.result({
  "duration": 118983000,
  "status": "passed"
});
formatter.after({
  "duration": 29500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Regions field",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "admin is on the Regions field",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "admin click all regions field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "admin click on the most used field of regions and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "click on add new region",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "enter the field of regions \"\u003cregion\u003e\" and select \"\u003cmstused\u003e\" from drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "click on Add new region button",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field;",
  "rows": [
    {
      "cells": [
        "region",
        "mstused"
      ],
      "line": 57,
      "id": "automation-testing-of-realestate-website;regions-field;;1"
    },
    {
      "cells": [
        "abc",
        "Pune"
      ],
      "line": 58,
      "id": "automation-testing-of-realestate-website;regions-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16127160200,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3079102500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3212903600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 63708229200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 9629181600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 13303135900,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Regions field",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "admin is on the Regions field",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "admin click all regions field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "admin click on the most used field of regions and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "click on add new region",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "enter the field of regions \"abc\" and select \"Pune\" from drop down",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "click on Add new region button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Regions_field()"
});
formatter.result({
  "duration": 3832366900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_all_regions_field_and_select_multiple_check_boxes()"
});
formatter.result({
  "duration": 1124128900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_the_most_used_field_of_regions_and_select_multiple_check_boxex()"
});
formatter.result({
  "duration": 5121387100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_add_new_region()"
});
formatter.result({
  "duration": 5131802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 28
    },
    {
      "val": "Pune",
      "offset": 45
    }
  ],
  "location": "Addnewdefinition.enter_the_field_of_regions_and_select_from_drop_down(String,String)"
});
formatter.result({
  "duration": 5246479200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Add_new_region_button()"
});
formatter.result({
  "duration": 3730113500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat StepDefinition.Addnewdefinition.click_on_Add_new_region_button(Addnewdefinition.java:417)\r\n\tat ✽.Then click on Add new region button(Addnew.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 77500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "Features field",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "admin is on the Features field",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "admin click all Features field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "admin click on the most used field of features and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "click on add new features",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "enter the field of features \"\u003cfeature\u003e\" and select \"\u003cmstused\u003e\" from drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on Add new features button",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field;",
  "rows": [
    {
      "cells": [
        "feature",
        "mstused"
      ],
      "line": 70,
      "id": "automation-testing-of-realestate-website;features-field;;1"
    },
    {
      "cells": [
        "abc",
        ",knh/l"
      ],
      "line": 71,
      "id": "automation-testing-of-realestate-website;features-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18051140500,
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
  "name": "admin will enter the username \"mohankrishna176@gmail.com\" and password \"Secret@123\u0026\u0026\"",
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
  "duration": 3078162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohankrishna176@gmail.com",
      "offset": 31
    },
    {
      "val": "Secret@123\u0026\u0026",
      "offset": 72
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3218783500,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 15640337200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5047517200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 14848071600,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Features field",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "admin is on the Features field",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "admin click all Features field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "admin click on the most used field of features and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "click on add new features",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "enter the field of features \"abc\" and select \",knh/l\" from drop down",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on Add new features button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Features_field()"
});
formatter.result({
  "duration": 5060855800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_all_Features_field_and_select_multiple_check_boxes()"
});
formatter.result({
  "duration": 5445495300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_the_most_used_field_of_features_and_select_multiple_check_boxex()"
});
formatter.result({
  "duration": 5277480400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_add_new_features()"
});
formatter.result({
  "duration": 5141872800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 29
    },
    {
      "val": ",knh/l",
      "offset": 46
    }
  ],
  "location": "Addnewdefinition.enter_the_field_of_features_and_select_from_drop_down(String,String)"
});
formatter.result({
  "duration": 5281981300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Add_new_features_button()"
});
formatter.result({
  "duration": 5139705800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat StepDefinition.Addnewdefinition.click_on_Add_new_features_button(Addnewdefinition.java:501)\r\n\tat ✽.Then click on Add new features button(Addnew.feature:67)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
});
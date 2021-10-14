$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addnew.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Testing of Realestate website",
  "description": "",
  "id": "automation-testing-of-realestate-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21213901000,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3284122300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3248613100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 13711745900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5066227200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 12668468200,
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
  "duration": 3013191300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.select_any_one_of_them_from_the_drop_down_list()"
});
formatter.result({
  "duration": 3146474000,
  "status": "passed"
});
formatter.after({
  "duration": 157600,
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
  "name": "select the anyone of the offer type",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type",
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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23194931900,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3103444200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3249454500,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 13068441200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5061232600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 11995840600,
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
  "name": "select the anyone of the offer type",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select the anyone of the property type",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on main details field and enter \"123jkhjdslha\",\"y13t4ey45\" and \"tyt456ujed\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on location field and enter address \"123-23Ajkh\",Google Maps Address \"hyderabad\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "admin click on Details field and enter storage room details here \"storage_rm\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "admin click on video and enter video details here \"vid\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_at_Property_fields()"
});
formatter.result({
  "duration": 3010095800,
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
  "duration": 3167136700,
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
  "duration": 3150695100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.select_the_anyone_of_the_offer_type()"
});
formatter.result({
  "duration": 3254671200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.select_the_anyone_of_the_property_type()"
});
formatter.result({
  "duration": 3274202200,
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
  "duration": 3720875100,
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
  "duration": 6594787300,
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
  "duration": 3306898100,
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
  "duration": 3371515100,
  "status": "passed"
});
formatter.after({
  "duration": 190500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 31,
      "value": "#| 1234.5|                     1234 |              |           |            |            |                     |              |       |"
    }
  ],
  "line": 33,
  "name": "Findeo Property Options",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "admin is on the add new page and at Findeo Property Options",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "click on the drop down list and select from the drop down list \"\u003csel\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options;",
  "rows": [
    {
      "cells": [
        "sel"
      ],
      "line": 38,
      "id": "automation-testing-of-realestate-website;findeo-property-options;;1"
    },
    {
      "cells": [
        "Header"
      ],
      "line": 39,
      "id": "automation-testing-of-realestate-website;findeo-property-options;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15678428400,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3107007800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3266035700,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 12469231400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5060208300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 129190045800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Findeo Property Options",
  "description": "",
  "id": "automation-testing-of-realestate-website;findeo-property-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "admin is on the add new page and at Findeo Property Options",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
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
  "duration": 5059292600,
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
  "duration": 3201309300,
  "status": "passed"
});
formatter.after({
  "duration": 104500,
  "status": "passed"
});
formatter.before({
  "duration": 13506525600,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3098679400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3276235000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 14329530100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5065741400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 13515661400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Discussion field and Revolution slider Options field",
  "description": "",
  "id": "automation-testing-of-realestate-website;discussion-field-and-revolution-slider-options-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "admin is on the Discussion field",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "admin click on multiple check boxes",
  "keyword": "When "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Discussion_field()"
});
formatter.result({
  "duration": 3068470200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_multiple_check_boxes()"
});
formatter.result({
  "duration": 122376800,
  "status": "passed"
});
formatter.after({
  "duration": 73000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Regions field",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "admin is on the Regions field",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "admin click all regions field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "admin click on the most used field of regions and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "click on add new region",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "enter the field of regions \"\u003cregion\u003e\" and select \"\u003cmstused\u003e\" from drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on Add new region button",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field;",
  "rows": [
    {
      "cells": [
        "region",
        "mstused"
      ],
      "line": 56,
      "id": "automation-testing-of-realestate-website;regions-field;;1"
    },
    {
      "cells": [
        "abc",
        "Test1"
      ],
      "line": 57,
      "id": "automation-testing-of-realestate-website;regions-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16221298900,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3132030600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3281453000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 14051377000,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5064691800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 13208479300,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Regions field",
  "description": "",
  "id": "automation-testing-of-realestate-website;regions-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "admin is on the Regions field",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "admin click all regions field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "admin click on the most used field of regions and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "click on add new region",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "enter the field of regions \"abc\" and select \"Test1\" from drop down",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on Add new region button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Regions_field()"
});
formatter.result({
  "duration": 3062957300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_all_regions_field_and_select_multiple_check_boxes()"
});
formatter.result({
  "duration": 1449971300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_the_most_used_field_of_regions_and_select_multiple_check_boxex()"
});
formatter.result({
  "duration": 5368940900,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_add_new_region()"
});
formatter.result({
  "duration": 5127986700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 28
    },
    {
      "val": "Test1",
      "offset": 45
    }
  ],
  "location": "Addnewdefinition.enter_the_field_of_regions_and_select_from_drop_down(String,String)"
});
formatter.result({
  "duration": 5248329300,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Add_new_region_button()"
});
formatter.result({
  "duration": 3099378400,
  "status": "passed"
});
formatter.after({
  "duration": 50100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "Features field",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "admin is on the Features field",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "admin click all Features field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "admin click on the most used field of features and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on add new features",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter the field of features \"\u003cfeature\u003e\" and select \"\u003cmstused\u003e\" from drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click on Add new features button",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field;",
  "rows": [
    {
      "cells": [
        "feature",
        "mstused"
      ],
      "line": 69,
      "id": "automation-testing-of-realestate-website;features-field;;1"
    },
    {
      "cells": [
        "abc",
        "feat"
      ],
      "line": 70,
      "id": "automation-testing-of-realestate-website;features-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14080141400,
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
  "name": "admin will enter the username \"admin\" and password \"admin@123\"",
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
  "duration": 3091953500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    },
    {
      "val": "admin@123",
      "offset": 52
    }
  ],
  "location": "Addnewdefinition.admin_will_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3193040200,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_will_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 11168087400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.will_redirected_to_the_dashboard()"
});
formatter.result({
  "duration": 5045884800,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Properties_and_click_on_Add_New()"
});
formatter.result({
  "duration": 12730539500,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Features field",
  "description": "",
  "id": "automation-testing-of-realestate-website;features-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "admin is on the Features field",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "admin click all Features field and select multiple check boxes",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "admin click on the most used field of features and select multiple check boxex",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on add new features",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter the field of features \"abc\" and select \"feat\" from drop down",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click on Add new features button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addnewdefinition.admin_is_on_the_Features_field()"
});
formatter.result({
  "duration": 5069172100,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_all_Features_field_and_select_multiple_check_boxes()"
});
formatter.result({
  "duration": 5392551600,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.admin_click_on_the_most_used_field_of_features_and_select_multiple_check_boxex()"
});
formatter.result({
  "duration": 5291211400,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_add_new_features()"
});
formatter.result({
  "duration": 5128542300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 29
    },
    {
      "val": "feat",
      "offset": 46
    }
  ],
  "location": "Addnewdefinition.enter_the_field_of_features_and_select_from_drop_down(String,String)"
});
formatter.result({
  "duration": 5222551700,
  "status": "passed"
});
formatter.match({
  "location": "Addnewdefinition.click_on_Add_new_features_button()"
});
formatter.result({
  "duration": 5119021300,
  "status": "passed"
});
formatter.after({
  "duration": 110300,
  "status": "passed"
});
});
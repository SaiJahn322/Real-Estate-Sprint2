Feature: Automation Testing of Realestate website

  Background: signup
    Given admin is on the login page
    When admin will enter the username "mohankrishna176@gmail.com" and password "Secret@123&&"
    And admin will click on the sign in button
    Then will redirected to the dashboard
    Then click on Properties and click on Add New

  @tag1
  Scenario: Property Gallery field
    Given admin is on the Add New page
    Then select any one of them from the drop down list

  @tag2
  Scenario Outline: Property fields
    Given admin is at Property fields
    When admin click on price filed and enter "<price>" in this step
    Then admin enter the Price per sq meter/sq ft "<Price per sq meter/sq ft>"
    Then select the anyone of the offer type "<offertype>"
    Then select the anyone of the property type "<proptype>"
    And click on main details field and enter "<status>","<location>" and "<posession>"
    And click on location field and enter address "<address>",Google Maps Address "<Google Maps Address>"
    And admin click on Details field and enter storage room details here "<storage room>"
    Then admin click on video and enter video details here "<video>"

    Examples: 
      | price  | Price per sq meter/sq ft | offertype | proptype   | status       | location  | posession  | address    | Google Maps Address | storage room | video |
      |   1234 |                     1234 | For Rent  | Apartments | 123jkhjdslha | y13t4ey45 | tyt456ujed | 123-23Ajkh | hyderabad           | storage_rm   | vid   |
      |        |                          | For Lease | Villas     |              |           |            |            |                     |              |       |
      | $1,234 |                     1234 | For Lease | Villas     | 123jkhjdslha | y13t4ey45 | tyt456ujed | 123-23Ajkh | jhgslga             |              |       |

  @tag3
  Scenario Outline: Findeo Property Options
    Given admin is on the add new page and at Findeo Property Options
    When click on the drop down list and select from the drop down list "<sel>"

    Examples: 
      | sel    |
      | Header |

  @tag4
  Scenario: Discussion field and Revolution slider Options field
    Given admin is on the Discussion field
    When admin click on multiple check boxes

  @tag5
  Scenario Outline: Regions field
    Given admin is on the Regions field
    When admin click all regions field and select multiple check boxes
    Then admin click on the most used field of regions and select multiple check boxex
    And click on add new region
    Then enter the field of regions "<region>" and select "<mstused>" from drop down
    Then click on Add new region button

    Examples: 
      | region | mstused |
      | abc    | Pune    |

  @tag6
  Scenario Outline: Features field
    Given admin is on the Features field
    When admin click all Features field and select multiple check boxes
    Then admin click on the most used field of features and select multiple check boxex
    And click on add new features
    Then enter the field of features "<feature>" and select "<mstused>" from drop down
    Then click on Add new features button

    Examples: 
      | feature | mstused |
      | abc     | ,knh/l  |

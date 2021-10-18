package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;

public class Addnewdefinition {
	
	WebDriver driver=hooksclass.driver;
	
	@Given("^admin is on the login page$")
	public void admin_is_on_the_login_page()  {
		try{
			Thread.sleep(3000);
			String Text=driver.findElement(By.xpath("//div[@class='col-md-12']/h2")).getText();
			System.out.println(Text);
			String Text1=driver.findElement(By.xpath("//li[@class='active']/a")).getText();
			System.out.println(Text1);
			System.out.println("login page");
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		} 
	}

	@When("^admin will enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void admin_will_enter_the_username_and_password(String arg1, String arg2) {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@name='log']")).sendKeys(arg1);
			driver.findElement(By.xpath("//input[@name='pwd']")).sendKeys(arg2);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@When("^admin will click on the sign in button$")
	public void admin_will_click_on_the_sign_in_button() {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@name='login']")).click();
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@Then("^will redirected to the dashboard$")
	public void will_redirected_to_the_dashboard() {
		try{
			Thread.sleep(5000);
			String Text=driver.findElement(By.xpath("//h1[contains(text(),'Dashboard')]")).getText();
			System.out.println(Text);
			System.out.println("admin is on dashboard");
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@Then("^click on Properties and click on Add New$")
	public void click_on_Properties_and_click_on_Add_New() {
		try{
			Thread.sleep(5000);
			driver.findElement(By.xpath("//div[text()='Properties']")).click();
			//Thread.sleep(3000);
			driver.findElement(By.xpath("//a[@href='post-new.php?post_type=property']")).click();
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@Given("^admin is on the Add New page$")
	public void admin_is_on_the_Add_New_page() {
		try{
			Thread.sleep(3000);
			System.out.println("Add new page");
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}
	@Then("^select any one of them from the drop down list$")
	public void select_any_one_of_them_from_the_drop_down_list() {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//option[@value='style-3']")).click();
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}
	@Given("^admin is at Property fields$")
	public void admin_is_at_Property_fields() {
		try{
			Thread.sleep(3000);
			System.out.println("Property fields");
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@When("^admin click on price filed and enter \"([^\"]*)\" in this step$")
	public void admin_click_on_price_filed_and_enter_in_this_step(String arg1) {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//textarea[@name='_price']")).sendKeys(arg1);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}
	@Then("^admin enter the Price per sq meter/sq ft \"([^\"]*)\"$")
	public void admin_enter_the_Price_per_sq_meter_sq_ft(String arg1) {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@name='_price_per']")).sendKeys(arg1);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}


	@Then("^select the anyone of the offer type \"([^\"]*)\"$")
	public void select_the_anyone_of_the_offer_type(String arg1){
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//select[@name='_offer_type']")).click();
			//driver.findElement(By.xpath("//option[contains(text(),'For Rent')]")).click();
			Select dropdown = new Select(driver.findElement(By.id("_offer_type")));
			dropdown.selectByVisibleText(arg1);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@Then("^select the anyone of the property type \"([^\"]*)\"$")
	public void select_the_anyone_of_the_property_type(String arg1) {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//select[@name='_property_type']")).click();
			//driver.findElement(By.xpath("//option[contains(text(),'Villas')]")).click();
			Select dropdown = new Select(driver.findElement(By.id("_property_type")));
			dropdown.selectByVisibleText(arg1);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}

	@Then("^click on main details field and enter \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void click_on_main_details_field_and_enter_and(String arg1, String arg2, String arg3) {
		try{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[contains(text(),'Main Details')]")).click();
			driver.findElement(By.xpath("//input[@name='_status']")).sendKeys(arg1);
			driver.findElement(By.xpath("//input[@name='_location']")).sendKeys(arg2);
			driver.findElement(By.xpath("//input[@name='_possession']")).sendKeys(arg3);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}
	
	@Then("^click on location field and enter address \"([^\"]*)\",Google Maps Address \"([^\"]*)\"$")
	public void click_on_location_field_and_enter_address_Google_Maps_Address(String arg1, String arg2) {
		try{
			driver.findElement(By.xpath("//a[contains(text(),'Location')]")).click();
			driver.findElement(By.xpath("//input[@name='_friendly_address']")).sendKeys(arg1);
			Actions s= new Actions(driver);
			WebElement search=driver.findElement(By.xpath("//input[@name='_address']"));
			search.sendKeys(arg2);
			Thread.sleep(3000);
			search.sendKeys(Keys.ENTER);
			//s.click(search).sendKeys(arg2).build().perform();
			//s.click(search).sendKeys(arg2).sendKeys(Keys.ENTER).build().perform();
			/*s.click(search).build().perform();
			s.sendKeys(arg2).build().perform();
			s.sendKeys(Keys.ENTER).build().perform();*/
			Thread.sleep(3000);
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
	}
	

    @Then("^admin click on Details field and enter storage room details here \"([^\"]*)\"$")
    public void admin_click_on_Details_field_and_enter_storage_room_details_here(String arg1) {
    	try{
    		Thread.sleep(3000);
    	driver.findElement(By.xpath("//a[@id='ui-id-4']")).click();
    	driver.findElement(By.xpath("//input[@name='_storage_room']")).sendKeys(arg1);
    	}
    	catch(Exception e){
    		System.out.println(e);
    		Assert.fail();
    	}
   }

   @Then("^admin click on video and enter video details here \"([^\"]*)\"$")
   public void admin_click_on_video_and_enter_video_details_here(String arg1) {
	   try{
		   driver.findElement(By.xpath("//li[@class='ui-state-default ui-corner-top']/a[contains(text(),'Video')]")).click();
		   //driver.findElement(By.xpath("//input[@name='_video']")).sendKeys(arg1);
		   Actions s= new Actions(driver);
			WebElement search=driver.findElement(By.xpath("//input[@name='_video']"));
			search.sendKeys(arg1);
			Thread.sleep(3000);
			search.sendKeys(Keys.ENTER);
			//driver.findElement(By.xpath("//span[@id='sample-permalink']")).click();
	   }
	   catch(Exception e){
		   System.out.println(e);
		   Assert.fail();
	   }
   }
   
   @Given("^admin is on the add new page and at Findeo Property Options$")
   public void admin_is_on_the_add_new_page_and_at_Findeo_Property_Options() {
	   try{
		   Thread.sleep(5000);
			String Text=driver.findElement(By.xpath("//div[@id='findeo_property_sb_metabox']/h2/span")).getText();
			System.out.println(Text);
			System.out.println("admin is at findeo property options field");
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
   }
   
   @When("^click on the drop down list and select from the drop down list \"([^\"]*)\"$")
   public void click_on_the_drop_down_list_and_select_from_the_drop_down_list (String arg1) {
	   try{
		   Thread.sleep(3000);
		   Select dropdown = new Select(driver.findElement(By.id("findeo_sidebar_select")));
		   dropdown.selectByVisibleText(arg1);
		   /*Select dropdown = new Select(driver.findElement(By.id("findeo_sidebar_select")));
		   dropdown.selectByVisibleText(arg1);
		   if(arg1.equals("Sidebar")){
			   System.out.println("Sidebar");
		   }
		   else if(arg1.equals("Footer 1st Column"))
		   {
			   System.out.println("Footer 1st Column");
		   }
		   else if(arg1.equals("Footer 2nd Column"))
		   {
			   System.out.println("Footer 2nd Column");
		   }
		   else if(arg1.equals("Footer 3rd Column"))
		   {
			   System.out.println("Footer 3rd Column");
		   }
		   else if(arg1.equals("Footer 4th Column"))
		   {
			   System.out.println("Footer 4th Column");
		   }
		   else if(arg1.equals("Header"))
		   {
			   System.out.println("Header");
		   }
		   else if(arg1.equals("Widget Shortcode"))
		   {
			   System.out.println("Widget Shortcode");
		   }
		   else if(arg1.equals("Single property sidebar"))
		   {
			   System.out.println("Single property sidebar");
		   }
		   else{
			   System.out.println("Properties sidebar");
		   }*/
		}
		catch(Exception e){
			System.out.println(e);
			Assert.fail();
		}
   }
   @Given("^admin is on the Discussion field$")
   public void admin_is_on_the_Discussion_field() {
	   try{
		   Thread.sleep(3000);
		   String Text=driver.findElement(By.xpath("//h2[@class='hndle ui-sortable-handle']/span[contains(text(),'Discussion')]")).getText();
		   System.out.println(Text);
	   }
	   catch(Exception e){
		   System.out.println(e);
		   Assert.fail();
	   }
   }

   @When("^admin click on multiple check boxes$")
   public void admin_click_on_multiple_check_boxes() {
       try{
    	   //driver.findElement(By.xpath("//input[@id='comment_status']")).click();
    	   //Thread.sleep(5000);
    	   driver.findElement(By.xpath("//input[@id='ping_status']")).click();
    	   //driver.findElement(By.xpath("//a[contains(text(),'trackbacks and pingbacks')]")).click();
	   }
	   catch(Exception e){
		   System.out.println(e);
		   Assert.fail();
	   }
   }
   
   @Given("^admin is on the Regions field$")
   public void admin_is_on_the_Regions_field() {
	   try{
		   Thread.sleep(3000);
		   driver.findElement(By.xpath("//div[@id='screen-options-link-wrap']/button")).click();
		   driver.findElement(By.xpath("//input[@value='regiondiv']")).click();
			String Text=driver.findElement(By.xpath("//div[@id='regiondiv']/h2/span")).getText();
			System.out.println(Text);
	   }
	   catch(Exception e){
           System.out.println(e);
           Assert.fail();
           
	   }
   }

   @When("^admin click all regions field and select multiple check boxes$")
   public void admin_click_all_regions_field_and_select_multiple_check_boxes() {
	   try{
		   Thread.sleep(1000);
		   //driver.findElement(By.xpath("//div[@id='taxonomy-region']/ul/li[1]/a")).click();
		   driver.findElement(By.xpath("//input[@id='in-region-1979']")).click();
		   //driver.findElement(By.xpath("//input[@id='in-region-1966']")).click();
		   //driver.findElement(By.xpath("//input[@id='in-region-1968']")).click();
	   }
	   catch(Exception e){
           System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^admin click on the most used field of regions and select multiple check boxex$")
   public void admin_click_on_the_most_used_field_of_regions_and_select_multiple_check_boxex() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//div[@id='taxonomy-region']/ul/li[2]/a")).click();
		   //driver.findElement(By.xpath("//input[@value='1432']/..")).click();
		   //driver.findElement(By.xpath("//input[@id='in-popular-region-1438']/..")).click();
		   //driver.findElement(By.xpath("//input[@id='in-popular-region-1438']")).click();

	   }
	   catch(Exception e){
           System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^click on add new region$")
   public void click_on_add_new_region() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//div[@id='region-adder']/a")).click();
		   
	   }
	   catch(Exception e){
           System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^enter the field of regions \"([^\"]*)\" and select \"([^\"]*)\" from drop down$")
   public void enter_the_field_of_regions_and_select_from_drop_down(String arg1, String arg2) {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//input[@id='newregion']")).sendKeys(arg1);
		   Select dropdown = new Select(driver.findElement(By.id("newregion_parent")));
		   dropdown.selectByVisibleText(arg2);

	   }
	   catch(Exception e){
           System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^click on Add new region button$")
   public void click_on_Add_new_region_button() {
	   try{
		   Thread.sleep(3000);
		   driver.findElement(By.xpath("//input[@id='region-add-submit']")).click();
		   Assert.fail();
	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }

   @Given("^admin is on the Features field$")
   public void admin_is_on_the_Features_field() {
	   try{
		   Thread.sleep(5000);
		   String Text=driver.findElement(By.xpath("//div[@id='property_featurediv']/h2/span")).getText();
			System.out.println(Text);
		   
	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }

   @When("^admin click all Features field and select multiple check boxes$")
   public void admin_click_all_Features_field_and_select_multiple_check_boxes() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//div[@id='taxonomy-property_feature']/ul/li[1]/a")).click();
		   driver.findElement(By.xpath("//*[text() = ' ,knh/l']")).click();
		   driver.findElement(By.xpath("//input[@value='1634']/..")).click();
		   driver.findElement(By.xpath("//*[text() = ' Book_room']")).click();

	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^admin click on the most used field of features and select multiple check boxex$")
   public void admin_click_on_the_most_used_field_of_features_and_select_multiple_check_boxex() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//div[@id='taxonomy-property_feature']/ul/li[2]/a")).click();
		   driver.findElement(By.xpath("//li[@id='popular-property_feature-1618']")).click();
		   driver.findElement(By.xpath("//li[@id='popular-property_feature-1746']")).click();

	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^click on add new features$")
   public void click_on_add_new_features() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//div[@id='property_feature-adder']/a")).click();
	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }

   @Then("^enter the field of features \"([^\"]*)\" and select \"([^\"]*)\" from drop down$")
   public void enter_the_field_of_features_and_select_from_drop_down(String arg1, String arg2) {
       try{
    	   Thread.sleep(5000);
    	   driver.findElement(By.xpath("//input[@name='newproperty_feature']")).sendKeys(arg1);
		   Select dropdown = new Select(driver.findElement(By.id("newproperty_feature_parent")));
		   dropdown.selectByVisibleText(arg2);
	   }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }
   
   @Then("^click on Add new features button$")
   public void click_on_Add_new_features_button() {
	   try{
		   Thread.sleep(5000);
		   driver.findElement(By.xpath("//input[@id='property_feature-add-submit']")).click();
		   Assert.fail();
    	  }
	   catch(Exception e){
		   System.out.println(e);
           Assert.fail();
	   }
   }
}

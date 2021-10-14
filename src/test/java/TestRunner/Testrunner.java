package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/Features"
		,glue={"StepDefinition","hooks"},
		dryRun=false,
		monochrome=true,
		tags={"@tag1,@tag2,@tag3,@tag4,@tag5,@tag6"},
		//tags={"@tag5,@tag6"}
		plugin={"pretty","junit:target/report.xml","html:target/cucumber-pretty","json:target/jasonreport.json"}
		)
public class Testrunner {

}

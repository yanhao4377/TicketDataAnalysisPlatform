import com.xiaozu.service.FlightService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("spring.xml");
        FlightService flightService = (FlightService) context.getBean("flightService");
        flightService.test();
    }
}

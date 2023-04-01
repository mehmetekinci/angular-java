package com.rest.webservices.restfulwebservices.helloWorld;

// import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
  // GET
  // URI - /hello-world
  // method - " Hello World"
  // @RequestMapping(method

  // = RequestMethod.GET, path = "/hello-world")
  @GetMapping(path = "/hello-world")
  public String helloWorld() {
    return "Hello World";
  }

  @GetMapping(path = "/hello-world-bean")
  public HelloWorldBean helloWorldBean() {
    System.out.println(new HelloWorldBean("Hello world from sout"));
    return new HelloWorldBean("Hello World");
    // throw new RuntimeErrorException(null, "An error occurred.");
  }

  @GetMapping(path = "/hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
    // System.out.println(new HelloWorldBean("Hello world from sout"));
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }
}

package com.mahesh.portfolio;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @PostMapping
    public String saveContact(@RequestBody String data) {
        System.out.println("Received: " + data);
        return "Message received successfully!";
    }
}
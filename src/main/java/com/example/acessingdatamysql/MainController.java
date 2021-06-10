package com.example.acessingdatamysql;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;


@RestController
public class MainController {
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = {"/", "/index"}, method = RequestMethod.GET)
	public ModelAndView index() {

		return new ModelAndView("index");

	}
	
	@RequestMapping(value = "/addNew", method = RequestMethod.POST)
	public String newEmployee(User user) {

		userRepository.save(user);
		return ("redirect:/all");

	}
	
	@RequestMapping(value = "/addNew", method = RequestMethod.GET)
	public ModelAndView addNewEmployee() {
		User emp = new User();
		return new ModelAndView("add", "form", emp);
	}
	
	@RequestMapping(value="/new", method = RequestMethod.POST)
	public User save(@RequestBody User user) {
		userRepository.save(user);
		
		return user;
	}
	
	//returns an a Json api format
	@RequestMapping(value ="/alls", method = RequestMethod.POST)
	public @ResponseBody String addNewUser (@RequestParam String name, @RequestParam int protein, @RequestParam int carbs, @RequestParam int fat) {
		User n =new User();
		System.out.println(protein);
		n.setProtein(protein);
		n.setCarbs(carbs);
		n.setFat(fat);
		n.setName(name);
		userRepository.save(n);
		//userRepository.findAll();
		return "Saved";
	}
	
	
	
//	@GetMapping(path="/sum")
//	public @ResponseBody String getAllUserss() {
//		//userRepository.findById(1).isPresent();
//		if(userRepository.findOne(1)))
//		{return userRepository.findById(1).get().getName();}
//		else {
//			return "NAH";
//		}
//		
//	}
	
	@RequestMapping(value ="/all", method = RequestMethod.GET)
	public @ResponseBody Iterable<User> getAllUsers() {
		
		return userRepository.findAll();
	}
	
	@RequestMapping(value = "/getProtein", method = RequestMethod.GET)
	public @ResponseBody String totalPro() {
		List<Integer> sumProtein = userRepository.findByProtein();
		int totalProtein = 0;
		
		for(int x: sumProtein){
			//System.out.println(x);
			totalProtein = totalProtein + x;
		}
		
		String totalString = String.valueOf(totalProtein);
		return totalString;
	}
	
	@RequestMapping(value = "/getCarbs", method = RequestMethod.GET)
	public @ResponseBody String totalCarbs() {
		List<Integer> sumCarbs = userRepository.findByCarbs();
		int totalCarbs = 0;
		
		for(int x: sumCarbs){
			//System.out.println(x);
			totalCarbs = totalCarbs + x;
		}
		
		String totalString = String.valueOf(totalCarbs);
		return totalString;
	}
	
	@RequestMapping(value = "/getFat", method = RequestMethod.GET)
	public @ResponseBody String totalFat() {
		List<Integer> sumFat = userRepository.findByFat();
		int totalFat = 0;
		
		for(int x: sumFat){
			//System.out.println(x);
			totalFat = totalFat + x;
		}
		
		String totalString = String.valueOf(totalFat);
		return totalString;
	}
	
	@RequestMapping(value = "/allInfo", method = RequestMethod.GET)
	public ModelAndView employees(Model model) {
		
		Iterable<User> User = userRepository.findAll();
		List<Integer> sumProtein = userRepository.findByProtein();
		List<Integer> sumCarbs = userRepository.findByCarbs();
		int totalProtein = 0;
		
		for(int x: sumProtein){
			//System.out.println(x);
			totalProtein = totalProtein + x;
		}
		String totalString = String.valueOf(totalProtein);
		model.addAttribute("total", totalString);
		
		int totalCarbs = 0;
		
		for(int x: sumCarbs) {
			totalCarbs = totalCarbs + x;
		}
		String stringCarbs = String.valueOf(totalCarbs);
		model.addAttribute(stringCarbs, stringCarbs);
		return new ModelAndView("allInfo", "users", User);

	}
}

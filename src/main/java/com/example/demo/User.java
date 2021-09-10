package com.example.demo;

public class User {
    private String name;
    private String email;
    private Laptop laptop;

    public User() {
    }

    public User(String name, String email, Laptop laptop) {
        this.name = name;
        this.email = email;
        this.laptop = laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String toString() {
        return String.format("Name=%s\nEmail=%s\nLaptop=%s", getName(), getEmail(), getLaptop());
    }
}

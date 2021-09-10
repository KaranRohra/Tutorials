package com.example.demo;

public class Laptop {
    int ram, rom;
    String brand;

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getRom() {
        return rom;
    }

    public void setRom(int rom) {
        this.rom = rom;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Override
    public String toString() {
        return "{" +
                "ram=" + ram +
                ", rom=" + rom +
                ", brand='" + brand + '\'' +
                '}';
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductService {
  products = [ {id: 0, name: 'DSLR Camera', price: 1499.99, link: 'data:image/jpeg;base64,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'},
               {id: 1 name: 'iLaptop', price: 1299.99, link: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw4ODxAPDQ0NDQ8NDQ0PDw8NDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8/ODMtNygtLisBCgoKDg0OFQ8PFS0dHR0tLS0rLS0rKystLSsrLS0rLSstLSstLS0tLS8rLS0rLysrNy0tKy0tLS0tLS0rLSstLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAEEQAAICAQICBQcJBgYDAQAAAAABAhEDBBIFMRMhQVFhBjJxgZGhsQcUIlJicoLB0RUzQpKi4SNDU3Oy8GPC8Rb/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAIxEBAAICAQMFAQEAAAAAAAAAAAERAhIDBBRREzFBUmEhQv/aAAwDAQACEQMRAD8A9LRFD0TR6X5mldBQ9BQKLRFD0FAolBRZRFBaJQUWUFApXQUWUFApXQUWURQKJQUPRNBKV0FD0TQWldBQ9E0CiURRZRFAolBQ9BQSiUFD0FBaJQUPQUEolBQ9E0FpXQUPQUEotEUPQUFolBQ9BQKJQUPRNBKNQUPQURuiUFD0FFKJQUPQUQolBQ9BRSiUFD0FEKJQUPQsn2domW8OOc51hFAkb9PNJckaY5jG72x0E/OTkKD7n7GMsMvqy/lZ2VmGWUnqNR0EfZxlpsn1JfysZaLL9SXsOyso3SDeWuww+0uMtBl+o/bH9SVw7L9VfzR/U7G8ncN5XsePzLkLhmXw9pP7Lyd8fa/0OtuDcTeWuy4v1yv2XP60ff8AoR+zZ/Wj73+R1LFbG8r2fF4c39mv6y9jI/Z/2v6f7nQbEZN5a7Ti+rD8x+1/T/ch6NfWfsRskypk2lrteL6sz0q75f0/oK8Ee+XtX6F82UZJDafLUdPxfWFcoxXf7RUu3lfZ3BFW77EPR0wv3l8/rYwjKMcYJQUPQUdHholBQ9BRCiUFD0FFKWUFD0FEdKJQUPQUCiUFD0FAolBtHoKBRKCh6CgUqm6Vszwduwz5Nz6uS5E40c8pt9XpuHTG595acbLoyM0WWRZh6WhSLIyM8WOmBoUhlIoTHTAuUhlIpTGTAtsLK7JsgexWyLIYA2I2S2IwpZMrkx5MpmwEnIy5Z9i5vkWZpiaWFtz7F1R9PayxFscmcYYzlK2EKVf9bGoego7w+LlM5TMz8koKHoKDNEoKHoKBRKDaPQUCllBRZQUR0pXQUWUG0FK6Ciyg2gpXQUWbQoFK6Musy19Fc+39DTqMmxX29hy27dszlL1dNw3O0+0Jii1CIZGH0VkWWIqTGTCLUx1IqQ8QLUx0yrclVtK+pW6t+Bx+J8T1PTLS6TCt/wBHpdXqVKGmxJ9dQVp5512RdJ1b50HoEx0ymLpVd129XX4jJkFtk2V2TYDti2LYWFSxWwbFbAWRRkkWTZj1OSiCnI3KSiucnXo8TpQxpJJckqMvDMN3kf8AF1R+72s30dMYfP6vPadY+FdBRZQUbeSldBRZQUEpXQUWbQoLSugosoKBSygos2htI6UroNpZtDaCle0KLNobQUroiXUm3yXWyzac7iOo/gXZz9ImW+Pj3ypk1OZzl4cku5CJEJDHN9KIiIqEjJiIkKsRKEQyAsTPPeXPlSuG6dSilPU5m4aeD5Kl9LJJdytdXa2vE9BE+ceWvk/qNfxaEXHJ81xaXFc4pu4uUm4w+05WvCvQnFeL4fodbxXM82bLOUU/p6jI21F89kFyvwVJeHUfVvJfybxK8st82qg82STyZsrXfN9aj4KkU6Lhjio4MWJwjBKKhTioLxb+Paep4fpuhx7N253b7k33eAG1MZMqTJTAusmytMLAssLK7BsBmxGwbEnIgTLMwbXknGC7eb7o9rLNVlpGzg2mqHSPzsnWvCHZ7eZYi2OTPTGZbIwpJLqSVJeBNFlBR1fLmL91dBRZQbQUroKLNoUCldBQ+0naCldBRZQUCj0FFm0NodNVdBRZQbQaq6CiyhcslFOT5JA1ZNdn2R6vOfLwXecXmXajK5ycn29ncV0YmXv4uPSEAFAR0SiUQADIlEAA6LFIqTJTAtUibKkxkyCyxkVpjWBZYWJYbgHsLEsLAZsozToacjBrM1JhRp8PT5VD+FfSn91dnr5HplExcD0Tx490l/iZfpS8F2ROjtN4w8PPltlXhXQUWUFGnHVXtDaWUFBNSURtLaIoFK6JofaG0LqroKLKCgarKCh6CiN0SgoeiaBSvacXiep3y2x82PvfebuK6rYti86S6/CJx4wJL0cXH/qSUFFu0hxMvQqoKLNpG0BKChqCgIAmiAJJFJAmxkxUSAyZNiWSmA9kplaZNgPZDkLYspEC5slFHC9N0+dX148VTn3N/wAMf+9xn1uelXNvqSXa+49TwTQdBhjF/vJ/TyP7T7PVyLEMcmWsNlBQ9BRt4qJQUWURQKJQUPQUCiUFD0TQKV7QoegoFEoKHoKBSygoegojpRKKtTl2Rcn11yXe+xGiivNi3LlddavvCxH9/rgdBKbc5dbbtlnzdnTlujzxp+hz/KLORxLyk0+mnHHmx5E5R3RlGnF9bVfS2u+rl6DL1RXwd4GI8AsPKnQy5vJD047+DZfHjuhl/npfehkX5BVDwivEzdHXaOXLUYPXkjH4l0Y4pebkxT+7khL4MDkvGK4HbehfYr9BXLQvuA4+wVxOrLRMrlo2BzXEKNz0rK5aZgZANDwMV4WBTYDvGxXBgQFkNMhgNZTnyUhpSMOqm3UY9cpNRiu+T5Iitvk7o+nzvLJXiwO/CWXsXq5+w9lRyeGRhgxRxRnFuPXNquub622aVrL5ST9G1liXHPCcpbaCjJ87l4ez+5HzyXdH3otufpZNlBRkWu+yv5v7ErXr6r9qYtPTy8NVBRnWvh3S9i/UZa3H4r8LLZpPhdQUVLWY/re5ob5zj+vD1tIM6z4PQUNFpq000+TTtMmgUSgoegoFGoKHCg3RaFm6TbLBM2Pcq9j7mCmSepfZtXpUjj8b4atZB4s85zxSX0scZKMJLuaS6/WdOUWnT5oAPHLyG08MfRYsmbFiu1jjknsT71G6XqOfm+Tz/T1mph+O177PoG3wDYu4NbT5fM8nkFrV+718n9/Hjl/6mefkjxaPLNp8n3sVfCR9T2IjoxS7y+TfsnjWLliwT8cc8uN/mT+0ON4ueDUUv9PVP4Oj6u8RHREpfUl8rXlnxTH52LWr0xxZviyyHylaqPnrKv8Ac0bX/GJ9Olpk+aT9SZRPhuJ88UH+CIpfU/HgMPyrLlL5t6J482N+9o3YflNwS5wwSf2dQo+5pnps3k9pZ+dhg/Uc7U+QvD8nnaeH8sfzQpd4U4vLzSy54Zr7mSE/yRph5YaGXNZ4emEH8JHLz/Jhw6XLG4vw6q9lGPJ8lmD/AC8+fH6MmRfmKXeHpo+UXD5f5zj97Fl/JMujxLRS5anD+KTh/wAqPEz+TLPH93rsy8JS3/FGXJ8n/E4+Zq4z8JY8b/QLtD6LF4Jebmwy+7lxv8yXor5U/R1nzXF5Nca0+SGWC02SeJuWOU8PSbZOLjaTbV037Ta+Icfi/wDE0PD8/i9PKDfsohcPX6vTSiuTKeG6KcnLLtU5JSjCFdIoX1OUlF3ddVeLPL5eN8TlHbPhEI/awZZR9zOnwPj/ABHTxcYcMlJy7cmdY0vZFhbehnKfKUnGurbhxuPqe5OiFUetRnPxk1L3Oa+B5Ph/Dtfinly4NLptNkzqEck8uo1Grk4xvautqkrfKjeuG8WyefrMWL/Z06v+uxSXDvZMrlTad/gj76kJ84cV9Xv3ZZzS9HKjif8A5TPP99r9XPvUJ9Cv6KLYeQ2kf7yOTO+/Nknk+LLqm8Ls3H8eLz9TpoemfXX4sjMeTyywLqWoeR/+LBLL/wAYUdbTeS2kx+bp8S/AvzOlh4ZBdUMaXhGP6DVN3lV5VZZdWPBq8n2ughC/5mvgTPiHEZr/AA9PkUnyWTLDEq8dqZ7SHDp9kK9NL4miHDJdrivaxUJ6kvL8E0eXIn8+eWEuyOHI5Q9bfX7Ej0Gn4RoF19HGb78rlP3S6jfDhse2TfopF0NFjX8N+ltlYnKZ+TYscYxUYKMYJVFRSUUvChqGjFLqSpLkl1JE0GaLRFD0AKNQUMAaotBQwEKUZ8N9faveZdh0SqePtFjHsDYatgbBYy9GR0Zr6MNgsZdgbDVsDYLGXYGw1bA2Cxl2B0Zq2BsFjJ0YdEjZsI2Cxk6IOhNewNgsY+h9ZPRLuftNewNgsY3hXc/WTj0yf/w17CyHV1Cxgjpvs+4sWk8EjcBbGRaNd69SHWlj6TQBLFSwxX8K+I6QwFC0FDACi0FDACi0FDACi0FDACgAARQAAEAAAEUFAABQUABRQUABBQUSABRFEgQFEUSBRFBRIAFBQAAEUSAAAAAAAAAAAAAAQAABQAAAAABB/9k='}];

  constructor(private _http: Http) {

  }

  getProducts() {
    return this.products;
  }

  addProduct(newProduct) {
    console.log('successful added product');

    // new product id is taking the last item id increment by 1
    newProduct.id = this.products[this.products.length - 1].id + 1;
    this.products.push(newProduct);
  }

  editProduct(id, product) {
    this.products[id] = product;
  }

  deleteProduct(id) {
    this.products.splice(id, 1);
  }
}
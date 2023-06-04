//OBJECT LİTERAL
const book111 = {
  title: "The Karamazov Brothers",
  author: "Dostoyevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book111);
console.log(book111.getSummary());

console.log(book111.hasOwnProperty("year"));

const book222 = {
  title: "The Lily of Valley",
  author: "Honore de Balzac",
  year: 1889,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book222.getSummary());

// OBJECT CONSTRUCTOR
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
const book11 = new Book("kaşağı", "Ömer Seyfettin", 1920);
console.log(book11);
const book22 = new Book("Simyacı", "Paulo Coelho", 1990);
console.log(book22.getSummary());

console.log(Book.prototype);
console.log(book22.__proto__);

book11.price = 200;
book22.price = 300;
console.log(book11, book22);

console.log(new Date().getFullYear());

//INHERITANCE (Kalitim - ES5)

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);
const mag11 = new Magazine("SRE", "Einstein", 1930, "Nov");
console.log(mag11);

console.log(mag11.getSummary());

// OOP - Classes and Inheritance (ES6)

class Book1 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // ? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
    //  this.getTitle = function () {
    //    return this.title
    //  }
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }
  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
}

const book1 = new Book1("Kasagi", "Ömer Seyfettin", 1920);
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

const book2 = new Book1("Simyaci", "Pauolo Coelho", 1990);
console.log(book2.getSummary());
console.log(book2.getAge());

class Magazine1 extends Book1 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new Magazine1("Sre", "Einstein", 1930, "Nov");
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());

// POLYMORPHİSM
//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

//JavaScript'te polimorfizm, farklı tipte nesnelerin aynı arayüzü veya metotları paylaşarak benzer şekilde davranmalarını sağlayan bir programlama kavramıdır. Bu, aynı işlevin farklı veri tipleri için farklı işlemler gerçekleştirmesine olanak tanır.

//Örneğin, bir "Shape" (şekil) sınıfı oluşturabiliriz ve bu sınıftan türetilen "Rectangle" (dikdörtgen) ve "Circle" (çember) sınıfları oluşturabiliriz. Her iki sınıf da "area" (alan) metoduna sahip olabilir. Ancak dikdörtgenin alanı uzunluk ve genişliğin çarpımı ile hesaplanırken, çemberin alanı yarıçapın karesinin pi sayısı ile çarpılmasıyla hesaplanır.

//Bu durumda, dikdörtgen ve çember nesnelerinin her ikisi de Shape sınıfının birer örneği olsa da, her biri "area" metodu farklı bir şekilde uygular. Bu, polimorfizmin bir örneğidir.

class Book3 {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }

  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
  setPrice(price) {
    const taxRate = 1.1;
    this.price = Math.trunc(price.taxRate);
  }
}

class Magazine3 extends Book3 {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
  //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
  setPrice(price, taxRate) {
    this.price = Math.trunc(price * taxRate);
  }

  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
  }
}

const mag1111 = new Magazine3("SRE", "Einstion", 1930, "Nov");
console.log(mag1111);
console.log(mag1111.getAge());

//?Overloaded Metot cagriliyor.
mag1111.setPrice(100, 1.2);
console.log(mag1111);

console.log(mag1111.getSummary());

//PRİVATE

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

//PRİVATE
//JavaScript'de "private" ve "static" kavramları, nesne yönelimli programlama (OOP) yaklaşımına özgüdür.

//"Private" bir özellik veya metot, sadece tanımlandığı sınıf içerisinde erişilebilir ve diğer sınıflar veya dışarıdaki kodlar tarafından erişilemez. Bu, sınıfın içindeki verilerin güvenliği ve korunması için kullanılabilir. Private özellikler ve metodlar, genellikle "_" veya "#" karakterleri ile tanımlanır.

class Person {
  #age = 0; //private özellik

  getAge() {
    return this.#age;
  }
  setAge(a) {
    if (a < 0) {
      console.log("yaş negatif olamaz");
    } else {
      this.#age = a;
    }
  }
}
let person1 = new Person();
person1.setAge(-9);
console.log(person1.getAge());
let person2 = new Person();
person2.setAge(22);
console.log(person2.getAge());

// console.log(person1.#age);
// hata: SyntaxError: Private field '#age' must be declared in an enclosing class

//STATİC
//"Static" bir özellik veya metot, sınıfın örneği oluşturulmadan doğrudan sınıf adı üzerinden erişilebilir. Bu, sınıf düzeyindeki verilerin saklanması veya işlenmesi için kullanılabilir. Static özellikler ve metodlar, genellikle "static" anahtar kelimesi ile tanımlanır.

class Circle {
  static PI = 3.14; //static özellik

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(Circle.PI);
console.log(Circle.getArea(5));
console.log(Circle.getArea(10));

// let circle1 = new Circle();
// console.log(circle1.PI);
// console.log(circle1.getArea(5));



//MODULE
//JavaScript'te modüller, kodun yeniden kullanılabilirliğini artıran ve büyük projelerde kod yönetimini kolaylaştıran bir yapıdır. Modüller, kodu bağımsız, yeniden kullanılabilir parçalara bölmek için kullanılır ve bu parçalar başka dosyalardan veya projelerden içe aktarılabilir.

//ES6 standartlarından önce, JavaScript dilinde modül yapısı desteklenmedi ve geliştiriciler kendi modül sistemlerini yazmak zorunda kaldı. Ancak ES6 ile birlikte, JavaScript diline modül yapısı dahil edilmiştir.

//ES6 modüllerinde, bir modül bir dosya veya birkaç dosyadan oluşabilir ve her modül, içindeki fonksiyonlar, değişkenler veya sınıflar gibi bir dizi öğe içerebilir. Modülleri kullanmak için, içindeki öğeleri dışarıya aktarmak veya diğer modüllerden öğe içe aktarmak için belirli sözdizimi kullanılır.

//Modül içe aktarma için import anahtar kelimesi kullanılırken, dışa aktarmak için export anahtar kelimesi kullanılır.

//Modüllerin kullanımı, daha büyük ölçekli projelerde özellikle yararlıdır, ancak daha küçük projelerde de yararlı olabilir. Modüller, kodu daha okunaklı ve sürdürülebilir hale getirir ve ayrılmış dosyalarda çalışan kodu daha kolay bir şekilde yönetmenizi sağlar.

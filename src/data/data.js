let data = [
    {
        id: 1,
        category: 'Chair',
        title: 'Armchair with Head Rester',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/armchair.jpg',
        sale: false,
        price: 62,
    }, {
        id: 2,
        category: 'Sofa',
        title: 'Beige Living Room Sofa',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/sofa.jpg',
        sale: true,
        oldPrice: 659,
        price: 599,
    }, {
        id: 3,
        category: 'Table',
        title: 'Classic Wooden Table',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/table.jpg',
        sale: true,
        oldPrice: 90,
        price: 85,
    }, {
        id: 4,
        category: 'Table',
        title: 'Computer Table with Office Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/12/office-table.jpg',
        sale: false,
        price: 775,
    }, {
        id: 5,
        category: 'Table',
        title: 'Corner Study Table with Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/desk-table.jpg',
        sale: false,
        price: 459,
    }, {
        id: 6,
        category: 'Table',
        title: 'Desktop Table with Drawers',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/study-table.jpg',
        sale: true,
        oldPrice: 565,
        price: 529,
    }, {
        id: 7,
        category: 'Table',
        title: 'Dinning Table for Two',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/dining-table.jpg',
        sale: true,
        oldPrice: 422,
        price: 360,
    }, {
        id: 8,
        category: 'Sofa',
        title: 'Fancy Chairs',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/fancy-chairs.jpg',
        sale: false,
        price: 380,
    }, {
        id: 9,
        category: 'Chair',
        title: 'Fancy Single Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2017/11/chair.jpg',
        sale: false,
        price: 199,
    }, {
        id: 10,
        category: 'Sofa',
        title: 'Modern White Round Sofa',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/round-sofa.jpg',
        sale: false,
        price: 599,
    }, {
        id: 11,
        category: 'Chair',
        title: 'Orange Recliner with Leg Rest',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/pic53-free-img.jpg',
        sale: false,
        price: 419,
    }, {
        id: 12,
        category: 'Chair',
        title: 'Round Short Leg Stool/Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/round-stool.jpg',
        sale: false,
        price: 229,
    }, {
        id: 13,
        category: 'Sofa',
        title: 'Sofa Chairs with Cushions',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/safa-2.jpg',
        sale: false,
        price: 325,
    }, {
        id: 14,
        category: 'Sofa',
        title: 'Sofa Chairs with Red Cushions',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/chair-1.jpg',
        sale: false,
        price: 450,
    }, {
        id: 15,
        category: 'Table',
        title: 'Study Table',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/wooden-study-table.jpg',
        sale: false,
        price: 385,
    }, {
        id: 16,
        category: 'Chair',
        title: 'Vintage Luxury Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/luxury-chair.jpg',
        sale: false,
        price: 429,
    }, {
        id: 17,
        category: 'Chair',
        title: 'Wingback Yellow Couch',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/couch.jpg',
        sale: true,
        oldPrice: 192,
        price: 186,
    }, {
        id: 18,
        category: 'Chair',
        title: 'Wooden Rocking Chair',
        content: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        image: 'https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/wooden-rocking-chair.jpg',
        sale: false,
        price: 169,
    }
]

export default data;
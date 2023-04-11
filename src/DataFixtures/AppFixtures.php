<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use App\Repository\CategoryRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{

    private CategoryRepository $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function load(ObjectManager $manager): void
    {
        foreach (['Software', 'Hardware', 'Others'] as $categoryName) {
            $category = (new Category())
                ->setName($categoryName);

            $manager->persist($category);
        }
        $manager->flush();


        $cat = $this->categoryRepository->find(16);
        $products = [
            (new Product())
                ->setName('Product')
                ->setDescription('Une description')
                ->setCategory($cat)
                ->setPrice(42.20)
                ->setStock(242)
                ->setImage('image1.png')
            ,
            (new Product())
                ->setName('Product 2')
                ->setDescription('Une description')
                ->setCategory($this->categoryRepository->find(17))
                ->setPrice(42.20)
                ->setStock(242)
                ->setImage('image2.png')
            ,
            (new Product())
                ->setName('Product 3')
                ->setDescription('Une description')
                ->setCategory($this->categoryRepository->find(18))
                ->setPrice(42.20)
                ->setStock(242)
                ->setImage('image3.png')
            ,
        ];

        foreach ($products as $product) {
            $manager->persist($product);
        }

        $manager->flush();
    }
}

import { IFindLenovo } from "@interfaces/services";
import { getLogger } from "@utils/Logger";
import puppeteer from "puppeteer";

export class FindLenovo implements IFindLenovo {
    private readonly LOGGER = getLogger()
    private readonly URL    = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

    async execute(): Promise<IFindLenovo.Output> {
        this.LOGGER.debug('Executing FindLenovo service.');

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page    = await browser.newPage();

        this.LOGGER.debug(`Navigating to URL: ${this.URL}`);
        await page.goto(this.URL);

        const data = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.thumbnail'),
                product => ({
                    title             : product.querySelector('.title').getAttribute('title'),
                    description       : product.querySelector('.description').textContent,
                    number_of_reviews : Number(String(product.querySelector('.ratings p:first-child').textContent).replace(' reviews', '')),
                    ratings           : Number(product.querySelector('.ratings p:nth-child(2)').getAttribute('data-rating')),
                    price             : Number(String(product.querySelector('.pull-right.price').textContent).replace('$', '')),
                }))
                .filter(product => product.title.includes('Lenovo'))
                .sort((productA, productB) => productA.price - productB.price)
        })

        return data;
    }
}
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAllArticles(): any[];
    getArticleById(id: string): any;
}

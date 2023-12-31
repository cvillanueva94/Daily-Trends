import { UpdateCrudDto } from '../../../shared/dtos/update-crud.dto';
import { NewsDocument } from '../models/news.document';
export class UpdateFeedDto extends UpdateCrudDto {

    title: string | undefined;
    description: string | undefined;
    news: [NewsDocument] | undefined
    updatedAt?: Date;
        
    constructor(id: string, title?: string, description?: string, news?: [NewsDocument]){ 
        super(id);
        this.title = title;
        this.description = description;
        this.news = news 
        this.updatedAt = new Date();
    }
}
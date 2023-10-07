import { ICRUDMapper } from "../../../shared/interfaces/ICRUDMapper";
import { FeedDto } from "../dtos/feed.dto";
import { UpdateFeedDto } from "../dtos/update-feed.dto";
import  FeedModel, { FeedDocument } from "./feed.document";

export class FeedMapper extends ICRUDMapper<
  FeedDto,
  FeedDocument
> {
    /**
     * Converts a FeedDocument object to a FeedDto object.
     *
     * @param {FeedDocument} feedDocument - The FeedDocument object to be converted.
     * @return {FeedDto} The converted FeedDto object.
     */
    public static DocumentToDto(feedDocument: FeedDocument): FeedDto {
        const {id, title, description, url, createdAt, updatedAt} = feedDocument
        const dto = new FeedDto(title, description, url, id, createdAt, updatedAt);
        return dto
    }

    /**
     * Converts a FeedDto object to a FeedDocument object.
     *
     * @param {FeedDto} feedDto - The FeedDto object to be converted.
     * @return {FeedDocument} The converted FeedDocument object.
     */
    public static DtoToDocument(feedDto: FeedDto): FeedDocument {
        const feed = new FeedModel()
        
        feed.title = feedDto.title;
        feed.description = feedDto.description;
        feed.url = feedDto.url;
        return feed;
        
    }

    /**
     * Updates the properties of a FeedDocument based on the values provided in an UpdateFeedDto.
     *
     * @param {UpdateFeedDto} feedDto - The DTO containing the updated values for the feed.
     * @param {FeedDocument} originalFeed - The original FeedDocument object.
     * @return {FeedDocument} - The updated FeedDocument object.
     */
    public static UpdateDtoToDocument(feedDto: UpdateFeedDto, originalFeed: FeedDocument): FeedDocument {
        const feed = new FeedModel()
        
        feed.title = feedDto.title || originalFeed.title;
        feed.description = feedDto.description || originalFeed.description;
        feed.url = feedDto.url || originalFeed.url;

        return feed;
        
    }
}
export class LinkDto {
    url;
    id;
    title;

    constructor(model) {
        this.id = model.id;
        this.url = model.url;
        this.title = model.title;
    }
}
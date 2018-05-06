/// <reference path="../types.d.ts" />

class SongItem {
    private title: string
    private author: string
    private url: string
    private createdAt: number
    private createdBy: string
    constructor(data: string) {
        const { title, author, url, createdBy } = JSON.parse(data)
        this.title = title
        this.author = author
        this.url = url
        this.createdAt = Date.now()
        this.createdBy = createdBy
    }

    toString() {
        return JSON.stringify(this)
    }
}

class SongContract {
    constructor() {
        LocalContractStorage.defineMapProperty(this, "repo", {
            parse: function (data) {
                return new SongItem(data);
            },
            stringify: function (o) {
                return o.toString();
            }
        });
    }

    save(title, author, url, createdAt) {
        const from = Blockchain.transaction.from;
        
        const itemStr = JSON.stringify({ title, author, url, createdBy: from })
        const item: SongItem = new SongItem(itemStr) as any

        (this as any).repo.put(title, item)
    }

    get(title) {
        if (title === "" ) {
            throw new Error("empty key")
        }
        return (this as any).repo.get(title);
    }
}

module.exports = SongContract
import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
    documents: Document[] = [
        {
            title: "My First Doc",
            description: "Description of files",
            file_url: "https://wall.alphacoders.com/big.php?i=570163",
            updated_at: "22/11/2020",
            image_url: "https://wall.alphacoders.com/big.php?i=570163"
        },
        {
            title: "My Second Doc",
            description: "Description of files",
            file_url: "https://wall.alphacoders.com/big.php?i=536426",
            updated_at: "22/11/2020",
            image_url: "https://wall.alphacoders.com/big.php?i=536426"
        },
        {
            title: "My Third Doc",
            description: "Description of files",
            file_url: "https://wall.alphacoders.com/big.php?i=600528",
            updated_at: "22/11/2020",
            image_url: "https://wall.alphacoders.com/big.php?i=600528"
        }
    ]
}
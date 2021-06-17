import {Injectable} from '@angular/core';
import {
    Document,
    DocumentUploadResult,
    DocumentUtil, FamilyCategoryGenericName,
    FamilyCategoryGenericNameUtil,
    FileUploadResultUtil,
    DocumentCategory,
    FngResponse,
    FngResponseLookupData,
    FngResponseLookupLinksData,
    GenericName
} from './documents.model';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { zip } from 'rxjs/observable/zip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})

export class DocumentsService {
    lookupsUrl = 'http://localhost:8080/Fenergo.Api/lookups';
    lookupLinkUrl = 'http://localhost:8080/Fenergo.Api/lookupLink';

    constructor(private http: HttpClient) {
    }

    uploadDocument(caseId: number, document: Document): Observable<DocumentUploadResult> {
        // TODO: Call real API
        return of(FileUploadResultUtil.create({status: 'success'}))
        .pipe(
            delay(5_000)
        );
    }

    getDocuments(caseId: number): Observable<Document[]> {
        //TODO: call real API
        const documents = [
            DocumentUtil.create({id: '1', fileName: 'test1.pdf'}),
            DocumentUtil.create({id: '2', fileName: 'test2.pdf'})
        ];
        return of(documents)
            .pipe(
                delay(2_0000)
            );
    }

    getFamilyCategoryAndGenericNames(): Observable<FamilyCategoryGenericName[]> {
        //TODO: call real API
        console.log('retrieved');
        const resp = [
            FamilyCategoryGenericNameUtil.create({
                familyCategory: 'Activity Information',
                genericNames: [
                    'Power of Attorney',
                    'Annual Report'
                ]
            }),
            FamilyCategoryGenericNameUtil.create({
                familyCategory: 'Authorized Signature',
                genericNames: [
                    'List of beneficiary banks'
                ]
            })
        ];
        return of(resp)
            .pipe(
                delay(1_000)
            );
    }

    getLookupsResponse(): Observable<DocumentCategory[]> {
        const bodyData = {
            "keys": [
                "DocumentCategory",
                "DocumentPurpose"
            ],
            "includeInactive": false
        };
        const bodyDataLink = ["LinkDocCategoryPurpose"];
        return zip(
            this.http.post<FngResponse<FngResponseLookupData>>(this.lookupsUrl, bodyData),
            this.http.post<FngResponse<FngResponseLookupLinksData>>(this.lookupLinkUrl, bodyDataLink)).pipe(
                map(([lookupRes, lookupLinkRes]) => this.createDocumentCategories(lookupRes.data, lookupLinkRes.data.LinkDocCategoryPurpose))
            );
    }

    createDocumentCategories(lookupRes: FngResponseLookupData, links: Map<string, string[]>): DocumentCategory[] {
        const docCategories = lookupRes.DocumentCategory.map(dc => new DocumentCategory(dc.value, dc.label, []));

        console.log(links);

        docCategories.forEach(dc => {
            const arrayOfDpIds = links[dc.value];

            const genericNames = lookupRes.DocumentPurpose.filter(dp => arrayOfDpIds.indexOf(dp.value) >= 0)
                .map(dp => new GenericName(dp.value, dp.label));
            
            dc.genericNames = genericNames;
        });
        return docCategories;
    }

}
import { FieldLabelComponent } from './../shared/field-label/field-label.component';
export interface Document {
    id: string;
    fileName?: string;
    fileSize?: string;
    checked?: boolean;
    familyCategory?: string;
    genericName?: string;
    documentDate?: Date;
}

export class DocumentUtil {
    static create = (obj: Document): Document => ({
        id: obj.id,
        fileName: obj.fileName,
        fileSize: obj.fileSize,
        checked: obj.checked,
        familyCategory: obj.familyCategory,
        genericName: obj.genericName,
        documentDate: obj.documentDate
    })
}


export interface DocumentUploadResult {
    status: string;
}

export class FileUploadResultUtil {
    static create = (obj: DocumentUploadResult): DocumentUploadResult => ({status: obj.status});
}


export interface FamilyCategoryGenericName {
    familyCategory: string;
    genericNames: string[];
}

export class FamilyCategoryGenericNameUtil {
    static create = (obj: FamilyCategoryGenericName): FamilyCategoryGenericName => ({
        familyCategory: obj.familyCategory,
        genericNames: obj.genericNames
    })
}

export class FngGenericLookup {
    constructor(public value: string, public label: string) {}
}

export class GenericName extends FngGenericLookup {
}

export class DocumentCategory extends FngGenericLookup {
    constructor(public value: string, public label: string, public genericNames: GenericName[]) {
        super(value, label);
    }
}

export class FngResponseLookupData {
    DocumentCategory: FngGenericLookup[];
    DocumentPurpose: FngGenericLookup[];
}

export class FngResponseLookupLinksData {
    LinkDocCategoryPurpose: Map<string, string[]>;
}

export class FngResponse<T> {
    data: T;
    messages: any[];
}




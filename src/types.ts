export type Menu = {
    id: string;
    nama: string;
    deskripsi: string;
    harga: number;
    size: string;
    label: string;
    kategori: string;
    createdAt: string;
    updatedAt: string;
};

export type CreateMenuPayload = {
    nama: string;
    deskripsi: string;
    harga: number;
    size: string;
    label: string;
    kategori: string;
};

export type EditMenuPayload = { id: string } & CreateMenuPayload;

export type AsyncDataState = 'pending' | 'loading' | 'fullfilled' | 'error';

export type LabelMakanan = 'vegan' | 'halal' | 'gluten_free' | 'low_cal';

export type KategoriMakanan = 'makanan' | 'minuman';

export type SizeMakanan = 'small' | 'medium' | 'large';
interface ILocation {
    city: string | null;
    country: string | null;
    position?: any[];
}

interface IUrls {
    raw: string;    
    full: string;    
    regular: string;    
    small: string;    
    thumb: string;    
}

interface IUser {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string | null;
    total_likes: number;
    total_photos: number;
}

interface IProfileImage {
    small?: string;
    medium?: string;
    large?: string;
}

interface IExif {
    make?: string;
    model?: string;
}

export interface IPhoto {
    id: string;
    created_at?: string;
    updated_at?: string;
    width?: number;
    height?: number;
    color?: string;
    blur_hash?: string;
    downloads: number;
    liked_by_user?: boolean;
    public_domain?: boolean;
    exif?: IExif;
    likes: number;
    description: string;
    location: ILocation;
    tags?: any[]
    current_user_collections?: any[]
    urls: IUrls;
    links?: any[];
    user?: IUser;
    profile_image: IProfileImage;
    total_likes: number;
    total_photos: number;

}
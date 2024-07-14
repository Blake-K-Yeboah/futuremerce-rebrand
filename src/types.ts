export interface LayoutProps {
    title: string;
    metaInfo: MetaInfo;
}

export interface MetaInfo {
    description: string;
    keywords: string;
    shouldIndex: boolean;
    itemType?: string;
    schemaMetaInfo?: string;
}

export interface NavbarLink {
    label: string;
    href: string;
    sublinks?: NavbarSubLink[];
}

export interface NavbarSubLink {
    label: string;
    text: string;
    icon: string;
    href: string;
}

export interface ButtonProps {
    type: "primary" | "secondary" | "link";
    link?: "string";
    href?: "string";
}

export interface CVP {
    icon: ImageMetadata;
    title: string;
    text: string;
}

export interface TitleProps {
    title: string;
    subtitle: string;
    icon?: ImageMetadata;
}

export interface Box {
    image?: ImageMetadata;
    title: string;
    subtitle?: string;
    description: string;
    cta?: interfaceBoxCTA;
}

export interface interfaceBoxCTA {
    label: string;
    link: string;
    is_button?: boolean;
}

export interface TextImageGroupProps {
    title: string;
    text?: string;
    list?: string[];
    image: ImageMetadata;
}

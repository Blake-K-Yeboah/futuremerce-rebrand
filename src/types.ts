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
    type: 'primary' | 'secondary';
    link?: 'string';
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
    text: string;
    cta?: interfaceBoxCTA;
}

export interface interfaceBoxCTA {
    label: string;
    link: string;
}
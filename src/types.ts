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
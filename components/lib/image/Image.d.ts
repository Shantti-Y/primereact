import * as React from 'react';

export interface ImageProps {
    preview?: boolean;
    className?: string;
    downloadable?: boolean;
    style?: object;
    imageStyle?: string;
    imageClassName?: string;
    template?: any;
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    onShow?(): void;
    onHide?(): void;
    children?: React.ReactNode;
}

export declare class Image extends React.Component<ImageProps, any> { }

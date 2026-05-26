import React from 'react';

export interface LanGalleryThumbnailsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalleryThumbnails: React.FC<LanGalleryThumbnailsProps>;
export default LanGalleryThumbnails;

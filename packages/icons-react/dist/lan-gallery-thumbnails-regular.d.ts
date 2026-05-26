import React from 'react';

export interface LanGalleryThumbnailsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalleryThumbnailsRegular: React.FC<LanGalleryThumbnailsRegularProps>;
export default LanGalleryThumbnailsRegular;

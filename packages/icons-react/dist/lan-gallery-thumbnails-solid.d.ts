import React from 'react';

export interface LanGalleryThumbnailsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGalleryThumbnailsSolid: React.FC<LanGalleryThumbnailsSolidProps>;
export default LanGalleryThumbnailsSolid;

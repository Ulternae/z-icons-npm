import React from 'react';

export interface LanGalleryThumbnailsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalleryThumbnailsSolid(props: LanGalleryThumbnailsSolidProps): React.ReactElement;
export default LanGalleryThumbnailsSolid;

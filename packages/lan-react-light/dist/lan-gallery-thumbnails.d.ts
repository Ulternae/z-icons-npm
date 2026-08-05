import React from 'react';

export interface LanGalleryThumbnailsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalleryThumbnails(props: LanGalleryThumbnailsProps): React.ReactElement;
export default LanGalleryThumbnails;

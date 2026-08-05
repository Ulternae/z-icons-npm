import React from 'react';

export interface LanGalleryThumbnailsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalleryThumbnailsThin(props: LanGalleryThumbnailsThinProps): React.ReactElement;
export default LanGalleryThumbnailsThin;

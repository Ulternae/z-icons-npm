import React from 'react';

export interface LanGalleryThumbnailsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalleryThumbnailsRegular(props: LanGalleryThumbnailsRegularProps): React.ReactElement;
export default LanGalleryThumbnailsRegular;

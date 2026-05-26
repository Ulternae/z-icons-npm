import React from 'react';

export interface LanAlbumCollectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollection: React.FC<LanAlbumCollectionProps>;
export default LanAlbumCollection;

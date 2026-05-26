import React from 'react';

export interface LanAlbumCollectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollectionSolid: React.FC<LanAlbumCollectionSolidProps>;
export default LanAlbumCollectionSolid;

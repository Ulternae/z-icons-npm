import React from 'react';

export interface LanAlbumCollectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollectionThin: React.FC<LanAlbumCollectionThinProps>;
export default LanAlbumCollectionThin;

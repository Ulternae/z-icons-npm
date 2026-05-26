import React from 'react';

export interface LanAlbumCollectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollectionRegular: React.FC<LanAlbumCollectionRegularProps>;
export default LanAlbumCollectionRegular;

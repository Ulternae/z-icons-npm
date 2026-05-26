import React from 'react';

export interface LanAlbumCollectionCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollectionCirclePlus: React.FC<LanAlbumCollectionCirclePlusProps>;
export default LanAlbumCollectionCirclePlus;

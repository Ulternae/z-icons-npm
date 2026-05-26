import React from 'react';

export interface LanAlbumCollectionCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCollectionCircleUser: React.FC<LanAlbumCollectionCircleUserProps>;
export default LanAlbumCollectionCircleUser;

import React from 'react';

export interface MinaAlbumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlbumSolid: React.FC<MinaAlbumSolidProps>;
export default MinaAlbumSolid;

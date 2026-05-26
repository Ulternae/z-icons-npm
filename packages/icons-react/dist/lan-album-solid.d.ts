import React from 'react';

export interface LanAlbumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumSolid: React.FC<LanAlbumSolidProps>;
export default LanAlbumSolid;

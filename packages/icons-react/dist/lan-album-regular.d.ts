import React from 'react';

export interface LanAlbumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumRegular: React.FC<LanAlbumRegularProps>;
export default LanAlbumRegular;

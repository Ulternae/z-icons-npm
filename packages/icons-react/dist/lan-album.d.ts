import React from 'react';

export interface LanAlbumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbum: React.FC<LanAlbumProps>;
export default LanAlbum;

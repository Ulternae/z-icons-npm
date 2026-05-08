import React from 'react';

export interface MinaAlbumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlbum: React.FC<MinaAlbumProps>;
export default MinaAlbum;

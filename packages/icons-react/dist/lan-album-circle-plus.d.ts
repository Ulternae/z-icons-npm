import React from 'react';

export interface LanAlbumCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCirclePlus: React.FC<LanAlbumCirclePlusProps>;
export default LanAlbumCirclePlus;

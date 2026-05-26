import React from 'react';

export interface LanAlbumCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCirclePlusThin: React.FC<LanAlbumCirclePlusThinProps>;
export default LanAlbumCirclePlusThin;

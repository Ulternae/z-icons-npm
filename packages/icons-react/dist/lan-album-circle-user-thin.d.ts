import React from 'react';

export interface LanAlbumCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCircleUserThin: React.FC<LanAlbumCircleUserThinProps>;
export default LanAlbumCircleUserThin;

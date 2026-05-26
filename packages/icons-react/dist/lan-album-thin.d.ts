import React from 'react';

export interface LanAlbumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumThin: React.FC<LanAlbumThinProps>;
export default LanAlbumThin;

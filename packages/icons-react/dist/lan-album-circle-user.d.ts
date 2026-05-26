import React from 'react';

export interface LanAlbumCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCircleUser: React.FC<LanAlbumCircleUserProps>;
export default LanAlbumCircleUser;

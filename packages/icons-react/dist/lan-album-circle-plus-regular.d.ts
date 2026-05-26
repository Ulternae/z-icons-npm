import React from 'react';

export interface LanAlbumCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlbumCirclePlusRegular: React.FC<LanAlbumCirclePlusRegularProps>;
export default LanAlbumCirclePlusRegular;

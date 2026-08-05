import React from 'react';

export interface LanAlbumCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCirclePlus(props: LanAlbumCirclePlusProps): React.ReactElement;
export default LanAlbumCirclePlus;

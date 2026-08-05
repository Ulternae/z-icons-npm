import React from 'react';

export interface LanAlbumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumSolid(props: LanAlbumSolidProps): React.ReactElement;
export default LanAlbumSolid;

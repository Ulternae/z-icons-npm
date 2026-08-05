import React from 'react';

export interface MinaAlbumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlbumSolid(props: MinaAlbumSolidProps): React.ReactElement;
export default MinaAlbumSolid;

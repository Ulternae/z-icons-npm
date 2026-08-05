import React from 'react';

export interface LanAlbumCollectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCollectionSolid(props: LanAlbumCollectionSolidProps): React.ReactElement;
export default LanAlbumCollectionSolid;

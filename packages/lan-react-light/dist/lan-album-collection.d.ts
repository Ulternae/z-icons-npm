import React from 'react';

export interface LanAlbumCollectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCollection(props: LanAlbumCollectionProps): React.ReactElement;
export default LanAlbumCollection;

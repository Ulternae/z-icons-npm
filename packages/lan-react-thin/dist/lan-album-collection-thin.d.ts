import React from 'react';

export interface LanAlbumCollectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCollectionThin(props: LanAlbumCollectionThinProps): React.ReactElement;
export default LanAlbumCollectionThin;

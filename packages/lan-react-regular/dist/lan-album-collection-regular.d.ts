import React from 'react';

export interface LanAlbumCollectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCollectionRegular(props: LanAlbumCollectionRegularProps): React.ReactElement;
export default LanAlbumCollectionRegular;

import React from 'react';

export interface LanAlbumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumRegular(props: LanAlbumRegularProps): React.ReactElement;
export default LanAlbumRegular;

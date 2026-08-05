import React from 'react';

export interface LanAlbumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbum(props: LanAlbumProps): React.ReactElement;
export default LanAlbum;

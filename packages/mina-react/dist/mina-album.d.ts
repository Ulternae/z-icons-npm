import React from 'react';

export interface MinaAlbumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlbum(props: MinaAlbumProps): React.ReactElement;
export default MinaAlbum;

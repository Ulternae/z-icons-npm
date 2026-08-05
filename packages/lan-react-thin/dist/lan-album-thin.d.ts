import React from 'react';

export interface LanAlbumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumThin(props: LanAlbumThinProps): React.ReactElement;
export default LanAlbumThin;

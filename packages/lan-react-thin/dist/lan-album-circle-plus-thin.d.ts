import React from 'react';

export interface LanAlbumCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCirclePlusThin(props: LanAlbumCirclePlusThinProps): React.ReactElement;
export default LanAlbumCirclePlusThin;

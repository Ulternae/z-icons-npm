import React from 'react';

export interface LanAlbumCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlbumCircleUser(props: LanAlbumCircleUserProps): React.ReactElement;
export default LanAlbumCircleUser;

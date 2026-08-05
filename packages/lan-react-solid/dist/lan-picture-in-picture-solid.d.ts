import React from 'react';

export interface LanPictureInPictureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPictureInPictureSolid(props: LanPictureInPictureSolidProps): React.ReactElement;
export default LanPictureInPictureSolid;

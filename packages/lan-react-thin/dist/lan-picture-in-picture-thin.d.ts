import React from 'react';

export interface LanPictureInPictureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPictureInPictureThin(props: LanPictureInPictureThinProps): React.ReactElement;
export default LanPictureInPictureThin;

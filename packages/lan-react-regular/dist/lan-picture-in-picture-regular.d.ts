import React from 'react';

export interface LanPictureInPictureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPictureInPictureRegular(props: LanPictureInPictureRegularProps): React.ReactElement;
export default LanPictureInPictureRegular;

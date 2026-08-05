import React from 'react';

export interface LanMaskFaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskFaceRegular(props: LanMaskFaceRegularProps): React.ReactElement;
export default LanMaskFaceRegular;

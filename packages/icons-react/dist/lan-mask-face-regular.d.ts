import React from 'react';

export interface LanMaskFaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskFaceRegular: React.FC<LanMaskFaceRegularProps>;
export default LanMaskFaceRegular;

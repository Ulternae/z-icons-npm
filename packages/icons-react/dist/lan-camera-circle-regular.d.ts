import React from 'react';

export interface LanCameraCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleRegular: React.FC<LanCameraCircleRegularProps>;
export default LanCameraCircleRegular;

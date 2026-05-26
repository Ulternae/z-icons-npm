import React from 'react';

export interface LanCameraWebRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebRegular: React.FC<LanCameraWebRegularProps>;
export default LanCameraWebRegular;

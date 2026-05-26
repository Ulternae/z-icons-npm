import React from 'react';

export interface LanCameraCctvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCctvRegular: React.FC<LanCameraCctvRegularProps>;
export default LanCameraCctvRegular;

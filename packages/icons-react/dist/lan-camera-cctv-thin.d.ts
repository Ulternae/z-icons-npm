import React from 'react';

export interface LanCameraCctvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCctvThin: React.FC<LanCameraCctvThinProps>;
export default LanCameraCctvThin;

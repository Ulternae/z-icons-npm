import React from 'react';

export interface LanCameraCctvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCctv: React.FC<LanCameraCctvProps>;
export default LanCameraCctv;

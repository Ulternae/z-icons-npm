import React from 'react';

export interface LanCameraWebProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWeb: React.FC<LanCameraWebProps>;
export default LanCameraWeb;

import React from 'react';

export interface LanCameraHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraHome: React.FC<LanCameraHomeProps>;
export default LanCameraHome;

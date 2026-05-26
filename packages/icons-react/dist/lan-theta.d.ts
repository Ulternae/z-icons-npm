import React from 'react';

export interface LanThetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTheta: React.FC<LanThetaProps>;
export default LanTheta;

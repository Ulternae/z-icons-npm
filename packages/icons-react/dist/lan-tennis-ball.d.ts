import React from 'react';

export interface LanTennisBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTennisBall: React.FC<LanTennisBallProps>;
export default LanTennisBall;

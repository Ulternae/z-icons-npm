import React from 'react';

export interface LanTennisBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTennisBallSolid: React.FC<LanTennisBallSolidProps>;
export default LanTennisBallSolid;

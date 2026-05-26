import React from 'react';

export interface LanTennisBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTennisBallThin: React.FC<LanTennisBallThinProps>;
export default LanTennisBallThin;

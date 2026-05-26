import React from 'react';

export interface LanCometThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCometThin: React.FC<LanCometThinProps>;
export default LanCometThin;

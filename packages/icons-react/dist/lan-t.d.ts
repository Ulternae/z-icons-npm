import React from 'react';

export interface LanTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanT: React.FC<LanTProps>;
export default LanT;

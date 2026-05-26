import React from 'react';

export interface LanEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanE: React.FC<LanEProps>;
export default LanE;

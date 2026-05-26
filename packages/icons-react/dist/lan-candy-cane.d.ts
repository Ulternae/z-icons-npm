import React from 'react';

export interface LanCandyCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCane: React.FC<LanCandyCaneProps>;
export default LanCandyCane;

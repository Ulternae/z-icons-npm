import React from 'react';

export interface LanLeafThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafThin: React.FC<LanLeafThinProps>;
export default LanLeafThin;

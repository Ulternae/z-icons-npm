import React from 'react';

export interface LanLeafOakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafOakThin: React.FC<LanLeafOakThinProps>;
export default LanLeafOakThin;

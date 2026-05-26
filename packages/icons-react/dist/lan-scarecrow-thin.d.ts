import React from 'react';

export interface LanScarecrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarecrowThin: React.FC<LanScarecrowThinProps>;
export default LanScarecrowThin;

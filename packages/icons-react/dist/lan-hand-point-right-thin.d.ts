import React from 'react';

export interface LanHandPointRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRightThin: React.FC<LanHandPointRightThinProps>;
export default LanHandPointRightThin;

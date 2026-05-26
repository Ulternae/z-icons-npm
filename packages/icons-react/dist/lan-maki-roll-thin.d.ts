import React from 'react';

export interface LanMakiRollThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMakiRollThin: React.FC<LanMakiRollThinProps>;
export default LanMakiRollThin;

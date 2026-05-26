import React from 'react';

export interface LanPersonGolfingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonGolfingThin: React.FC<LanPersonGolfingThinProps>;
export default LanPersonGolfingThin;

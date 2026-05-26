import React from 'react';

export interface LanCandyCornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCornThin: React.FC<LanCandyCornThinProps>;
export default LanCandyCornThin;

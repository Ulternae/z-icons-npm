import React from 'react';

export interface LanHammerWarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerWarThin: React.FC<LanHammerWarThinProps>;
export default LanHammerWarThin;

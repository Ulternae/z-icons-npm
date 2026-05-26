import React from 'react';

export interface LanTally4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally4Regular: React.FC<LanTally4RegularProps>;
export default LanTally4Regular;

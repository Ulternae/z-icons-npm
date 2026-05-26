import React from 'react';

export interface LanTally2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally2Regular: React.FC<LanTally2RegularProps>;
export default LanTally2Regular;

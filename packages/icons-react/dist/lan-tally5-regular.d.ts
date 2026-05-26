import React from 'react';

export interface LanTally5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally5Regular: React.FC<LanTally5RegularProps>;
export default LanTally5Regular;

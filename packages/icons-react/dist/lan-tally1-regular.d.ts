import React from 'react';

export interface LanTally1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally1Regular: React.FC<LanTally1RegularProps>;
export default LanTally1Regular;

import React from 'react';

export interface LanCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCThin: React.FC<LanCThinProps>;
export default LanCThin;

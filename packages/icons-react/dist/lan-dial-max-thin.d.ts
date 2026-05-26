import React from 'react';

export interface LanDialMaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMaxThin: React.FC<LanDialMaxThinProps>;
export default LanDialMaxThin;

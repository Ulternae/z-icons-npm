import React from 'react';

export interface LanDialOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialOffThin: React.FC<LanDialOffThinProps>;
export default LanDialOffThin;

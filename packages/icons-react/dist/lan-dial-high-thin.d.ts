import React from 'react';

export interface LanDialHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialHighThin: React.FC<LanDialHighThinProps>;
export default LanDialHighThin;

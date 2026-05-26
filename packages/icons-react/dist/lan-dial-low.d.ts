import React from 'react';

export interface LanDialLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialLow: React.FC<LanDialLowProps>;
export default LanDialLow;

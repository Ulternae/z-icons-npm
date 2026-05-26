import React from 'react';

export interface LanKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanK: React.FC<LanKProps>;
export default LanK;

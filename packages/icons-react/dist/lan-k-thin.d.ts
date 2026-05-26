import React from 'react';

export interface LanKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKThin: React.FC<LanKThinProps>;
export default LanKThin;

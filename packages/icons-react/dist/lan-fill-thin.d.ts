import React from 'react';

export interface LanFillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillThin: React.FC<LanFillThinProps>;
export default LanFillThin;

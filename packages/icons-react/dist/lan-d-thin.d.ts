import React from 'react';

export interface LanDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDThin: React.FC<LanDThinProps>;
export default LanDThin;

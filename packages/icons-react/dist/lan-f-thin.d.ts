import React from 'react';

export interface LanFThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFThin: React.FC<LanFThinProps>;
export default LanFThin;

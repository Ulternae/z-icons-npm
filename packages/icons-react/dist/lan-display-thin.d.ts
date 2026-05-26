import React from 'react';

export interface LanDisplayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayThin: React.FC<LanDisplayThinProps>;
export default LanDisplayThin;

import React from 'react';

export interface LanImageStackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageStackThin: React.FC<LanImageStackThinProps>;
export default LanImageStackThin;

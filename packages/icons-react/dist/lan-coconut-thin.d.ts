import React from 'react';

export interface LanCoconutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoconutThin: React.FC<LanCoconutThinProps>;
export default LanCoconutThin;

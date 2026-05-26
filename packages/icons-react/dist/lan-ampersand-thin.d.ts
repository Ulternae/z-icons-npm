import React from 'react';

export interface LanAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpersandThin: React.FC<LanAmpersandThinProps>;
export default LanAmpersandThin;

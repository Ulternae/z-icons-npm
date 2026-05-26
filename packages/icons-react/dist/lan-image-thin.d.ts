import React from 'react';

export interface LanImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageThin: React.FC<LanImageThinProps>;
export default LanImageThin;

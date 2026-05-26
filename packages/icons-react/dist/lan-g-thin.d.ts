import React from 'react';

export interface LanGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGThin: React.FC<LanGThinProps>;
export default LanGThin;

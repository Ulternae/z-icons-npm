import React from 'react';

export interface LanBlenderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderThin: React.FC<LanBlenderThinProps>;
export default LanBlenderThin;

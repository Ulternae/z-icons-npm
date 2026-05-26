import React from 'react';

export interface LanDolphinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDolphinThin: React.FC<LanDolphinThinProps>;
export default LanDolphinThin;

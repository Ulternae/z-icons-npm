import React from 'react';

export interface LanDollyBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyBoxThin: React.FC<LanDollyBoxThinProps>;
export default LanDollyBoxThin;

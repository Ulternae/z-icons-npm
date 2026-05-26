import React from 'react';

export interface LanLocationArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationArrowThin: React.FC<LanLocationArrowThinProps>;
export default LanLocationArrowThin;

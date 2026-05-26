import React from 'react';

export interface LanSnowmanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowmanThin: React.FC<LanSnowmanThinProps>;
export default LanSnowmanThin;

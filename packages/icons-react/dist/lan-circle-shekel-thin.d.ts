import React from 'react';

export interface LanCircleShekelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShekelThin: React.FC<LanCircleShekelThinProps>;
export default LanCircleShekelThin;

import React from 'react';

export interface LanCircleDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDotThin: React.FC<LanCircleDotThinProps>;
export default LanCircleDotThin;

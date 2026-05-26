import React from 'react';

export interface LanCircleCentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCentThin: React.FC<LanCircleCentThinProps>;
export default LanCircleCentThin;

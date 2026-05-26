import React from 'react';

export interface LanCirclePThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePThin: React.FC<LanCirclePThinProps>;
export default LanCirclePThin;

import React from 'react';

export interface LanCircleCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCThin: React.FC<LanCircleCThinProps>;
export default LanCircleCThin;

import React from 'react';

export interface LanCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleInfoThin: React.FC<LanCircleInfoThinProps>;
export default LanCircleInfoThin;

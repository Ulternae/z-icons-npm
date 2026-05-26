import React from 'react';

export interface LanCircleUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUThin: React.FC<LanCircleUThinProps>;
export default LanCircleUThin;

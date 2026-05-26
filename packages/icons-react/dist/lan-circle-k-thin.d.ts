import React from 'react';

export interface LanCircleKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKThin: React.FC<LanCircleKThinProps>;
export default LanCircleKThin;

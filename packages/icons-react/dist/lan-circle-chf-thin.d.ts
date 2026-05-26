import React from 'react';

export interface LanCircleChfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleChfThin: React.FC<LanCircleChfThinProps>;
export default LanCircleChfThin;

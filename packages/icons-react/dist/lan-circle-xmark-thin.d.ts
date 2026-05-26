import React from 'react';

export interface LanCircleXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXmarkThin: React.FC<LanCircleXmarkThinProps>;
export default LanCircleXmarkThin;

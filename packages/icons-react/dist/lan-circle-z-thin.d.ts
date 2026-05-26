import React from 'react';

export interface LanCircleZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleZThin: React.FC<LanCircleZThinProps>;
export default LanCircleZThin;

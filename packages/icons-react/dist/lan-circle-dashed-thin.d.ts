import React from 'react';

export interface LanCircleDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDashedThin: React.FC<LanCircleDashedThinProps>;
export default LanCircleDashedThin;

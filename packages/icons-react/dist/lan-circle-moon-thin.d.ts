import React from 'react';

export interface LanCircleMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMoonThin: React.FC<LanCircleMoonThinProps>;
export default LanCircleMoonThin;

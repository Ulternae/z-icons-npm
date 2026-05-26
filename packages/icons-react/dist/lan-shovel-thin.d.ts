import React from 'react';

export interface LanShovelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelThin: React.FC<LanShovelThinProps>;
export default LanShovelThin;

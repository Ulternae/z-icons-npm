import React from 'react';

export interface LanCornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornThin: React.FC<LanCornThinProps>;
export default LanCornThin;

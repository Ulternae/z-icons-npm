import React from 'react';

export interface LanCircleMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMThin: React.FC<LanCircleMThinProps>;
export default LanCircleMThin;

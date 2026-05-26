import React from 'react';

export interface LanCannonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannonThin: React.FC<LanCannonThinProps>;
export default LanCannonThin;

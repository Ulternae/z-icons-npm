import React from 'react';

export interface LanFerryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerryThin: React.FC<LanFerryThinProps>;
export default LanFerryThin;

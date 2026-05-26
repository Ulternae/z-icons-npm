import React from 'react';

export interface LanFortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFortThin: React.FC<LanFortThinProps>;
export default LanFortThin;

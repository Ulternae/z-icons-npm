import React from 'react';

export interface LanParachuteBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParachuteBoxThin: React.FC<LanParachuteBoxThinProps>;
export default LanParachuteBoxThin;

import React from 'react';

export interface LanCarOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarOnThin: React.FC<LanCarOnThinProps>;
export default LanCarOnThin;

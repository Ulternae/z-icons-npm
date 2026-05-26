import React from 'react';

export interface LanMosqueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosqueThin: React.FC<LanMosqueThinProps>;
export default LanMosqueThin;

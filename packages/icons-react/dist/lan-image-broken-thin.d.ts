import React from 'react';

export interface LanImageBrokenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageBrokenThin: React.FC<LanImageBrokenThinProps>;
export default LanImageBrokenThin;

import React from 'react';

export interface LanDresserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDresserThin: React.FC<LanDresserThinProps>;
export default LanDresserThin;

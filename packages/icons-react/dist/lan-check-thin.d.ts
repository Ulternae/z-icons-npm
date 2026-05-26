import React from 'react';

export interface LanCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckThin: React.FC<LanCheckThinProps>;
export default LanCheckThin;

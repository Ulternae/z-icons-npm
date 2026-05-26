import React from 'react';

export interface LanUfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoThin: React.FC<LanUfoThinProps>;
export default LanUfoThin;

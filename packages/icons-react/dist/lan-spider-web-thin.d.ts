import React from 'react';

export interface LanSpiderWebThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderWebThin: React.FC<LanSpiderWebThinProps>;
export default LanSpiderWebThin;

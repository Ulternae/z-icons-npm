import React from 'react';

export interface LanFaceSadCryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadCryThin: React.FC<LanFaceSadCryThinProps>;
export default LanFaceSadCryThin;

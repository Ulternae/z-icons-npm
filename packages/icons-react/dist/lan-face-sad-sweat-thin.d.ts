import React from 'react';

export interface LanFaceSadSweatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadSweatThin: React.FC<LanFaceSadSweatThinProps>;
export default LanFaceSadSweatThin;

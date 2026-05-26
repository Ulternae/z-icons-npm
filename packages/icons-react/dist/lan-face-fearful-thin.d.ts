import React from 'react';

export interface LanFaceFearfulThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFearfulThin: React.FC<LanFaceFearfulThinProps>;
export default LanFaceFearfulThin;

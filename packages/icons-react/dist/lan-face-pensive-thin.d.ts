import React from 'react';

export interface LanFacePensiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePensiveThin: React.FC<LanFacePensiveThinProps>;
export default LanFacePensiveThin;

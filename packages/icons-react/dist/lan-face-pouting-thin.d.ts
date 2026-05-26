import React from 'react';

export interface LanFacePoutingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePoutingThin: React.FC<LanFacePoutingThinProps>;
export default LanFacePoutingThin;

import React from 'react';

export interface LanFaceDizzyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDizzyThin: React.FC<LanFaceDizzyThinProps>;
export default LanFaceDizzyThin;

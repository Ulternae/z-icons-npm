import React from 'react';

export interface LanFamilyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyThin: React.FC<LanFamilyThinProps>;
export default LanFamilyThin;

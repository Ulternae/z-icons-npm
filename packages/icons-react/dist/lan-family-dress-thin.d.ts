import React from 'react';

export interface LanFamilyDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyDressThin: React.FC<LanFamilyDressThinProps>;
export default LanFamilyDressThin;

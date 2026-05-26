import React from 'react';

export interface LanPeoplePantsSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePantsSimple: React.FC<LanPeoplePantsSimpleProps>;
export default LanPeoplePantsSimple;

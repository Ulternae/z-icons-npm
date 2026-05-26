import React from 'react';

export interface LanSectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSectionSolid: React.FC<LanSectionSolidProps>;
export default LanSectionSolid;

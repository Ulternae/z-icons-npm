import React from 'react';

export interface LanSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolSolid: React.FC<LanSchoolSolidProps>;
export default LanSchoolSolid;

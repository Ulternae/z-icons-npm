import React from 'react';

export interface LanWrenchSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchSimpleSolid: React.FC<LanWrenchSimpleSolidProps>;
export default LanWrenchSimpleSolid;

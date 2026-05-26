import React from 'react';

export interface LanWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchSolid: React.FC<LanWrenchSolidProps>;
export default LanWrenchSolid;

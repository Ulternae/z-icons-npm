import React from 'react';

export interface LanHomeBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeBlankSolid: React.FC<LanHomeBlankSolidProps>;
export default LanHomeBlankSolid;

import React from 'react';

export interface LanHyphenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHyphenSolid: React.FC<LanHyphenSolidProps>;
export default LanHyphenSolid;

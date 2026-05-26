import React from 'react';

export interface LanNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNewspaperSolid: React.FC<LanNewspaperSolidProps>;
export default LanNewspaperSolid;

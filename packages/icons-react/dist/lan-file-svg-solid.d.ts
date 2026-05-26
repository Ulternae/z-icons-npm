import React from 'react';

export interface LanFileSvgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSvgSolid: React.FC<LanFileSvgSolidProps>;
export default LanFileSvgSolid;

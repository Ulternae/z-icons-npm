import React from 'react';

export interface LanLinesLeaningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinesLeaningSolid: React.FC<LanLinesLeaningSolidProps>;
export default LanLinesLeaningSolid;

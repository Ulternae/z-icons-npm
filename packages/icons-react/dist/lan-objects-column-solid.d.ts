import React from 'react';

export interface LanObjectsColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsColumnSolid: React.FC<LanObjectsColumnSolidProps>;
export default LanObjectsColumnSolid;

import React from 'react';

export interface LanTablePicnicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePicnicSolid: React.FC<LanTablePicnicSolidProps>;
export default LanTablePicnicSolid;

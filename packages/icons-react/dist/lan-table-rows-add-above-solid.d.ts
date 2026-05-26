import React from 'react';

export interface LanTableRowsAddAboveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsAddAboveSolid: React.FC<LanTableRowsAddAboveSolidProps>;
export default LanTableRowsAddAboveSolid;

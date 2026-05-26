import React from 'react';

export interface LanTableRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRowsSolid: React.FC<LanTableRowsSolidProps>;
export default LanTableRowsSolid;

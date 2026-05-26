import React from 'react';

export interface LanTableColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableColumnsSolid: React.FC<LanTableColumnsSolidProps>;
export default LanTableColumnsSolid;

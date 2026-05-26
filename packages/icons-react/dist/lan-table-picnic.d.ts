import React from 'react';

export interface LanTablePicnicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePicnic: React.FC<LanTablePicnicProps>;
export default LanTablePicnic;

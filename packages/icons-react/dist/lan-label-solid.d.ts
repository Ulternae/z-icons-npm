import React from 'react';

export interface LanLabelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLabelSolid: React.FC<LanLabelSolidProps>;
export default LanLabelSolid;

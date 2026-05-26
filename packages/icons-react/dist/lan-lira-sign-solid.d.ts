import React from 'react';

export interface LanLiraSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLiraSignSolid: React.FC<LanLiraSignSolidProps>;
export default LanLiraSignSolid;

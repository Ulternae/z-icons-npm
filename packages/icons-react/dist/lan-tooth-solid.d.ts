import React from 'react';

export interface LanToothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothSolid: React.FC<LanToothSolidProps>;
export default LanToothSolid;

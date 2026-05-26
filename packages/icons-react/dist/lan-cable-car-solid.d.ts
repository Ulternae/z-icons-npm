import React from 'react';

export interface LanCableCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCableCarSolid: React.FC<LanCableCarSolidProps>;
export default LanCableCarSolid;

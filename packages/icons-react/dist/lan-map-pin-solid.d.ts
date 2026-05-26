import React from 'react';

export interface LanMapPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapPinSolid: React.FC<LanMapPinSolidProps>;
export default LanMapPinSolid;

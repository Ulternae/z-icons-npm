import React from 'react';

export interface LanThermometerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThermometerSolid: React.FC<LanThermometerSolidProps>;
export default LanThermometerSolid;

import React from 'react';

export interface LanFaceThermometerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThermometerSolid: React.FC<LanFaceThermometerSolidProps>;
export default LanFaceThermometerSolid;

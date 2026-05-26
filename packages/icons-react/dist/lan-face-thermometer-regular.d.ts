import React from 'react';

export interface LanFaceThermometerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThermometerRegular: React.FC<LanFaceThermometerRegularProps>;
export default LanFaceThermometerRegular;

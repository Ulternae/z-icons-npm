import React from 'react';

export interface LanThermometerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThermometerRegular: React.FC<LanThermometerRegularProps>;
export default LanThermometerRegular;

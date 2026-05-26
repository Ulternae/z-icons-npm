import React from 'react';

export interface LanTornadoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTornadoRegular: React.FC<LanTornadoRegularProps>;
export default LanTornadoRegular;

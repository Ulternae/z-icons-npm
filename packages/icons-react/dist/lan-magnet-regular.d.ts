import React from 'react';

export interface LanMagnetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnetRegular: React.FC<LanMagnetRegularProps>;
export default LanMagnetRegular;

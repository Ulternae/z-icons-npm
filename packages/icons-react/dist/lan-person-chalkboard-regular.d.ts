import React from 'react';

export interface LanPersonChalkboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonChalkboardRegular: React.FC<LanPersonChalkboardRegularProps>;
export default LanPersonChalkboardRegular;

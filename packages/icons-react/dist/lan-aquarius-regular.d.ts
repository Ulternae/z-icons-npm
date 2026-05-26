import React from 'react';

export interface LanAquariusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAquariusRegular: React.FC<LanAquariusRegularProps>;
export default LanAquariusRegular;

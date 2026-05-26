import React from 'react';

export interface LanKidneysRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKidneysRegular: React.FC<LanKidneysRegularProps>;
export default LanKidneysRegular;

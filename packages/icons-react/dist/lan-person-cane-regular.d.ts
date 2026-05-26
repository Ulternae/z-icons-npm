import React from 'react';

export interface LanPersonCaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCaneRegular: React.FC<LanPersonCaneRegularProps>;
export default LanPersonCaneRegular;

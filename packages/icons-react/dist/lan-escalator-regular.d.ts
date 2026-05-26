import React from 'react';

export interface LanEscalatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEscalatorRegular: React.FC<LanEscalatorRegularProps>;
export default LanEscalatorRegular;

import React from 'react';

export interface LanAntRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAntRegular: React.FC<LanAntRegularProps>;
export default LanAntRegular;

import React from 'react';

export interface LanAxeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeRegular: React.FC<LanAxeRegularProps>;
export default LanAxeRegular;

import React from 'react';

export interface LanCutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutRegular: React.FC<LanCutRegularProps>;
export default LanCutRegular;

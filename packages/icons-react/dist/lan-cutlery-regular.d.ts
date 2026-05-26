import React from 'react';

export interface LanCutleryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutleryRegular: React.FC<LanCutleryRegularProps>;
export default LanCutleryRegular;

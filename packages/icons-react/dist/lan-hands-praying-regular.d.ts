import React from 'react';

export interface LanHandsPrayingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsPrayingRegular: React.FC<LanHandsPrayingRegularProps>;
export default LanHandsPrayingRegular;

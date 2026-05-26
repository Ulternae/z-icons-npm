import React from 'react';

export interface LanHandShakaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandShakaRegular: React.FC<LanHandShakaRegularProps>;
export default LanHandShakaRegular;

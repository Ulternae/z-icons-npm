import React from 'react';

export interface LanShowerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShowerRegular: React.FC<LanShowerRegularProps>;
export default LanShowerRegular;

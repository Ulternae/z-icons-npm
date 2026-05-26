import React from 'react';

export interface LanMessageCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageCodeRegular: React.FC<LanMessageCodeRegularProps>;
export default LanMessageCodeRegular;
